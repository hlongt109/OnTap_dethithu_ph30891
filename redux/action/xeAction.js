import { ToastAndroid } from "react-native";
import { addXe } from "../reducer/xeReducer";
import {createAsyncThunk} from '@reduxjs/toolkit'

const url_xe = "http://10.0.2.2:3000/xemay";

export const fetchXeApi = () => {
    return async dispatch => {
        try {
            const res = await fetch(url_xe);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addXe(item))
            })
        } catch (error) {
            console.log("Fetch data error :", error)
        }
    }
}
export const addNewXeApi = createAsyncThunk(
    'xe/addNewXeApi',
    async({ten_xe_ph30891,mau_sac_ph30891,gia_ban_ph30891,mo_ta_ph30891,hinh_anh_ph30891}, thunk) =>{
      const obj = {ten_xe_ph30891,mau_sac_ph30891,gia_ban_ph30891,mo_ta_ph30891, hinh_anh_ph30891};
      try{
         const res = await fetch(url_xe,{
             method: "POST",
             headers:{
                 "Accept" : "application/json",
                 "Content-Type" : "application/json"
             },
             body: JSON.stringify(obj)
         });
         const data = await res.json();
         if(res.ok){
             ToastAndroid.show("Add successfully",ToastAndroid.SHORT);
             return data;
         }else{
             const err = await res.json();
             console.log(thunk.rejectWithValue(err))
             return thunk.rejectWithValue(err);
 
         }
      }catch(e){
         console.log("Add new xe error :",e.message)
         return thunk.rejectWithValue(e.message);
      }
    }
 );
 
 export const updateXeApi = createAsyncThunk(
     'xe/updateXeApi',
     async({id,ten_xe_ph30891, mau_sac_ph30891,gia_ban_ph30891,mo_ta_ph30891,hinh_anh_ph30891},thunk) =>{
         try {
             const res = await fetch(`${url_xe}/${id}`,{
                 method: 'PUT',
                 headers: {
                     "Accept": "application/json",
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({id,ten_xe_ph30891,mau_sac_ph30891,gia_ban_ph30891,mo_ta_ph30891,hinh_anh_ph30891})
             });
             const data = await res.json();
             if(res.ok){
                 ToastAndroid.show("Update successfully",ToastAndroid.SHORT);
                 return data;
             }else{
                 const err = await res.json();
                 return thunk.rejectWithValue(err)
             }
         } catch (error) {
             return thunk.rejectWithValue(error.message);
         }
     }
 );
 
 export const deleteXeApi = createAsyncThunk(
     'xe/deleteXeApi',
     async(id, {rejectWithValue}) =>{
         try {
             const res = await fetch(`${url_xe}/${id}`,{
                 method: "DELETE"
             });
             if(res.ok){
                 ToastAndroid.show("Delete successfully",ToastAndroid.SHORT);
                 return id;
             }else{
                 const err = await res.json();
                 return rejectWithValue(err);
             }
         } catch (error) {
             return rejectWithValue(error.message)
         }
     }
 )