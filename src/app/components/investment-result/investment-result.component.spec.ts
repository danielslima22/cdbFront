import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentResultComponent } from './investment-result.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('InvestmentResultComponent', () => {
  let component: InvestmentResultComponent;
  let fixture: ComponentFixture<InvestmentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InvestmentResultComponent
      ],
      providers: [
        provideHttpClientTesting() 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentResultComponent);
    component = fixture.componentInstance;
    component.result = { valorBruto: 1000, valorLiquido: 900 };
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
