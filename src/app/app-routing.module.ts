import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { SpacexComponent } from './components/spacex/spacex.component';

const routes: Routes = [
  { path: ':param1', component: SpacexComponent },
  { path: ':param1/:param2', component: SpacexComponent },
  { path: ':param1/:param2/:param3', component: SpacexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
