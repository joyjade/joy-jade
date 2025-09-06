(function() {
 
  let series = document.getElementsByClassName('series')[0], 
  movie = document.getElementsByClassName('movie');
  
  series.addEventListener('mouseover', function(event) {
    let movie = event.target.closest('.movie-still');
    if (!movie) return;
    let movieName = movie.dataset.id,
    still = document.querySelector(`[data-name = ${movieName}]`),
    stills = document.querySelectorAll(".stills > img");
    
    stills.forEach(still => still.classList.remove('show'));
    if(still) { still.classList.add('show');}
  })
  
  series.addEventListener('click', function(event) {
    function clear(items) {
      items.forEach(item => item.classList.remove('show'));
    }
    
    let dropdowns = document.querySelectorAll('.movie'),
        overflow = document.getElementsByClassName('overflow')[0],
        credits = document.getElementsByClassName('overflow')[1],
        clickedMovie = event.target.closest('.movie');
    
    if (event.target.matches('.show-overflow')) {
      credits.classList.remove('show');
      overflow.classList.toggle('show');
      clear(dropdowns);
    } else if (event.target.matches('.show-credits')) {
      overflow.classList.remove('show');
      credits.classList.toggle('show');
    } else if (clickedMovie.classList.contains('show')) {  
      console.log('hello!')
      clickedMovie.classList.remove('show');    
    } else {
      overflow.classList.remove('show');
      clear(dropdowns);
      clickedMovie.classList.add('show');
    }
  })
})();