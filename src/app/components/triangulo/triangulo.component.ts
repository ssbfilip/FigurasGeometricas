import { Component } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';
import { CommonModule, NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonButton, IonImg,
    CommonModule, NgIf, FormsModule, DecimalPipe
  ],
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.ladoA != null && this.ladoB != null && this.ladoC != null) {
      this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    } else {
      this.perimetro = null;
    }
  }

 
  isInteger(value: number | null): boolean {
    if (value == null) return false;
    return Math.abs(value - Math.round(value)) < 1e-9;
  }
}
