import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Itoken } from 'src/app/models/token.user.model';
import { IUser } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioLogin: FormGroup;
  errorMessage!: string;
  hasErrors: boolean=false;

  constructor(private form: FormBuilder,
              private _userService: LoginService,
              private router:Router) {
    this.formularioLogin = this.form.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  hasError(controlName: string, errorType: string) {
    return this.formularioLogin.get(controlName)?.hasError(errorType) && this.formularioLogin.get(controlName)?.touched;
  }

  loggear() {
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar los mensajes de error
      return;
    }

    const user: IUser = {
      username: this.formularioLogin.value.username,
      password: this.formularioLogin.value.password
    }



    this._userService.getToken(user).subscribe({
      next: (data: Itoken) => {
        localStorage.setItem('authToken',data.token);
        console.log('Sesión iniciada', localStorage.getItem)
        this.router.navigate(['/home']);
        },
        
        error:(err:any) =>{
          this.hasErrors = true;
          this.errorMessage=err.error?.message;
        }
        
      
    });
  }
}