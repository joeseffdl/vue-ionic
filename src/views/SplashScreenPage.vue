<template>
  <ion-page>
    <ion-content color="primary" :fullscreen="true">
      <div class="grid justify-items-center mt-48">
        <ion-icon
          src="src/assets/svg/login/logo_183_197.svg"
          class="w-[183px] h-[197px]"
          aria-hidden="true"
        ></ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonIcon, IonContent, IonPage } from "@ionic/vue";
import { useIonRouter } from "@ionic/vue";

const router = useIonRouter();

setTimeout(() => {
  router.push("/login");
}, 3000);
</script>
