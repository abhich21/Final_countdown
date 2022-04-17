import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./LogAction"

 const initialState={
     isLogged:false,
     user:{},
     loading:false,
     error:false
 }
 export const LoginReducer=(store=initialState,{type,payload})=>{
          switch(type){
              case LOGIN_LOADING : return {...store,loading:true}
              case LOGIN_ERROR : return {...store,loading:false,error:true}
              case LOGIN_SUCCESS: return {...store, isLogged:true,user:payload}
               default:return store;

          }
}