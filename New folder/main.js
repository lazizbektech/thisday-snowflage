let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Yakshanba';
    break;
  case 1:
    day = 'Dushanba';
    break;
  case 2:
    day = 'Seshanba';
    break;
  case 3:
    day = 'Chorshanba';
    break;
  case 4:
    day = 'Payshanba';
    break;
  case 5:
    day = 'Juma';
    break;
  case 6:
    day = 'Shanba';
}

document.getElementById('demo').innerHTML = 'Bugungi kun ' + day;

document.addEventListener('click', e => {
  var snowflake = document.createElement('span');
  snowflake.classList.add('snowflake');

  snowflake.style.left = e.offsetX + 'px';
  snowflake.style.top = e.offsetY + 'px';

  var size = Math.random() * (100 - 20 + 1) + 20;

  snowflake.style.width = size + 'px';
  snowflake.style.height = size + 'px';
  document.body.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 1000);
});
