$(document).ready(function(){

  var $projectname = $('.project-name')


  function clearSelection() {
    $projectname.removeClass('active');
    $('.project-description').hide();
  }

  $(document).click(function(e) {
      var container = $(".projects, .contents");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        clearSelection();
      }
  });

  //scrolls
  $projectname.on('click', function(e) {
    e.preventDefault;
    event.stopPropagation();
    clearSelection();

    var $projectid = $(this).data('id');
    $('.contents').scrollTo(('#' + $projectid), 800);
    $(this).addClass('active').find('.project-description').show();
  });


  $('.project-photos').on('click', function (e) {
    e.preventDefault();
    clearSelection();

    var photoId = $(this).attr('id');
    $('.contents').scrollTo(("#" + photoId), 800);
    $('.project-name[data-id="' + photoId + '"]')
      .addClass('active').find('.project-description').show();

  });

  //Image Slide (Flickity)

  $('.project-photos').flickity({
    pageDots: false,
    // prevNextButtons: false,
    wrapAround: true
  });

  //open info

  $('.open').on('click', function(e) {
    e.preventDefault;
    $('.off-canvas').toggleClass('show');
    $('.close').on('click', function (e) {
      $('.off-canvas').removeClass('show');
    });
  });






});
