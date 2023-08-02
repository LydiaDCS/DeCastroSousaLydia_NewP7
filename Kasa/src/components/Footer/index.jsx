import styled from 'styled-components'
function Footer() {

  const CardFooter = styled.h3`
background-color: black;
color:white;
padding:20px;
display:flex;
justify-content:center;

`

  return (
    <div>
      <img alt="photologement" height={80} width={80} />
      <CardFooter>@2020 Kasa. All rights reserved</CardFooter>
    </div>
  )
}

export default Footer