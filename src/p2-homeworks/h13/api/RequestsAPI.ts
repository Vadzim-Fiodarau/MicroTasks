import axios from "axios";

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestAPI = {
  checkBox(checked: boolean) {
    return instance.post(`auth/test/`, {success: checked})
      .then((response) => {
        alert(response.data.errorText)
       return  response.data.success
      })
      .catch((error) => {
        console.log({...error})
        alert(error.response ? error.response.data.errorText: error.message)
      })
  }
}