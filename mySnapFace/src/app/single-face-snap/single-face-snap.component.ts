import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) { }

  heartIcon!: string;
  buttonText!: string;


  ngOnInit(): void {
    this.buttonText = "J'aime";
    this.heartIcon = '❤️';
    const snapId = +this.route.snapshot.params['id']; // on récupère la string id et avec le + on la transforme en number
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId); // on récupère le faceSnap correspondant à l'id
  }

  onAddOrSubLike(): void {
    if (this.buttonText === 'J\'aime') {
      this.faceSnapService.likeOrUnlikeById(this.faceSnap.id, 'like');
      this.buttonText = "Je n'aime plus";
    }
    else {
      this.faceSnapService.likeOrUnlikeById(this.faceSnap.id, 'unlike');
      this.buttonText = 'J\'aime';

    }
  }
}
