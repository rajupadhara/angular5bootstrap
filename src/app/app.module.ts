import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule, ButtonsModule, TooltipModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NgxAlertComponent } from './components/ngx-alert/ngx-alert.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxAlertComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CandidateDetailComponent,
    CandidateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
