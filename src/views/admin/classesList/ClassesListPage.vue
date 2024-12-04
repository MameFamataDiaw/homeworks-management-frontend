<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getClassesHttp, type GetClassesResponseType } from './actions/GetClassesList';
import { myDebounce } from '@/helper/utils';
import { confirmDelation } from '@/helper/SweetAlert';
import { deleteClasseHttp } from './actions/DeleteClasse';
import { successMsg } from '@/helper/Toastnotification';
import ClasseTable from './components/ClasseTable.vue';
import type { IEditClasseDataInput } from './types/classesList-types';
import { classeStore } from '@/stores/admin/classeStore';
import { useRouter } from 'vue-router';
// import type { classeStore } from '@/stores/admin/classeStore';
// import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const classes = ref<GetClassesResponseType>()

const query = ref<string>('')

async function showClasses(page=1, query=''){
  const data = await getClassesHttp(page,query)
  classes.value = data
}

const searchClasses = myDebounce(async function(){
  await showClasses(1,query.value)
}, 300)

async function deleteClasse(classeId:number){
  confirmDelation().then(async () => {
    console.log('delete classe')
    const data = await deleteClasseHttp(classeId)
    await showClasses()
    successMsg(data.message)
  }).catch((error) => console.log(error))
}

const router = useRouter()

function editClasseData(classeData:IEditClasseDataInput){
  // console.log(classeData)
  classeStore.editClasseData.id=classeData.id
  classeStore.editClasseData.nomClasse=classeData.nomClasse
  classeStore.editClasseData.niveau=classeData.niveau
  classeStore.editClasse.edit=true
  router.push('/create-classe')
}



onMounted(async()=>{
  await showClasses()
})

</script>
<template>
  <ClasseTable
        :classes="classes"
        @deleteClasse="deleteClasse"
        @editClasse="editClasseData"
        />
</template>
<!-- <template>

    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <input type="text" placeholder="search..." @keydown="searchClasses" v-model="query" class="form-control">
            </div>
          </div>
        </div>
        <ClasseTable
        :classes="classes"
        @deleteClasse="deleteClasse"
        @editClasse="editClasseData"
        />
      </div>
    </div>
  </template> -->
