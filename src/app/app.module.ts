import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para hacer llamadas HTTP
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';

// Importaciones de Firebase Authentication
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp({
      projectId: "flowersapp-b8028",
      appId: "1:803011651877:web:a910c0e6b8f8ab8d9492cc",
      storageBucket: "flowersapp-b8028.firebasestorage.app",
      apiKey: "AIzaSyAeIAEQMyBlXgM1atAWzC_L4N4K0s_F1og",
      authDomain: "flowersapp-b8028.firebaseapp.com",
      messagingSenderId: "803011651877",
      measurementId: "G-69MGNMJ7MF",
    })),
    provideMessaging(() => getMessaging()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}