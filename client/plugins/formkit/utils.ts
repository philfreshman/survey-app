const termsOfUse = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const camel2title = (str: any) => str
    .replace(/([A-Z])/g, (match: any) => ` ${match}`)
    .replace(/^./, (match: any) => match.toUpperCase())
    .trim()

const switchName = (stepName: string) => {
    switch (stepName){
        case "Data":
            return "Data"
        case "CheckBoxes":
            return "Options"
        case "TermsOfUse":
            return "Terms of use"
        default:
            return ""
    }
}



// Checks if terms of use are checked
// Transforms object with terms-of-use (type of string) to bool

const FormatFormData = (data: any) => {
    function CheckTerms(data: any){
        if(data.TermsOfUse.TermsCheckbox[0]?.length === undefined){
            return false
        } else if (data.TermsOfUse.TermsCheckbox[0].length) {
            return true
        } else{
            return false
        }
    }

    function FormatTermsToBool(data: any){
        const areTermsChecked = CheckTerms(data);
        if(areTermsChecked){
            data.TermsOfUse = true
        } else{
            data.TermsOfUse = false
        }
        return data
    }

    return FormatTermsToBool(data)
}




export { camel2title, switchName, termsOfUse, FormatFormData}