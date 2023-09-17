import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  texto!:string;
  videos!: Array<any>;

  constructor(private youtubeService: YoutubeService) {

  }

  search() {
    this.youtubeService.getVideo(this.texto).subscribe(response => {
      // Aquí puedes manejar la respuesta del API
      this.videos = response.results;
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
