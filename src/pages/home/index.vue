<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCarStore } from "../../stores/car";
let router = useRouter();
const storeCar = useCarStore();


onMounted(() => {
  storeCar.getCars();
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("login");
  }
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="grid place-items-center my-4">
      <div class="dropdown">
        <button tabindex="0" class="btn btn-warning">Choose Car</button>
        <ul
          tabindex="-1"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="car in storeCar.cars" :key="car._id">
            <a :href="`/home/${car.plate_number}`">{{ car.plate_number.toUpperCase() }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="flex w-full">
      <div
        class="grid h-20 flex-grow card place-items-top"
      >
        <p class="mx-2">Next service date</p>
      </div>
      <div class="divider divider-horizontal"></div>
      <div
        class="grid h-20 flex-grow card place-items-top"
      >
        <p class="mx-2">Odometer</p>
      </div>
    </div> -->

    <div class="overflow-x-auto">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Next Service</th>
            <th>Odometer</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <div class="flex w-full">
      <div class="grid h-20 flex-grow card place-items-center">
        <div class="tooltip tooltip-right" data-tip="Add service">
          <button class="btn btn-primary btn-circle">+</button>
        </div>
      </div>
    </div>

    <div class="flex w-full">
      <div class="grid h-20 flex-grow card place-items-center">
        <p class="text-xl">History</p>
      </div>
    </div>
    <div class="card w-full bg-primary">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Date</th>
              <th>Plate Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

