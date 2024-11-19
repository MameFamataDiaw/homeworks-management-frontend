<script setup lang="ts">
import type { GetClassesResponseType } from '../actions/GetClassesList';
import type { IEditClasseDataInput } from '../types/classesList-types';


  defineProps<{
    classes:GetClassesResponseType| undefined
  }>()

  const emit = defineEmits<{
    (e:'deleteClasse', classeId:number):void
    (e:'editClasse', classe:IEditClasseDataInput):void
  }>()
</script>
<template>
  <table class="table table-bordered">
            <thead>
                <td>Id</td>
                <td>Nom classe</td>
                <td>Niveau</td>
                <td colspan="3">Actions</td>
            </thead>
            <tbody>
                <tr v-for="classe in classes?.data" :key="classe.id">
                <td>{{ classe.id }}</td>
                <td>{{ classe.nomClasse }}</td>
                <td>{{ classe.niveau }}</td>
                <td>
                    <button class="btn btn-primary">Voir details</button>
                </td>
                <td>
                    <button @click="emit('editClasse',classe)" class="btn btn-outline-primary">Modifier</button>
                </td>
                <td>
                    <button @click="emit('deleteClasse',classe.id)" class="btn btn-outline-danger">Supprimer</button>
                </td>
                </tr>
            </tbody>
        </table>
</template>
