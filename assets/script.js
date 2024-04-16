document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const numSlides = slides.length;

  function changeSlide() {
    const oldSlide = currentSlide;
    currentSlide = (currentSlide + 1) % numSlides;
    slides[oldSlide].classList.remove('active');
    slides[currentSlide].classList.add('active');
  }

  setInterval(changeSlide, 10000); // Change slide every 10 seconds

  // Define the four corners of the parallelogram
  var points = [
    { x: 0.1, y: 0.05 },    // Top left
    { x: 0.9, y: 0.05 },    // Top right
    { x: 0.9, y: 0.95 },    // Bottom right
    { x: 0.1, y: 0.95 }     // Bottom left
  ];

  // Function to create a string for the 'points' attribute of the polygon
  function pointsToString(p) {
    return p.map(point => point.x + ',' + point.y).join(' ');
  }

  // Function to update the points of the parallelogram over time
  function animateParallelogram() {
    // Adjust the points for the animation
    points[0].y = 0.05 + Math.sin(Date.now() / 2000) * 0.02;
    points[1].y = 0.05 + Math.cos(Date.now() / 2000) * 0.02;
    points[2].y = 0.95 + Math.sin(Date.now() / 2000) * 0.02;
    points[3].y = 0.95 + Math.cos(Date.now() / 2000) * 0.02;

    // Update the 'points' attribute of the polygon
    var polygon = document.querySelector('#clip-path polygon');
    if (polygon) {
      polygon.setAttribute('points', pointsToString(points));
    }

    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(animateParallelogram);
  }

  // Start the parallelogram animation
  requestAnimationFrame(animateParallelogram);

});
