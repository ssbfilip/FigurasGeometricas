import { Component } from '@angular/core';
import { CommonModule, NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { CirculoComponent } from '../components/Circulo/circulo.component';
import { TrianguloComponent } from '../components/Triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonSelect, IonSelectOption,
    CirculoComponent, TrianguloComponent,
    CommonModule, NgIf, FormsModule, DecimalPipe
  ],
})
export class HomePage {
  figuraSeleccionada: string | null = null;
}