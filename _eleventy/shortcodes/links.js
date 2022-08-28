const outdent = require('outdent')({ newline: ' ' });

module.exports = {
  Video: function (href, text) {
    return outdent`
      <p>
        <a href='${href}'>
          <span class='bg-purple-700 text-white'>Watch</span> ${text}
        </a>
      </p>
    `;
  },

  Blog: function (href, text) {
    return outdent`
      <p>
        <a href='${href}'>
          <span class='bg-yellow-400 text-black'>Read</span> ${text}
        </a>
      </p>
    `;
  },

  Course: function (href, text) {
    return outdent`
      <p>
        <a href='${href}'>
          <span class='bg-green-700 text-white'>Course</span> ${text}
        </a>
      </p>
    `;
  },

  Official: function (href, text) {
    return outdent`
      <p>
        <a href='${href}'>
          <span class='bg-blue-700 text-white'>Official</span> ${text}
        </a>
      </p>
    `;
  },
};
