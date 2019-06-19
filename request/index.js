window.onload = function() {
  const script = document.createElement("script");
  script.src = "./app.js";
  document.body.appendChild(script);
};
setTimeout(() => {
  // onload = "this.rel='stylesheet'";
  // const script = document.createElement("script");
  // script.src = "./app.js";
  // document.body.appendChild(script);
}, 5000);
