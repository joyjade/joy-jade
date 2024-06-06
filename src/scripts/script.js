const portfolio = {
  "ohbook": [
		{"image":"ohbook_cover", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_workbooks", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_preparation", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_motives", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_intro", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_framesofmind", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_forms", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_endnotes", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_consider", "alt":"Speaking the Matter book cover"},
		{"image":"ohbook_backcover", "alt":"Speaking the Matter book cover"},
	],
	"laca": [
		{"image":"lacawine_01", "alt":"laca wine store home page"},
		{"image":"lacawine_03", "alt":"laca wine store mobile designs"},
		{"image":"lacawine_04", "alt":"laca wine store"},
		{"image":"lacawine_06", "alt":"laca wine store"},
	],
	"division": [
		{"image":"division_01", "alt":"movie nights at divison place"},
		{"image":"divison_02", "alt":"movie nights at divison place"},
		{"image":"division_03", "alt":"movie nights at divison place"},
		{"image":"divison_04", "alt":"movie nights at divison place"},
	],
	"protocols": [
		{"image":"prtcls_01", "alt":"protocols issue ten"},
		{"image":"prtcls_2", "alt":"protocols journal"},
		{"image":"prtcls_3", "alt":"protocols journal"},
		{"image":"prtcls_4", "alt":"protocols journal"},
		{"image":"prtcls_6", "alt":"protocols journal"},
	],
	"crg": [
		{"image":"crg_01", "alt":"crg home"},
		{"image":"crg_02", "alt":"crg home"},
		{"image":"crg_03", "alt":"crg home"},
		{"image":"crg_04", "alt":"crg home"},
	],
	"bwr": [
		{"image":"bwr_mobile", "alt":"archives"},
		{"image":"bwr_home", "alt":"archives"},
		{"image":"bwr_guide", "alt":"archives"},
		{"image":"bwr_bookdetails", "alt":"archives"}
	]
}

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


//MAIN

document.addEventListener("DOMContentLoaded", function() {
	let contents = document.querySelector(".contents");
	let projectNames = document.querySelectorAll('.project-name');
	watch(projectNames);


	clickNameScrollProject(projectNames);
	imageSlideAndScroll(projectNames);

	let open = document.querySelector('.open');
	open.onclick = function (e) {
		e.preventDefault;
		let info = document.querySelector('.off-canvas');
	    info.classList.toggle('slide');
	    info.classList.toggle('hide-for-small');
	    open.classList.toggle('move-right');
	    open.querySelector('img').classList.toggle('rotate');
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

		let projectName = img.dataset.name;
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































