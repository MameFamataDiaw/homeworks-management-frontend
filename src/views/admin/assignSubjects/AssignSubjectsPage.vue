<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { assignSubjectsHttp } from './actions/AssignSubjects';
import { showError, successMsg } from '@/helper/Toastnotification';
import { getClassesHttp, type GetClassesResponseType } from '../classesList/actions/GetClassesList';
import { getMatieresHttp, type GetMatieresResponseType } from '../matieresList/actions/GetMatieresList';
import useVuelidate from '@vuelidate/core';
import type { IAssignSubjectsInput } from './types/assignSubjects.types';
import { minLength, required } from '@vuelidate/validators';
import BaseBtn from '@/components/BaseBtn.vue';
import Error from '@/components/Error.vue';

const classes = ref<GetClassesResponseType>();
const matieres = ref<GetMatieresResponseType>();

const assignInput = ref<IAssignSubjectsInput>({
  classeId: null,
  matieres_ids: [] as number[],
})

//statut du chargement
const loadingStatus = ref(false)

//Validation
const rules = {
  classeId: { required },
  matieres_ids: { required, minLength: minLength(1)},
};

const v$ = useVuelidate(rules, assignInput);

//Fetch classes and matieres
async function fetchClasses() {
  const data = await getClassesHttp(1, "");
  classes.value = data;
}

async function fetchMatieres() {
  const data = await getMatieresHttp(1, "");
  matieres.value = data;
}

async function assignSubjects() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    showError('Veuillez remplir tous les chapms obligatoires.');
    return
  }
  loadingStatus.value = true;

  try {
    console.log('Données envoyées:', assignInput.value); // Pour vérifier les données
    //Appel a l'api pour assigner les matieres
    const data = await assignSubjectsHttp(assignInput.value);
    successMsg(data.message);
    // Réinitialisation des champs après assignation
    assignInput.value = { classeId: null, matieres_ids: [] }
    v$.value.$reset();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showError(error.message || 'Erreur lors de l\'assignation des matieres a la classe');
  } finally {
    loadingStatus.value = false;
  }
}

//charger les donnees au montage du composant
onMounted(async () => {
  await fetchClasses();
  await fetchMatieres();
})

</script>

<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Assignation des matières à une classe</div>
        <div class="card-body">
          <form @submit.prevent="assignSubjects">
            <!-- Sélection de la classe -->
            <Error inputLabel="Classe" :formErrors="v$.classeId.$errors">
              <select v-model="assignInput.classeId" class="form-control">
                <option value="" disabled>-- Sélectionnez une classe --</option>
                <option v-for="classe in classes?.data" :key="classe.id" :value="classe.id">
                  {{ classe.nomClasse }}
                </option>
              </select>
            </Error>

            <!-- Sélection des matières -->
            <Error inputLabel="Matières" :formErrors="v$.matieres_ids.$errors">
              <select
                v-model="assignInput.matieres_ids"
                class="form-control"
                multiple
              >
                <option v-for="matiere in matieres?.data" :key="matiere.id" :value="matiere.id">
                  {{ matiere.nomMatiere }}
                </option>
              </select>
            </Error>

            <br />

            <!-- Bouton de validation -->
            <div class="form-group">
              <BaseBtn :label="'Assigner'" :loading="loadingStatus" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>
