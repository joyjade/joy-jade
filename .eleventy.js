const yaml = require("js-yaml");
require('dotenv').config();


// const site = require('./src/_data/site');
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

// /**
//  * Prefixes the given URL with the site's base URL.
//  * @param {string} url
//  */

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? `localhost:8081` : `https://www.joy-jade.com`;

const toAbsoluteUrl = (url) => {
  return new URL(url, baseUrl).href;
}

module.exports = function(eleventyConfig) {
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/content");
  eleventyConfig.addPassthroughCopy("src/scripts");

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args)
    debugger;
  })

  eleventyConfig.addFilter("linkungan", (x) => {
    if (process.env.NODE_ENV === 'development') {
      return `linkungan: dev`
    } else {
      return 'not dev'
    }
  });

  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  // eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,

    templateFormats: [
			"md",
			"njk",
			"html"
		],

    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },

    pathPrefix: "/",
  };
};