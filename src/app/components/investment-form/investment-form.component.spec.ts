import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentFormComponent } from './investment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvestmentFormComponent', () => {
  let component: InvestmentFormComponent;
  let fixture: ComponentFixture<InvestmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule, 
        InvestmentFormComponent 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar o formulário corretamente', () => {
    component.investmentForm.setValue({ valorInicial: 1000, prazoMeses: 12 });
    expect(component.investmentForm.valid).toBeTrue();
  });
});
