
var options = {
    paths: '#round',     // Shape we want to draw
    pointsNumber: 10,            // Number of points
    maxDistance: 100,             // Max distance among points
    color: 'red',
    // debug: true               // Uncomment this to see the points
};

/* Initializing jelly */

var jelly = new Jelly('.jelly', options);



// function animLogo() {
//   anime({
//     targets: '#round',
//     d: "M 259.04104,0.01442282 C 164.4263,0.58553355 59.295072,15.616505 24.262606,100.36045 c -30.1160556,69.92572 -35.784833,154.81232 3.645885,222.38352 44.41051,79.4652 128.449739,153.49995 217.248239,153.5676 92.15978,0.9989 176.55777,-0.12245 232.97921,-76.86598 C 513.677,352.3599 520.18777,288.24523 500.85725,233.26065 464.63177,122.84026 413.15536,25.533345 298.49961,3.4277534 285.48899,1.0783349 272.26006,-0.14877975 259.04104,0.01442282 Z",
//     duration: 3000,
//     loop: true,
//     direction: "alternate",
//     easing: [.52, .04, .55, 1],
//     elasticity: function(el, i, l) {
//       return (200 + i * 200);
//     }
//   });
// }

// animLogo();
