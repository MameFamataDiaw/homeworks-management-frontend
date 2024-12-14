<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { required } from '@vuelidate/validators';
import type { IAssignedDevoir } from '../types/assignDevoir.types';
import useVuelidate from '@vuelidate/core';
import { assignDevoirHttp } from '../actions/AssignDevoir';
import { showError, successMsg } from '@/helper/Toastnotification';
import Error from '@/components/Error.vue';
import { ref, watch } from 'vue';

const props = defineProps<{
  devoirId: number
}>()

const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

const assignInput = ref<IAssignedDevoir>({
  id: props.devoirId,
  aRendre: '',
} as IAssignedDevoir)

// Mettre a jour l'id quand le devoirId change
// Mettre à jour l'id quand le devoirId change
watch(() => props.devoirId, (newId) => {
  assignInput.value.id = newId
})


const rules = {
  aRendre: { required }
}

const loadingStatus = ref(false)
const v$ = useVuelidate(rules, assignInput)

async function assignDevoir() {
  const result = await v$.value.$validate()
  if (!result) return
  try {
    loadingStatus.value = true
    const data = await assignDevoirHttp(assignInput.value)

    assignInput.value = {} as IAssignedDevoir
    v$.value.$reset()

    successMsg(data.message)
    emit('closeModal')
    loadingStatus.value = false
  } catch (error: any) {
    loadingStatus.value = false
    showError(error.message || "Erreur lors de l'assignation")
  }
}
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="devoirModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="assignDevoir" action="">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Assigner le devoir {{ devoirId }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="emit('closeModal')"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <Error inputLabel="Date de soumission" :formErrors="v$.aRendre.$errors">
                <div class="col-md-10">
                  <input class="form-control" type="date" v-model="assignInput.aRendre"/>
                </div>
              </Error>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="emit('closeModal')"
              data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Assigner</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
