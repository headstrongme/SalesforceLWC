import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import defaultTemplate from './renderMultipleDemo.html'

export default class RenderMultipleDemo extends LightningElement {
   selected = null;

   render(){
       return this.selected == 'Sign Up' ? signUpTemplate :
       this.selected == 'Sign In' ? signInTemplate :
       defaultTemplate
   }

   handleClick(event){
       this.selected = event.target.innerText
   }
}