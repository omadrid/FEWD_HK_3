 $(document).ready(function() {
  $('#primary-nav li').click(navClicked);
});

function navClicked() {
 
  var sectionName = $(this).find('a:first').attr('href');
  if ( $('#slide-down section:visible').length == 0) {
    $(this).addClass('selected');
    $(sectionName).slideDown();    
  } else if ( $(sectionName).is(":visible") ) {
    $(this).removeClass('selected');
    $(sectionName).slideUp();
  } else {
    $('#primary-nav li.selected').removeClass('selected');
    $(this).addClass('selected');
    $('#slide-down section:visible').hide();
    $(sectionName).show();
  }
  return false;
}