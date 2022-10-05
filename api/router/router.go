package router

import (
	"api/controllers"
	"api/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRouter(app *gin.Engine) {
	api := app.Group("/api")

	// Voting
	api.POST("/makevote", controllers.MakeVote)

	// Authentication
	auth := api.Group("/auth", middleware.Protected())
	auth.POST("/precheckpassword", controllers.PrePasswordCheck)
	auth.POST("/authenticate", controllers.Authenticate)

	// Results
	//api.GET("getvoteresults", controllers.GetVoteResults)
}
