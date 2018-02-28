import { CredentialsModule } from './credentials/credentials.module';
import { HomeModule } from './home/home.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderDivComponent } from './landing-page/header-div/header-div.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from './shared/book-service.service';
import { BooksDivComponent } from './landing-page/books-div/books-div.component';
import { AuthGuard } from './shared/auth.guard';


const APP_ROUTES: Routes = [
  {path: '', component: LandingPageComponent},
  // {path: 'signin', component: CredentialsComponent},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard]},
  {path: 'verify', loadChildren: 'app/credentials/credentials.module#CredentialsModule'},
  // {path: 'library', loadChildren: 'app/library/library.module#LibraryModule', canActivate: [AuthGuard]},
  // {path: 'book-view', component: BookViewComponent},
  // {path: 'logout', component: LogoutComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderDivComponent,
    BooksDivComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HomeModule,
    CredentialsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


