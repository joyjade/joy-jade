$(document).ready(function(){
  $(".image").show();

  setTimeout(function () {
    $(".project-photos").css("height", "auto")}, 800);

  var $projectname = $('.project-name');

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

  //image slide (Flickity)

  var $photos = $('.project-photos').flickity({
    pageDots: false,
    lazyLoad: true,
    wrapAround: true,
    arrowShape: "M7.43277675,1 L9,2.47597098 L4.196,6.999 L33,7 L33,9 L4.196,8.999 L9,13.524029 L7.43277675,15 L0,8 L7.43277675,1 Z"
  });


  //open info

  $('.open').on('click', function(e) {
    e.preventDefault;
    $('.off-canvas').toggleClass('show hide-for-small');
    $('.open').toggleClass('move-right');
    $('.open img').toggleClass('rotate');
  });


});
