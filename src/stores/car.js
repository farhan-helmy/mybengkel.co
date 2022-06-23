import { defineStore } from "pinia"
import { API_URL_LOCAL } from "../api/url";

export const useCarStore = defineStore('car', {
    state: () => ({
        cars: [],
        token: '',
        car_info: ''
    }),
    actions: {
        async getCars() {

            const res = await fetch(`${API_URL_LOCAL}/cars`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            })

            const cars_result = await res.json()
        
            if (cars_result.message === "No car") {
                return
            }
           
            var cars_arr = cars_result.user.cars
            cars_arr.forEach((car) => {
                this.cars.push(car)
            })

        },
        async registerCar(plate_number) {

            const data = {
                plate_number: plate_number
            }
            const res = await fetch(`${API_URL_LOCAL}/car/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
                body: JSON.stringify(data),
            })

            console.log(res.status)
        },

        async getCarInfo(plate_number) {
            const res = await fetch(`${API_URL_LOCAL}/car/info/${plate_number}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
            })
            const carinf = await res.json()
            //console.log(carinf)
            this.car_info = carinf
        }
    }
})