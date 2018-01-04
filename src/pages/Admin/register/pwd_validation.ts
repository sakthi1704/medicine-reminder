import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let ConfirmPassword = AC.get('ConfirmPassword').value; // to get value in input tag
        if(password != ConfirmPassword) {
            console.log('false');
            AC.get('ConfirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}
