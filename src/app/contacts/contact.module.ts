import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
import { RouterModule } from '@angular/router';
import { ContactDetailGuard } from './contact-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'contacts', component: ContactListComponent },
      {
        path: 'contacts/: id',
        canActivate: [ContactDetailGuard],
        component: ContactDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ContactModule { }
