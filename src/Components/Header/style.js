import styled from "styled-components"
import { Link } from "react-router-dom"
import { MdExitToApp } from "react-icons/md"

export const Container = styled.header`
position: relative;
  grid-area: header;
  display: flex;
  /* justify-content: ${({ children }) =>
    children.length > 1 ? "space-between" : "center"}; */

  justify-content:center;
  align-items: center;
  border-radius: var(--radius-large) var(--radius-large) 0 0;
  padding: 0 1em;

  background-color: var(--clr-bg);
  color: var(--clr-primary);
`
export const Logo = styled.div`
  margin: 1rem 0;
  width: 4rem;
`

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const StyledLink = styled(Link)`
  padding-left: 1em;
  color: var(--clr-primary);
  text-decoration: none;
`
export const Exit = styled(MdExitToApp)`
  position: absolute;
  font-size: 1.5rem;
  right: 1em;
  cursor: pointer;

  &:hover {
    color: var(--clr-action);
  }
`
