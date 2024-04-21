<template>

  <v-btn class="toggle-theme" density="comfortable" :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme"></v-btn>

  <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
    <v-tab value="flop">Flop</v-tab>
    <v-tab value="province">Province</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="flop" color="red"> <Flop /> </v-window-item>
    <v-window-item value="province"> <Province /> </v-window-item>
  </v-window>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import Flop from '@/components/Flop.vue';
import Province from '@/components/Province.vue';
import { useTheme } from 'vuetify'

const tab = ref('flop')

const theme = useTheme();
function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  localStorage.setItem('theme', newTheme)
}
</script>

<style lang="scss" scoped>
.toggle-theme {
  position: fixed;
  top: 0.3em;
  right: 0.3em;
  z-index: 999;
}
</style>
