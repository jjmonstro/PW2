import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';
import { routes } from '../app.routes';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  passwordCerta: Number = 123456;
  userCerto: string='Boleg'
  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      user: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit() {
    let user = this.formularioLogin.get('user')?.value
    let password = this.formularioLogin.get('password')?.value

    if(password == this.passwordCerta && user == this.userCerto)
    {
      alert("certo!!!")
      
    }
  }
}
