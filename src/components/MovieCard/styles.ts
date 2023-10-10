import styled from 'styled-components'

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 22.375rem;
`

export const ImageContainer = styled.div`
  border: 1px solid var(--gray-200);
  background: var(--gray-200);
  padding: 3rem 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MovieDetails = styled.div`
  padding: 1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--base-white);
  border-radius: 6px;
  box-shadow: 0px 0.25rem 8px 0px rgba(12, 25, 50, 0.2);
  height: 100%;
  justify-content: space-between;

  h2 {
    color: var(--charcoal);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.375rem;
  }

  span {
    color: var(--charcoal-60);
    font-size: 0.875rem;
    line-height: 1rem;
    margin: 0.5rem 0 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      color: var(--charcoal-80);
      font-size: 0.875rem;
      line-height: 0.875rem;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: flex-start;

    strong {
      color: var(--charcoal-80);
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1rem;
    }

    span {
      color: var(--charcoal-60);
      font-size: 0.875rem;
      line-height: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0;
    }
  }
`
