import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { MovieCard } from '../../components/MovieCard'

import { MovieContainer, Movies } from './styles'

import { api } from '../../services/api'
import { Hero } from '../../components/Hero'

export interface Movie {
  _id: string
  name: string
  academyAwardNominations: number
  academyAwardWins: number
  budgetInMillions: number
  runtimeInMinutes: number
  rottenTomatoesScore: number
  boxOfficeRevenueInMillions: number
}

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  async function fetchMovies() {
    const {
      data: { docs },
    } = await api.get('/movie')
    setMovies(docs)
    setFilteredMovies(docs)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div>
      <Header />
      <MovieContainer>
        <Hero movies={movies} onSetFilteredMovies={setFilteredMovies} />
        <Movies>
          {filteredMovies &&
            filteredMovies.map((movie) => {
              return <MovieCard key={movie._id} movie={movie} />
            })}
        </Movies>
      </MovieContainer>
    </div>
  )
}
