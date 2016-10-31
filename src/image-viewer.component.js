var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter } from '@angular/core';
import { ImageViewer } from './img-viewer';
export let ImageViewerComponent = class ImageViewerComponent {
    constructor() {
        this.coordinateEmitter = new EventEmitter();
        console.log('constructor invoked');
    }
    ngOnInit() {
        this.imgViewer = new ImageViewer(this.imageUrl, this.type, this.width, this.height, this.frameSize, this.repeatCoordinate, this.backgroundImgCoordinateX, this.backgroundImgCoordinateY, this.borderImageRepeat, this.imgFrameStyle);
        this.coordinateEmitter.subscribe((val) => {
            this.moveCoordinate(val.e, val.direction, val.cb);
        });
    }
    ngDestroy() {
        this.coordinateEmitter.unsubscribe();
    }
    moveCoordinate(e, direction, cb) {
        if (direction === 'left') {
            this.imgViewer.backgroundImgCoordinateX -= this.imgViewer.frameSize;
        }
        else if (direction === 'right') {
            this.imgViewer.backgroundImgCoordinateX += this.imgViewer.frameSize;
        }
        else if (direction === 'up') {
            this.imgViewer.backgroundImgCoordinateY += this.imgViewer.frameSize;
        }
        else if (direction === 'down') {
            this.imgViewer.backgroundImgCoordinateY -= this.imgViewer.frameSize;
        }
        else {
            throw new Error('Direction is not correctly defined');
        }
        this.imgViewer.moveBackgroundImgCoordinate();
        cb(this.imgViewer.backgroundImgCoordinateX, this.imgViewer.backgroundImgCoordinateY);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], ImageViewerComponent.prototype, "imageUrl", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ImageViewerComponent.prototype, "type", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ImageViewerComponent.prototype, "width", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ImageViewerComponent.prototype, "height", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ImageViewerComponent.prototype, "frameSize", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ImageViewerComponent.prototype, "repeatCoordinate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ImageViewerComponent.prototype, "backgroundImgCoordinateX", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ImageViewerComponent.prototype, "backgroundImgCoordinateY", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ImageViewerComponent.prototype, "borderImageRepeat", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object)
], ImageViewerComponent.prototype, "imgFrameStyle", void 0);
__decorate([
    Input(), 
    __metadata('design:type', EventEmitter)
], ImageViewerComponent.prototype, "coordinateEmitter", void 0);
ImageViewerComponent = __decorate([
    Component({
        selector: 'image-viewer',
        templateUrl: './image-viewer.component.html'
    }), 
    __metadata('design:paramtypes', [])
], ImageViewerComponent);
//# sourceMappingURL=image-viewer.component.js.map