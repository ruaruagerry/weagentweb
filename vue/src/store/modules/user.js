import { logout } from '@/api/user'
import { login } from '@/api/weagent'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    // user login
    login ({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            var params = {
                account: username,
                password: password
            }
            var data = JSON.stringify(params)
            login(data).then(response => {
                commit('SET_TOKEN', response.token)
                commit('SET_ROLES', response.userinfo.role)
                commit('SET_NAME', response.userinfo.nickname)
                commit('SET_AVATAR', response.userinfo.avatarurl)

                setToken(response.token)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    getInfo ({ commit, state }) {
        return new Promise((resolve, reject) => {
            var data = {
                name: state.name,
                avatar: state.avatar,
                introduction: state.introduction,
                roles: state.roles,
            }

            if (!roles || roles.length <= 0) {
                reject('getInfo: roles must be a non-null array')
            }

            resolve(data)
        })
    },

    // user logout
    logout ({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resetRouter()

                // reset visited views and cached views
                // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
                dispatch('tagsView/delAllViews', null, { root: true })

                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
