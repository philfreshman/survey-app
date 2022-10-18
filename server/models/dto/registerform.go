package dto

type RegisterForm struct {
	Username        string `json:"username"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"password_confirm"`
}
