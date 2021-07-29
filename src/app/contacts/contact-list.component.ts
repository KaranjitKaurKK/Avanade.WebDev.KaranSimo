import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'pm-contacts',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {
  public pageTitle = 'CONTACT';
  errorMessage:string='';
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredContacts = this.performFilter(value);
  }

  filteredContacts: IContact[] = [];
  contacts: IContact[] = [];

  constructor(private contactService: ContactService, private route: ActivatedRoute,
    private router: Router) { }

  performFilter(filterBy: string): IContact[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contacts.filter((contact: IContact) =>
      contact.contactName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next: contacts => {
        this.contacts=contacts;
        this.filteredContacts = this.contacts;
      }, 
      error: err => this.errorMessage=err
    });
    
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }


}
