import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Definimos una interfaz para la respuesta del registro
interface RegisterResponse {
  success: boolean;
  message?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    // Validaciones
    if (!this.name || !this.email || !this.password) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    // Validación de formato de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.http.post<RegisterResponse>('http://localhost/mi_app_backend/register.php', data)
      .subscribe(response => {
        if (response.success) {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        } else {
          alert('Error al registrar: ' + response.message);
        }
      }, error => {
        alert('Error en la conexión: ' + error.message);
      });
  }
}
