$(document).ready(function(){
  //scrolls
  var $projectname = $('.project-name')
  $projectname.on('click', function(e) {
    e.preventDefault;
    $projectname.removeClass('active');

    var $projectid = $(this).data('id');
    $('.contents').scrollTo(('#' + $projectid), 800);
    $(this).addClass('active');
  });

  $('.project-photos').on('click', function (e) {
    e.preventDefault;
    $('.project-name').removeClass('active');

    var photoId = $(this).attr('id');
    $('.contents').scrollTo(('#' + photoId), 800);
    $('.project-name[data-id="' + photoId + '"]').addClass('active');
  });

  //open info

  $('.open').on('click', function(e) {
    e.preventDefault;
    $('.off-canvas').toggleClass('hide');
    $('.close').on('click', function (e) {
      $('.off-canvas').addClass('hide');
    });
  });

});
