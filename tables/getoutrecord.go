package tables

import "time"

const (
	// GetoutStatusReview 审核中
	GetoutStatusReview = 0
	// GetoutStatusRefused 审核拒绝
	GetoutStatusRefused = 1
	// GetoutStatusSuccess 提现成功
	GetoutStatusSuccess = 2
	// GetoutStatusFailed 提现失败
	GetoutStatusFailed = 3
)

// Getoutrecord 提现记录
type Getoutrecord struct {
	Rid        int64     `xorm:"pk autoincr BIGINT(20) <-"`
	ID         string    `xorm:"id"`      // 用户ID
	Money      int64     `xorm:"money"`   // 提现金额
	CreateTime time.Time `xorm:"created"` // 创建时间
	Status     int32     `xorm:"status"`  // 提现状态
}