import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private form: FormGroup;

  constructor(private f: FormBuilder,
              private authservice: AuthService) {
                
              }

  ngOnInit() {
    this.form = this.f.group({
      email: [''],
    password: [''],
   
    })
  }

  onSubmit() {
    console.log(
      this.form.value
      );
    this.authservice.nuevoUsuario(this.form.value).subscribe(data => {
      console.log('data ', data);
      
    })
      // this.authservice.nuevoUsuario(this.form.value).subscribe( data => {
      //   console.log('data ', data);
        
      // })
  }

}
