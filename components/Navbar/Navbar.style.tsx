import styled from "styled-components";

export default styled.nav`

  .nav-container {
    :before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: -100%;
      z-index: -1;
      background-color: #fff;
      transition: all 1s cubic-bezier(.25, .8, .25, 1);
    }
    &:hover {
      :before {
        top:0;
      }
      color:black !important;
    }
    transition: all 1s cubic-bezier(.25, .8, .25, 1);
  }
`