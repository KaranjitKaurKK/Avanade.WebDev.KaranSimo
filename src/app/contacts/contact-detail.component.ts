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
  contact: IContact | undefined;
  errorMessage: string = '';


  constructor(private contactService: ContactService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
 
    this.contact={  
      "Id": 8,
      "Name": "Graziella", 
      "Surname":  "Caputo",
      "Email": "graziella.caputo@avanade.com",
      "PhoneNumber": "313444233", 
      "DateOfBirth": "August 29th, 1995", 
      "Address": "Via Fatebenefratelli 21, Palinuro",
      "Role":"Intern",
      "RoleFamily": "Back-end",
      "TalentComunity": "CRM"
    };
  }

  onBack(): void {
    this.router.navigate(['/contact-list']);
  }
}
