import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  providers: [ContactService]
})

export class ContactDetailComponent implements OnInit {
  pageTitle: string = "CONTACT DETAILS";
  contact: IContact | undefined; //=<IContact>{};
  errorMessage: string = '';
  contacts: IContact[] = [];
  id:number=0;


  constructor(private contactService: ContactService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${this.id}`;

    this.contactService.getContacts().subscribe({
      next: contact => {
        this.contacts=contact;
        this.contact=this.contacts.find(item=>item.Id===this.id);
        console.error('result=', this.contact)
      }, 
      error: err => this.errorMessage=err
    });
}

onBack(): void {
  this.router.navigate(['/contact-list']);
}
}
