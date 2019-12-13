package money

import (
	"weagentweb/server"
)

func init() {
	server.RegisterPostHandleNoUserID("/money/getout/record", getoutRecordHandle)
	server.RegisterPostHandleNoUserID("/money/getout/result", getoutResultHandle)
	server.RegisterPostHandleNoUserID("/money/getout/playerrecord", getoutPlayerRecordHandle)
}
