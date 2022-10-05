package models

type Proposal struct {
	Id           uint   `gorm:"primarykey"`
	ProposalName string `gorm:"VARCHAR(255); not null"`
	Count        uint
}
