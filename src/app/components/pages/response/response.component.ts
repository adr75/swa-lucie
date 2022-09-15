import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResponseComponent implements OnInit {
  thanks = false;
  nom=""
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.createBalloons(6);
  }


  random(num) {
    return Math.floor(Math.random()*num)
  }

  getRandomStyles() {
    var r = this.random(255);
    var g = this.random(255);
    var b = this.random(255);
    var mt = this.random(200);
    var ml = this.random(50);
    var dur = this.random(25)+5;
    return `
    background-color: rgba(${r},${g},${b},0.6);
    color: rgba(${r},${g},${b},0.6); 
    box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `
  }

  createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container")
    for (var i = num; i > 0; i--) {
      var balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = this.getRandomStyles();
      balloonContainer.append(balloon);
    }
  }

  jeViens(resp: boolean) {
    this.nom = this.nom.trim();
    if(this.nom === "") {
      alert("Indique ton nom s'il te plait!");
      return;
    }
     this.http.get('/api/BirthdayRsvp?resp=' + resp)
       .subscribe((resp: any) => {let ok = resp.text;}, 
       (err: any) => { alert("Oops! il y a eu un problème :(\nEnvoie ta réponse par SMS/WhatsApp à Camille au 06 72 20 76 02! ") });
     this.thanks = true;
    }

    nomFocus(){
      document.getElementsByClassName("big-message")[0].scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });

      
    }

}
