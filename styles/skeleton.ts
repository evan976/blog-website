import styled from 'styled-components'

export const Base = styled.div`
  width: 100%;
  height: 100%;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: ${props => (props.theme.bg.secondary)};
  background-image: linear-gradient(
    to right,
    #111111 8%,
    #444444 18%,
    #111111 33%
  );
  background-repeat: repeat;
  background-size: 800px 104px;
`

export const Line = styled.div`
  width: 100%;
  height: 100%;
`