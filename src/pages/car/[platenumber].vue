
<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useCarStore } from "../../stores/car";

const props = defineProps<{ platenumber: string }>();
const router = useRouter();
const storeCar = useCarStore();

const goViewServices = () => {
  router.push(`/services/${props.platenumber}`)
}

onMounted(() => {
  storeCar.getCarInfo(props.platenumber);
});
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="https://api.lorem.space/image/car?w=400&h=225"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ platenumber.toUpperCase() }}</h2>
      <p>Odometer: {{ storeCar.car_info.odometer }}</p>
      <p>Next service?</p>
      <div class="card-actions">
        <button class="btn btn-primary" @click="goViewServices">View Services</button>
      </div>
    </div>
  </div>
</template>



<style>
</style>