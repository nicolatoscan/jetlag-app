<template>
  <div class="challenge-wrapper">


    <v-card class="challenge ma-5" v-for="c in currentChallenges" :key="c.id" color="#385F7333">
      <v-card-title class="card-title">
        <span>{{ c.id }} - {{ c.title }}</span>
        <span>{{ '⭐'.repeat(c.stars) }} </span>
      </v-card-title>
      <v-card-text>{{ c.text }}</v-card-text>
      
      <v-card-text v-if="c.moreText && c.moreStars">
        <p>+ {{ '⭐'.repeat(c.moreStars) }}</p>
        <p>{{ c.moreText }}</p>
      </v-card-text>
    </v-card>

    <v-btn
      class="add-button mb-5"
      icon="mdi-refresh"
      color="primary"
      :elevation="4"
      size="x-large" />

  </div>

</template>
<script setup lang="ts">
import challenges, { type Challenge } from '@/assets/challenges'
import { ref } from 'vue';

async function getCurrentChallenges(): Promise<Challenge[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      //get first 5 challenges
      resolve(challenges.slice(0, 5));
    }, 500);
  });
}

async function updateChallenges() {
  currentChallenges.value = await getCurrentChallenges();
}

const currentChallenges = ref<Challenge[]>([]);
updateChallenges();


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
</style>