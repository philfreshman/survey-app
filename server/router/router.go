package router

import (
	"api/controllers"
	"api/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRouter(app *gin.Engine) {

	// Voting
	api := app.Group("/api", middleware.Protected())
	api.POST("/make-vote", controllers.MakeVote)

	// Authentication
	auth := app.Group("/auth", middleware.Protected())
	auth.POST("/register", controllers.Register)
	auth.POST("/login", controllers.Login)
	auth.POST("/pre-check-password", controllers.PreCheckPassword)
	auth.POST("/authenticate", controllers.Authenticate)

	// Results
	//api.GET("getvoteresults", controllers.GetVoteResults)
}
