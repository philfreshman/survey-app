package database

import (
	"api/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connectionString := "host=localhost user=admin password=hzKD2b#KXk!hhseB=+U7P?A? dbname=VoteApp port=5432"

	database, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}

	DB = database

	err = DB.AutoMigrate(&models.Proposal{}, &models.VoteData{}, &models.VoteLog{})
	if err != nil {
		panic("failed to migrate to database")
	}
}
