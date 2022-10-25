package models

import "time"

type VoteLog struct {
	ID int

	VoteOptionId int
	VoteOption   VoteOption

	VoteDataId int
	VoteData   VoteData

	Time time.Time
}
