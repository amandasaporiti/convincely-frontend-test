import styled from 'styled-components'

export const MovieContainer = styled.main`
  max-width: 63rem;
  margin: 2.5rem auto 0px;
  width: 100%;
  padding: 1rem;
`

export const Movies = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 1060px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 740px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
