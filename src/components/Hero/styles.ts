import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    margin-bottom: 0.5rem;
    color: var(--charcoal);
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-400);

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input {
      width: 100%;
    }
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.625rem;

  input {
    padding: 0.6875rem 0.4375rem 0.6875rem 0.6875rem;
    border-radius: 2px;
    border: 1px solid var(--gray-300);
    background: var(--base-white);
    font-size: 0.875rem;
    line-height: 1rem;
    color: var(--charcoal);
    transition: border-color 0.2s;

    &::placeholder {
      color: var(--charcoal-60);
    }

    &:focus {
      outline: 2px solid var(--purple-primary);
    }

    &:hover {
      border: 1px solid var(--gray-200);
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`
