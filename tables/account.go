package tables

import (
	"time"
)

// Account 玩家
type Account struct {
	ID            int64     `xorm:"id pk autoincr <-"` // 用户ID
	Nick          string    `xorm:"nick"`              // 昵称
	Gender        int32     `xorm:"gender"`            // 性别(注:账号服返回的性别字段为sex)
	Portrait      string    `xorm:"portrait"`          // 头像
	OpenID        string    `xorm:"open_id"`           // OpenID
	UnionID       string    `xorm:"union_id"`          // 微信UnionID
	SessionKey    string    `xorm:"session_key"`       // 微信SessionKey
	CreateTime    time.Time `xorm:"created"`           // 创建时间
	LastLoginTime time.Time `xorm:"updated"`           // 最后登录时间
}
