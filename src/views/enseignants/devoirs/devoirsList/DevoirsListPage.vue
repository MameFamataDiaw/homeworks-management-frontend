<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue"
  import SidebarComponent from "@/components/Sidebar.vue"
  // import { confirmDelation } from "@/helper/SweetAlert";
  // import { successMsg } from "@/helper/Toastnotification";
  // import { devoirStore } from "@/stores/enseignant/devoirStore";
  import { ref, onMounted } from "vue";
  // import { useRouter } from "vue-router";
  import { type GetDevoirsResponseType, getDevoirsHttp } from "./actions/GetDevoirsList";
  // import type { IEditDevoirDataInput } from "./types/devoirsList.types";
  import DevoirTable from "./components/DevoirTable.vue";
  import { closeModal, openModal } from "@/helper/utils";
  import AssignDevoir from "../assignDevoir/components/assignDevoir.vue";

  const devoirs = ref<GetDevoirsResponseType>()

  async function showDevoirs(){
    try {
      const data = await getDevoirsHttp();
      devoirs.value = data;

    } catch (error) {
      console.error("Erreur lors de la récupération des devoirs :", error);
    }
  }
  // const searchDevoirs = myDebounce(async function(){
  //   await showDevoirs(1,query.value)
  // }, 300)

  // async function deleteDevoir(devoirId:number){
  //   confirmDelation().then(async () => {
  //     console.log('delete matiere')
  //     const data = await deleteDevoirHttp(devoirId)
  //     await showDevoirs()
  //     successMsg(data.message)
  //   }).catch((error) => console.log(error))
  // }

  // const router = useRouter()

  // function editDevoirData(devoirData:IEditDevoirDataInput){
  //   // console.log(classeData)
  //   devoirStore.editDevoirData.id=devoirData.id
  //   devoirStore.editDevoirData.module=devoirData.module
  //   devoirStore.editDevoirData.contenu=devoirData.contenu
  //   devoirStore.editDevoirData.document=devoirData.document
  //   devoirStore.editDevoirData.matiere_id=devoirData.matiere_id
  //   devoirStore.editDevoir.edit=true
  //   router.push('/create-devoir')
  // }

  const currentDevoirId=ref<number>(0)

  async function showModal(devoirId:number){
    openModal('devoirModal', devoirId).then(devoirId => {
      console.log(devoirId)
      currentDevoirId.value=devoirId
    })
  }

  onMounted(async()=>{
    await showDevoirs()
  })
</script>
<template>
  <div>
    <HeaderComponent />
    <SidebarComponent />
    <!-- <FooterComponent /> -->
  </div>
  <AssignDevoir
    :devoirId="currentDevoirId"
    @closeModal="closeModal('devoirModal')"
  />
  <DevoirTable
    :devoirs="devoirs"
    @showModal="showModal"
  />

</template>
