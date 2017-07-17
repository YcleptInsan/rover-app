import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverAPIPhotos } from '../mars-rover-api-photos.service';


@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverAPIPhotos ]
})

export class RoverFormComponent implements OnInit {

  photos: any[]=null;

  constructor(private marsRoverPhotos: MarsRoverAPIPhotos) { }

  getRoverImages(date: string, camera: string){
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      this.photos = response.json();
    });
  }

  ngOnInit() {
  }

}
