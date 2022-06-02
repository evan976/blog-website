import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  .swiper-container {
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.bg.primary};
  }
`