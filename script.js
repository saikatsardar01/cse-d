// ON DEMAND LOADING...
function loadIframe(clickedSummary) {
  // Find the closest parent <details> of the clicked <summary>
  const detailsElem = clickedSummary.closest('details');
  if (!detailsElem) return;

  // Inside that <details>, find the iframe
  const iframe = detailsElem.querySelector('iframe');
  if (!iframe) return;

  // If iframe src is empty, set it from data-src
  if (!iframe.src) {
    const realSrc = iframe.getAttribute('data-src');
    if (realSrc) {
      iframe.src = realSrc;
    }
  }
}

// FOR TIMMER

var span = document.getElementById('OnlineTimmerSpan');

function time() {
  var d = new Date();
  var p = d.getDate();
  var r = d.getMonth() + 1;
  var q = d.getFullYear();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " | " + ("0" + p).substr(-4) + "-" + ("0" + r).substr(-2) + "-" + ("0" + q).substr(-2) ;
}

setInterval(time, 1000);