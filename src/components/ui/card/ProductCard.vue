<template>
  <ion-card class="px-4 py-5" :class="{ 'pointers-event-none': id !== 1 }">
    <div class="h-1/2 pb-[26px]">
      <ion-icon
        class="object-cover size-[136px]"
        :src="`src/assets/svg/products/${src}`"
        :alt="`Image of ${name}`"
      />
    </div>
    <div class="h-1/2">
      <div class="flex flex-col">
        <ion-card-title class="whitespace-nowrap">{{ name }}</ion-card-title>
        <ion-card-subtitle>{{ category }}</ion-card-subtitle>
        <div class="flex justify-between items-center mt-[10px]">
          <h3 class="text-[--ion-color-primary]">P {{ price }}</h3>
          <ion-icon
            src="src/assets/svg/rating_60_12.svg"
            class="w-[60px] h-3"
            aria-hidden="true"
          ></ion-icon>
        </div>
      </div>
    </div>
  </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardSubtitle, IonCardTitle, IonIcon } from "@ionic/vue";

defineProps<{
  id: number;
  name: string;
  category: string;
  price: number;
  rating?: number;
  src: string;
}>();
</script>
<style scoped>
ion-card {
  --background: #e9ecef;

  box-shadow: none;
  border-radius: 16px;
  height: 273px;
  margin: 0;
}
</style>
