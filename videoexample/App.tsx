const App = () => {
  const [page, setPage] = userState<number>(PAGES.HOME)
  const [genre, setGenre] = userState<IGenre | undefined>(undefined)
  const [movie, setMovie] = userState<IMovie | undefined>(undefined)
  
  const chooseGenre = (lGenre : IGenre) => {
    setGenre(lGenre)
    setPage(PAGES.GENRE)
  }

  const chooseMovie = (lMovie : IMovie) => {
    setGenre(lMovie)
    setPage(PAGES.MOVIE)
  }

  const backToGenres = () => {
    setMovie(undefined)
    setPage(PAGES.GENRE)
  }

  const backToHome = () => {
    setMovie(undefined)
    setGenre(undefined)
    setPage(PAGES.HOME)
  }

  switch(page) {
    case PAGES.HOME:
      return <Home chooseGenre={chooseGenre} />
    case PAGES.GENRE:
      return (
        <Genre
          backToHome={backToHome}
          genre={genre}
          chooseMovie={chooseMovie}
        />
      )
    case PAGES.MOVIE:
      return <Movie backToGenres={backToGenres} movie={movie} />
  }
}