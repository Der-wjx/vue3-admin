import request from '@/utils/request'

// 获取用户详细信息
export function getUsers() {
    return request({
        url: '/getUsers',
        method: 'get'
    })
}
