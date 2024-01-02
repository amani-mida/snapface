export class FaceSnap {
    constructor(public title: string, 
        public description: string, 
        public  createDate = Date, 
        public snaps: number,
        public  imgUrl: string){
    }
}