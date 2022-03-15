import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '762cde9e-c0d1-4d6f-aaaf-5499520615b0'}
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})}
}


export const profileAPI = {
    getUserProfile  ()  {
        return instance.get(`/profile/2`)
            .then(response => {
                return response.data
            });
    }
}

export const getAuthMe = () => {
    return instance.get(`/auth/me`)
        .then(response => {
            return response.data
        });
}

export const deleteFollow = (u) => {
    return instance.delete(`/follow/${u.id}`)
        .then(response => {
            return response.data
        });
}

export const postFollow = (u) => {
    return instance.post(`/follow/${u.id}`, {})
        .then(response => {
            return response.data
        });
}
