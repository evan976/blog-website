import styled from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;

  .about-bg {
    width: 100%;
    height: 100%;
    position: sticky;
    top: 64px;
    z-index: 1;
  }

  .about-content {
    height: 100%;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    background-color: ${props => props.theme.bg.primary};
    padding: 10px;

    .md-previewOnly {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .about-bg {
      display: none;
    }
  }
`