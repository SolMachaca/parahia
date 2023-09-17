import { Component, OnInit } from '@angular/core';
import { accessSync } from 'fs';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent implements OnInit {

  title!:string;
  text!:string;
  horoscopo!:any;
  img: string[] = ["aquarium.png","aries.png","cancer.png","capricorn.png","geminis.png","leo.png","libra.png","pisces.png","sagittarius.png","scorpio.png","tauro.png","virgo.png"];
  imgSrc!:string;
  phrase!:string;
  band:boolean=false;


  idiomaDetectado!:any[];
  idioma!:string;
  aux!:any[];

  constructor(private service:HoroscopoService, private translate:TranslateService) { }

  ngOnInit(): void {
    this.obtenerFraseDiaria();

  }

  public detectarIdioma(text:string){
    this.translate.detectarIdioma(text).subscribe((result:any)=>{

      this.idiomaDetectado = result.data;
      // this.aux = result.data;
      this.idioma = result.data.detections.language;
      console.log(this.idiomaDetectado);
      console.log(this.idioma);
    })
  }

  obtenerFraseDiaria(){
    this.service.getDailyPhrase().subscribe((result:any)=>{
      this.phrase = result.daily;
      console.log(this.phrase);
    })
  }

  obtenerHoroscopo(texto:string){
    this.service.getHoroscopo(texto).subscribe((result:any)=>{
      this.horoscopo = result;
      this.title = result.title;
      this.text = result.text;
      this.band = true;
        switch(texto){
          case "aries": this.imgSrc = "aries.png"; break;
          case "touro": this.imgSrc = "tauro.png"; break;
          case "gemeos": this.imgSrc = "geminis.png"; break;
          case "cancer": this.imgSrc = "cancer.png"; break;
          //no funciona el parametor - REVISAR
          case "euleio": this.imgSrc = "leo.png"; break;
          case "virgem": this.imgSrc = "virgo.png"; break;
          case "libra": this.imgSrc = "libra.png"; break;
          case "escorpiao": this.imgSrc = "scorpio.png"; break;
          //no funciona el parametro - REVISAR
          case "sagitário": this.imgSrc = "sagittarius.png"; break;
          case "capricornio": this.imgSrc = "capricorn.png"; break;
          case "aquario": this.imgSrc = "aquarium.png"; break;
          case "peixes": this.imgSrc = "pisces.png"; break;
        }
      console.log(this.horoscopo);
      this.detectarIdioma(this.text);
    })
  }

}
