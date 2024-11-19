<script setup lang="ts">
import type { GetMatieresResponseType } from '../actions/GetMatieresList';
import type { IEditMatiereDataInput } from '../types/matieresList-types';


  defineProps<{
    matieres:GetMatieresResponseType| undefined
  }>()

  const emit = defineEmits<{
    (e:'deleteMatiere', matiereId:number):void
    (e:'editMatiere', matiere:IEditMatiereDataInput):void
  }>()
</script>
<template>
  <table class="table table-bordered">
            <thead>
                <td>Id</td>
                <td>Nom de la matiere</td>
                <td colspan="3">Actions</td>
            </thead>
            <tbody>
                <tr v-for="matiere in matieres?.data" :key="matiere.id">
                <td>{{ matiere.id }}</td>
                <td>{{ matiere.nomMatiere }}</td>
                <td>
                    <button class="btn btn-primary">Voir details</button>
                </td>
                <td>
                    <button @click="emit('editMatiere',matiere)" class="btn btn-outline-primary">Modifier</button>
                </td>
                <td>
                    <button @click="emit('deleteMatiere',matiere.id)" class="btn btn-outline-danger">Supprimer</button>
                </td>
                </tr>
            </tbody>
        </table>
</template>
