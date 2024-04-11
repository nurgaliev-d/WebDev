import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { HttpClientModule, HttpClient, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    CompanyDetailsComponent,
    VacancyDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
   HttpClientXsrfModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
