const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/content");
  eleventyConfig.addPassthroughCopy("src/scripts");

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));


  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};