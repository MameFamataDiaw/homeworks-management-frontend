<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import Error from '@/components/Error.vue';
import BaseBtn from '@/components/BaseBtn.vue';
import { useRouter } from 'vue-router';
import type { IChangePasswordInput } from './auth-types';
import { showError, successMsg } from '@/helper/Toastnotification';
import { changePasswordHttp } from './actions/ChangePasswordUser';

const router = useRouter();

const changePasswordInput = ref<IChangePasswordInput>({
  password: '',
  password_confirmation: '',
});

const rules = {
  password: { required, minLength: minLength(8) },
  password_confirmation: {
    required,
    isSameAsNew: (value: string) =>
    // console.log("Validation mot de passe :", value, changePasswordInput.value.password);return
    value === changePasswordInput.value.password || "Les mots de passe ne correspondent pas.",
  },
};

const v$ = useVuelidate(rules, changePasswordInput);

const loadingStatus = ref(false);

onMounted(() => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  if (!userData.token) {
    // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
    router.push('/login');
  }
});

async function changePassword() {
  const result = await v$.value.$validate();

  if (!result) return;

  try {
    loadingStatus.value = true;
    const data = await changePasswordHttp(changePasswordInput.value);
    successMsg(data.message);
    changePasswordInput.value = { password: '', password_confirmation: '' };
    if (data.user.role === 'enseignant') {
      router.push('/enseignant-dashboard');
    } else if (data.user.role === 'eleve') {
      router.push('/eleve-dashboard');
    } else if (data.user.role === 'parent') {
      router.push('/parent-dashboard');
    } else {
      router.push('/dashboard'); // Redirection par défaut
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showError(error.message || "Une erreur s'est produite.");
  } finally {
    loadingStatus.value = false;
  }
}
</script>


<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Change password</div>
                <div class="card-body">
                    <form action="" @submit.prevent="changePassword">

                      <Error inputLabel="Nouveau mot de passe" :formErrors="v$.password.$errors">
                        <input
                          type="password"
                          v-model="changePasswordInput.password"
                          name="password"
                          id="password"
                          class="form-control"
                        />
                      </Error>

                      <Error inputLabel="Confirmer le nouveau mot de passe" :formErrors="v$.password_confirmation.$errors">
                        <input
                          type="password"
                          v-model="changePasswordInput.password_confirmation"
                          name="password_confirmation"
                          id="password_confirmation"
                          class="form-control"
                        />
                      </Error>

                      <br />
                      <div class="form-group">
                        <BaseBtn label="Changer le mot de passe" :loading="loadingStatus" />
                      </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
    </div>
</template>
