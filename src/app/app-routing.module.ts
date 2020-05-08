import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CountryListComponent } from './countries/country-list/country-list.component';
import { LoginComponent } from './home/login/login.component';
import { CountryFormComponent } from './countries/country-form/country-form.component';
import { AuthGuard } from './core/auth/auth.guard';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'country',
    component: CountryListComponent,
    canActivate: [AuthGuard]
  },
  { path: 'country/add',
    component: CountryFormComponent,
    canActivate: [AuthGuard]
  },
  { path: 'country/:name',
  component: CountryDetailsComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
