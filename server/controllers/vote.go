package controllers

import (
	"api/database"
	"api/models"
	"api/models/dto"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"strconv"
	"time"
)

func MakeVote(c *gin.Context) {

	c.Writer.Header().Set("Access-Control-Allow-Headers", "*")
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH")

	var input dto.VoteForm
	if err := c.BindJSON(&input); err != nil {
		c.JSON(400, gin.H{"status": "data binding failed"})
		return
	}

	err := runTransaction(input)
	if err != nil {
		c.JSON(400, gin.H{"status": "transaction failed"})
		return
	}

	c.JSON(200, gin.H{"status": "success"})
}

func runTransaction(input dto.VoteForm) error {
	tx := database.DB.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	// add voteData
	var voteDataId int
	voteDataId, err := createVoteDataAndReturnId(input, tx)
	if err != nil {
		return tx.Rollback().Error
	}

	// list of optionId's
	var optionIds []int
	for _, optionId := range input.CheckBoxes.Options {
		id, err := strconv.Atoi(optionId)
		if err != nil {
			tx.Rollback()
		}
		optionIds = append(optionIds, id)
	}

	// for each option add voteOption
	var voteOptionIds []int
	for _, optionId := range optionIds {
		id := createVoteOptionAndReturnId(optionId, tx)
		voteOptionIds = append(voteOptionIds, id)
	}

	// add voteLog
	for _, voteOptionId := range voteOptionIds {
		createVoteLog(voteDataId, voteOptionId, tx)
	}

	return tx.Commit().Error
}

func createVoteDataAndReturnId(input dto.VoteForm, tx *gorm.DB) (int, error) {
	var voteData = models.VoteData{
		Position:   input.Position,
		Experience: input.Data.Experience,
		Url:        input.Data.Url,
		Feedback:   input.Data.Feedback,
	}
	tx.Create(&voteData)

	return voteData.ID, nil
}

func createVoteOptionAndReturnId(id int, tx *gorm.DB) int {
	var voteOption models.VoteOption
	tx.First(&voteOption, id).Update("Count", voteOption.Count+1)
	tx.Save(&voteOption)

	return voteOption.ID
}

func createVoteLog(voteDataId int, voteOptionId int, tx *gorm.DB) {
	var log = models.VoteLog{
		VoteOptionId: voteOptionId,
		VoteDataId:   voteDataId,
		Time:         time.Now(),
	}
	tx.Create(&log)
}
