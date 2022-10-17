package database

import (
	"api/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"strings"
)

var DB *gorm.DB

func Connect() {
	// data source name
	dsn := "admin:pass@tcp(localhost:3306)/SurveyApp?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
			NoLowerCase:   true,
			NameReplacer:  strings.NewReplacer("ID", "Id"),
		},
		SkipDefaultTransaction: true,
		FullSaveAssociations:   true,
	})

	if err != nil {
		panic("failed to connect to database")
	}

	DB = db

	err = DB.AutoMigrate(&models.VoteData{}, &models.VoteOption{}, &models.VoteLog{})
	if err != nil {
		panic("failed to migrate to database")
	}

}
