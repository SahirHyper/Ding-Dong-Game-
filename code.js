var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wallup = createSprite(190,120,250,3);
var walldown = createSprite(190,260,250,3);
var ding  = createSprite(40,190,15,15);
ding.shapeColor = "white"
var dong1 = createSprite(125,150,10,10);
var dong2 = createSprite(175,225,10,10);
var dong3 = createSprite(225,150,10,10);
var dong4 = createSprite(275,225,10,10);
dong1.shapeColor = "yellow";
dong2.shapeColor = "yellow";
dong3.shapeColor = "yellow";
dong4.shapeColor = "yellow";

dong1.velocityY = 8;
dong2.velocityY = 8;
dong3.velocityY = 8;
dong4.velocityY = 8;

var death = 0;

function draw() {
background("black");
if (keyDown("d")){
  ding.x = ding.x + 2;
}
if (keyDown("a")){
  ding.x = ding.x - 2;
}

dong1.bounceOff(wallup);
dong1.bounceOff(walldown);

dong2.bounceOff(wallup);
dong2.bounceOff(walldown);

dong3.bounceOff(wallup);
dong3.bounceOff(walldown);

dong4.bounceOff(wallup);
dong4.bounceOff(walldown);

if (ding.isTouching(dong1)||ding.isTouching(dong2)|| ding.isTouching(dong3)|| ding.isTouching(dong4)|| ding.isTouching(wallup)||ding.isTouching(walldown)){
  ding.x = 40;
  ding.y = 190;
  death = death + 1;
}
text(" DEATHS " + death,175,100);
drawSprites();



}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
