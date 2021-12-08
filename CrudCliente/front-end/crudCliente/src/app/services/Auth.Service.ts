import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authError: any;
  usuarioLogado: any;
  msg = "usuário logado com sucesso"



  constructor(
              private snackBar:MatSnackBar,
              private router:Router) {

  }



}
