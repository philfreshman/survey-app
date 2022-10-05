import Api from '@/plugins/axios/axios'

export default {
    PostVote(data){
        return Api().post('makevote', data)
    },
    GetVoteResults() {
        return Api().get('getvoteresults')
    },
    CheckPassword(data){
        const formData = new FormData();
        formData.append('password', data);
        return Api().post("auth/precheckpassword", formData)
    }
}