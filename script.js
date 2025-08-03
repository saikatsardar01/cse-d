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
