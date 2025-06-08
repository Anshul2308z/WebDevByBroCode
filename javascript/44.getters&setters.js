class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height
    }
    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number")
        }
    }
    get width(){
        this._width;
    }
    get height(){
        this._height;
    }
    get area (){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle (4,3);

// if a garbage is thrown width and height will be preserved and an error will be given 

rectangle.height = 34; 
rectangle.width =65;

// here how did they know that height & width are no. ; is it bc of > 0 