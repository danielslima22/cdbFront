import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // Adicionando MatCardModule
import { CdbService } from '../../services/cdb.service';
import { InvestmentResultComponent } from '../investment-result/investment-result.component';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvestmentResultComponent,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule // Adicionando MatCardModule
  ],
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css']
})
export class InvestmentFormComponent {
  private fb = inject(FormBuilder);
  private cdbService = inject(CdbService);

  investmentForm: FormGroup = this.fb.group({
    valorInicial: [null, [Validators.required, Validators.min(1)]],
    prazoMeses: [null, [Validators.required, Validators.min(2)]]
  });

  resultado = signal<any>(null);

  calcular() {
    if (this.investmentForm.valid) {
      const { valorInicial, prazoMeses } = this.investmentForm.value;
      this.cdbService.calcular(valorInicial, prazoMeses).subscribe(response => {
        this.resultado.set(response);
      });
    }
  }
}
