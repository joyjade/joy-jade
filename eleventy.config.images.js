const eleventyImage = require("@11ty/eleventy-img");

// function isFullUrl(url) {
// 	try {
// 		new URL(url);
// 		return true;
// 	} catch(e) {
// 		return false;
// 	}
// }


module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes="(max-width: 800px) 100vw, 800px", loading = "lazy", cls) {
		let formats = ["webp", "auto"];
		// let input;
		// if(isFullUrl(src)) {
		// 	input = src;
		// } else {
		// 	input = relativeToInputPath('http://localhost:8081/img/', src);
		// }

		let metadata = await eleventyImage(src, {
			widths: widths || ["auto"],
			formats,
			outputDir: './_site/img/' // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		});

		let imageAttributes = {
      class: cls,
			alt,
			sizes,
			loading: loading,
			decoding: "async",
		};

		return eleventyImage.generateHTML(metadata, imageAttributes);
	});
};