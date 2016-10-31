export class ImageViewer {
    constructor(src = '', type = 'px', width = 200, height = 200, frameSize = 10, repeatCoordinate = 'x', backgroundImgCoordinateX = 0, backgroundImgCoordinateY = 0, borderImageRepeat = 'round', imgFrameStyle = {}) {
        this.type = type;
        this.frameSize = frameSize;
        this.repeatCoordinate = this.getRepeatCoordinate(repeatCoordinate);
        this.backgroundImgCoordinateX = backgroundImgCoordinateX;
        this.backgroundImgCoordinateY = backgroundImgCoordinateY;
        this.combinedFrameStyle = this.combineFrameStyle(src, width, height, repeatCoordinate, backgroundImgCoordinateX, backgroundImgCoordinateY, borderImageRepeat, imgFrameStyle);
    }
    moveBackgroundImgCoordinate() {
        this.combinedFrameStyle['background-position'] =
            this.getBackgroundImgCoordinate(this.backgroundImgCoordinateX, this.backgroundImgCoordinateY);
    }
    combineFrameStyle(src, width, height, repeatCoordinate, backgroundImgCoordinateX, backgroundImgCoordinateY, imageRepeatType, imgFrameStyle) {
        let imgStyle = {
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
    getSrc(imageUrl) {
        return 'url(\'' + imageUrl + '\')';
    }
    getValStr(val) {
        return val.toString() + this.type;
    }
    getRepeatCoordinate(coordinate) {
        const PREFIX = 'repeat-', X_COORDINATE = 'x', Y_COORDINATE = 'y', repeatCoordinate = coordinate.toLocaleLowerCase();
        if (repeatCoordinate === X_COORDINATE) {
            return PREFIX + X_COORDINATE;
        }
        else if (repeatCoordinate === Y_COORDINATE) {
            return PREFIX + Y_COORDINATE;
        }
        else {
            throw new Error('COODINATE TYPE is not matched either x or y');
        }
    }
    getImageRepeatType(borderImageRepeat) {
        const DEFAULT_BORDER_IMAGE_REPEAT = 'stretch';
        if (borderImageRepeat === 'stretch' || borderImageRepeat === 'repeat'
            || borderImageRepeat === 'round' || borderImageRepeat === 'space') {
            return borderImageRepeat;
        }
        return DEFAULT_BORDER_IMAGE_REPEAT;
    }
    getBackgroundImgCoordinate(backgroundImgCoordinateX, backgroundImgCoordinateY) {
        const DELIMETER = '\t';
        return this.getValStr(backgroundImgCoordinateX) + DELIMETER + this.getValStr(backgroundImgCoordinateY);
    }
}
//# sourceMappingURL=image-viewer.js.map