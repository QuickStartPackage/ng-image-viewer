# Ng image viewer

Ng image viewer is the image component project that can handle image related properties.

## Features

new features will be applied in next version.
* Coordinate change

## How to use
And here's some code! :+1:

1. Import NgImageViewerModule in a specific module

```
@NgModule({
  imports: [ImageViewerModule]
  declarations: [TestComponent]
})
export class TestModule {}
```
2. Set input properties to describe a image view. All attributes bind to image view component (`*impotant: unless setting a value to each attribute, default value will be set`)
```
export class TestComponent {
  imageUrl:string = 'guilin.jpg';
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
      'cb': (x, y) => {console.log('left cb works');}
    });
  }

  rightEvent(e:Event) {
    this.evtEmitter.emit({
      'event': e,
      'direction': 'right',
      'cb': (x, y) => {console.log('right cb works');}
    });
  }
}
```

3. Bind pre-defined attributes to image view component (please check attributes options)
```
<image-viewer [imageUrl]="imageUrl"
                 [type]="type"
                 [width]="width"
                 [height]="height"
                 [frameSize]="frameSize"
                 [repeatCoordinate]="repeatCoordinate"
                 [backgroundImgCoordinateX]="backgroundImgCoordinateX"
                 [backgroundImgCoordinateY]="backgroundImgCoordinateY"
                 [borderImageRepeat]="borderImageRepeat"
                 [imgFrameStyle]="imgFrameStyle"
                 [coordinateEmitter]="evtEmitter">Image viewer loading...
 </image-viewer>
 <button (click)="leftEvent($event)">left</button>
 <button (click)="rightEvent($event)">right</button>
```


## Available attribute options:

 * imageUrl(defaultValue: none): image url
 * type(defaultValue: 'px'): measurement type ex: px, em and so on
 * width(defaultValue: 200):
 * height(defaultValue: 200):
 * frameSize(defaultValue: 10):
 * repeatCoordinate(defaultValue: 'x'): repeatCoordinate
 * backgroundImgCoordinateX(defaultValue: 0):
 * backgroundImgCoordinateY(defaultValue: 0):
 * borderImageRepeat(defaultValue: 'round'): [ stretch | repeat | round | space ]
 * imgFrameStyle(defaultValue: {}): additional css styles
 * coordinateEmitter(defaultValue: none): Event Emitter to do customised actions

