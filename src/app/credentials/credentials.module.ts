import { CredentialsComponent } from './credentials.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../shared/user-service.service';


const CREDENTIALS_ROUTES: Routes = [
    {
        path: 'verify', component: CredentialsComponent,
        children: [
            { path: '', component: SigninComponent },
            { path: 'register', component: RegisterComponent },
            // { path: 'search', component: EditUpdateComponent },
            //     { path: 'drivers', loadChildren: 'app/cockpit/content/drivers/drivers.module#DriversModule'},
            // { path: 'vehicles', component: VehiclesComponent }
        ],
        // canActivate: [AdminAuthGuard]
    },
    // { path: '**', redirectTo:'./../../**' }
];

@NgModule({
  declarations: [
    SigninComponent,
    RegisterComponent,
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forChild(CREDENTIALS_ROUTES)
  ],
  providers: [UserService],
  bootstrap: []
})
export class CredentialsModule { }