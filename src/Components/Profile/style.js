import styled from "styled-components"
import { BaseButton } from "../BaseComponents/style"
import { Link } from "react-router-dom"

export const Container = styled.div`
  position: relative;
  z-index: 1;

  margin: 0 1em;
  padding: 1em;

  display: flex;
`

// export const Name = styled.h1`
//   align-self: start;
//   margin: 0;
// `

export const Name = styled(Link)`
  align-self: start;
  margin: 0;

  color: var(--clr-primary);
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
`

export const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 50%;
  z-index: -1;
  border-radius: var(--radius-small) var(--radius-small) 0 0;
  background-color: var(--clr-bg-post);
`

export const Group = styled.div`
  flex-grow: 1;
  padding: 0 1em;
`

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  object-fit: cover;
`

export const Friends = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`

export const Icon = styled.span`
  display: grid;
  place-content: center;
  margin-left: -0.2rem;
  padding-right: 0.3rem;
`

export const Button = styled(BaseButton)`
  place-self: center;

  ${({ isActive }) =>
    isActive &&
    `
  border: 1px solid var(--clr-action);
  color: var(--clr-action);
  background-color: var(--clr-light);
  `}
`
