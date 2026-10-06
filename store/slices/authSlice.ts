import {createSlice,PayloadAction} from '@reduxjs/toolkit'; import type {UserProfile} from '@/types/content';
interface State{user:UserProfile|null;authenticated:boolean} const initialState:State={user:null,authenticated:false};
const slice=createSlice({name:'auth',initialState,reducers:{login(s,a:PayloadAction<UserProfile>){s.user=a.payload;s.authenticated=true},logout(s){s.user=null;s.authenticated=false},updateProfile(s,a:PayloadAction<Partial<UserProfile>>){if(s.user)s.user={...s.user,...a.payload}}}}); export const{login,logout,updateProfile}=slice.actions; export default slice.reducer;
