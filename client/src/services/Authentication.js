import Api from "../plugins/axios";


function CheckIfHasToken(){
    return null !== localStorage.getItem("token")
}


async function Authenticate(){
    const hasToken = CheckIfHasToken()
    if (!hasToken){
        return false
    }

    const response = await Api.Authenticate()

    console.dir(response)



    return true
}


export default Authenticate



// const response = await axios
//     .get("http://localhost:5000/api/todos/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         // 'Access-Control-Allow-Origin' : 'http://localhost:5000'
//       },
//       // withCredentials: true,
//
//     })
//     .then((res) => res.data)
//     .catch((err) => console.error(err));
//
// const todos = response.map((item: any) => ({
//   title: item.Title,
// }));
//
// todoItems.value = todos;