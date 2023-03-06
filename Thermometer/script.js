const degrees = document.querySelectorAll('.degree');
const temperatureDisplay = document.querySelector('.temperature');
const mercury = document.querySelector('.mercury');

degrees.forEach(degree => {
  degree.addEventListener('click', () => {
    const temp = degree.dataset.temp;
    temperatureDisplay.innerText = `${temp}°C`;
    mercury.style.height = `${((temp - (-50)) / 80) * 100}%`;
    if (temp < 0) {
      mercury.classList.add('cold');
      mercury.classList.remove('warm');
    } else {
      mercury.classList.add('warm');
      mercury.classList.remove('cold');
    }
  });
});
