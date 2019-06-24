import React from "react"
import styled from "styled-components"

const Button = styled.button`
  color: lightgreen;
  background: ${p => p.color};
  font-size: ${p => (p.big ? "3rem" : "1rem")};
  padding: 1rem;
  margin: 1rem;
`

export default Button
