<template>
  <ion-page>
    <ion-header :translucent="true">
      <StatusBar />
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <h1>Loyalty Points</h1>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <section class="mt-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <Crown />
            <h3>Beginner Tier</h3>
          </div>
          <ion-button fill="clear" class="size-fit pointer-events-none">
            View All
            <ion-icon
              class="size-[13px]"
              :icon="chevronForwardOutline"
              aria-hidden="true"
              slot="end"
              color="primary"
            ></ion-icon>
          </ion-button>
        </div>
        <p>
          Earn points by purchasing from our store. Vestibulum ante ipsum primis
          in faucibus orci luctus et.
        </p>
        <div class="h-60 grid place-items-center">
          <div
            class="grid place-items-center size-[142px] bg-white border-8 border-[#D7192133] outline outline-[#D7192133] outline-8 rounded-full"
          >
            <h1
              class="grid place-items-center rounded-full size-full shadow-lg"
            >
              0 / 160
            </h1>
          </div>
        </div>
      </section>
      <section class="mt-5 grid gap-2">
        <div class="flex items-center justify-between">
          <h3>Rewards</h3>
          <ion-button fill="clear" class="size-fit pointer-events-none">
            How it Works
            <ion-icon
              class="size-[13px]"
              :icon="chevronForwardOutline"
              aria-hidden="true"
              slot="end"
              color="primary"
            ></ion-icon>
          </ion-button>
        </div>
        <ul class="w-full gap-2 flex">
          <li
            v-for="name in tiers"
            class="w-full rounded-2xl bg-[#DEE2E6] px-4 py-3 text-[#6C757D] text-center text-sm font-semibold first:text-white first:bg-[--ion-color-primary]"
            :key="name"
          >
            {{ name }}
          </li>
        </ul>
        <ion-card
          class="flex items-center mx-0 px-4 shadow-none rounded-2xl bg-[#E9ECEF]"
        >
          <img
            class="object-cover size-[86px]"
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="Image of Product Steak Fries Veggies"
          />
          <div class="flex flex-col">
            <ion-card-header>
              <ion-card-title class="text-sm font-semibold"
                >Steak Fries Veggies</ion-card-title
              >
              <ion-label class="text-black">Meat</ion-label>
            </ion-card-header>

            <ion-card-content
              class="flex items-center gap-1 text-[--ion-color-primary] font-semibold text-lg"
            >
              <Crown class="size-[22px]" />
              <h3>20 points</h3>
            </ion-card-content>
          </div>
        </ion-card>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonLabel,
  IonContent,
  IonIcon,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import { reactive } from "vue";
import StatusBar from "@/component/svg/StatusBar.vue";
import Crown from "@/component/svg/Crown.vue";

const tiers = reactive(["All", "Beginner", "Intermediate", "Loyal"]);
</script>
