var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circles = []; // variable for the circles


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // draws a random circle
            physikz.addRandomVelocity(circle, canvas, 5, 5); // applies random velocity to circle
            view.addChild(circle); // adds thye circle to the view
            circles.push(circle); // stores the circle in the cirlce array
        }

        // TODO 3 : Call the drawCircle() function
        /*
        drawCircle(); // calls the functions to make the cirlces appear
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        */
        // TODO 7 : Use a loop to create multiple circles
        for(var i = 0; i < 100; i++){
            drawCircle();
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            /*
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            physikz.updatePosition(circles[0]); // updates the position of the circle
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            physikz.updatePosition(circles[5]);
            // TODO 5 : Call game.checkCirclePosition() on your circles
            game.checkCirclePosition(circles[0]); // checks the position of your circles
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            game.checkCirclePosition(circles[5]);
            */
            // TODO 8 / TODO 9 : Iterate over the array
           for(var i = 0; i < circles.length; i++){
                physikz.updatePosition(circles[i]); // updates the position of the circle
                game.checkCirclePosition(circles[i]); // checks the position of your circles
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            var rightEdge = circle.x + circle.radius; // makes the circles re appear smoother
            var leftEdge = circle.x - circle.radius; // makes the circles re appear smoother
            var bottomEdge = circle.y + circle.radius; // makes the circles re appear smoother
            var topEdge = circle.y - circle.radius; // makes the circles re appear smoother

            if ( leftEdge > canvas.width ) {
                circle.x = 0 - circle.radius;
            } // makes the circle come back from the right when it goes off the left
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(rightEdge < 0){
                circle.x = canvas.width + circle.radius;
            } // makes the circle come back from the left when it goes off the right

            if(bottomEdge < 0){
                circle.y = canvas.height + circle.radius;
            } //  makes the circle come back from the top when it goes off the bottom

            if(topEdge > canvas.height){
                circle.y = 0 - circle.radius;
            } // make the circle come back from the bottom when it goes off the top
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
