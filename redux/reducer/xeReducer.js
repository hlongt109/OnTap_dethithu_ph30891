import {createSlice} from '@reduxjs/toolkit'
import { addNewXeApi, deleteXeApi, updateXeApi } from '../action/xeAction';

const initalStateXe = {
    listXe:[]
}

const xeSplice = createSlice({
    name:'xe',
    initialState: initalStateXe,
    reducers:{
        addXe(state, action){
            const index = state.listXe.findIndex(xe => xe.id === action.payload.id);
            if(index === -1){
                state.listXe.push(action.payload);
            }
        }
    },
    extraReducers: builder =>{
        builder.addCase(addNewXeApi.fulfilled,(state,action) =>{
            state.listXe.push(action.payload)
        });

        builder.addCase(updateXeApi.fulfilled, (state, action) =>{
            const {id,ten_xe_ph30891,mau_sac_ph30891,gia_ban_ph30891,mo_ta_ph30891,hinh_anh_ph30891} = action.payload;
            const xe = state.listXe.find(x => x.id === id);
            if(xe){
                xe.ten_xe_ph30891 = ten_xe_ph30891,
                xe.mau_sac_ph30891 = mau_sac_ph30891,
                xe.gia_ban_ph30891 = gia_ban_ph30891,
                xe.mo_ta_ph30891 = mo_ta_ph30891,
                xe.hinh_anh_ph30891 = hinh_anh_ph30891;
            }
        });

        builder.addCase(deleteXeApi.fulfilled, (state, action) =>{
            state.listXe = state.listXe.filter(x => x.id !== action.payload);
        }).addCase(deleteXeApi.rejected, (state, action) =>{
            console.log("Delete xe rejeted :",action.error.message);
        })
    }
});

export const {addXe} = xeSplice.actions
export const xeReducer = xeSplice.reducer;