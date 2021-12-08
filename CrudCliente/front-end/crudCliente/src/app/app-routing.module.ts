import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { DeleteClienteComponent } from './components/delete-cliente/delete-cliente.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listCliente', component: ListClienteComponent },
  { path: 'listCliente/deleteCliente/:id', component: DeleteClienteComponent},
  { path: 'listCliente/updateCliente/:id', component: UpdateClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
