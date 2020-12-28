var eye = document.querySelectorAll(".eye");
for (var i = 0, len = eye.length; i < len; i += 1) {
  eye[i].innerEye = eye[i].querySelector(".pupil");
}

function getOffsetCenter(el) {
  var x = el.offsetWidth / 2;
  var y = el.offsetHeight / 2;
  do {
    x += el.offsetLeft;
    y += el.offsetTop;
  } while (el = el.offsetParent);
  return {
    x: x,
    y: y
  };
}

function eyeMover(event) {
  event = event || window.event;
  var coorX, coorY;
  if (event.touches && event.touches.length === 1) {
    event.preventDefault();
    coorX = event.touches[0].clientX;
    coorY = event.touches[0].clientY;
  } else {
    coorX = event.clientX || event.pageX;
    coorY = event.clientY || event.pageY;
  }
  var screenX = window.innerWidth / 2;
  var screenY = window.innerWidth / 2;
  for (var i = 0, len = eye.length; i < len; i += 1) {
    var offset = getOffsetCenter(eye[i]);
    var eyeCoorX = coorX - offset.x;
    var eyeCoorY = coorY - offset.y;
    eye[i].innerEye.style.left = ((eyeCoorX / screenX) * 50) + "%";
    eye[i].innerEye.style.top = ((eyeCoorY / screenY) * 50) + "%";
  }
};

if (document.addEventListener) {
  document.addEventListener("touchmove", eyeMover);
  document.addEventListener("mousemove", eyeMover);
} else {
  document.onmousemove = eyeMover;
}