package dto

type VoteForm struct {
	CheckBoxes `json:"CheckBoxes" binding:"required"`
	Data       `json:"Data" binding:"required"`
	TermsOfUse bool `json:"TermsOfUse" binding:"required"`
}

type Data struct {
	Position   string
	Experience string
	Url        string
	Feedback   string
}

type CheckBoxes struct {
	Options []string
}
