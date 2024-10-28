<template>
  <li
    class="rounded-2xl px-4 py-3 text-center text-sm font-semibold first:text-white"
    :class="[
      width ? `w-[${width}px]` : 'w-full',
      height ? `h-[${height}px]` : '',
      variant === 'tertiary'
        ? 'first:bg-[--ion-color-tertiary] border-[1px] border-[#DEE2E6] text-black bg-white'
        : 'first:text-white first:bg-[--ion-color-primary] text-[#6C757D] bg-[#DEE2E6]',
    ]"
  >
    {{ label }}
  </li>
</template>
<script setup lang="ts">
defineProps<{
  label: string;
  width?: number;
  height?: number;
  variant?: "primary" | "tertiary";
}>();
</script>
