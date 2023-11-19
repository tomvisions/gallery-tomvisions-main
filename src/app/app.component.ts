import { Component, ViewEncapsulation, ElementRef, AfterViewInit, Renderer2, OnDestroy} from '@angular/core';
import { ImageService, } from './image.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';
import mixitup from 'mixitup';
//import { mixitupIstance } from './main-gallery/main-gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules../../node_modules/bootstrap/dist/css/bootstrap.min.css",
    './app.component.scss',
    "./css/bootstrap-gallery.css",
    "./css/styles.css",
  ],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements AfterViewInit, OnDestroy {
  homeImage;
  title = 'TomVisions\'s Photography';
  @ViewChild('homelink') homelink: any;
  @ViewChild('naturelink') naturelink: any;
  @ViewChild('peoplelink') peoplelink: any;
  @ViewChild('workshopslink') workshopslink: any;

  private unlistener: () => void;

  constructor( private _imageService:ImageService, private _renderer2: Renderer2, private _router : Router, private _location: Location, private _elementRef: ElementRef ) {
    this.homeImage = this._imageService.loadImage983x409('waterfall-sm2.jpg');

    
  }

  ngAfterViewInit() : void  {
    this._renderer2.listen(this.homelink.nativeElement, "click", event => {
      if (this._router.url !== "/") {
        this._router.navigateByUrl('/');
      }
    });
    this._renderer2.listen(this.naturelink.nativeElement, "click", event => {
      if (this._router.url !== "/") {
        this._router.navigateByUrl('/#nature');
      }
    });

    this._renderer2.listen(this.peoplelink.nativeElement, "click", event => {
      if (this._router.url !== "/") {
        this._router.navigateByUrl('/#people');
      }
    });

    this._renderer2.listen(this.workshopslink.nativeElement, "click", event => {
      if (this._router.url !== "/") {
        this._router.navigateByUrl('/#workshops');
      }
    });

  }

  onClick(event) {
    console.log(event);
  }
 ngOnDestroy() {  }
}
//export const minitupInstance = new MixitupService();
