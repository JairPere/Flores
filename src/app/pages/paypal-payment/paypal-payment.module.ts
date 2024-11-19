import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PayPalPaymentPage } from './paypal-payment.page';  // Asegúrate de que el nombre sea correcto
import { PayPalPaymentPageRoutingModule } from './paypal-payment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPalPaymentPageRoutingModule,
  ],
  declarations: [PayPalPaymentPage],  // Asegúrate de que el nombre sea correcto
})
export class PayPalPaymentPageModule {}
