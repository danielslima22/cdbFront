import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, // Adicionando MatCardModule
    MatListModule // Adicionando MatListModule
  ],
  templateUrl: './investment-result.component.html',
  styleUrls: ['./investment-result.component.css']
})
export class InvestmentResultComponent {
  @Input() result: any;
}
