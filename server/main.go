package main

import (
	"api/database"
	"api/router"
	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()

	app := gin.Default()

	router.SetupRouter(app)
	app.Use(router.Custom())

	app.Run(":5050")
}
