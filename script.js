const script = document.createElement('script')
script.type = 'text/javascript'
script.addEventListener('load', () => {
  alert('loaded script');
  window.my = true;
})
script.src = 'https://appx/web-view.min.js'
document.getElementsByTagName('head')[0].appendChild(script);

const getScript = () => {
  alert('axios get script called');
  fetch('https://appx/web-view.min.js', {
    method: 'GET',
  }).then(resp => {
    alert('axios get script done' + JSON.stringify(resp.data));
  }).catch(e => {
    alert('axios get script error: ' + e);
    alert('axios get script error: ' + JSON.stringify(e));
    alert('axios get script error: ' + JSON.stringify(e.response));
  });
};

setTimeout(() => {
  getScript();
}, 10000)
