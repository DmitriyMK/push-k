// window.onload = function() {
//   let canvasContainer = document.getElementById("canvas");
//   let webGLCurtain = new Curtains("canvas");

//   let planeElement = document.getElementsByClassName("hero__animation")[0];

//   let params = {
//     vertexShaderID: "plane-vs",
//     fragmentShaderID: "plane-fs", 

//     uniforms: {
//       time: {
//         name: "uTime",
//         type: "1f", 
//         value: 0,
//       },
//     }
//   }

//   let plane = webGLCurtain.addPlane(planeElement, params);

//   plane.onRender(function() {
//     plane.uniforms.time.value++;
//   });
// };


$(document).ready(function() {


  let cardWrap = document.getElementsByClassName('hero__content');
  document.body.addEventListener('mousemove', cursorPositionHandler);


  function cursorPositionHandler(e) {
    let decimalX = e.clientX / window.innerWidth - 0.5;
    let decimalY = e.clientY / window.innerHeight - 0.5;

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



  let tl = new TimelineMax();
  tl

  .fromTo(".header__logo", 1.3, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(3)}, 1.2)
  .fromTo(".header__btn", 1.2, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(3)}, 1.5)
  // .staggerFromTo(".hero__title .letter", 0.3, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(2)}, 0.1);
  .fromTo(".hero__title", .8, {x: -50, opacity: 0}, {x: 0, opacity: 1, ease: Back.easeOut.config(3)}, 0.9)

  //CURSOR CIRCLE
  $(function() {
  let dots = [],
  mouse = {
    x: 0,
    y: 0
  };

  let Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function() {
      let n = document.createElement("div");
      n.className = "cursor";
      document.body.appendChild(n);
      return n;
    }());
  };

  Dot.prototype.draw = function() {
    this.node.style.left = this.x + -16 + "px";
    this.node.style.top = this.y + -16 + "px";
  };

  for (let i = 0; i < 1; i++) {
    let d = new Dot();
    dots.push(d);
  }

  function draw() {
    let x = mouse.x,
    y = mouse.y;

    dots.forEach(function(dot, index, dots) {
      let nextDot = dots[index + 1] || dots[0];

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
  let th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {

    let inst = $('[data-remodal-id=modal-thanks]').remodal();
    inst.open();

    setTimeout(function() {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});



window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');