
const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const { username } = config.body
            const token = tokens[username]

            // mock error
            if (!token) {
                return {
                    result: 60204,
                    msg: 'Account and password are incorrect.'
                }
            }

            return {
                result: 0,
                data: token
            }
        }
    },

    // get user info
    {
        url: '/user/info\.*',
        type: 'get',
        response: config => {
            const { token } = config.query
            const info = users[token]

            // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: 'Login failed, unable to get user details.'
                }
            }

            return {
                result: 0,
                data: info
            }
        }
    },

    // user logout
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            return {
                result: 0,
                data: 'success'
            }
        }
    }
]
