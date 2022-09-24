import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // Depuis le model
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService, private router: Router) { }

  heartIcon!: string;
  buttonText!: string;


  ngOnInit(): void {
    this.buttonText = "J'aime";
    this.heartIcon = '❤️';
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

  onFaceSnapDetail(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
