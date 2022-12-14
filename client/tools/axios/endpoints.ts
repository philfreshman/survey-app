import Axios from './axios'

export default {
    PostVote(data: any){
        return Axios().post('api/make-vote', data)
    },
    GetVoteResults() {
        return Axios().get('api/results')
    },
    CheckPassword(data: any){
        const formData = new FormData();
        formData.append('password', data);
        return Axios().post("auth/precheckpassword", formData)
    },
    Register(data: any){
        return Axios().post('/auth/register', data)
    },
    Login(data: any){
        return Axios().post('/auth/login', data)
    },
    Authenticate(){
        return Axios().get('/auth',{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    },
    Test(){
        return Axios().get('api/artist/')
    }
}


// check what is any