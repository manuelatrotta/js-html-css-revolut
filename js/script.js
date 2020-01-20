$(document).ready(
  function() {
    $('.dropdown_parent > a').mouseover(
      function() {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
