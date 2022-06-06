import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  .home-left {
    width: 840px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .swiper-container {
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.bg.primary};
  }

  @media screen and (max-width: 768px) {
    .home-left {
      width: 100%;
    }
  }
`