$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    $(window).enllax();

    $("body").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#fe673a',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };



  $(".scrolling__link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  var bLazy = new Blazy();


  var cardWrap = document.getElementsByClassName('move__img');
  document.body.addEventListener('mousemove', cursorPositionHandler);

  function cursorPositionHandler(e) {
    var decimalX = e.clientX / window.innerWidth - 0.5;
    var decimalY = e.clientY / window.innerHeight - 0.5;

    TweenMax.to(cardWrap, 0.5, {
      rotationY: 10 * decimalX,
      rotationX: -10 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 700,
      transformOrigin: "center"
    });
  };

});



// var lastClicked;

// Barba.Dispatcher.on('linkClicked', function(el) {
//   lastClicked = el;
// });

// var ExpandTransition = Barba.BaseTransition.extend({
//   start: function() {
//     Promise.all([this.newContainerLoading, this.zoom()]).then(
//       this.showNewPage.bind(this)
//     );
//   },

//   zoom: function() {
//     var deferred = Barba.Utils.deferred();

//     let tl = new TimelineMax({
//       onComplete: function() {
//         deferred.resolve();
//       }
//     });

//     let left = lastClicked.getBoundingClientRect().left;

//     let cloned = lastClicked.cloneNode(true);

//     let nextAll = $(lastClicked).nextAll();
//     let prevAll = $(lastClicked).prevAll();

//     cloned.classList.add('is-cloned');
//     this.oldContainer.appendChild(cloned);
//     tl.set(cloned, {
//       x: left
//     });

//     let screenWidth = $(window).width();
//     let bg = $(cloned).find('.item__bg');
//     let title = $(cloned).find('.item__title');

//     tl
//       .to(cloned, 0.5, {
//         x: 0,
//         width: screenWidth
//       }, 0)
//       .to(title, 0.5, {
//         y: 100,
//         opacity: 0
//       }, 0, 0);
//     if (prevAll.length) {
//       let prevAllLeft = prevAll[0].getBoundingClientRect().left;
//       tl.to(
//         prevAll,
//         0.5, {
//           x: -(screenWidth / 3 + prevAllLeft)
//         },
//         0
//       );
//     }
//     if (nextAll.length) {
//       let nextAllLeft = screenWidth - nextAll[0].getBoundingClientRect().left;
//       tl.to(
//         nextAll,
//         0.5, {
//           x: nextAllLeft
//         },
//         0
//       );

//       // tl.staggerTo(nextAll,1,{
//       //  cycle:{
//       //    x: function(n) {
//       //      if(n<1) {
//       //        return nextAllLeft;
//       //      }
//       //    }
//       //  }
//       // },0,0);
//     }

//     tl.to(bg, 0.5, {
//       x: 0
//     }, 0);
//     return deferred.promise;
//   },

//   showNewPage: function() {
//     var $el = $(this.newContainer);
//     var thetitle = $(this.newContainer).find('.single__title');
//     var timeline = new TimelineMax();
//     $(this.oldContainer).hide();

//     $el.css({
//       visibility: 'visible',
//     });

//     timeline.to(thetitle, 1, {
//       y: 0
//     });

//     this.done();
//   }
// });


// Barba.Pjax.getTransition = function() {
//   var transitionObj = ExpandTransition;

//   if (Barba.HistoryManager.prevStatus().namespace === 'Single') {
//     transitionObj = BackTransition;
//   }
//   return transitionObj;
// };


//   var FadeTransition = Barba.BaseTransition.extend({
//     start: function() {
//       /**
//        * This function is automatically called as soon the Transition starts
//        * this.newContainerLoading is a Promise for the loading of the new container
//        * (Barba.js also comes with an handy Promise polyfill!)
//        */

//       // As soon the loading is finished and the old page is faded out, let's fade the new page
//       Promise
//         .all([this.newContainerLoading, this.fadeOut()])
//         .then(this.fadeIn.bind(this));
//     },

//     fadeOut: function() {
//       /**
//        * this.oldContainer is the HTMLElement of the old Container
//        */

//       return $(this.oldContainer).animate({
//         opacity: 0
//       }).promise();
//     },

//     fadeIn: function() {
//       *
//        * this.newContainer is the HTMLElement of the new Container
//        * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
//        * Please note, newContainer is available just after newContainerLoading is resolved!


//       var _this = this;
//       var $el = $(this.newContainer);

//       $(this.oldContainer).hide();

//       $el.css({
//         visibility: 'visible',
//         opacity: 0
//       });

//       $el.animate({
//         opacity: 1
//       }, 400, function() {
//         /**
//          * Do not forget to call .done() as soon your transition is finished!
//          * .done() will automatically remove from the DOM the old Container
//          */

//         _this.done();
//       });
//     }
//   });

//   /**
//    * Next step, you have to tell Barba to use the new Transition
//    */

//   Barba.Pjax.getTransition = function() {
//     /**
//      * Here you can use your own logic!
//      * For example you can use different Transition based on the current page or link...
//      */

//     return FadeTransition;
//   };



// 

// Barba.Pjax.start();



window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');