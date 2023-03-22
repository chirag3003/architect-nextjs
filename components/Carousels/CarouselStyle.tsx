import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  .swiper-button-prev,.swiper-button-next{
    color: white;
    border:white 1px solid;
    height: 35px;
    width: 35px;
    border-radius: 100%;
  }
  .swiper-button-prev:after,.swiper-button-next:after{
    font-size:1rem !important;
  }
  .swiper-pagination-bullet{
    background: black;
    opacity: 1;
    transition:0.1s;
    border-radius: 0;
    height: 3px;
    width: 1.2rem;
  }
  .swiper-pagination-bullet-active{
    background: rgb(243 244 246) !important;
    transition:0.1s;
  }
`