import { AuthGuard } from './../shared/auth.guard';
import { BookService } from './../shared/book-service.service';
import { ResultViewComponent } from './result-view/result-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';


const HOME_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', component: ResultViewComponent },
            { path: 'book-upload', component: AddBookComponent },
            { path: 'book-view', component: BookViewComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'logout', component: LogoutComponent },
            //     { path: 'drivers', loadChildren: 'app/cockpit/content/drivers/drivers.module#DriversModule'},
        ],
        canActivate: [AuthGuard]
    },
    // { path: '**', redirectTo:'./../../**' }
];

@NgModule({
  declarations: [
    HomeComponent,
    ResultViewComponent,
    BookViewComponent,
    AddBookComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  providers: [BookService, AuthGuard],
  bootstrap: []
})
export class HomeModule { }