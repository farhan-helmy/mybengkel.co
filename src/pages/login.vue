<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { API_URL_LOCAL } from "../api/url";
let router = useRouter();

const email = ref("");
const password = ref("");

const goRegister = () => {
  router.push("/register");
};

const login = () => {
  const data = {
    email,
    password,
  };
  fetch(`${API_URL_LOCAL}/users/login`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
};
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        :src="'/src/assets/MYBengkel.png'"
        alt="mybengkel-logo"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">MyBengkel</h2>
      <p></p>
      <div class="card-actions">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="w-full">
          <button class="btn btn-success" @click="login">Login</button>
          <button class="btn btn-primary" @click="goRegister">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
