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

document.addEventListener("DOMContentLoaded", function() {
	let images = document.querySelectorAll('.image');

	images.forEach( image => {
		let slide = 0;
		image.onclick = function(event) {
			let projectName = event.target.dataset.name;
			let projectImages = portfolio[projectName];
			let displayedImage = event.target;

			if (slide < projectImages.length - 1) {
				slide = slide + 1;	
			} else {
				slide = 0;
			}		

			imageSlider(slide, projectImages, displayedImage);
		};
	})
})

function imageSlider(slide, projectImages, displayedImage) {
	let currentImage = projectImages[slide];
	updateImageData( slide, currentImage, displayedImage );
}

function updateImageData( slide, currentImage , displayedImage) {
	displayedImage.src = `content/${currentImage.image}.jpg`
	displayedImage.alt = currentImage.alt

	if (currentImage.type) {
		fileType = currentImage.type
		displayedImage.src = `content/${currentImage.image}.${fileType}`
	}
}





































