<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
//console.log(user.name)

const goLogin = () => {
  router.push("login");
};
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Selamat datang ke MyBengkel</h2>
      <p></p>
      <div class="card-actions">
        <button @click="goLogin" class="btn btn-success">Log Masuk</button>
      </div>
    </div>
  </div>
</template>




<route lang="yaml">
meta:
  layout: auth
</route>
