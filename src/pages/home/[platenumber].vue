<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCarStore } from "../../stores/car";
//let router = useRouter()
const props = defineProps<{ platenumber: string }>();
const storeCar = useCarStore()
onMounted(() => {
  storeCar.getCarInfo(props.platenumber)
})
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="grid place-items-center my-4">
      <div class="dropdown">
        <label tabindex="0" class="m-4">Plate Number</label>
        <ul
          tabindex="-1"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>WUR6262</a></li>
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
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>😁</th>
            <td>13/3/2021</td>
            <td>1234</td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>😁</th>
            <td>13/3/2021</td>
            <td>1234</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>😁</th>
            <td>13/3/2021</td>
            <td>1234</td>
          </tr>
        </tbody>
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
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>13/2/2022</th>
              <td>WUR6262</td>
              <td><button class="btn btn-secondary">More</button></td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>10/2/2021</th>
              <td>MCK6262</td>
              <td><button class="btn btn-secondary">More</button></td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>13/2/2021</th>
              <td>ABC1234</td>
              <td><button class="btn btn-secondary">More</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

