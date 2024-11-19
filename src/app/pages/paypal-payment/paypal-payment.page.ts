import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController para la navegación

interface PayPal {
  Buttons: (options: PayPalButtonOptions) => any; // Define el tipo para la función Buttons
}

interface PayPalButtonOptions {
  createOrder: (data: any, actions: any) => any;
  onApprove: (data: any, actions: any) => any;
  onError: (err: any) => void;
}

// Extiende el objeto global 'window' para agregar 'paypal'
declare global {
  interface Window {
    paypal: PayPal;
  }
}

@Component({
  selector: 'app-paypal-payment',
  templateUrl: './paypal-payment.page.html',
  styleUrls: ['./paypal-payment.page.scss'],
})
export class PayPalPaymentPage implements OnInit {
  constructor(private navCtrl: NavController) {} // Inyectar NavController

  ngOnInit() {
    this.loadPayPalScript();
  }
  goHome() {
    this.navCtrl.navigateBack('/home'); // Aquí debes poner la ruta de tu página de inicio
  }

  loadPayPalScript() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AQCXO3dcAItEawz8ffbH8tT1ZUUELbr4SdcVrj0o_ZQVXKmGn0wytQwaYTLJ1hWY9orwQ1EgBdDbLFmI&components=buttons';
    script.onload = () => this.initPayPalButton();
    document.body.appendChild(script);
  }

  initPayPalButton() {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00',
                currency_code: 'USD',
              },
            }],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Pago realizado con éxito por ' + details.payer.name.given_name);
          });
        },
        onError: (err: any) => {
          console.error("Error de PayPal: ", err);
        },
      }).render('#paypal-button-container');
    }
  }
}
