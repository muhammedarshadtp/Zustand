
import { create } from "zustand";

export const useUserStore=create((set)=>({
    user:null,
    loading:false,
    error:"",
    fetchUser : async (id)=>{
        set({loading:true})
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const userData = await response.json()
            set({user:userData,loading:false})
            
        } catch (error) {
            set({error:"faild to fetch error ",loading:false})
            
        }
    }

}))

 
