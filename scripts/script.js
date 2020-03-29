const portfolio = {
	"hoda": [
		{"image":"hoda_archives", "alt":"hoda archives"},
		{"image":"hoda_home", "alt":"hoda home"},
		{"image":"hoda_home_2", "alt":"hoda events"},
		{"image":"hoda_about", "alt":"hoda about"},
		{"image":"hoda_post", "alt":"hoda post"},
		{"image":"hoda_allarchives", "alt":"hoda all archives"},
		{"image":"hoda_press", "alt":"hoda press"}
		],
	"bwr": [
		{"image":"bwr_mobile", "alt":"archives"},
		{"image":"bwr_home", "alt":"archives"},
		{"image":"bwr_guide", "alt":"archives"},
		{"image":"bwr_bookdetails", "alt":"archives"}
	],
	"cdf": [
		{"image":"cdf-01", "alt":"archives"},
		{"image":"cdf-02", "alt":"archives"},
		{"image":"cdf-03", "alt":"archives"}
		],
	"blue_tin": [
		{"image":"blue-tin", "alt":"archives"},
		{"image":"blue-tin-invite", "alt":"archives"}
	],
	"brilliant": [
		{"image":"brilliant_dashboard", "alt":"archives"},
		{"image":"brill_photos", "alt":"archives", "type": "gif"},
		{"image":"brilliant_mobile", "alt":"archives"},
		{"image":"brilliant_catalog", "alt":"archives"}
	],
	"dh": [
		{"image":"dh", "alt":"archives"},
		{"image":"dh-mobile", "alt":"archives"},
		{"image":"dh-03", "alt":"archives"}
	],
	"girlgaze": [
		{"image":"ggcurated-images", "alt":"archives"},
		{"image":"amaalsaid", "alt":"archives"},
		{"image":"girlgaze", "alt":"archives"},
		{"image":"ggwebsite", "alt":"archives"},
		{"image":"gginsta", "alt":"archives"},
		{"image":"girlgaze_story", "alt":"archives"}
	],
	"hips": [
		{"image":"get-up", "alt":"archives"},
		{"image":"get-up-remix", "alt":"archives"}
	],
	"hhs": [
		{"image":"househousesea_01", "alt":"archives"},
		{"image":"househousesea_02", "alt":"archives"},
		{"image":"househousesea_03", "alt":"archives"},
		{"image":"househousesea_04", "alt":"archives"},
		{"image":"househousesea_05", "alt":"archives"},
		{"image":"househousesea_06", "alt":"archives"}
	],		
	"pulp": [
		{"image":"pulp-issuetwo", "alt":"archives"},
		{"image":"pulp-issueone", "alt":"archives"},
		{"image":"pulp-table", "alt":"archives"}
	],
	"unique": [
		{"image":"unique", "alt":"archives"},
		{"image":"unique_02", "alt":"archives"}
	]
}

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
		console.log(this.slide);
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

document.addEventListener("DOMContentLoaded", function() {
	let images = document.querySelectorAll('.image');
	images.forEach( image => {	
		let img = image.querySelector('img');
		let projectName = img.dataset.name;
		let projectImages = portfolio[projectName];
		let slideshow = new Slideshow(projectImages);

		image.onclick = function(event){			
			slideshow.nextSlide();
			
			let displayedImage = event.target;
			displayedImage.src = slideshow.imageSrc();
			displayedImage.alt = slideshow.imageAlt();
		}
	})
})





































