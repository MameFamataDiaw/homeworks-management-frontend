<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
import CountClasses from './components/CountClasses.vue'
import { countClassesHttp } from './actions/countClasses'

  const numberOfClasses = ref<number>(0)

  onMounted(async() => {
    const data = await countClassesHttp()
    numberOfClasses.value = data
  })

</script>
<template>
    <div class="row">
        <h1>Dashbaord page</h1>
        <div class="row">
            <div class="col-md-4">
              <countClasses :countClasses="numberOfClasses"/>
            </div>
        </div>
    </div>
</template>
