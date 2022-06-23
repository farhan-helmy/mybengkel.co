<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, onServerPrefetch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { API_URL_LOCAL } from "../../api/url";
import { useCarStore } from "../../stores/car";

let router = useRouter();
const plate_number = ref("");
const is_car = ref(false);

const storeCar = useCarStore();

const goToCar = (plate_number) => {
  //store.registerCar(plate_number.value);
  router.push("/car/" + plate_number);
};

onMounted(() => {
  storeCar.getCars();
  if (storeCar.cars.length >= 0) {
    is_car.value = true;
  }
});
</script>

<template>
  <!-- The button to open modal -->
  <div class="my-4">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Add Car</h2>
        <div class="form-control">
          <label class="input-group">
            <span>Plate Number</span>
            <input
              type="text"
              class="input input-bordered"
              v-model="plate_number"
            />
          </label>
        </div>
        <div class="card-actions">
          <button
            class="btn btn-primary"
            @click="storeCar.registerCar(plate_number)"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>

  <h1></h1>
  <div class="overflow-x-auto w-full">
    <table class="table w-full" v-if="is_car">
      <!-- head -->
      <thead>
        <tr>
          <th>Car</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        <tr v-for="car in storeCar.cars" :key="car.plate_number">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img
                    src="https://avatars.dicebear.com/api/bottts/test.svg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">
                  {{ car.plate_number.toUpperCase() }}
                </div>
                <div class="text-sm opacity-50" v-if="car.odometer">
                  {{ car.odometer }}km
                </div>
                <div class="text-sm opacity-50" v-else>0km</div>
              </div>
            </div>
          </td>

          <th>
            <button class="btn" @click="goToCar(car.plate_number)">details</button>
          </th>
        </tr>
      </tbody>
    </table>

    <div class="overflow-x-auto w-full" v-else>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h1>No car available, please register 🏎️</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>