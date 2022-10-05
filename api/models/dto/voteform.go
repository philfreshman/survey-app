package dto

type VoteForm struct {
	PersonalData
	CheckBoxes
	TermsOfUse
}

type PersonalData struct {
	FirstName   string
	LastName    string
	Street      string
	HouseNumber string
	UnitNumber  string
	PostalCode  string
	City        string
	Pesel       string
}

type CheckBoxes struct {
	Proposals []string
}

type TermsOfUse struct {
	TermsCheckbox []string
}
