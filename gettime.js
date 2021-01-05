setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let hdeg = 30 * hour + minute / 2;
  let mdeg = 6 * minute;
  let sdeg = 6 * second;

  hr.style.transform = `rotate(${hdeg}deg)`;
  min.style.transform = `rotate(${mdeg}deg)`;
  sec.style.transform = `rotate(${sdeg}deg)`;
}, 1000);
