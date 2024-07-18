let myXPos = 100;
let myYPos = 100;

function preload (){
    marioImage = loadimage("https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png")
}

function setup() {
    createCanvas(500, 500);
    noStroke();
 
 
    rectMode(CENTER); // p5 use the x,y for  rectangle
 }
 
 function draw() {
    background(0);
 
    fill (255,0,0);
    //rect(myXPos, myYPos, 50,50);
    Image(marioImage, myXPos, myYPos,50,50);

    if(keyIsDonw(LEFT_ARROW)){
        myXPos -= 3;

    }

    if(keyIsDonw(RIGHT_ARROW)){
        myXPos += 3;

    }

    if(keyIsDonw(UP_ARROW)){
        myYPos -= 3;

    }
 
    if(keyIsDonw(DOWN_ARROW)){
        myYPos += 3;

    }

}