import styled from 'styled-components'

export const Container = styled.div`
  height: 64px;
  background: ${props => (props.theme.bg.secondary)};
  color: ${props => (props.theme.text.primary)};
  font-size: ${props => (props.theme.fontSizes[2])};
  position: sticky;
  top: 0;
  z-index: 9999;
  opacity: .9;
  width: 100%;

  @media screen and (max-width: 768px) {
    opacity: 1;
  }



  .header-wrapper {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
      }

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

    @media screen and (max-width: 768px) {
      padding: 0 10px;
      justify-content: space-between;

      .action, .menu, .logo > span {
        display: none;
      }

      .menu-action {
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-menu {
          width: 1.2em;
          height: 1.2em;
          color: ${props => (props.theme.text.secondary)};
        }
      }

      .search-action {
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-search {
          width: 1.2em;
          height: 1.2em;
          color: ${props => (props.theme.text.secondary)};
        }
      }
    }

    @media screen and (min-width: 768px) {
      .search-action, .menu-action {
        display: none;
      }
    }
  }

  .mobile-nav {
    font-size: 16px;
    position: fixed;
    background-color: ${props => (props.theme.bg.secondary)};
    height: 100vh;
    width: 70%;
    opacity: 0;
    top: 0;
    z-index: 99999;
    transform: translateX(-100%);
    transition: all .3s ease-out;
    &.is-open {
      transform: translateX(0);
      overflow: hidden;
      opacity: 1;
    }
  }

  .mask {
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${props => (props.theme.bg.secondary)};
    width: 100%;
    height: 100vh;
    opacity: 0;
    z-index: 99998;
    transform: translateX(100%);
    transition: opacity .3s linear;
    cursor: pointer;
    &.is-active {
      transform: translateX(0);
      overflow: hidden;
      opacity: .8;
    }
  }

  .mobile-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: ${props => props.theme.bg.secondary};
    padding: 0 10px;
    display: flex;
    align-items: center;
    z-index: 99999;
    /* opacity: 0; */
    transform: translateY(-100%);
    transition: all .3s;

    &.is-show {
      /* opacity: 1; */
      transform: translateY(0);
    }

    .search-form {
      width: 100%;
      height: 32px;

      .search-input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${props => props.theme.text.tertiary};
        padding: 0 10px;
        font-size: ${props => props.theme.fontSizes[1]};
      }
    }

    .close-action {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;

      .icon-close {
        width: 1.25em;
        height: 1.25em;
        color: ${props => props.theme.text.tertiary};
      }
    }
  }
`