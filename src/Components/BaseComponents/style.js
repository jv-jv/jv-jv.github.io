import styled from "styled-components"

export const BaseButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1em;
  background-color: var(--clr-action);
  color: var(--clr-light);
  font-size: 1rem;
  cursor: pointer;
  transition: transform 100ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    /* opacity: 0.5; */
    &:active {
      transform: none;
    }
  }
`
