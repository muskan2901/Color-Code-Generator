const getrandom = () => {
  const randomnumber = Math.floor(Math.random() * 16777215);
  const color = "#" + randomnumber.toString(16);

  console.log(randomnumber, color);
  document.body.style.backgroundColor = color;
  document.getElementById("code").innerText = color;
};

document.getElementById("btn").addEventListener("click", getrandom);
getrandom();
