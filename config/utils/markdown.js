const markdownIt = require('markdown-it');
const markdownKbd = require('markdown-it-kbd');
const markdownAnchor = require('markdown-it-anchor');
const markdownMark = require('markdown-it-mark');
const markdownClass = require('markdown-it-class');

const markdown = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  // Assigns links to the
  .use(markdownAnchor, {
    level: [1, 2, 3],
  })
  // [[x]] gets rendered as <kbd>x</kbd>
  .use(markdownKbd)
  // ==highlight== this gets translated to <mark>
  .use(markdownMark)
  .use(markdownClass, {
    h1: ['text-2xl', 'sm:text-3xl', 'font-bold', 'mb-2', 'mt-8'],
    h2: ['text-xl', 'sm:text-3xl', 'font-bold', 'mb-2', 'mt-7'],
    h3: ['text-lg', 'sm:text-2xl', 'font-bold', 'mb-0', 'mt-3'],
    p: ['mb-4'],
    a: ['font-bold', 'underline'],
    ul: ['mb-5', 'ml-7', 'list-disc'],
    li: ['mb-1'],
  });

module.exports = markdown;
