<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Error from '@/components/Error.vue';
import type { ILoginInput } from './auth-types';
import { loginUserHttp } from './actions/LoginUser';
import { showError, successMsg } from '@/helper/Toastnotification';
import BaseBtn from '@/components/BaseBtn.vue';

const loginInput = ref<ILoginInput> ({
    email:'',
    password:'',
})

const rules = {
    email: { required,email },
    password: { required }
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, loginInput)

async function loginUser(){
    const result = await v$.value.$validate()

    if (!result) return

    try {
        loadingStatus.value = true
        const data = await loginUserHttp(loginInput.value)

        // Verifier si une action est requise
        if (data.action_required === "change_password") {
          localStorage.setItem('userData', JSON.stringify(data));
          successMsg(data.message);
          window.location.href = "/change-password";
          return
        }
        localStorage.setItem('userData',JSON.stringify(data))

        if (data.user.role === 'admin') {
          window.location.href="/admin"
        } else {
          window.location.href="/dashboard";
        }

        loadingStatus.value = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        loadingStatus.value = false
        showError(error.message || "Une erreur s'est produite.");
      }
}
</script>

<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form action="" @submit.prevent="loginUser">
                        <Error inputLabel="E-mail" :formErrors="v$.email.$errors">
                            <input type="text"  v-model="loginInput.email" name="email" id="email" class="form-control">
                        </Error>

                        <Error inputLabel="Mot de passe" :formErrors="v$.password.$errors">
                            <input type="password"  v-model="loginInput.password" name="password" id="password" class="form-control">
                        </Error>
                        <br />
                        <RouterLink to="/register">Créer un compte</RouterLink>
                        <br />
                        <div class="form-group">
                            <BaseBtn label="Se connecter" :loading="loadingStatus" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
    </div>
</template>
