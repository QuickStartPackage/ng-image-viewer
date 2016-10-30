import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {

  imageUrl:string = 'we_rock.jpg';
  type:string = 'px';
  width:number = 500;
  height:number = 738;
  frameSize:number = 300;
  repeatCoordinate:string = 'x';
  backgroundImgCoordinateX:number = -285;
  backgroundImgCoordinateY:number = 10;
  borderImageRepeat:string = 'round';

  imgFrameStyle:{} = {};

  evtEmitter = new EventEmitter();

  leftEvent(e:Event) {
    this.evtEmitter.emit({
      'event': e,
      'direction': 'left',
      'cb': (x, y) => {
        console.log('left cb works');
      }
    });
  }

  rightEvent(e:Event) {
    this.evtEmitter.emit({
      'event': e,
      'direction': 'right',
      'cb': (x, y) => {
        console.log('right cb works');
      }
    });
  }
}
