import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController para la navegación

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {
  constructor(private navCtrl: NavController) {} // Inyectar NavController

  // Función para regresar a la página de inicio
  goHome() {
    this.navCtrl.navigateBack('/home'); // Aquí debes poner la ruta de tu página de inicio
  }
}
