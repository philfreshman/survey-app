package controllers

import (
	"api/database"
	"api/models"
	"github.com/gin-gonic/gin"
)

func GetResults(c *gin.Context) {
	data, err := database.DB.Query("Select * From VoteOption")
	if err != nil {
		c.JSON(500, gin.H{"status": "error", "message": "retrieving data from database failed"})
		return
	}

	var results []models.VoteOption
	for data.Next() {
		var voteOption models.VoteOption
		if err := data.Scan(&voteOption.ID, &voteOption.Language, &voteOption.Count); err != nil {
			c.JSON(500, gin.H{"status": "error", "message": "retrieving data from database failed"})
			return
		}
		results = append(results, voteOption)
	}

	c.JSON(200, gin.H{"data": results})
}
