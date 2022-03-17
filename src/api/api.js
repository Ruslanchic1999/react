import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '762cde9e-c0d1-4d6f-aaaf-5499520615b0'}
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})},
    follow (userId)  {
        return instance.post(`/follow/${userId}`, {})
            .then(response => {
                return response.data
            });
    },
    unfollow (userId) {return instance.delete(`/follow/${userId}`).then(response => {return response.data});}}


export const profileAPI = {
    getUserProfile  ()  {
        return instance.get(`/profile/2`)
            .then(response => {
                return response.data
            });
    }
}

export const AuthMeAPI = {
    getAuthMe () {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            });
    }

}


