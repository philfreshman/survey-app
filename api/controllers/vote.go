package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func MakeVote(c *gin.Context) {
	c.JSON(http.StatusOK, "OK!")
	return
}
