module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "docs",
            output: "_site",
            includes: "../src/_includes",
            layouts: "../src/_layouts"
        }
    };
};