import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayPalPaymentPage } from './paypal-payment.page';  // Asegúrate de que el nombre sea correcto

const routes: Routes = [
  {
    path: '',
    component: PayPalPaymentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayPalPaymentPageRoutingModule {}
