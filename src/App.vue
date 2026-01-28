<script setup lang="ts">
  import {useThemeComposable} from './composable/useComposable'
</script>

<template>
  <section 
   class="flex justify-center items-center min-h-svh w-full transition-all ease-in-out duration-700 font-Smooch lg:overflow-hidden"
   :class="useThemeComposable() ? 'bg-altDark'
   :'bg-white text-indigo-950'"
  >
   <router-view/>
 </section>
</template>
