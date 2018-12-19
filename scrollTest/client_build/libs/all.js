/*$(document).ready(function() {

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();*/





  //pin the intro
/*  var pinToScene = new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: '20%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);


  //pin again
  var pinToScene = new ScrollMagic.Scene({
      triggerElement: '#project01',
      triggerHook: 0.4
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);

    */


    //parallax scene
/*    var parallaxTl = new TimelineMax();
    parallaxTl
    .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
    .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0);


    var slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '.bcg-parallax',
      triggerHook: 1,
      duration: '100%'
    })

    .setTween(parallaxTl)
    .addTo(controller);



  //build loop for all project
  $('.project').each(function() {

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.8,
      reverse: false,
    })

    .setClassToggle(this, 'fade-in') // add class to project01

    .addIndicators({
      name: 'fade scene',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695',
      colorEnd: 'red'
      }) // this requires a plugin

    .addTo(controller);

  });



});*/



/*// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
=======
// Init ScrollMagic
/*var ctrl = new ScrollMagic.Controller({
>>>>>>> 8a8e211ec26cee1aa0267b066047b16e1c534241
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$("section").each(function() {

  var name = $(this).attr('id');
  
  new ScrollMagic.Scene({
    triggerElement: this
  })
  .setPin(this)
  .addIndicators({
    colorStart: "rgba(255,255,255,0.5)",
    colorEnd: "rgba(255,255,255,0.5)", 
    colorTrigger : "rgba(255,255,255,1)",
    name:name
  })
  .loglevel(3)
  .addTo(ctrl);
 
});

// Get window height
var wh = window.innerHeight;
 
new ScrollMagic.Scene({
  offset: wh*3
})
<<<<<<< HEAD
.setClassToggle("three", 'fade-in')
.addTo(ctrl);*/

/*
var pinToScene = new ScrollMagic.Scene({
  triggerElement: '#one',
  triggerHook: 0,
  duration: '100%'
})
.setPin('.main', {pushFollowers: false})
.addTo(controller);

var pinToScene = new ScrollMagic.Scene({
  triggerElement: '#two',
  triggerHook: 0.4
})
.setPin('.main', {pushFollowers: false})
.addTo(controller);

.setClassToggle(this, 'fade-in')
.addTo(ctrl);*/





///////////////////// TWEEN MAX ANIMATION LESSONS2

/*$(document).ready(function() {
  startTween();
});

function startTween() {

  TweenLite.to($("#toolBox"), 1.5, {delay: .5, x:500, y:225, rotation: 360, scale: 2, 
    onComplete:returnToNormal, onCompleteParams: [$("#toolBox")]});

  TweenLite.to($(".text"), 1.5, {color: "red", fontSize: "+=15", 
    onComplete:returnToTextNormal});

}

function returnToNormal(obj) {
  if (obj) {
    TweenLite.to($("#toolBox"), 2, {x:0, y:0, rotation: 0, scale: 1});
  };
};

function returnToTextNormal() {
  TweenLite.to($(".text"), 1, {color: "#000", fontSize: "-=15"});
}*/


$(window).load(function() {
  init();
});

function init () {
  var toolTimeline = new TimelineLite({paused: true});
  var duration = .5;

  toolTimeline.to("#toolBox1", 1, {
    duration, y: -100, ease:Back.easeInOut});
  toolTimeline.to("#toolBox2", 1, {
    duration, y: -100, ease:Back.easeInOut});
  toolTimeline.to("#toolBox3", 1, {
    duration, y: -100, ease:Back.easeInOut});

  $("#start").click(function(){
    toolTimeline.play();
  });

  $("#pause").click(function(){
    toolTimeline.pause();
  });

  $("#stop").click(function(){
    toolTimeline.stop();
  });

  $("#reverse").click(function(){
    toolTimeline.reverse();
  });


  var tl = new TimelineMax();

tl
  .from( $('#w__red'), 2, {
    y: -30,

  } )
  .from( $('#h__blue'), 2, {
    x: "100%",
  },"-=1.5" )
  .from( $('#i__white'), 1.5, {
    y: "100%",

  },"-=1.5" )
  .from( $('#e__pink'), 1.5, {
    x: "200%",
    rotation: 180,
  },"-=1.5" )

  ;






<!-- ¯\_(ツ)_/¯ -->

  ;
/*  .from( $('.logo__r'), 2,{
    rotation: 18,
    transformOrigin: "100% 50%"
  },"-=1.5")
  .from( $('.logo__i'), 2, {
    y: "100%"
  },"-=1.5")
  .from( $('.logo__t-top'), 2, {
    x: "100%"
  },"-=1.5")
  .from( $('.logo__t-bottom'), 2, {
    y: "-100%"
  },"-=1.5")
  .from( $('.logo__y'), 2, {
    y: "100%"
  },"-=2");*/



}

