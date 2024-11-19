<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getMatieresHttp, type GetMatieresResponseType } from './actions/GetMatieresList';
import { myDebounce } from '@/helper/utils';
import { confirmDelation } from '@/helper/SweetAlert';
import { deleteMatiereHttp } from './actions/DeleteMatiere';
import { successMsg } from '@/helper/Toastnotification';
import MatiereTable from './components/MatiereTable.vue';
import type { IEditMatiereDataInput } from './types/matieresList-types';
import { matiereStore } from '@/stores/admin/matiereStore';
import { useRouter } from 'vue-router';
// import type { classeStore } from '@/stores/admin/classeStore';
// import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const matieres = ref<GetMatieresResponseType>()

const query = ref<string>('')

async function showMatieres(page=1, query=''){
  const data = await getMatieresHttp(page,query)
  matieres.value = data
}

const searchMatieres = myDebounce(async function(){
  await showMatieres(1,query.value)
}, 300)

async function deleteMatiere(matiereId:number){
  confirmDelation().then(async () => {
    console.log('delete matiere')
    const data = await deleteMatiereHttp(matiereId)
    await showMatieres()
    successMsg(data.message)
  }).catch((error) => console.log(error))
}

const router = useRouter()

function editMatiereData(matiereData:IEditMatiereDataInput){
  // console.log(classeData)
  matiereStore.editMatiereData.id=matiereData.id
  matiereStore.editMatiereData.nomMatiere=matiereData.nomMatiere
  matiereStore.editMatiere.edit=true
  router.push('/create-matiere')
}



onMounted(async()=>{
  await showMatieres()
})

</script>

<template>

    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <input type="text" placeholder="search..." @keydown="searchMatieres" v-model="query" class="form-control">
            </div>
          </div>
        </div>
        <MatiereTable
        :matieres="matieres"
        @deleteMatiere="deleteMatiere"
        @editMatiere="editMatiereData"
        />
        <!-- <Bootstrap5Pagination
        :data="classes"
        @pagination-change-page="showClasses"
         /> -->


      </div>
    </div>
  </template>
