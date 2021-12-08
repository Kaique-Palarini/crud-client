import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/Cliente.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cliente: Cliente = {
    id: undefined,
    nome: undefined,
    cpf: undefined,
    bairro: undefined,
    cidade: undefined,
    uf: undefined,
    cep: undefined,
    logradouro: undefined,
    complemento: undefined,
    numero: undefined,
    tipoTelefone: undefined,
    telefone: undefined,
    email: undefined,
  };
  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toast.info('Por gentileza realize o cadastro abaixo', 'Olá,');
  }

  create(): void {
    this.service.create(this.cliente).subscribe(
      () => {
        this.toast.success('Cliente cadastrado com sucesso', 'Sucesso');
        this.router.navigate(['listCliente']);
      },
      (ex) => {
        console.log(ex);
        if (ex.error.errors) {
          ex.error.errors.forEach((element: any) => {
            this.toast.error('Opss, algo está errado!', element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }
}
