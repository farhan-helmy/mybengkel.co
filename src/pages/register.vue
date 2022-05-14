<script setup>
import { ref, watch } from "vue";

let email = ref("");
let password = ref("");
let password_confirm = ref("");
let not_match = ref(false)

watch(password, password_confirm, () =>{
  
})

const register = () => {
  if(password !== password_confirm){
    not_match = true
  }

  const body = {
    email,
    password
  }
}
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
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            v-model="password_confirm"
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div class="w-full">
          <button class="btn btn-primary" @click="register">Register</button>
        </div>
        <div class="w-full">
          <p>
            Already register?
            <a class="link link-primary" href="/login">login</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>




<route lang="yaml">
meta:
  layout: auth
</route>
