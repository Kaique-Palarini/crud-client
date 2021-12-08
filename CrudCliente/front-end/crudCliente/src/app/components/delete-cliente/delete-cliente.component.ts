import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/Cliente.Service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit {
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
    private toast: ToastrService,
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.cliente.id).subscribe(
      () => {
        this.toast.success('Cliente deletado com sucesso', 'Delete');
        this.router.navigate(['listCliente']);
      },
      (ex) => {
        if (ex.error.errors) {
            this.toast.error('Opss ');
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }

}
