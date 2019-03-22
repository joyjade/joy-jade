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
    e.preventDefault();
    $('.project-name').removeClass('active');

    var photoId = "#" + $(this).attr('id');
    $('.contents').scrollTo((photoId), 800);
    $('.project-name[data-id="' + photoId + '"]').addClass('active');

    //image slide -> this is still super buggy. maybe need to unbind some things

    $(this).click(function() {
      e.preventDefault();
      var $this = $(this).find('.show');
      if ($this.next('.image').length) {
        $this.removeClass('show').next('.image').addClass('show');
      } else {
        $this.removeClass('show');
        $this.closest('.project-photos').find('.image:first-child').addClass('show');
      }
    })
  });

  // var current = 0;
  // var photoCount = $(photoId).children().length;




  //open info

  $('.open').on('click', function(e) {
    e.preventDefault;
    $('.off-canvas').toggleClass('hide');
    $('.close').on('click', function (e) {
      $('.off-canvas').addClass('hide');
    });
  });






});
