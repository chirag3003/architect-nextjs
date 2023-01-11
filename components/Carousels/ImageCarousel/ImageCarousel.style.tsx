import styled from "styled-components"

export default styled.div`
  .image {
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center center;
    :before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      background: -moz-linear-gradient(top,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 100%);
    }
  }
  
`