import axios from 'axios'

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          location.reload() // 为了重新实例化vue-router对象 避免bug
      }
    }
    return Promise.reject(error.response.data)
  }
)

// 获取道具配置
export const getItemConfig = () => {
  return axios.get(`api/item/config`)
}

// 添加道具
export const addItem = (playerid, data) => {
  return axios.post(`api/item/add?playerid=${playerid}`, data)
}

// 获取道具
export const getItem = (playerid) => {
  return axios.get(`api/item/get?playerid=${playerid}`)
}
// 获取道具配置
export const getResourceConfig = () => {
  return axios.get(`api/resource/config`)
}

// 添加道具
export const addResource = (playerid, data) => {
  return axios.post(`api/resource/add?playerid=${playerid}`, data)
}

// 获取道具
export const getResource = (playerid) => {
  return axios.get(`api/resource/get?playerid=${playerid}`)
}
