<template>
  <ion-page>
    <ion-content class="pb-4 ion-padding-bottom" :fullscreen="true">
    <ion-icon src="src/assets/svg/status_bar_375_44.svg" class="w-[375px] h-11" aria-hidden="true"></ion-icon>
      <div class="px-4 grid gap-6 mt-9">
        <ion-icon src="src/assets/svg/login/logo_100.svg" class="size-[100px]" aria-hidden="true"></ion-icon>
        <div class="grid gap-2">
          <h1>Bonjour!</h1>
          <p>Welcome to all new FastFood mobile app. Kindly login your account. Thank you!</p>
        </div>
        <div class="grid gap-2">
          <ion-item class="border-[1px] border-[#6C757D] rounded-2xl">
            <ion-input type="email" label="Email Address" labelPlacement="stacked" placeholder="chou.tzuyu@ema"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="password" label="Password" labelPlacement="floating">
              <ion-button class="!size-fit" fill="clear" slot="end" aria-label="Forgot Password">Forgot?</ion-button>
            </ion-input>
          </ion-item>
        </div>
        <div class="mt-6">
          <ion-button class="mt-12 w-full" :router-link="`/dashboard`">Login</ion-button>
          <ion-button class="w-full pointer-events-none" fill="clear">Login as Guest</ion-button>
        </div>
        <div class="flex gap-0.5 mt-40 items-center justify-center">
          <p>Don’t have an account yet?</p>
          <span>Create</span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonButton, IonContent, IonIcon, IonItem, IonInput, IonPage, } from "@ionic/vue";
</script>
