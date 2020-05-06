const myFavMovie = {
  title: 'Pulp Fiction',
  duration: 120,
  stars: ['John Travolta', 'Samuel. L. Jackson']
};

const printMovie = (movie) => {
  console.log(`${movie.title} lasts for ${movie.duration} minutes.`)
  console.log(`It stars ${myFavMovie.stars.join(', ')}`)
}

printMovie(myFavMovie);