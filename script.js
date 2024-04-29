const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  clock.textContent = date.toLocaleTimeString();
}, (time = 1000));
