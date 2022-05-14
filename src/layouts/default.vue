<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

let user_picture = ref("");

const goHome = () => {
  router.push("/");
};

// onMounted(() => {
//   console.log(isAuthenticated.value)
//   if(!isAuthenticated.value){
//     router.push("/")
//   }
// })
</script>

<template>
  <div>
    <div>
      <div class="drawer h-screen w-full rounded">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <div>
            <div class="navbar bg-base-100 mb-2 shadow-xl rounded-box">
              <div class="navbar-start">
                <div class="dropdown">
                  <label
                    tabindex="0"
                    for="my-drawer"
                    class="btn btn-ghost btn-circle drawer-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div class="navbar-center">
                <div class="flex flex-col w-full">
                  <div class="grid">
                    <a class="btn btn-ghost normal-case text-xl">MyBengkel</a>
                  </div>
                </div>
              </div>
              <div class="navbar-end">
                <button class="btn btn-ghost btn-circle">
                  <div class="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span
                      class="badge badge-xs badge-primary indicator-item"
                    ></span>
                  </div>
                </button>
              </div>
            </div>
            <router-view />
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul
            class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
          >
            <div class="flex w-full my-2">
              <div class="grid h-20 flex-grow">
                <div class="avatar">
                  <div class="w-24 mask mask-squircle">
                    <img :src="user_picture" />
                  </div>
                </div>
              </div>

              <div class="grid flex-grow my-6">
                <p>Farhan Helmy</p>
              </div>
            </div>

            <div class="divider"></div>

            <!-- Sidebar content here -->
            <li><a>Home</a></li>
            <li><a>History</a></li>
            <li><a>Add Vehicle</a></li>
            <li><a>Notifications</a></li>
            <li><button @click="goHome">Log out</button></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div v-else>
      <h1>please login first</h1>

      <button @click="goHome" class="btn btn-primary">Home</button>
    </div> -->
  </div>
</template>
