<template>
  <div class="province-wrapper">

    <v-card color="blue" variant="tonal" class="ma-5">
      <v-card-text>
        <v-row>
          <v-col cols="6" class="text-center">Conquiste: {{ summaryConquered.number }} ({{ Math.floor(summaryConquered.area / 100) }} hKm2)</v-col>
          <v-col cols="6" class="text-center text-red">Nemiche: {{ summaryEnemy.number }} ({{ Math.floor(summaryEnemy.area / 100) }} hKm2)</v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-table
      fixed-header
    >
      <thead>
        <tr>
          <th class="text-left">Provincia</th>
          <th class="text-left">Conquistata</th>
          <th class="text-left">Nemica</th>
          <th class="text-left">2nd Ch.</th>
          <th class="text-left">CC</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in provinces" :key="p.name"
        class="ciao">

          <td :class="`bg-${colorsByProvince[p.region]}-lighten-3`">{{ p.name }}</td>

          <td><v-checkbox v-model="status[p.name].conquered" hide-details
            @update:model-value="$event && (status[p.name].enemy = false)"
            color="primary" /></td>
          <td><v-checkbox v-model="status[p.name].enemy" hide-details
            @update:model-value="$event && (status[p.name].conquered = false)"
            color="red" /></td>
          <td><v-checkbox v-model="status[p.name].second" hide-details/></td>
          <td><v-checkbox v-model="status[p.name].cc" hide-details /></td>
          <td :class="`indicator ${status[p.name].conquered ? 'bg-blue' : ''} ${status[p.name].enemy ? 'bg-red' : ''}`"></td>

        </tr>
      </tbody>
    </v-table>

  </div>

</template>
<script setup lang="ts">
import provinces, { type Province } from '@/assets/province'
import { ref, watch, computed } from 'vue';

const colorsByProvince: { [id: string]: string } = {
  'Veneto': 'green',
  'Lombardia': 'purple',
  'Emilia-Romagna': 'yellow',
  'Liguria': 'blue',
  'Toscana': 'red',
}

function getStatus() {
  const status = localStorage.getItem('status')
  if (status) {
    return JSON.parse(status)
  }
  const result: { [id: string]: { conquered: boolean, enemy: boolean, second: boolean, cc: boolean } } = {}
  for (const p of provinces) {
    result[p.name] = {
      conquered: false,
      enemy: false,
      second: false,
      cc: false
    }
  }
  return result
}

function saveStatus() {
  console.log('Saving Status')
  localStorage.setItem('status', JSON.stringify(status.value))
}

const summaryConquered = computed(() => {
  const conquered = Object.keys(status.value).filter(k => status.value[k].conquered);
  const area = provinces.filter(p => conquered.includes(p.name)).reduce((t, p) => t + p.area, 0);
  return { number: conquered.length, area }
})

const summaryEnemy = computed(() => {
  const enemy = Object.keys(status.value).filter(k => status.value[k].enemy);
  const area = provinces.filter(p => enemy.includes(p.name)).reduce((t, p) => t + p.area, 0);
  return { number: enemy.length, area }
})


const status = ref<
  { [id: string]: 
    {
      conquered: boolean,
      enemy: boolean,
      second: boolean,
      cc: boolean
    }
  }
>(getStatus())
watch(status, saveStatus, { deep: true })

</script>
<style scoped>
.indicator {
  width: 3rem;
  height: 100%;

}
</style>