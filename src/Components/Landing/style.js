import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  grid-column: 1 /-1;
  align-self: start;
  margin: 4rem auto;
  border-radius: var(--radius-large);
  width: 80%;
  background-color: var(--clr-bg-sidebar);
`

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 7rem 0 0;
  font-size: 3rem;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0.25rem;
    left: -0.5rem;
    right: 50%;
    height: 1rem;
    background-color: var(--clr-bg-post);
    transform: skew(-20deg);

    @media (min-width: 650px) {
      right: 0;
    }
  }
`

export const Subtitle = styled.p`
  margin-left: 1rem;
  margin-bottom: 2rem;
  width: 60%;
  font-size: 1.5rem;
`

export const StyledLink = styled(Link)`
  margin: 1em;
  border-radius: 0.5rem;
  padding: 1em;
  background-color: var(--clr-action);
  color: var(--clr-light);
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 100ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    &:active {
      transform: none;
    }
  }
`
