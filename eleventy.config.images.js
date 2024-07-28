const eleventyImage = require("@11ty/eleventy-img");

// function relativeToInputPath(inputPath, relativeFilePath) {
// 	let split = inputPath.split("/");
// 	split.pop();

//   console.log(path);
// 	return path.resolve(split.join(path.sep), relativeFilePath);
// }

// function isFullUrl(url) {
// 	try {
// 		new URL(url);
// 		return true;
// 	} catch(e) {
// 		return false;
// 	}
// }

module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
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

		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		return eleventyImage.generateHTML(metadata, imageAttributes);
	});
};