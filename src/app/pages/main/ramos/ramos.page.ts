import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController para la navegación

interface Ramo {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.page.html',
  styleUrls: ['./ramos.page.scss'],
})
export class RamosPage {
  ramos: Ramo[] = [
    {
      nombre: 'Ramo de Rosas',
      precio: 250,
      descripcion: 'Hermoso ramo de rosas rojas.',
      imagen: 'assets/Imagenes/ramoderosas.jpg'
    },
    {
      nombre: 'Ramo de Girasoles',
      precio: 300,
      descripcion: 'Alegre ramo de girasoles brillantes.',
      imagen: 'assets/Imagenes/ramosdegirasol.jpg'
    },
    {
      nombre: 'Ramo de Tulipanes',
      precio: 280,
      descripcion: 'Elegante ramo de tulipanes de colores variados.',
      imagen: 'assets/Imagenes/ramodetulipanes.jpg'
    },
    {
      nombre: 'Ramo de Lirios',
      precio: 320,
      descripcion: 'Delicado ramo de lirios blancos.',
      imagen: 'assets/Imagenes/ramodelirios.jpg'
    },
    {
      nombre: 'Ramo de Margaritas',
      precio: 220,
      descripcion: 'Fresco ramo de margaritas.',
      imagen: 'assets/Imagenes/ramodemargaritas.jpg'
    },
    {
      nombre: 'Ramo de Orquídeas',
      precio: 450,
      descripcion: 'Exclusivo ramo de orquídeas exóticas.',
      imagen: 'assets/Imagenes/ramode orquideas.jpg'
    },
    {
      nombre: 'Ramo de Claveles',
      precio: 180,
      descripcion: 'Ramo de claveles de colores variados.',
      imagen: 'assets/Imagenes/ramodeclaveles.jpg'
    },
    {
      nombre: 'Ramo de Peonias',
      precio: 400,
      descripcion: 'Espléndido ramo de peonias.',
      imagen: 'assets/Imagenes/ramodepeonias.jpg'
    },
    {
      nombre: 'Ramo de Azucenas',
      precio: 350,
      descripcion: 'Ramo de azucenas fragantes.',
      imagen: 'assets/Imagenes/ramodeazucenas.jpg'
    },
    {
      nombre: 'Ramo de Gerberas',
      precio: 200,
      descripcion: 'Alegre ramo de gerberas multicolores.',
      imagen: 'assets/Imagenes/ramodegerberas.jpg'
    },
    {
      nombre: 'Ramo de Hortensias',
      precio: 380,
      descripcion: 'Elegante ramo de hortensias.',
      imagen: 'assets/Imagenes/ramodehortensias.jpg'
    },
    {
      nombre: 'Ramo de Dalias',
      precio: 290,
      descripcion: 'Vibrante ramo de dalias coloridas.',
      imagen: 'assets/Imagenes/ramodedalias.jpg'
    },
    {
      nombre: 'Ramo de Crisantemos',
      precio: 240,
      descripcion: 'Ramo de crisantemos en tonos cálidos.',
      imagen: 'assets/Imagenes/ramodecrisantemo.jpeg'
    },
    {
      nombre: 'Ramo de Lavandas',
      precio: 210,
      descripcion: 'Aromático ramo de lavandas.',
      imagen: 'assets/Imagenes/ramodelavanda.jpg'
    },
    {
      nombre: 'Ramo de Violetas',
      precio: 270,
      descripcion: 'Ramo de violetas frescas y delicadas.',
      imagen: 'assets/Imagenes/ramodevioletas.jpg'
    }
  ];

  carrito: Ramo[] = [];

  constructor(private navCtrl: NavController) {} // Inyectar NavController

  agregarAlCarrito(ramo: Ramo) {
    this.carrito.push(ramo);
    console.log(this.carrito);
    alert(`${ramo.nombre} ha sido agregado al carrito.`);
  }
  goHome() {
    this.navCtrl.navigateBack('/home'); // Aquí debes poner la ruta de tu página de inicio
  }

  verCarrito() {
    console.log('Carrito actual:', this.carrito);
    this.navCtrl.navigateBack('/paypal-payment'); 
  }
}
