import { AbstractControl, Validators } from "@angular/forms";


 export function upperCaseValidator() :  Validators {

return (control: AbstractControl) =>{
    const value = <string>control.value; 
    if(!value) return '';
    if(value.length ===0) return 0;
 
    const firstLetter = value[0];
    if(firstLetter!==firstLetter.toUpperCase()){
      return {
        upperCaseValidator:{
            message: 'The first Letter must be Upper case',
        }
      }
    }
    return 0;
 }
}
