const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

previous.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function progressBarUpdate() {
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}

function buttonUpdate() {
  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (currentActive == 1) {
    previous.disabled = true;
  } else {
    next.disabled = false;
    previous.disabled = false;
  }
}

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progressBarUpdate();
  buttonUpdate();
}
