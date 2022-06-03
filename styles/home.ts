import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  .home-left {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  .swiper-container {
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.bg.primary};
  }
`