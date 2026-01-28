import {useThemeStore} from "../store/usethemeStore"


export function useThemeComposable(){
    let theme = useThemeStore()
    return theme.get_theme_state
}