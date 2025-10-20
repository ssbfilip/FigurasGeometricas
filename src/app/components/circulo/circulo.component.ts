import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonImg } from '@ionic/angular/standalone';
import { CommonModule, NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonButton, IonImg,
    CommonModule, NgIf, FormsModule, DecimalPipe
  ],
})
export class CirculoComponent {
  radio: number | null = null;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.radio !== null) {
      const pi = 3.1416;
      this.perimetro = 2 * pi * this.radio;
    } else {
      this.perimetro = null;
    }
  }

  isInteger(value: number | null): boolean {
    if (value == null) return false;
    return Math.abs(value - Math.round(value)) < 1e-9;
  }
}