import {
    ref,
    computed,
    watch
} from "vue"
import {
    defineStore
} from "pinia"
import {
    API_URL_LOCAL
} from "../api/url";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: ''
    }),
    actions: {
        async login(email, password) {

            const data = {
                email,
                password,
            };
            const res = await fetch(`${API_URL_LOCAL}/users/login`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const user = await res.json()
            this.token = user.token

            localStorage.setItem("token", user.token)

        }
    }
})