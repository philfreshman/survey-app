package router

import (
	"api/controllers"
	"api/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRouter(app *gin.Engine) {

	// Voting
	api := app.Group("/api", middleware.Headers())
	api.POST("/make-vote", controllers.MakeVote)

	// Authentication
	auth := app.Group("/auth", middleware.Headers())
	auth.GET("", controllers.Authenticate)
	auth.POST("/login", controllers.Login)
	auth.POST("/register", controllers.Register)

	// Results
	api.GET("/results", middleware.VerifyJWT(), controllers.GetResults)
}
