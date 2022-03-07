import { FormGroup } from "@angular/forms";


export function passwordValidator (fg: FormGroup){

     const password = fg.get('password')?.value
     const confirm = fg.get('confirmPassword')?.value

     if (!password || !confirm) {
      return null;
   }

   if  (password === confirm) {

      return null;
   }
   else{
  return fg.get('confirmPassword')?.setErrors({mismatch:true});

   }


   }


