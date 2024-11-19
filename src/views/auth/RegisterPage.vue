<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import type { IRegisterInput } from './auth-types';
import { Genre } from './auth-types';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Error from '@/components/Error.vue';
import { createUserHttp } from './actions/RegisterUser';
import { showError, successMsg } from '@/helper/Toastnotification';
import BaseBtn from '@/components/BaseBtn.vue';

const registerInput = ref<IRegisterInput> ({
    prenom:'',
    nom:'',
    genre: Genre.Masculin,
    email:'',
    password:'',
})

// Extraire les valeurs de l'énumération pour le menu déroulant
const genre = Object.values(Genre);

const rules = {
    prenom: { required }, // Matches state.firstName
    nom: { required }, // Matches state.lastName
    genre: { required },
    email: { required,email },
    password: { required }
}
const v$ = useVuelidate(rules, registerInput)

const loadingStatus = ref(false)
async function registerUser(){
    const result = await v$.value.$validate()

    if (!result) return

    try {
        loadingStatus.value = true
        const data = await createUserHttp(registerInput.value)
        registerInput.value = {} as IRegisterInput
        successMsg(data.message)
        loadingStatus.value = false
        v$.value.$reset()
    } catch (error) {
        loadingStatus.value = false
        for (const message of error as string[]) {
            showError(message)
        }
    }
}

</script>

<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form action="" @submit.prevent="registerUser">

                        <Error inputLabel="Prénom" :formErrors="v$.prenom.$errors">
                            <input type="text"  v-model="registerInput.prenom" name="prenom" id="prenom" class="form-control">
                        </Error>

                        <Error inputLabel="Nom" :formErrors="v$.nom.$errors">
                            <input type="text"  v-model="registerInput.nom" name="nom" id="nom" class="form-control">
                        </Error>

                        <Error inputLabel="Genre" :formErrors="v$.genre.$errors">
                            <select v-model="registerInput.genre" id="genre" class="form-control">
                                <option v-for="(value, key) in genre" :key="key" :value="value">
                                    {{ value }}
                                </option>
                            </select>
                        </Error>

                        <Error inputLabel="Email" :formErrors="v$.email.$errors">
                            <input type="text"  v-model="registerInput.email" name="email" id="email" class="form-control">
                        </Error>

                        <Error inputLabel="Mot de passe" :formErrors="v$.password.$errors">
                            <input type="password"  v-model="registerInput.password" name="password" id="password" class="form-control">
                        </Error>
                        <br />
                        <RouterLink to="/">Connectez-vous è votre compte </RouterLink>
                        <br />
                        <div class="form-group">
                            <BaseBtn label="S'inscrire" :loading="loadingStatus" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>        
    </div>
</template>

