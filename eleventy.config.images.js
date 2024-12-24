const eleventyImage = require("@11ty/eleventy-img");

// alternative way of bringing in the 11ty plugin 
// import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

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


// Output Widths
// Controls how many output images will be created for each image format. Aspect ratio is preserved.
// widths: ["auto"] (default, keep original width) "auto".
// widths: [200] (output one 200px width)
// widths: [200, "auto"] (output 200px and original width)

// Output Formats // full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
// Use almost any combination of these:
// formats: ["webp", "jpeg"] (default)
// formats: ["png"]
// formats: ["auto"] (keep original format) "auto"
// formats: ["svg"] (requires SVG input)
// formats: ["avif"]  warning: Avif can be resource-intensive so take care!


module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes="(max-width: 800px) 100vw, 800px", loading = "lazy", cls) {
		let formats = ["webp", "auto", "svg"];
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