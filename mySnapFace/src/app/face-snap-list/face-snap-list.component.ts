import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnapArray!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit() {
    this.faceSnapArray = this.faceSnapService.getFaceSnapArray();
  }

}
