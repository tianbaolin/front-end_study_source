const app = document.getElementById('app');
const observer = new MutationObserver(((event) => {
  console.log('event :', event);
}));
observer.observe(app, { attributes: true, childList: true, subtree: true });
app.innerText = 123;
observer.disconnect();
