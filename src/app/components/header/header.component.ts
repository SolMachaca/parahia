import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  musics!:Array<Music>;
  music!: Music;
  text!:string;
  constructor(private musicService: MusicService) { }


  ngOnInit(): void {
  }

}
