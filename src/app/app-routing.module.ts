import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';

const routes: Routes = [
  { path: '',title: 'Profile' ,component: HomeComponent },
  { path: '**',redirectTo: '', pathMatch: 'full' }
  // for 404 not found page
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
