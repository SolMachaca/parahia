import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {

  musics!:Array<any>;
  music!: Music;
  text!:string;
  audioProgress: number[] = [];
  showResults: boolean = false;
  arrayId: string [] = ["2256441157", "2242449097","2164743217","2105158337","2226972607","2237825177","2166864777","1703487577","2154046487"];
  track!:Array<any>;
  constructor(private musicService: MusicService) {
    // this.musics = musicService.getListMusic();
  }

  updateAudioTime(audioPlayer: HTMLAudioElement, index: number) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    this.audioProgress[index] = isNaN(progress) ? 0 : progress;
  }

  toggleAudioPlayback(audioPlayer: HTMLAudioElement, index: number) {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  obtenerTrack(){
    this.track = [];
    for(let i=0;i<this.arrayId.length;i++){
      this.musicService.gerTrack(this.arrayId[i]).subscribe((result:any)=>{
        this.track.push(result);
      })
    }
    console.log(this.track);
  }

  searchMusic(){
    // Ocultar los resultados antes de la búsqueda
    this.showResults = false;
    // Reiniciar la variable 'i' al realizar una nueva búsqueda
    this.audioProgress = [];
    this.musicService.getMusic(this.text).subscribe((result:any)=>{
      this.musics = result.data;
      // this.musicService.setListMusic(result.data);
      console.log(this.musics);
      // Mostrar los resultados después de la búsqueda
      this.showResults = true;
    })
  }

  ngOnInit(): void {
   this.obtenerTrack();
  }


}
