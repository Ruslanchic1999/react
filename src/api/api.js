import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '762cde9e-c0d1-4d6f-aaaf-5499520615b0'}
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})},
    follow (userId)  {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            });
    },
    unfollow (userId) {return instance.delete(`follow/${userId}`).then(response => {return response.data});}}


export const profileAPI = {
    getUserProfile  (userId)  {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            });
    },
    getStatus  ()  {
        return instance.get(`profile/status/22579`)
            .then(response => {return response.data});
    },
    updateStatus  (status)  {
        return instance.put(`profile/status`, {status : status})

    }
}

export const AuthMeAPI = {
    getAuthMe () {
        return instance.get(`auth/me`)

    },
    login (email, password,rememberMe = false) {
        return instance.post(`auth/login`, {email, password,rememberMe})
    },

    logout () {
        return instance.delete(`auth/login`)
    }

}


