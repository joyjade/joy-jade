// CLASSES
class Slideshow {
	constructor(slides) {
		this.slide = 0;
		this.slides = slides;
	}
	nextSlide() {
		if (this.slide < this.slides.length - 1) {
			this.slide = this.slide + 1;	
		} else {
			this.slide = 0;
		}		
	}
	imageSrc() {
		let string = this.slides[this.slide].image;
		let type = this.slides[this.slide].type;
		return `content/${string}.${type || 'jpg'}`
	}
	imageAlt(){
		let string = this.slides[this.slide].alt;
		return string
	}
}





//Remember scroll position

// add if visibility changes
let isMobile = window.matchMedia("(max-width:57.4375em)").matches;
console.log('mobile el', isMobile);

let page = document.querySelector("html");
let pos = localStorage.getItem("pagepos");
let mobilepos = localStorage.getItem("mobilepos");

document.addEventListener("DOMContentLoaded", function() {  
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

// SITE FXNS

function clickNameScrollProject(collection) {
	collection.forEach(item => {
		item.onclick = function(e) {
			dehighlight(collection, 'active');
			highlight(this);

			let projectId = this.dataset.id;
			scrollll(projectId);
		}
	})
}

function imageSlideAndScroll(collection){
	let images = document.querySelectorAll('.image');
	images.forEach( image => {	

		let img = image.querySelector('img');
    let projectName;

    if (image.dataset.name) {
      projectName = image.dataset.name;
    }

		let projectImages = portfolio[projectName];
		let slideshow = new Slideshow(projectImages);

		image.onclick = function(event) {
			let displayedImage = event.target;

			let projectId = displayedImage.closest('.project-photos').id;

			scrollll(projectId);

			let projects = document.querySelector(".table-of");
			let contents = document.querySelector(".contents");

			let indexName = projects.querySelector(`[data-id="${projectId}"]`);
			dehighlight(collection);
			highlight(indexName);


			let mobileName = contents.querySelector(`[data-id="${projectId}"]`);
			highlight(mobileName);


			slideshow.nextSlide();
			displayedImage.src = slideshow.imageSrc();
			displayedImage.alt = slideshow.imageAlt();
		}
	})
}






//BASIC FXNS

function scrollll(id){
	let contents = document.querySelector(".contents");

	let work = document.getElementById(id);
	let pixelsFromTop = work.offsetTop;

	contents.scroll({
		top: pixelsFromTop - 69,
		behavior: 'smooth'
	})

}

function highlight(item) {
	item.classList.add('active');
	item.querySelector('.project-description').style.display = 'inline';
}

function dehighlight(collection) {
	collection.forEach(item => {
		item.classList.remove('active');
		item.querySelector('.project-description').style.display = 'none';
	})
}

function watch(collection) {
	let projects = document.querySelector(".table-of");
	let contents = document.querySelector(".contents");

	document.addEventListener('click', function(event) {
		let isClickInside = projects.contains(event.target) || contents.contains(event.target);

		if (!isClickInside) {
			dehighlight(collection, 'active');
		}
	})
}































