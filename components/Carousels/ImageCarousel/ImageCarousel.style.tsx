import styled from "styled-components"

export default styled.div`
  .image {
    box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.6);

    line-height: 0; /* ensure no space between bottom */

    display: inline-block; /* don't go wider than image */
  }

  .image img {
    position: relative;
    z-index: -1; /* position beneath */
    filter: brightness(70%);
  }
`