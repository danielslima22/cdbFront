import { Routes } from '@angular/router';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

export const routes: Routes = [
    {
        path:"",
        component:InvestmentFormComponent
    },
    {
        path:"home",
        component:InvestmentFormComponent
    }
];
