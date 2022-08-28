const outdent = require('outdent')({ newline: ' ' });

module.exports = {
  Video: function (href, text) {
    return outdent`
      <a href='${href}'>
        <span class='bg-purple-700 text-white'>Watch</span> ${text}
      </a>
    `;
  },

  Blog: function (href, text) {
    return outdent`
      <a href='${href}'>
        <span class='bg-yellow-400 text-black'>Read</span> ${text}
      </a>
    `;
  },

  Course: function (href, text) {
    return outdent`
      <a href='${href}'>
        <span class='bg-green-700 text-white'>Course</span> ${text}
      </a>
    `;
  },

  Official: function (href, text) {
    return outdent`
      <a href='${href}'>
        <span class='bg-blue-700 text-white'>Official</span> ${text}
      </a>
    `;
  },
};
