$(document).ready(
  function() {
    $('.dropdown_parent > a').mouseenter(
      function() {
        $('.dropdown').removeClass('active');
        $(this).next('.dropdown').addClass('active');
      }
    );
    $('.dropdown_parent > a').mouseleave(
      function() {
        $(this).next('.dropdown').removeClass('active');
    });
  }
);
