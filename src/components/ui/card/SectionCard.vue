<template>
  <section class="mt-6 grid gap-2">
    <h2>{{ heading }}</h2>
    <ul class="w-full gap-2 flex">
      <li
        v-for="index in quantity"
        class="w-full grid place-items-center rounded-2xl bg-[#DEE2E6] px-4 py-3 text-[#6C757D] text-center text-sm font-semibold first:text-white first:bg-[--ion-color-primary]"
        :style="{ width: `${width}px`, height: `${height}px` }"
        :key="index"
      >
        {{ index }}
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  heading: string;
  quantity: number;
  width?: string | number;
  height?: string | number;
}>();
</script>
