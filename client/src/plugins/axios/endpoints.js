import Axios from './axios.js'

export default {
    PostVote(data){
        return Axios().post('api/make-vote', data)
    },
    GetVoteResults() {
        return Axios().get('api/getvoteresults')
    },
    CheckPassword(data){
        const formData = new FormData();
        formData.append('password', data);
        return Axios().post("auth/precheckpassword", formData)
    },
    Register(data){
        return Axios().post('/auth/register', data)
    },
    Login(data){
        return Axios().post('/auth/login', data)
    }
}