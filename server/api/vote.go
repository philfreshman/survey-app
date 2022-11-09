package api

import (
	"database/sql"
	"fmt"
	"github.com/gin-gonic/gin"
	"server/database"
	"server/models"
	"server/models/dto"
	"strconv"
	"time"
)

func MakeVote(c *gin.Context) {
	//c.Writer.Header().Set("Access-Control-Allow-Headers", "*")
	//c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	//c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH")

	var input dto.VoteForm
	if err := c.BindJSON(&input); err != nil {
		c.JSON(400, gin.H{"status": "data binding failed"})
		return
	}

	err := runTransaction(input)
	if err != nil {

	}

	c.JSON(200, gin.H{"status": "success"})
}

// Inserts values in VoteData
// gets list of options

func runTransaction(input dto.VoteForm) error {
	tx, err := database.DB.Begin()
	if err != nil {
		return nil
	}
	defer func() {
		if r := recover(); r != nil {
			_ = tx.Rollback()
		}
	}()

	// add voteData
	var voteDataId int
	voteDataId, err = insertVoteDataAndReturnId(input, tx)
	if err != nil {
		_ = tx.Rollback()
		return nil
	}

	// list of checkBoxOptionId's
	var checkBoxOptions []int
	for _, optionId := range input.CheckBoxes.Options {
		id, err := strconv.Atoi(optionId)
		if err != nil {
			_ = tx.Rollback()
		}
		checkBoxOptions = append(checkBoxOptions, id)
	}

	// for each checkBoxOption add voteOption
	for _, optionId := range checkBoxOptions {
		incrementVoteOption(optionId, tx)
	}

	// add voteLog
	for _, voteOptionId := range checkBoxOptions {
		insertVoteLog(voteDataId, voteOptionId, tx)
	}

	return tx.Commit()
}

func insertVoteDataAndReturnId(input dto.VoteForm, tx *sql.Tx) (int, error) {
	var voteData = models.VoteData{
		Position:   input.Position,
		Experience: input.Data.Experience,
		Url:        input.Data.Url,
		Feedback:   input.Data.Feedback,
	}

	result, err := tx.Exec("INSERT INTO VoteData VALUES (null, ? , ?, ?, ?)",
		voteData.Position,
		voteData.Experience,
		voteData.Url,
		voteData.Feedback,
	)

	if err != nil {
		return 0, err
	}

	voteDataId, _ := result.LastInsertId()
	return int(voteDataId), err
}

func incrementVoteOption(voteDataId int, tx *sql.Tx) {
	_, err := tx.Exec("UPDATE VoteOption SET Count = Count +1 WHERE Id = ?", voteDataId)
	if err != nil {
		return
	}
}

func insertVoteLog(voteDataId int, voteOptionId int, tx *sql.Tx) {
	result, err := tx.Query("INSERT INTO VoteLog VALUES (?,?,?,?)", 1, voteOptionId, voteDataId, time.Now())
	if err != nil {
		return
	}
	fmt.Println(result)
}
