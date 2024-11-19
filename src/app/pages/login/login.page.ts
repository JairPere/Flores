import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PushNotificationService } from '../../../services/push-notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private pushNotificationService: PushNotificationService
  ) {}

  ngOnInit() {
    // Solicita permisos de notificación
    this.pushNotificationService.requestPermission();
  
    // Escucha mensajes push
    this.pushNotificationService.listen();
  }

  // Método para mostrar una notificación básica
  mostrarNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('¡Hola desde GymApp!', {
        body: 'Esta es una notificación de prueba.',
      });
    } else {
      console.log('No se puede mostrar la notificación. Permiso no concedido.');
    }
  }

  onSubmit() {
    // Validaciones para asegurar que ambos campos estén llenos
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const data = {
      email: this.email,
      password: this.password, // Consider hashing the password here
    };

    this.http.post<any>('http://localhost/mi_app_backend/login.php', data)
      .subscribe(response => {
        if (response.success) {
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/home']);
        } else {
          alert('Error al iniciar sesión: ' + response.message);
        }
      }, error => {
        alert('Error en la conexión: ' + error.message);
      });

    // Optionally, call mostrarNotification() here if you want to show a notification after login attempt
    this.mostrarNotification();
  }
}
