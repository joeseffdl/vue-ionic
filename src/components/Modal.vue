<template>
  <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss">
    <div class="grid justify-items-center p-6">
      <ion-icon src="src/assets/svg/confirmation.svg" class="size-[71px] mb-[14px]" aria-hidden="true"></ion-icon>
      <div class="my-2 gap-2 text-center flex flex-col">
        <h3>Successfully Added!</h3>
        <p class="mb-4">What do you want to do now?</p>
      </div>
      <ion-button :router-link="routes.CHECKOUT" @click="dismiss()">Proceed to Checkout</ion-button>
      <ion-text class="h-[19px] mt-2 text-[--ion-color-primary] font-bold text-sm leading-[19.1px] font-[Nunito]" :router-link="routes.PRODUCT" @click="dismiss()">Add More</ion-text>
    </div>
  </ion-modal>
</template>
<script setup lang="ts">
import { IonButton, IonModal, IonIcon, IonText } from "@ionic/vue";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product =
  typeof route.params.product === "string"
    ? JSON.parse(route.params.product)
    : null;

const routes = reactive({
  PRODUCT: "/products",
  CHECKOUT: `/products/${JSON.stringify(product)}/checkout`,
});
const modal = ref();

const dismiss = () => modal.value.$el.dismiss();

async function canDismiss(data?: any, role?: string) {
  return role !== "gesture";
}
</script>
<style scoped>
ion-modal {
  --width: 87.2%;
  --min-width: 250px;
  --height: 298px;
  --border-radius: 16px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}
ion-button {
  height: 45px;
  width: 65.14%;
  text-transform: none;
  box-shadow: none;
}
</style>
