var active_selector = '_img/static/slideshow_dot_hover.png';
var inactive_selector = '_img/static/slideshow_dot.png';
function switchImage(selectorId) {
  $('img.gallery.shown')
    .removeClass('shown')
    .addClass('hidden');
  $('#' + selectorId.replace('selector', 'gallery'))
    .removeClass('hidden')
    .addClass('shown');
}
function switchActive(clicked) {
  var old = $('img.selector.active')
    .removeClass('active')
    .addClass('inactive')[0];
  old.src = inactive_selector;
  clicked.src = active_selector;
  $(clicked).addClass('active').removeClass('inactive');
}

$('img.selector').click(function() {
  switchImage(this.id);
  switchActive(this);
});
$('img.selector').hover(function() {
  if ($(this).hasClass('inactive')) {
    this.src = active_selector;
  }
}, function() {
  if ($(this).hasClass('inactive')) {
    this.src = inactive_selector;
  }
});

function arrowHelp(selector) {
  var next = selector($('img.selector.active')[0]);
  if (next != null) {
    switchImage(next.id);
    switchActive(next);
  }
}

$('#gallery-forward').click(function() {
  arrowHelp(function(elem) { return elem.nextSibling.nextSibling; });
}).hover(function() {
  this.src = '_img/static/forward_hover.png'
}, function() {
  this.src = '_img/static/forward.png'
});

$('#gallery-back').click(function() {
  arrowHelp(function(elem) { return elem.previousSibling.previousSibling; });
}).hover(function() {
  this.src = '_img/static/back_hover.png';
}, function() {
  this.src = '_img/static/back.png';
});
