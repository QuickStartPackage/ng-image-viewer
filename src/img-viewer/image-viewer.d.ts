export declare class ImageViewer {
    type: string;
    frameSize: number;
    repeatCoordinate: string;
    backgroundImgCoordinateX: number;
    backgroundImgCoordinateY: number;
    borderImageRepeat: string;
    combinedFrameStyle: {};
    constructor(src?: string, type?: string, width?: number, height?: number, frameSize?: number, repeatCoordinate?: string, backgroundImgCoordinateX?: number, backgroundImgCoordinateY?: number, borderImageRepeat?: string, imgFrameStyle?: {});
    moveBackgroundImgCoordinate(): void;
    private combineFrameStyle(src, width, height, repeatCoordinate, backgroundImgCoordinateX, backgroundImgCoordinateY, imageRepeatType, imgFrameStyle);
    private getSrc(imageUrl);
    private getValStr(val);
    private getRepeatCoordinate(coordinate);
    private getImageRepeatType(borderImageRepeat);
    private getBackgroundImgCoordinate(backgroundImgCoordinateX, backgroundImgCoordinateY);
}
