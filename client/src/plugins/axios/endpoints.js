import Axios from './axios.js'

export default {
    PostVote(data){
        return Axios().post('makevote', data)
    },
    GetVoteResults() {
        return Axios().get('getvoteresults')
    },
    CheckPassword(data){
        const formData = new FormData();
        formData.append('password', data);
        return Axios().post("auth/precheckpassword", formData)
    }
}