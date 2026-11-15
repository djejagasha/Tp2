import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-laptop',
  styleUrl: './laptop.css',
  templateUrl: './laptop.html',
})
export class Laptop {
  pc = {
    brand : 'Lenovo',
    model : 'Thinkbook 16 G9 IRL',
    description : "Processer Intel Core 7 240H - Memoire 24 GO DDR5 - Disque SSD M.2 NVMe 512 GO - Carte graphique Intel Graphics",
    price : 3919,
    image : "laptop.jpeg",
    availability : true
  }
  onAfficher(){
    alert(`${this.pc.brand} ${this.pc.model} ${this.pc.description} ${this.pc.price} ${this.pc.description}`)
  }
}
