<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
//console.log(user.name)

const goLogin = () => {
  router.push("login");
};
</script>

<template>
  <html>
    <div>
      <div class="hero bg-accent-focus min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse sm:flex-col sm:text-center xs:text-center">
          <img
            src="../assets/keretaku.png"
            class="rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-7xl text-white">Keretaku</h1>
            <p class="py-6 text-white">Manage your car maintenance with <span>ease</span> </p>
            <p class="py-6">
              Never miss your car service again! Keep your car service data up
              to date with us. Create an account with us now for free.
            </p>
            <button class="btn btn-primary">Register Now!</button>
          </div>
        </div>
      </div>
    </div>
  </html>
</template>




<route lang="yaml">
meta:
  layout: landing
</route>
