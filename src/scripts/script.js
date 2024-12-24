//Remember scroll position
// add if visibility changes
let isMobile = window.matchMedia("(max-width:57.4375em)").matches;
console.log('mobile el', isMobile);

let page = document.querySelector("html");
let pos = localStorage.getItem("pagepos");
let mobilepos = localStorage.getItem("mobilepos");

document.addEventListener("DOMContentLoaded", function() {  
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();  

  if (isMobile) {
    localStorage.setItem("pagepos", 0); //clear localStorage for desktop
  
    let toc = document.querySelector('.table-of');
    
    if(mobilepos !== null) {
      toc.scrollTo(mobilepos, 0)
    } 

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("mobilepos", toc.scrollLeft);
    });

  } else {
  
    if (pos !== null) {
      page.scrollTo(0, pos);
      page.scrollTop = parseInt(pos, 10);
    }
    
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("pagepos", page.scrollTop);
    });

  }
})
