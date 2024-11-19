import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private alertController: AlertController) {}

  async onLogin() {
    // Validar usuario y contraseña
    if (!this.usuario || !this.contrasena) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un correo y una contraseña válidos.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Aquí puedes agregar la lógica para iniciar sesión (verificar usuario y contraseña)
      // Si el login es exitoso, redirigir a la página correspondiente
      console.log('Login exitoso con usuario:', this.usuario);
    }
  }

  goToRegister() {
    // Lógica para navegar a la página de registro
    console.log('Ir a la página de registro');
  }
}
