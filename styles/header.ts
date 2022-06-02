import styled from 'styled-components'

export const Container = styled.div`
  height: 64px;
  background: ${props => (props.theme.bg.secondary)};
  color: ${props => (props.theme.text.primary)};
  font-size: ${props => (props.theme.fontSizes[2])};
  position: sticky;
  top: 0;
  z-index: 99;
  opacity: .8;

  .header-wrapper {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`