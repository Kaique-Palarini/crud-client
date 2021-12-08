import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/Cliente.Service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css'],
})
export class UpdateClienteComponent implements OnInit {
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
    email: undefined
  };

  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id).subscribe((resposta) => {
      this.cliente = resposta;
    });
  }

  update(): void {
    this.service.update(this.cliente).subscribe(
      () => {
        this.toast.success('Cliente atualizado com sucesso', 'Update');
        this.router.navigate(['listCliente/']);
      },
    );
  }
}
