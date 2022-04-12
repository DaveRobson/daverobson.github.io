module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("CNAME");
}