import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './about.component.html',

})
export class AboutComponent {
  public pageTitle = 'ABOUT';
  public description = 'Avanade è una joint venture tra Microsoft Corporation e Accenture LLP Le nostre soluzioni sono basate su una combinazione impareggiabile di analisi approfondite, innovazione e conoscenza tecnica, e si avvalgono di strumenti, prassi e metodologie consolidati. La nostra competenza in ambito Microsoft è impareggiabile: 16 volte riconosciuti come Microsoft Partner of the Year, Più di 24.000 certificazioni nella tecnologia Microsoft, Più di 90 premi come partner Microsoft, 18 competenze Gold';

  constructor(private route: ActivatedRoute,

    private router: Router) { }

  onBack(): void {
    this.router.navigate(['/home']);
  }

}
