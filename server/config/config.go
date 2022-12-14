package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

func Config(key string) string {
	err := godotenv.Load("../app.env")
	if err != nil {
		fmt.Println("Error loading jwt.env file")
	}
	return os.Getenv(key)
}
