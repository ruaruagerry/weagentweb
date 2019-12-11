package gconst

// Error 错误
type Error int32

/* 返回客户端错误码 */
/* 区间：0-10000 */
const (
	/*
		通用模块错误 0~500
	*/
	// Success 成功 0
	Success = Error(iota)
	// ErrUnknown 未知错误
	ErrUnknown = Error(1)
	// ErrParam 参数错误 2
	ErrParam = Error(2)
	// ErrParamNil 请求参数为空 3
	ErrParamNil = Error(3)
	// ErrParse 解析失败 4
	ErrParse = Error(4)
	// ErrDB 数据库操作失败 5
	ErrDB = Error(5)
	// ErrRedis 缓存操作失败 6
	ErrRedis = Error(6)
	// ErrConnect 连接失败 7
	ErrConnect = Error(7)
	// ErrNewPlayer 创建玩家失败 8
	ErrNewPlayer = Error(8)
	// ErrTokenEmpty token is empty 9
	ErrTokenEmpty = Error(9)
	// ErrTokenDecrypt token decrypt failed 10
	ErrTokenDecrypt = Error(10)
	// ErrTokenFormat token format is invalid 11
	ErrTokenFormat = Error(11)
	// ErrTokenExpired token expired 12
	ErrTokenExpired = Error(12)
	// ErrTableConfig 13
	ErrTableConfig = Error(13)
)

var errMsg = map[Error]string{
	Success:         "成功",
	ErrUnknown:      "未知错误",
	ErrParam:        "参数错误",
	ErrParamNil:     "请求参数为空",
	ErrParse:        "解析失败",
	ErrDB:           "数据库操作失败",
	ErrRedis:        "缓存操作失败",
	ErrConnect:      "连接失败",
	ErrNewPlayer:    "创建玩家失败",
	ErrTokenEmpty:   "token为空",
	ErrTokenDecrypt: "token解析失败",
	ErrTokenFormat:  "token格式错误",
	ErrTokenExpired: "token已过期",
}

// String 获得错误码描述信息
func (e *Error) String() string {
	v, ok := errMsg[*e]
	if !ok {
		return "未定义错误描述"
	}

	return v
}
