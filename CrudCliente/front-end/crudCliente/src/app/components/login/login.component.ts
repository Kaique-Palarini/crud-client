import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public user: String | undefined
  public senha: String | undefined


  constructor(private toast: ToastrService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.toast.info('Por gentilza realize o login!','Olá,');
  }

  fazerLogin() {
    if(this.user == 'admim' && this.senha == '123456'){
      this.router.navigate(['home']);
      this.toast.success('Logado com usuário adminstrador!','Olá,');
    }else if(this.user == 'comum' && this.senha == '123456') {
      this.router.navigate(['listCliente']);
      this.toast.success('Logado com usuário comum!','Olá,');
    }else{
      this.toast.error('Tente novamente','Olá,');
    }
  }
}
