import axios from "axios";

export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_ERROR="LOGIN_ERROR";
export const LOGIN_LOADING="LOGIN_LOADING";
export const login_success=(payload)=>({type:LOGIN_SUCCESS,payload});
export const login_error=()=>({type:LOGIN_ERROR});
export const login_loading=()=>({type:LOGIN_LOADING});

export const userData=(login)=>(dispatch)=>{
      dispatch(login_loading())
      axios.post("https://sunday-server.herokuapp.com/user/login",login).then((res)=>{
        alert('logged in successfully')
        dispatch(login_success(res.data.user))
    }).catch((err)=>{
        console.log(err.message)
        dispatch(login_error())
    })

}