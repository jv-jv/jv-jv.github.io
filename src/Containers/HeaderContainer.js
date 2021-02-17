// DO I EVEN USE IT ANYMORE ?

import React from "react"
import { Header } from "../Components"

export default function HeaderContainer(props) {
  return (
    <Header>
      <Header.Logo>Social</Header.Logo>
      <Header.Group>
        <Header.Link to="/">Landing</Header.Link>
        <Header.Link to="/home">Home</Header.Link>
        <Header.Link to="/signup">Sign Up</Header.Link>
        <Header.Link to="/signin">Sign In</Header.Link>
      </Header.Group>
    </Header>
  )
}
