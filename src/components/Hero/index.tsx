import { Movie } from '../../pages/Home'
import { SelectFilter } from './components/SelectFilter'
import {
  Content,
  FilterContainer,
  HeroContainer,
  TitleContainer,
} from './styles'

interface HeroProps {
  movies: Movie[]
  onSetFilteredMovies: (newFilteredMovies: Movie[]) => void
}

export function Hero({ movies, onSetFilteredMovies }: HeroProps) {
  const totalBudget = movies.reduce(
    (acc, movie) => acc + movie.budgetInMillions,
    0,
  )

  const totalRuntime = movies.reduce(
    (acc, movie) => acc + movie.runtimeInMinutes,
    0,
  )

  function handleFilter(text: string) {
    const newFilteredMovies = movies.filter((movie) => {
      return movie.name.toLowerCase().includes(text.toLowerCase())
    })
    onSetFilteredMovies(newFilteredMovies)
  }

  return (
    <HeroContainer>
      <h1>Lord of the Rings Movies</h1>
      <Content>
        <TitleContainer>
          <p>Ave. movie runtime: {totalRuntime} min</p>
          <p>Ave. movie budget: ${totalBudget}M</p>
        </TitleContainer>
        <FilterContainer>
          <input
            type="text"
            placeholder="Filter movies by name"
            onChange={(e) => handleFilter(e.target.value)}
          />

          <SelectFilter
            movies={movies}
            onSetFilteredMovies={onSetFilteredMovies}
          />
        </FilterContainer>
      </Content>
    </HeroContainer>
  )
}
