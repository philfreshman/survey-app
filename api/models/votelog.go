package models

import "time"

type VoteLog struct {
	Id         uint `gorm:"primarykey"`
	ProposalId int
	Proposal   Proposal
	VoteDataId int
	VoteData   VoteData
	DateTime   time.Time
}
