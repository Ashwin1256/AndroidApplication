import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any } | null{

    const forbideen = /admin/.test(control.value);
    
    return forbideen ? {'forbiddenName': {value: control.value}} : null;


}