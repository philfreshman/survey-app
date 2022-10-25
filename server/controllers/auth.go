package controllers

import (
	"api/config"
	"api/database"
	"api/models"
	"api/models/dto"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"strconv"
	"time"
)

func Login(c *gin.Context) {
	var loginForm dto.LoginForm
	if err := c.BindJSON(&loginForm); err != nil {
		c.JSON(400, gin.H{"status": "data binding failed"})
		return
	}

	var user models.User

	database.DB.Where(&models.User{Username: loginForm.Username}).First(&user)

	if user.ID == 0 {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"status": "error", "message": "User not found.", "data": nil})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginForm.Password)); err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"status": "error", "error": "Incorrect email and password combination."})
		return
	}

	exp := time.Now().Add(12 * time.Hour)

	claim := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		Issuer:    strconv.Itoa(int(user.ID)),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
		ExpiresAt: jwt.NewNumericDate(exp),
	})

	token, err := claim.SignedString([]byte(config.Config("AUTH_TOKEN_SECRET")))

	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Error on register request.", "data": err})
		return
	}

	// For now, I was not lucky setting cross-domain cookies.
	// Will try to work on it in future releases.
	c.SetSameSite(http.SameSiteNoneMode)
	c.SetCookie("token", string(token), int(exp.Unix()), "", "localhost", true, false)

	c.JSON(http.StatusOK, gin.H{
		"token":   token,
		"status":  "success",
		"message": "User logged in",
	})
}

func Register(c *gin.Context) {
	var registerForm dto.RegisterForm
	if err := c.BindJSON(&registerForm); err != nil {
		c.JSON(400, gin.H{"status": "data binding failed"})
		return
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(registerForm.Password), 12)

	var user = models.User{
		Username: registerForm.Username,
		Password: string(password),
	}
	database.DB.Create(&user)
}

func PreCheckPassword(c *gin.Context) {
}

func Authenticate(c *gin.Context) {
	c.SetSameSite(http.SameSiteNoneMode)
	fmt.Println("test")
}
