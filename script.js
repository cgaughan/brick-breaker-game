var bar
var bottom
var topWall
var left
var right
var ball
var MAX_SPEED = 8
var bricks
var brick1
var brick2
var brick3
var brick4
var brick5
var brick6
var brick7
var brick8
var brick9
var brick10
var brick11
var brick12
var brick13
var brick14
var brick15
var brick16
var loseBackground
var button
var gameState = true;
var originalBricks

function setup() {
    createCanvas(800, 700);
    button = createButton("Click for another life!")
    tryAgain()
    brick1 = createSprite(100, 75, 90, 45)
    brick1.immovable = true;
    brick2 = createSprite(200, 75, 90, 45)
    brick2.immovable = true;
    brick3 = createSprite(300, 75, 90, 45)
    brick3.immovable = true;
    brick4 = createSprite(400, 75, 90, 45)
    brick4.immovable = true;
    brick5 = createSprite(500, 75, 90, 45)
    brick5.immovable = true;
    brick6 = createSprite(600, 75, 90, 45)
    brick6.immovable = true;
    brick7 = createSprite(700, 75, 90, 45)
    brick7.immovable = true;

    brick8 = createSprite(200, 150, 90, 45)
    brick8.immovable = true;
    brick9 = createSprite(300, 150, 90, 45)
    brick9.immovable = true;
    brick10 = createSprite(400, 150, 90, 45)
    brick10.immovable = true;
    brick11 = createSprite(500, 150, 90, 45)
    brick11.immovable = true;
    brick12 = createSprite(600, 150, 90, 45)
    brick12.immovable = true;

    brick13 = createSprite(300, 225, 90, 45)
    brick13.immovable = true;
    brick14 = createSprite(400, 225, 90, 45)
    brick14.immovable = true;
    brick15 = createSprite(500, 225, 90, 45)
    brick15.immovable = true;

    brick16 = createSprite(400, 300, 90, 45)
    brick16.immovable = true;

    bricks = new Group()
    bricks.add(brick1)
    bricks.add(brick2)
    bricks.add(brick3)
    bricks.add(brick4)
    bricks.add(brick5)
    bricks.add(brick6)
    bricks.add(brick7)
    bricks.add(brick8)
    bricks.add(brick9)
    bricks.add(brick10)
    bricks.add(brick11)
    bricks.add(brick12)
    bricks.add(brick13)
    bricks.add(brick14)
    bricks.add(brick15)
    bricks.add(brick16)
    originalBricks = bricks

}

function tryAgain() {
    clear()
    bricks = originalBricks
    bar = createSprite(400, 670, 310, 20)
    bar.immovable = true;
    bottom = createSprite(400, 699, 800, 10)
    bottom.immovable = true;
    topWall = createSprite(400, 1, 800, 10)
    topWall.immovable = true;
    left = createSprite(1, 350, 10, 700)
    left.immovable = true;
    right = createSprite(800, 1, 10, 1400)
    right.immovable = true;
    ball = createSprite(400, 500, 15, 15)

   
    loseBackground = loadGif("200w_d.gif")
    button.mousePressed(tryAgain)
    gameState = true;
}


function draw() {
    if (gameState) {
        if(bricks.length==0){
            text("won", 100, 100)
        }
        
        button.style("visibility", "none");
        background(100)
        if (keyDown(LEFT_ARROW)) {
            if (bar.position.x > 55) {
                bar.setVelocity(-8, 0)
                console.log(bar.position.x)
            }
            else if (bar.position.x < 55) {
                console.log("hit")
                bar.setVelocity(0, 0)
            }
        }
        else if (keyDown(RIGHT_ARROW)) {
            if (bar.position.x < 745) {
                bar.setVelocity(8, 0)
            }
            else {
                bar.setVelocity(0, 0)
            }
        }
        else {
            bar.setVelocity(0, 0)
        }

        ball.bounce(topWall);
        ball.bounce(right);
        ball.bounce(left);
        ball.bounce(bottom, lose);

        if (ball.bounce(bar)) {
            var swing = (ball.position.x - bar.position.x) / 3;
            ball.setSpeed(MAX_SPEED, ball.getDirection() + swing);
        }
        ball.bounce(bricks, brickHit)

        drawSprites()
    }
    else {
        clear()
        background(loseBackground)
        textSize(40)
        text("Oops you lost! Better luck next time;)", 50, 125)
    }
}

function mousePressed() {
    ball.setVelocity(-5, -8)
    console.log("hit")
}

function brickHit(ball, brick) {
    brick.remove()
}

function lose() {
    gameState = false
    bar.remove();
    ball.remove()
    bricks = originalBricks
}
function win() {
    
}