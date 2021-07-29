import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactListComponent } from './contacts/contact-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    AboutComponent, 
    ContactListComponent 
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact-list', component: ContactListComponent },
      { path: '', redirectTo:'home', pathMatch:'full' },
      { path: '*', redirectTo:'home', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }