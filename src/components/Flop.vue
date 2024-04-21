<template>
  <div class="challenge-wrapper">

    <v-card :class="!f.done ? 'challenge ma-5' : 'challenge ma-5 challenge-completed'" v-for="f in allFlop" :key="f.flop" color="#385F7333" :disabled="f.done" >
      <v-card-title class="card-title">
        <span>{{ challenges[f.flop].id }} - {{ challenges[f.flop].title }}</span>
        <span>{{ '⭐'.repeat(challenges[f.flop].stars) }} </span>
      </v-card-title>
      <v-card-text>{{ challenges[f.flop].text }}</v-card-text>
      
      <v-card-text v-if="challenges[f.flop].moreText && challenges[f.flop].moreStars">
        <p>+ {{ '⭐'.repeat(challenges[f.flop].moreStars ?? 0) }}</p>
        <p>{{ challenges[f.flop].moreText }}</p>
      </v-card-text>

      <v-card-actions v-if="!f.done">
        <v-spacer />
        <v-btn color="primary" @click="complete(f.flop)">Completed</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="add-card ma-10 pa-5">
      <v-text-field type="number" label="Challenge ID" clearable  v-model="newFlop" />
      <v-btn color="primary" @click="extractFlop(newFlop ? +newFlop : undefined)">{{ newFlop ? 'Add Challenge' : 'Extract random' }}</v-btn>
      <v-btn class="mt-5" color="error" @click="clearAllDiaglog = true">Reset completed</v-btn>
    </v-card>

    <v-snackbar v-model="snack.status" :color="snack.color" timeout="5000">{{snack.message}}</v-snackbar>

  </div>

  <v-dialog v-model="clearAllDiaglog" width="auto">
    <v-card text="Sei sicuro di voler resettare le challenge completate">
      <v-card-actions>
        <v-spacer />
        <v-btn @click="clearAllDiaglog = false">No</v-btn>
        <v-btn color="error" @click="clearCompleted(); clearAllDiaglog = false">Sicurissimo</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>
<script setup lang="ts">
import challenges, { type Challenge } from '@/assets/challenges'
import { computed, ref, watch } from 'vue';

const flop = ref<number[]>(getLocal('flop'));
const flopDone = ref<number[]>(getLocal('flopDone'));

function saveLocal() {
  localStorage.setItem('flop', JSON.stringify(flop.value));
  localStorage.setItem('flopDone', JSON.stringify(flopDone.value));
  console.log('Saved')
}
function getLocal(key: string): number[] {
  const storage = localStorage.getItem(key);
  if (storage)
    return JSON.parse(storage);
  return [];
}

const clearAllDiaglog = ref(false);
const newFlop = ref<number | undefined>(undefined);
const allFlop = computed(() => [
  ...flop.value.map(flop => ({ flop, done: false })), 
  ...flopDone.value.map(flop => ({ flop, done: true })), 
]);

function complete(flopIndex: number) {
  flop.value = flop.value.filter(f => f !== flopIndex);
  if (!flopDone.value.includes(flopIndex)) flopDone.value.push(flopIndex);
  saveLocal();
}
function clearCompleted() {
  flopDone.value = [];
  saveLocal();
}

const snack = ref({
  status: false,
  message: '',
  color: 'error'
});
function extractFlop(id: number | undefined) {
  const res = getFlopNumber(id)
  if (res) {
    flop.value.push(res);
    newFlop.value = undefined;
    saveLocal();
  }
}

function getFlopNumber(id: number | undefined): number | undefined {

  const challengesUsed = [...flop.value, ...flopDone.value]
  const challengesTodo: number[] = []
  for (const c of Object.values(challenges)) {
    if (!challengesUsed.includes(c.id)) {
      challengesTodo.push(c.id);
    }
  }

  if (challengesTodo.length === 0) {
    snack.value = {
      status: true,
      message: 'No more challenges',
      color: 'error'
    }
    return;
  }

  if (!id) {
    const random = Math.floor(Math.random() * challengesTodo.length);
    snack.value = {
      status: true,
      message: 'Radom challenge added',
      color: 'success'
    }
    return challengesTodo[random];
  }

  if (!challenges[id]) {
    snack.value = {
      status: true,
      message: 'Challenge not found',
      color: 'error'
    }
    return;
  }

  if (challengesUsed.includes(id)) {
    snack.value = {
      status: true,
      message: 'Challenge already used',
      color: 'error'
    }
    return;
  }

  return id;
}


</script>
<style scoped>
.card-title {
  display: flex;
  justify-content: space-between;
}
.challenge-wrapper {
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.challenge {
  border: 2px solid #385F73;
}
.challenge-completed {
  opacity: 0.5;
  border-color: yellow;
}

.add-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>