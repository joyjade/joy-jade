$(document).ready(function(){
  $(".image").show();

  setTimeout(function () {
    $(".project-photos").css("height", "auto")}, 800);

  let $projectname = $('.project-name');

  function clearSelection() {
    $projectname.removeClass('active');
    $('.project-description').hide();
  }

  $(document).click(function(e) {
      let container = $(".projects, .contents");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        clearSelection();
      }
  });

  //scrolls
  $projectname.on('click', function(e) {
    e.preventDefault;
    event.stopPropagation();
    clearSelection();

    let $projectid = $(this).data('id');
    $('.contents').scrollTo(('#' + $projectid), 800);
    $(this).addClass('active').find('.project-description').show();
  });


  $('.project-photos').on('click', function (e) {
    e.preventDefault();
    clearSelection();

    let photoId = $(this).attr('id');
    $('.contents').scrollTo(("#" + photoId), 800);
    $('.project-name[data-id="' + photoId + '"]')
      .addClass('active').find('.project-description').show();

  });

  //image slide (Flickity)

  let $photos = $('.project-photos').flickity({
    pageDots: false,
    // lazyLoad: true,
    wrapAround: true,
  });


  //open info

  $('.open').on('click', function(e) {
    e.preventDefault;
    $('.off-canvas').toggleClass('slide hide-for-small');
    $('.open').toggleClass('move-right');
    $('.open img').toggleClass('rotate');
  });


});
