window.onload = function() {
  var canvasContainer = document.getElementById("canvas");
  var webGLCurtain = new Curtains("canvas");

  var planeElement = document.getElementsByClassName("hero__animation")[0];

  var params = {
    vertexShaderID: "plane-vs",
    fragmentShaderID: "plane-fs", 

    uniforms: {
      time: {
        name: "uTime",
        type: "1f", 
        value: 0,
      },
    }
  }

  var plane = webGLCurtain.addPlane(planeElement, params);

  plane.onRender(function() {
    plane.uniforms.time.value++;
  });
};


$(document).ready(function() {


  var cardWrap = document.getElementsByClassName('hero__content');
  document.body.addEventListener('mousemove', cursorPositionHandler);


  function cursorPositionHandler(e) {
    var decimalX = e.clientX / window.innerWidth - 0.5;
    var decimalY = e.clientY / window.innerHeight - 0.5;

    TweenMax.to(cardWrap, 0.5, {
      rotationY: 15 * decimalX,
      rotationX: -15 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 500,
      transformOrigin: "center"
    });
  };



  let els = document.querySelectorAll(".js-splitme");
  [].forEach.call(els, function(el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
  });



  var tl = new TimelineMax();
  tl

  .fromTo(".header__logo", 1.3, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(3)}, 1.2)
  .fromTo(".header__btn", 1.2, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(3)}, 1.5)
  // .staggerFromTo(".hero__title .letter", 0.3, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(2)}, 0.1);
  .fromTo(".hero__title", .8, {x: -50, opacity: 0}, {x: 0, opacity: 1, ease: Back.easeOut.config(3)}, 0.9)



//CURSOR CIRCLE
  $(function() {
    var dots = [],
      mouse = {
        x: 0,
        y: 0
      };

    var Dot = function() {
      this.x = 0;
      this.y = 0;
      this.node = (function() {
        var n = document.createElement("div");
        n.className = "cursor";
        document.body.appendChild(n);
        return n;
      }());
    };

    Dot.prototype.draw = function() {
      this.node.style.left = this.x + -16 + "px";
      this.node.style.top = this.y + -16 + "px";
    };

    for (var i = 0; i < 1; i++) {
      var d = new Dot();
      dots.push(d);
    }

    function draw() {
      var x = mouse.x,
          y = mouse.y;

      dots.forEach(function(dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .16;
        y += (nextDot.y - dot.y) * .16;

      });
    }

    addEventListener("mousemove", function(event) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    });

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();
  });
});





$(".form").submit(function() {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {

    var inst = $('[data-remodal-id=modal-thanks]').remodal();
    inst.open();

    setTimeout(function() {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});



window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');