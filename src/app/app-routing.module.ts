import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CountryComponent } from './country/country.component'
import { AboutComponent } from './about/about.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country', component: CountryComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
