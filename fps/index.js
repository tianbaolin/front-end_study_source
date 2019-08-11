
const app = document.getElementById('app');
let i = 0;
function add() {
  if (i < 100) {
    console.log('i', i);
    i += 0.1;
    requestAnimationFrame(() => {
      let j = 0;
      while (j < 100000000) {
        j += 1;
      }
      app.style.width = `${i}%`;
      add();
    });
  }
}
add();
