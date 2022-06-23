<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useAuthStore } from "../stores/auth";

let router = useRouter();

const email = ref("");
const password = ref("");

const storeLogin = useAuthStore();

watch(
  () => storeLogin.token,
  (token) => {
    if(token){
      router.push("/home")
    };
  }
);

const login = () => {
  storeLogin.login(email.value, password.value);
};

const goRegister = () => {
  router.push("/register");
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
            placeholder="Email"
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
