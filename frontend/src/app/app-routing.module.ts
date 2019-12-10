import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { ConsultoriosComponent } from './components/panel/consultorios/consultorios.component';
import { ConsultorioComponent } from './components/panel/consultorio/consultorio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PanelComponent },
  { path: 'consultorios', component: ConsultoriosComponent },
  { path: 'consultorio', component: ConsultorioComponent },
  { path: 'consultorio/:id', component: ConsultorioComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
