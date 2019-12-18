import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/service/auth.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private form: FormGroup;

  constructor(private f: FormBuilder,
              private authservice: AuthService,
              private snackbar: SnackbarService,
              private router: Router) {
                
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
    this.authservice.login(this.form.value).subscribe(data => {
      console.log('data ', data);
      if(data) {
        this.snackbar.success
        this.router.navigate(['/banks/dashboard'])
      } else {
        this.snackbar.fail
      }
      
    })
      // this.authservice.nuevoUsuario(this.form.value).subscribe( data => {
      //   console.log('data ', data);
        
      // })
  }
}
