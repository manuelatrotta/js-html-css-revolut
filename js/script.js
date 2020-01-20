$(document).ready(
  function() {
    $('.dropdown_parent > a').click(
      function() {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
