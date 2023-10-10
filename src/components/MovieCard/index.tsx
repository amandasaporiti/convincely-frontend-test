import { Movie } from '../../pages/Home'
import { EmptyIconMovie } from '../EmptyIconMovie'
import { OscarIcon } from '../OscarIcon'
import {
  Footer,
  ImageContainer,
  MovieCardContainer,
  MovieDetails,
} from './styles'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <MovieCardContainer>
      <ImageContainer>
        <EmptyIconMovie />
        {/* <img src="" alt="" /> */}
      </ImageContainer>
      <MovieDetails>
        <h2>{movie.name}</h2>
        <span>{movie.runtimeInMinutes} min</span>
        <div>
          <OscarIcon />
          <p>
            {movie.academyAwardWins} Wins & {movie.academyAwardNominations}{' '}
            Nominations
          </p>
        </div>
        <Footer>
          <div>
            <strong>Budget</strong>
            <span>${movie.budgetInMillions}M</span>
          </div>
          <div>
            <strong>Revenue</strong>
            <span>${movie.boxOfficeRevenueInMillions}M</span>
          </div>
        </Footer>
      </MovieDetails>
    </MovieCardContainer>
  )
}
