import { Component, OnInit } from '@angular/core';
import {RequestService} from "../service/request.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  images: Array<object> = [];
  clearApi: Boolean = false;

  constructor(private _reqService: RequestService) { }

  ngOnInit() {
  }

  onGetImages() {
    this._reqService.getImgApi().subscribe((res) => {
      console.log(res);
      this.images = res['img'];
      this.clearApi = !this.clearApi;
    });
  }

}
