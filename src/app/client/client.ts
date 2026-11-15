import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-client',
  styleUrl: './client.css',
  templateUrl: './client.html',
})
export class Client {
  titre : string = "Informations client"
  nom : string = "Mohamed Ben Salah"
  age : number = 35;
  photo : string = "client.png"
  fidelys : boolean = false
  nbComandes : number = 10
  remaqrue:string = "RAS";
  onAjouterCommande(){
    this.nbComandes++
    console.log("Le nombre de commandes est : " + this.nbComandes)
  }
  onAfficherAdresse(adresse : string){
    alert(adresse);
  }
}
