package models

type VoteData struct {
	Id          uint   `gorm:"primarykey"`
	FirstName   string `gorm:"VARCHAR(255); not null"`
	LastName    string `gorm:"VARCHAR(255); not null"`
	Street      string `gorm:"VARCHAR(255); not null"`
	HouseNumber string `gorm:"VARCHAR(255); not null"`
	UnitNumber  string `gorm:"VARCHAR(255)"`
	PostalCode  string `gorm:"VARCHAR(255); not null"`
	Pesel       string `gorm:"VARCHAR(255); not null"`
}
