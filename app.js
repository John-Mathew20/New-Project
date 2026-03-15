async function changeColor(color, delay) {
  let h1 = document.querySelector("h1");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color Changed!");
    }, delay);
  });
}

async function show() {
  try {
    await changeColor("Red", 1000);
    await changeColor("pink", 1000);
    await changeColor("green", 1000);
    await changeColor("aqua", 1000);
    await changeColor("cyan", 1000);
    await changeColor("lime", 1000);
    await changeColor("maroon", 1000);
    await changeColor("lavender", 1000);
  } catch (e) {
    console.log("Error Happened, Code Exited Without excution");
  }
}

show();

async () => {
  console.log("hello");
};

// adding new feature  - button
