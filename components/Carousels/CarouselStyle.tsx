import styled from "styled-components";

export default styled.div`
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
  width: 100%;
  height: 100%;

  .swiper-pagination-bullet{
    background: black;
    opacity: 1;
    transition:0.1s;
  }
  .swiper-pagination-bullet-active{
    background: white !important;
    transition:0.1s;
    transform: scale(1.2);
  }
`