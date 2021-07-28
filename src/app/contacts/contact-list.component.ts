import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IContact } from "./contact";
import { ContactService } from "./contact.service";

@Component({
    templateUrl: './contact-list.component.html', 
    styleUrls: ['./contact-list.component.css'] 
})
export class ContactListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Contact List';
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter: string = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter:', value);

        this.filteredContacts = this.performFilter(value);
    }

    filteredContacts: IContact[] = [];
 
    contacts: IContact[] = [];
   
    constructor(private contactServices: ContactService) {}

    performFilter(filterBy: string): IContact[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.contacts.filter((contact: IContact) => 
        contact.contactName.toLocaleLowerCase().includes(filterBy)) 
    }

    ngOnInit(): void {
        this.sub = this.contactServices.getContacts().subscribe({
          next: contacts => {
            this.contacts = contacts;
            this.filteredContacts = this.contacts
          },
          error: err => this.errorMessage = err
        });
        this.filteredContacts = this.contacts;
    };      

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}