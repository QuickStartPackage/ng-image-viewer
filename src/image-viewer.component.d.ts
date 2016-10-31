import { OnInit, EventEmitter } from '@angular/core';
import { ImageViewer } from './img-viewer';
export declare class ImageViewerComponent implements OnInit {
    imgViewer: ImageViewer;
    imageUrl: string;
    type: string;
    width: number;
    height: number;
    frameSize: number;
    repeatCoordinate: string;
    backgroundImgCoordinateX: number;
    backgroundImgCoordinateY: number;
    borderImageRepeat: string;
    imgFrameStyle: {};
    coordinateEmitter: EventEmitter<{}>;
    constructor();
    ngOnInit(): any;
    ngDestroy(): any;
    moveCoordinate(e: Event, direction: string, cb: Function): void;
}
