package models

type VoteOption struct {
	ID       int
	Language string `gorm:"VARCHAR(255); not null"`
	Count    int
}
