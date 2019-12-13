import request from '@/utils/request'

var rootUrl = "http://127.0.0.1:3004"

export function moneyGetoutRecord (data) {
    return request({
        url: rootUrl + '/money/getout/record',
        method: 'post',
        data
    })
}

export function moneyGetoutResult (data) {
    return request({
        url: rootUrl + '/money/getout/result',
        method: 'post',
        data
    })
}

export function moneyGetoutPlayerResult (data) {
    return request({
        url: rootUrl + '/money/getout/playerrecord',
        method: 'post',
        data
    })
}
