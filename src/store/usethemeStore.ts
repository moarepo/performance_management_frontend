import {defineStore} from "pinia"


export const useThemeStore = defineStore('useThemeStore',{
    state:()=>({
        theme_state: false as boolean
    }),
    getters:{
        get_theme_state: (state) => state.theme_state
    },
    actions:{
        chnage_theme_state(){
            this.theme_state = !this.theme_state
        }
    }
})