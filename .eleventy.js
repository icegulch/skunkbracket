const util = require("util");

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
