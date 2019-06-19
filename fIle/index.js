let dom = document.getElementById("file");
console.log("dom", dom);
dom.addEventListener("change", event => {
  let file = event.target.files[0];
  let a = URL.createObjectURL(file);
  document.getElementById("a").src = a;
  let b = new FileReader();
  b.readAsDataURL(file);
  b.onload = event => {
    document.getElementById("b").src = event.target.result;
  };
});
