package controllers

import (
	"api/database"
	"api/models"
	"github.com/gin-gonic/gin"
)

func GetVoteResults(c *gin.Context) {

	data := database.DB.Find(&models.VoteOption{})

	c.JSON(200, gin.H{"status": "all good", "data": data})
	return
}
