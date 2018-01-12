import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/userlogin', pathMatch: 'full' },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'dashboard', component: DashboardComponent,
children: [
          {path: '', redirectTo: 'candidate-list', pathMatch: 'full'},
          {path: 'candidate-list', component: CandidateListComponent},
          {path: 'candidate-detail', component: CandidateDetailComponent},
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
