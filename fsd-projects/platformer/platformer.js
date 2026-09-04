$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 700, 50, 50, "green");
    createPlatform(400, 600, 50, 50, "green");
    createPlatform(600, 500, 50, 50, "green");
    createPlatform(800, 390, 50, 50, "green");
    createPlatform(1000, 300, 50, 50, "green");
    // TODO 3 - Create Collectables
    createCollectable("jimbo", 1000, 250,);
    
    
    // TODO 4 - Create Cannons
    createCannon("bottom", 200, 800);
    createCannon("bottom", 450, 700);
    createCannon("bottom", 650, 700);
    createCannon("left", 200, 500);
    createCannon("bottom", 900, 600);
    createCannon("left", 345, 620);
    createCannon("bottom", 30, 1500);
    createCannon("left", 600, 1500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
