import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators, } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Icreateuser } from 'src/app/models/crear.usuario.model';
import { Iusercreated } from 'src/app/models/usuario.creado.model';
import { CrearUsuarioService } from 'src/app/services/crear-usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  formcrearusuario: FormGroup;
  
constructor (
  private form: FormBuilder,
  private _CreateUserService: CrearUsuarioService,
  private router: Router
) {

  this.formcrearusuario= this.form.group({
    fullname: ['',[Validators.required,Validators.minLength(5)]],
    username: ['',[Validators.required,Validators.minLength(5)]],
    password: ['',[Validators.required,Validators.minLength(5)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(5)]],
  },{ validator: this.passwordMatchValidator });
}


goback():void{
  window.history.back();
}

passwordMatchValidator(FormGroup: FormGroup) {
  const password = FormGroup.get('password')?.value;
  const confirmPassword = FormGroup.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

  
hasError(controlName: string, errorType: string) {
  const control = this.formcrearusuario.get(controlName);
  return control?.hasError(errorType) && control.touched;
}


registrarse(){
  if (this.formcrearusuario.valid) {
    let user: Icreateuser = {
    fullname: this.formcrearusuario.value.fullname,
    username: this.formcrearusuario.value.username,
    password: this.formcrearusuario.value.password
  };

  this._CreateUserService.usuarioCreado(user).subscribe({
    next: (data:Iusercreated) => { 
      console.log(data);  
      alert('Usuario creado ');
      this.router.navigate(['/']);    
    }, 
    error: (err:any) => {
      console.log(err.error.message)
    }
  });
  }
 }
}