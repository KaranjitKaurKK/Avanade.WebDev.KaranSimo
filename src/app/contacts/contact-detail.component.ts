import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from './contact';

@Component({
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  pageTitle: string = 'Contact Detail';
  contact: IContact | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.contact = {
      "contactId": id,
      "contactName": "Simona Loperfido",
      "Email": "simona.loperfido@avanade.com",
      "PhoneNumber": 232344883
    };
  }

  onBack(): void {
    this.router.navigate(['/contacts']);
  }

}
