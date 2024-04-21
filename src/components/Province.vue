<template>
  <div class="province-wrapper">

    <v-card color="blue" variant="tonal" class="ma-5">
      <v-card-text>
        <v-row>
          <v-col cols="6" class="text-center">Conquiste: {{ summaryConquered.number }} ({{ Math.floor(summaryConquered.area / 100) }} ha)</v-col>
          <v-col cols="6" class="text-center text-red">Nemiche: {{ summaryEnemy.number }} ({{ Math.floor(summaryEnemy.area / 100) }} ha)</v-col>
        </v-row>

        <v-row>
          <v-col cols="6" class="counter">
            <v-btn icon="mdi-minus" size="small" @click="teamStatus.myTeamStars--" />
            <p>{{teamStatus.myTeamStars}} ⭐</p>
            <v-btn icon="mdi-plus" size="small"  @click="teamStatus.myTeamStars++"/> 
          </v-col>
          <v-col cols="6" class="counter text-red">
            <v-btn icon="mdi-minus" size="small" @click="teamStatus.enemyTeamStars--" />
            <p>{{teamStatus.enemyTeamStars}} ⭐</p>
            <v-btn icon="mdi-plus" size="small"  @click="teamStatus.enemyTeamStars++"/> 
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" class="counter">
            <v-btn icon="mdi-minus" size="small" @click="teamStatus.myTeamCC--" />
            <p>{{teamStatus.myTeamCC}} CC</p>
            <v-btn icon="mdi-plus" size="small"  @click="teamStatus.myTeamCC++"/> 
          </v-col>
          <v-col cols="6" class="counter text-red">
            <v-btn icon="mdi-minus" size="small" @click="teamStatus.enemyTeamCC--" />
            <p>{{teamStatus.enemyTeamCC}} CC</p>
            <v-btn icon="mdi-plus" size="small"  @click="teamStatus.enemyTeamCC++"/> 
          </v-col>
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


function getTeamStatus() {
  const teamStatus = localStorage.getItem('teamStatus')
  if (teamStatus) {
    return JSON.parse(teamStatus)
  }
  return {
    myTeamStars: 0,
    enemyTeamStars: 0,
    myTeamCC: 0,
    enemyTeamCC: 0
  }
}
function saveTeamStatus() {
  localStorage.setItem('teamStatus', JSON.stringify(teamStatus.value))
}
const teamStatus = ref<{
  myTeamStars: number,
  enemyTeamStars: number,
  myTeamCC: number,
  enemyTeamCC: number
}>(getTeamStatus())
watch(teamStatus, saveTeamStatus, { deep: true })

</script>
<style scoped>
.indicator {
  width: 3rem;
  height: 100%;

}
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>