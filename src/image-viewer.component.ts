import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ImageViewer } from './img-viewer';

// // RxJS
// // Observable class extensions
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/throw';
//
// // Observable operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html'
})

export class ImageViewerComponent implements OnInit {
  imgViewer:ImageViewer;
  @Input() imageUrl:string;
  @Input() type:string;
  @Input() width:number;
  @Input() height:number;
  @Input() frameSize:number;
  @Input() repeatCoordinate:string;
  @Input() backgroundImgCoordinateX:number;
  @Input() backgroundImgCoordinateY:number;
  @Input() borderImageRepeat:string;

  // imgViewer frame style
  @Input() imgFrameStyle:{};

  @Input() coordinateEmitter:EventEmitter<{}> = new EventEmitter();


  constructor() {
    console.log('constructor invoked');
  }

  ngOnInit():any {
    this.imgViewer = new ImageViewer(this.imageUrl, this.type, this.width, this.height, this.frameSize, this.repeatCoordinate,
      this.backgroundImgCoordinateX, this.backgroundImgCoordinateY, this.borderImageRepeat, this.imgFrameStyle);
    this.coordinateEmitter.subscribe((val) => {
      this.moveCoordinate(val.e, val.direction, val.cb);
    });
  }

  ngDestroy():any {
    this.coordinateEmitter.unsubscribe();
  }

  /***
   * shift position of coordinate and set background-position
   * @param e
   * @param direction
   * @param cb
   */
  moveCoordinate(e:Event, direction:string, cb:Function) {
    if (direction === 'left') {
      this.imgViewer.backgroundImgCoordinateX -= this.imgViewer.frameSize;
    } else if (direction === 'right') {
      this.imgViewer.backgroundImgCoordinateX += this.imgViewer.frameSize;
    } else if (direction === 'up') {
      this.imgViewer.backgroundImgCoordinateY += this.imgViewer.frameSize;
    } else if (direction === 'down') {
      this.imgViewer.backgroundImgCoordinateY -= this.imgViewer.frameSize;
    } else {
      throw new Error('Direction is not correctly defined');
    }
    this.imgViewer.moveBackgroundImgCoordinate();
    cb(this.imgViewer.backgroundImgCoordinateX, this.imgViewer.backgroundImgCoordinateY);
  }
}
