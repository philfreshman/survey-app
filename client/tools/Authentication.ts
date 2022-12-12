import Api from "./axios";

function CheckIfHasToken(){
    return null !== localStorage.getItem("token")
}


async function Authenticate(){
    const hasToken = CheckIfHasToken()
    if (!hasToken){
        return false
    }

    const response = await Api.Authenticate()

    return true
}


export default Authenticate
