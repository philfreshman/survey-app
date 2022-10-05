package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Custom() gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowWildcard:    true,
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "OPTIONS"},
		AllowHeaders:     []string{"Authorization", "Origin", "Access-Control-Allow-Origin", "Content-Length", "Content-Type", "User-Agent", "Referrer", "Host", "Token"},
		ExposeHeaders:    []string{"Access-Control-Allow-Origin"},
		AllowCredentials: true,
	})
}
