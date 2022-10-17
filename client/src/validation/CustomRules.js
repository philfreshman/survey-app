import Api from "../plugins/axios";

export function Max3(node) {
    return node.value.length <= 3;
}

export function Max6(node) {
    return node.value.length <= 6;
}

export async function PreCheckPassword(loginData){
    let statusCode;
    try{
        const result = await Api.CheckPassword(loginData.value)
        statusCode = result.data.statusCode
    } catch (e) {
        statusCode = 401
    }
    
    switch (statusCode){
        case (200):
            return true
        case (401):
            return false
        default:
            return false
    }
}

export function PeselRule(node){
    if (isNaN(node.value)) return false
    const pesel = node.value.split('').map(Number)
    const weight = [1,3,7,9,1,3,7,9,1,3]
    let result = 0
    let lastNumber = 0

    try{
        for (let i = 0; i < pesel.length-1; i++){
            result += weight[i] * pesel[i] 
        }

        lastNumber = result % 10
        let rest = 10 - lastNumber
        if(lastNumber === 0) return true
        return pesel[10] === rest;
    } catch(e){
        console.log("error: " + e)
        return false;
    }
}