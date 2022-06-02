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
    align-items: center;

    .logo {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
        color: ${props => (props.theme.text.link)};
        font-size: ${props => (props.theme.fontSizes[4])};
      }
    }

    .menu {
      display: flex;
      margin-left: 80px;

      .item {
        margin: 0 32px;

        &.active a {
            color: ${props => (props.theme.text.link)};
          }

        a {
          transition: color .2s;
          color: ${props => (props.theme.text.secondary)};

          &:hover {
            color: ${props => (props.theme.text.link)};
          }
        }
      }
    }

    .action {
      margin-left: auto;
    }
  }
`