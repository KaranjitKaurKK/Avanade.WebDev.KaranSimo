import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  public pageTitle = 'CONTACT';

  constructor(private route: ActivatedRoute,

    private router: Router) { }

  onBack(): void {
    this.router.navigate(['/home']);
  }
}
