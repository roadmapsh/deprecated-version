module.exports = {
  isExternalUrl: function (url) {
    // Starts with a protocol (it's a full URL) or is a resource
    return /(^http(s)?:\/\/)|(\.(png|svg|jpeg|jpg)$)/.test(url);
  },
};
