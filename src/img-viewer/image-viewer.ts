/***
 * Image class, if there's no params defined, then apply default values
 */
export class ImageViewer {
  type:string;
  frameSize:number;
  repeatCoordinate:string;
  backgroundImgCoordinateX:number;
  backgroundImgCoordinateY:number;
  borderImageRepeat:string;
  // combinedFrameStyle only binds to view
  combinedFrameStyle:{};

  constructor(src = '', type = 'px', width = 200, height = 200, frameSize = 10, repeatCoordinate = 'x',
              backgroundImgCoordinateX = 0, backgroundImgCoordinateY = 0, borderImageRepeat = 'round', imgFrameStyle = {}) {
    this.type = type;
    this.frameSize = frameSize;
    this.repeatCoordinate = this.getRepeatCoordinate(repeatCoordinate);
    this.backgroundImgCoordinateX = backgroundImgCoordinateX;
    this.backgroundImgCoordinateY = backgroundImgCoordinateY;
    this.combinedFrameStyle = this.combineFrameStyle(src, width, height, repeatCoordinate, backgroundImgCoordinateX,
      backgroundImgCoordinateY, borderImageRepeat, imgFrameStyle);
  }

  /***
   * set background-position in css with newly updated coordinates
   */
  moveBackgroundImgCoordinate() {
    this.combinedFrameStyle['background-position'] =
      this.getBackgroundImgCoordinate(this.backgroundImgCoordinateX, this.backgroundImgCoordinateY);
  }

  /***
   * combine all style together into [ngStyle]
   * @param src
   * @param width
   * @param height
   * @param repeatCoordinate
   * @param backgroundImgCoordinateX
   * @param backgroundImgCoordinateY
   * @param imageRepeatType
   * @param imgFrameStyle
   * @returns {{}}
   */
  private combineFrameStyle(src:string, width:number, height:number, repeatCoordinate:string, backgroundImgCoordinateX:number,
                            backgroundImgCoordinateY:number, imageRepeatType:string, imgFrameStyle:{}):{} {
    let imgStyle:{} = {
      'background-image': this.getSrc(src),
      'width': this.getValStr(width),
      'height': this.getValStr(height),
      'background-repeat': this.getRepeatCoordinate(repeatCoordinate),
      'border-image-repeat': this.getImageRepeatType(imageRepeatType),
      'background-position': this.getBackgroundImgCoordinate(backgroundImgCoordinateX, backgroundImgCoordinateY),
    };
    for (let key in imgFrameStyle) {
      if (imgFrameStyle.hasOwnProperty(key) && imgStyle.hasOwnProperty(key) === false) {
        imgStyle[key] = imgFrameStyle[key];
      }
    }
    return imgStyle;
  }

  /***
   * get src for background-image
   * @param imageUrl
   * @returns {string}
   */
  private getSrc(imageUrl:string):string {
    return 'url(\'' + imageUrl + '\')';
  }

  /***
   * get actual value for css. ex) val = 2, type = px , val + type = 2px
   * @param val
   * @returns {string}
   */
  private getValStr(val:number) {
    return val.toString() + this.type;
  }

  /***
   * get actual coordinate value for background-repeat in css
   * @param coordinate
   * @returns {string}
   */
  private getRepeatCoordinate(coordinate:string):string {
    const PREFIX = 'repeat-', X_COORDINATE = 'x', Y_COORDINATE = 'y', repeatCoordinate = coordinate.toLocaleLowerCase();
    if (repeatCoordinate === X_COORDINATE) {
      return PREFIX + X_COORDINATE;
    } else if (repeatCoordinate === Y_COORDINATE) {
      return PREFIX + Y_COORDINATE;
    } else {
      throw new Error('COODINATE TYPE is not matched either x or y');
    }
  }

  /***
   * get actual border-image-repeat value in css
   * @param borderImageRepeat
   * @returns {string}
   */
  private getImageRepeatType(borderImageRepeat:string) {
    const DEFAULT_BORDER_IMAGE_REPEAT = 'stretch';
    if (borderImageRepeat === 'stretch' || borderImageRepeat === 'repeat'
      || borderImageRepeat === 'round' || borderImageRepeat === 'space') {
      return borderImageRepeat;
    }
    return DEFAULT_BORDER_IMAGE_REPEAT;
  }

  /***
   * get actual background-position value in css
   * @param backgroundImgCoordinateX
   * @param backgroundImgCoordinateY
   * @returns {string}
   */
  private getBackgroundImgCoordinate(backgroundImgCoordinateX:number, backgroundImgCoordinateY:number) {
    const DELIMETER = '\t';
    return this.getValStr(backgroundImgCoordinateX) + DELIMETER + this.getValStr(backgroundImgCoordinateY);
  }
}
