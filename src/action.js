import axios from 'axios';
var url = "./UserList.json";
var userDetailURL = "./UserDetail.json";
// axios(url, {
//   method: "GET"
// }).then(response => {
//   console.log(response);
//   var data = response.data && response.data[1] ? response.data[1] : [];
//   this.setState({ movieList: data });
// });

export const loginUser = (data, history) => dispatch => {
    axios
        .get(userDetailURL)
        .then(res => {
            let error={}
            if(res.data&&res.data.username !==data.email){
                error["email"]=true;
                dispatch({
                    type: "GET_LOGIN_ERRORS",
                    payload: error
                });
            }
            else if(res.data&&res.data.password !==data.password){
                error["password"]=true;
                dispatch({
                    type: "GET_LOGIN_ERRORS",
                    payload: error
                });
            }
            else if((res.data&&res.data.username ===data.email)&& (res.data&&res.data.password ===data.password)){
                error["password"]=false;
                error["email"]=false;
                history.push('/userlist')
                dispatch({
                    type: "GET_LOGIN_ERRORS",
                    payload: error
                });
               
            }
            
        })
        .catch(err => {
        });
}
export const listUser = () => dispatch => {
    axios
        .get(url)
        .then(res => {
            dispatch({
                type: "SET_USER_LiST",
                payload: res.data
            });
        })
        .catch(err => {
        });
};