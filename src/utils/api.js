import http from '@/utils/index'
export const form = (params) => {
    return http.post("/MakeFriends.php",params)
}