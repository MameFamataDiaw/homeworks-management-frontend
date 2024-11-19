<script setup lang="ts">
  defineProps<{
    countClasses: number
  }>()
</script>

<template>
  <div class="card">
                <div class="card-header">Liste de classes</div>
                <div class="card-body">
                    <h1 style="text-align: center;">{{ countClasses }}</h1>
                </div>
            </div>
</template>
