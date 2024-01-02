import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/faces-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! :FaceSnap;


  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imgUrl!: string;
  buttonText!: string;

  ngOnInit(): void {
    this.title = ' Archibald';
    this.description='bonne année a tous';
    this.createDate = new Date();
    this.snaps = 6;
    this.imgUrl= 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = "oh Snap!"
  }

  onAddSnaps(){
    if (this.buttonText==="oh Snap!") {
      this.snaps++;
      this.buttonText="Oops , un Snap";
    } else {
      this.snaps--;
      this.buttonText="oh Snap";
    }
  }
}
