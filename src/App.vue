<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <NavigationMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>
