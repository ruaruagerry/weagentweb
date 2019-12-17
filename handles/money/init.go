package money

import (
	"weagentweb/server"
)

func init() {
	server.RegisterPostHandleNoUserID("/money/getout/record", getoutRecordHandle)             // 查看所有提现记录
	server.RegisterPostHandleNoUserID("/money/getout/result", getoutResultHandle)             // 提现审核
	server.RegisterPostHandleNoUserID("/money/getout/playerrecord", getoutPlayerRecordHandle) // 查找玩家提现记录
	server.RegisterGetHandleNoUserID("/money/getout/count", getoutCountHandle)                // 获取提现总数
}
