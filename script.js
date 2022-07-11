const script = document.createElement('script')
script.type = 'text/javascript'
script.addEventListener('load', () => {
  alert('loaded script');
  window.my = true;
})
script.src = 'https://appx/web-view.min.js'
document.getElementsByTagName('head')[0].appendChild(script);
