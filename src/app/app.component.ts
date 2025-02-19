import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ InvestmentFormComponent], //RouterOutlet,
  template: `<app-investment-form></app-investment-form>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cdb-front';
}
