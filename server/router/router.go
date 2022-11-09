package router

import (
	"github.com/gin-gonic/gin"
	"server/api"
	"server/middleware"
)

// SetupRouter defines endpoint-routes
func SetupRouter(app *gin.Engine) {
	// Voting
	vote := app.Group("/api", middleware.Headers())
	vote.POST("/make-vote", api.MakeVote)
	vote.GET("/results", middleware.VerifyJWT(), api.GetResults)

	// Authentication
	auth := app.Group("/auth", middleware.Headers())
	auth.GET("", api.Authenticate)
	auth.POST("/login", api.Login)
	auth.POST("/register", api.Register)
}
