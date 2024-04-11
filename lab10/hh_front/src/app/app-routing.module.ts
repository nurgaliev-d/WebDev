import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';

const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent },
  { path: 'vacancies/:id', component: VacancyDetailsComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
