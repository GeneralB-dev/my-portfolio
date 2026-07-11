document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.case-card');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        var type = card.getAttribute('data-type');
        if (filter === 'all' || filter === type) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
