const outdent = require('outdent')({ newline: ' ' });

module.exports = function resources(children, title = 'Free Content') {
  return outdent`
      <div class='mb-4 mt-7'>
        <h1 class='text-sm font-semibold uppercase mb-3 block text-gray-700 border-b border-b-gray-100'>${title}</h1>
        ${children}
      </div>
    `;
};
