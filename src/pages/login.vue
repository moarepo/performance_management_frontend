<script lang="ts" setup>
 import {useThemeComposable} from '../composable/useComposable'
 import {PageAnimtion,StaggerEffect} from '../animations/anime'
 import {ref} from 'vue'

 let username = ref<string>("")
 let password = ref<string>("")

 function authenticate(){
    if( username.value === "" ||  password.value === "" ){

    }else{

    }
 }
</script>

<template>
    <section 
     v-motion="PageAnimtion"
     class="flex w-full min-h-svh"
    >

        <div 
         v-motion="StaggerEffect(675,-50,0)"
         class="flex flex-col space-y-12 justify-center items-center min-h-screen w-7xl py-6 px-4"
         :class="useThemeComposable() ? 'bg-innerDark'
         :'bg-indigo-500 shadow-md'"
        >

            <div>
                <img class="rounded-md h-18" src="/logo.jpg" alt="logo">
            </div>

            <div 
              class="px-6 py-2 rounded-2xl border border-dashed"
              :class="useThemeComposable() ? 'bg-altDark border-teal-950'
              :'bg-indigo-600 border-indigo-500'"
            >
                <img v-if="useThemeComposable() === false" class="h-120" src="../assets/login_page_image.svg" alt="Performance Management & Appraisal Illustration ">
                <img  v-if="useThemeComposable() === true" class="h-96" src="../assets/login_page_image-dark.svg" alt="Performance Management & Appraisal Illustration ">
            </div>

            <div 
             class="flex justify-center items-center p-2 text-3xl space-x-2 "
             :class="useThemeComposable() ? 'text-indigo-500'
             :'text-white'"
            >
                <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                 fill="currentColor" 
                 class="size-8"
                >
                 <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clip-rule="evenodd" />
                </svg>
                <h2 class="font-semibold overline">Performance Management & Appraisal</h2>
            </div>

        </div>

        <div 
         v-motion="StaggerEffect(775,50,0)"
         class="flex justify-center items-center shadow-md min-h-screen p-2 w-full"
         :class="useThemeComposable() ? 'bg-altDark'
         :'bg-indigo-100'"
        >
            <div 
             v-motion="StaggerEffect(1225,-25,0)"
             class="flex flex-col space-y-4.5 p-3.5 w-full rounded-2xl"
             :class="useThemeComposable() ? 'bg-Dark':'bg-white shadow-md'"
            >
                <div class="w-full p-0.5 flex justify-center items-center text-4xl">
                    <h1>Welcome Back 👋🏾</h1>
                </div>

                <div class="flex flex-col space-y-0.5 p-1.5">
                    <label 
                     for="_username"
                     class="text-xl font-medium"
                    >
                        Username
                    </label>
                    <input
                     id="_username"
                     v-model="username"
                     class="w-full rounded-lg p-2 border-2 outline-none transition-all ease-in-out duration-700 px-4 text-lg font-medium"
                     :class="useThemeComposable() ? ''
                     :'border-teal-100 bg-off_white focus:border-indigo-500'" 
                     placeholder="Type your username"
                     type="text"
                    >
                </div>

                <div class="flex flex-col space-y-0.5 p-1.5">
                    <label 
                     for="_password"
                     class="text-xl font-medium"
                    >
                        Password
                    </label>
                    <input
                     id="_password"
                     v-model="password"
                     class="w-full rounded-lg p-2 border-2 outline-none transition-all ease-in-out duration-700 px-4 text-lg font-medium"
                     :class="useThemeComposable() ? ''
                     :'border-teal-100 bg-off_white focus:border-indigo-500'" 
                     placeholder="Password"
                     type="password"
                    >
                </div>

                <div class="w-full p-0.5 flex justify-center items-center">
                    <button
                     @click="authenticate()"
                     class="border-2 p-1.5 w-1/3 rounded-lg text-xl font-semibold cursor-pointer transition-all ease-in-out duration-500
                     hover:-translate-y-2"
                     :class="useThemeComposable() ? ''
                     :'border-teal-50 bg-off_white text-teal-600 hover:bg-white hover:text-green-500 hover:border-green-500 hover:shadow-green'"
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
       
    </section>
</template>