import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  constructor() { }

  @Input() childPhotos;

  ngOnInit() {
  }

}
