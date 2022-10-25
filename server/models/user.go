package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username string `gorm:"VARCHAR(255); not null"`
	Password string `gorm:"VARCHAR(255); not null"`
}
