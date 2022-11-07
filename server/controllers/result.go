package controllers

import (
	"api/database"
	"api/models/dto"
	"github.com/gin-gonic/gin"
)

func GetResults(c *gin.Context) {
	data, err := database.DB.Query("SELECT Count AS value, Language as name FROM VoteOption")
	if err != nil {
		c.JSON(500, gin.H{"status": "error", "message": "retrieving data from database failed"})
		return
	}

	var results []dto.VoteResult
	for data.Next() {
		var voteResult dto.VoteResult
		if err := data.Scan(&voteResult.Value, &voteResult.Name); err != nil {
			c.JSON(500, gin.H{"status": "error", "message": "retrieving data from database failed"})
			return
		}
		results = append(results, voteResult)
	}

	c.JSON(200, results)
}
