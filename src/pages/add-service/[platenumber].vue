<script setup>
import { ref } from "vue";

let date = ref(null);
let services = ref([{ name: "", price: "" }]);

const addField = (value, field_type) => {
  field_type.push({ value: "" });
};

const removeField = (index, field_type) => {
  field_type.splice(index, 1);
};
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Add Service</h2>
      <p></p>
      <div class="card-actions">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text mx-2">Date</span>
            <Datepicker v-model="date"></Datepicker>
          </label>

          <label class="label">
            <span class="label-text mx-2">Odometer</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered w-full max-w-xs"
            />
          </label>
          <div>Services</div>
          <div
            v-for="(input, index) in services"
            :key="`services_input-${index}`"
          >
            <div class="flex flex-row w-full">
              <div class="grid">
                <input
                  v-model="input.name"
                  type="text"
                  placeholder="Service Name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="grid">
                <input
                  v-model="input.price"
                  type="text"
                  placeholder="Price"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>

              <button
                class="btn btn-primary btn-circle"
                @click="addField(input, services)"
              >
                +
              </button>
               <button
                class="btn btn-warning btn-circle"
                @click="removeField(index, services)"
              >
                -
              </button>
            </div>
          </div>
        </div>

        <div class="w-full">
          <button class="btn btn-secondary">Add Receipt</button>
        </div>
        <div class="w-full">
          <button class="btn btn-primary">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>