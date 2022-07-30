
const script = document.createElement('script')
script.type = 'text/javascript'
script.addEventListener('load', () => {
  alert('loaded script');
  window.my = true;
})
script.src = 'https://appx/web-view.min.js'
document.getElementsByTagName('head')[0].appendChild(script);

const getScript = () => {
  alert('function to get the script');
  axios.get('https://appx/web-view.min.js').then(resp => {
    alert('script loaded' + JSON.stringify(resp.data));
  }).catch(e => {
    alert('script error: ' + e);
    alert('script error: ' + JSON.stringify(e));
  });
};

setTimeout(() => {
  getScript();
}, 10000)
