package main

import (
	"github.com/gin-gonic/gin"
	"server/database"
	"server/router"
)

func main() {
	database.Connect()

	app := gin.Default()

	router.SetupRouter(app)
	app.Use(router.Cors())

	app.Run(":5050")
}
