import Api from "../plugins/axios";


export function Max3(node: any) {
    return node.value.length <= 3;
}


export async function PreCheckPassword(loginData: any){
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
