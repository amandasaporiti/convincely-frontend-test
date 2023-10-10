import { Movie } from '../../../../pages/Home'
import { SelectStyled } from './styles'

interface SelectProps {
  movies: Movie[]
  onSetFilteredMovies: (movies: Movie[]) => void
}
interface BudgetOption {
  label: string
  value: number
}

export function SelectFilter({ movies, onSetFilteredMovies }: SelectProps) {
  function getOnlyBudgetValues(movies: Movie[]): number[] {
    return movies.map((movie) => movie.budgetInMillions) // [94, 95, 101, 265]
  }

  const onlyBudgets: number[] = getOnlyBudgetValues(movies)

  const budgetOptions: BudgetOption[] = [
    { value: 0, label: 'Select by budget' },
    ...onlyBudgets.map((budget) => ({
      value: budget,
      label: `${budget}M`,
    })),
  ]

  function handleChangeOption(selectedValue: BudgetOption) {
    const budgetValue = selectedValue.value

    if (!budgetValue) {
      onSetFilteredMovies(movies)
    }

    const newList =
      budgetValue === 0
        ? movies
        : movies.filter((movie) => movie.budgetInMillions === budgetValue)
    onSetFilteredMovies(newList)
  }

  return (
    <SelectStyled
      placeholder="Select by budget"
      options={budgetOptions}
      onChange={(selectedValue) =>
        handleChangeOption(selectedValue as BudgetOption)
      }
    />
  )
}
