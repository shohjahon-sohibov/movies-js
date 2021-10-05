var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute("class", className);
  if (text) {
    element.textContent = text;
  }

  return element;
};
  // elNewMovie.querySelector('.js-movie-you-tube-id').textContent = `Watch trailer`;
  // elNewMovie.querySelector('.js-movie-you-tube-id').href = `https://www.youtube.com/watch?v=${movies.ytid}`;