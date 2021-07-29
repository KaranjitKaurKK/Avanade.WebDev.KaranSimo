import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from './contact';

@Component({
  selector: 'pm-contacts',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  public pageTitle = 'CONTACT';

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

  contacts: IContact[] = [
    {
      "contactId": 1,
      "contactName": "Simona Loperfido",
      "Email": "simona.loperfido@avanade.com",
      "PhoneNumber": 232344883
    },
    {
      "contactId": 2,
      "contactName": "Karanjit Kaur",
      "Email": "karanjit.kaur@avanade.com",
      "PhoneNumber": 313444233
    }
  ];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listFilter = 'Insert people';
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }
  performFilter(filterBy: string): IContact[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contacts.filter((contact: IContact) =>
      contact.contactName.toLocaleLowerCase().includes(filterBy));
  }

}
