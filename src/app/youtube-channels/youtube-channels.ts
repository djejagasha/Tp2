import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-youtube-channels',
  styleUrl: './youtube-channels.css',
  templateUrl: './youtube-channels.html',
})
export class YoutubeChannels {

  channels = [{
    name : "TutosInfo", picture : "Images/Tutos.jpg",
    link : "https://www.youtube.com/@TutosInfo",nbSubscribers : 256, country : "Tunisia"},
    {
    name : "BEN TECH PRO TV", picture : "Images/BenTech.jpg",
    link : "https://www.youtube.com/@BENTECHPROTV",nbSubscribers : 3570, country : "Tunisia"},
    {
    name : "Code Senior", picture : "Images/Senior.jpg",
    link : "https://www.youtube.com/@codeursenior",nbSubscribers : 56500, country : "Frances"}
  ]
  onAbonner(index : number,button : HTMLElement){
    this.channels[index].nbSubscribers++;
    button
  }
  onAfficherNbrChaine(nbr : string){
    if(!nbr) return;
    let s=0;
    this.channels.forEach(ch => {
      if(ch.nbSubscribers > Number(nbr)) s++;
    });
    alert(`Le nombre de chaines ayant plus que ${nbr} est ${s}`)
  }
}
