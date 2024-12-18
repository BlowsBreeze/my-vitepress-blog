<template>
  <footer
    class="relative px-6 pt-8 pb-4 text-center border-t dark:border-zinc-800 sm:pt-8 text-black/40 dark:text-zinc-300/60"
  >
    <p class="text-sm font-medium">{{ footer.copyright }}</p>
    <a class="text-sm font-medium" href="https://beian.miit.gov.cn/" target="_blank">{{ footer.ICP }}</a>
  </footer>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { theme } = useData();
const { footer } = theme.value;
</script>
