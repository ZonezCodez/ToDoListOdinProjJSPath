/* This file is the a startup file it will be how your app/webpage interacts with all the other functions and classes as well as 
their will be a startup call function in here to happen when the page is opened/refreshed */

// Imports below
import { renderMainPage } from "./render-Fns/renderMainPage";
// Variables Below

// Functions Below

// This function will be the startup function and will check screen size to determine which version of the app to use.

function StartUp(){
 if(screenType().deviceType === 'Mobile'){
    renderMainPage('Mobile');
 }else if(screenType().deviceType === 'PC'){
    renderMainPage('PC');
 }
}

function screenType(){
    if(window.innerWidth <= 768){
        return {
            deviceType: 'Mobile',
            width: window.innerWidth,
            height: window.innerHeight,
            user: 'Admin'
        }
    }else{
        return {
            deviceType: 'PC',
            width: window.innerWidth,
            height: window.innerHeight,
            user: 'Admin'
        }
    }
}

StartUp();