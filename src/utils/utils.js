
    /* CENTER AN ELEMENT WITHIN A PAGE / OTHER ELEMENT
    =======================================================
   - EL MUST BE POSITION ABSOLUTE; If you want it to be centered within it's parent then it's parent must be some other then position: static
    @param   el   HTMLObject   The element to center; MUST BE POS ABSOLUTE
    @param   offsetObj   Object  with x and y properties for offsetting the horizontal and vertical positions from the center point

    returns nothing (undefined). 
  */
 export const centerEl = (el, offsetObj) => {
  const widthOfPage = window.innerWidth;
  const heightOfPage = window.innerHeight;
  const style = window.getComputedStyle(el);
  const widthOfEl = parseInt(style.width);
  const heightOfEl = parseInt(style.height);

  // Need to add on the page scrolling 
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

  // Center point x
  if(offsetObj) {
    if(!offsetObj.x) {
      el.style.left = ((widthOfPage - widthOfEl) / 2) + 'px';
    }else {
      el.style.left = (((widthOfPage - widthOfEl) + offsetObj.x) / 2) + 'px';
    }
    
    // Center point y
    if(!offsetObj.y) {
      el.style.top = ((heightOfPage - heightOfEl) / 2) + scrollTop + 'px';
      el.style.opacity = 1;
    }else {
      el.style.top = (((heightOfPage - heightOfEl)) / 2) + offsetObj.y + scrollTop + 'px';
      el.style.opacity = 1;
    }
  }else {
    el.style.left = ((widthOfPage - widthOfEl) / 2) + 'px';
    el.style.top = ((heightOfPage - heightOfEl) / 2) + scrollTop + 'px';
    el.style.opacity = 1;
  }

  
}