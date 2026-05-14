module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/css": "css",
        "src/js": "js",
        "src/images": "images"
    });

    return {
        dir: {
            input: "docs",
            output: "_site",
            includes: "../src/_includes",
            layouts: "../src/_layouts"
        }
    };
};