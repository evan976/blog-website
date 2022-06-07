import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${props => props.theme.bg.primary};
  padding: 10px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 12px 10px;
  }
`

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-body {
    height: 100%;
    width: 100%;
    min-height: 2rem;

    .swiper-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      list-style: none;
      transition: opacity 0.5s linear;

      a {
        display: block;
        height: 100%;
      }

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
      }
    }
  }

  .swiper-pagination {
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: 2;
    width: 100%;
    text-align: center;

    span {
      display: inline-block;
      opacity: 0.3;
      margin: 0 5px;
      width: 18px;
      height: 6px;
      background: #333;
      border-radius: 1px;
      cursor: pointer;
      transition: all 0.3s;

      &.active {
        background: #ccc;
        width: 36px;
      }
    }

    @media screen and (max-width: 768px) {
      span {
        width: 15px;
        &.active {
          width: 30px;
        }
      }
    }
  }

  .swiper-btn {
    width: 20px;
    height: 32px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    opacity: 0;
    transition: all 0.5s;
    cursor: pointer;

    &.prev {
      left: 0;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }

    &.next {
      right: 0;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }

  &:hover .swiper-btn {
    opacity: 1;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  border-radius: 2px;
  background: ${props => props.theme.bg.secondary};

  .list-header {
    padding: 20px 16px;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    .nav-item {
      padding: 0 1.2rem;
      border-right: 1px solid hsla(0, 0%, 59.2%, .2);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:last-child {
        border-right: none;
      }

      &.active > span {
        color: ${props => props.theme.text.link};
      }

      span {
        font-size: ${props => props.theme.fontSizes[1]};
        color: ${props => props.theme.text.tertiary};
        transition: all 0.3s;

        &:hover {
          color: ${props => props.theme.text.link};
        }
      }


    }
  }

  @media screen and (max-width: 768px) {
    .list-header {
      padding: 16px 10px;
    }
  }

  .article-item {
    overflow: hidden;
    position: relative;
    padding: 15px 20px 0;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.hover.secondary};
    }

    @media (any-hover: hover) {
      &:hover {
        background: ${props => props.theme.hover.secondary};
      }
    }

    .main {
      margin-top: 6px;
      padding-bottom: 15px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

      .meta-container {
        display: flex;
        align-items: center;
        font-size: ${props => props.theme.fontSizes[0]};

        .date {
          position: relative;
          padding-right: 10px;
          color: ${props => props.theme.text.placeholder};
          border-right: 1px solid hsla(0, 0%, 59.2%, .2);
        }
        
        .tag-list {
          display: flex;
          align-items: center;

          a {
            position: relative;
            flex-shrink: 0;
            padding: 0 8px;
            color: ${props => props.theme.text.placeholder};
            transition: color 0.3s;

            &:hover {
              color: ${props => props.theme.text.link};
            }
          }
        }
      }

      .content-wrapper {
        display: flex;
        margin-top: 10px;
        width: 100%;

        .content-main {
          flex: 1 1 auto;
          margin-right: 24px;

          .title {
            display: flex;
            margin-bottom: 8px;

            a {
              line-height: 24px;
              color: ${props => props.theme.text.primary};
              font-size: ${props => props.theme.fontSizes[2]};
            }
          }

          .summary {
            color: ${props => props.theme.text.quarternary};
            font-size: ${props => props.theme.fontSizes[1]};
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;

          }

          .action-list {
            display: flex;
            align-items: center;
            margin-top: 12px;
            font-size: ${props => props.theme.fontSizes[1]};

            .item {
              padding-right: 32px;
              color: ${props => props.theme.text.placeholder};
              display: flex;
              align-items: center;

              span {
                margin-left: 4px;
              }
            }
          }
        }

        .content-image {
          flex: 0 0 auto;
          width: 120px;
          height: 80px;
          margin-left: 24px;
          background-color: ${props => props.theme.bg.secondary};

          @media screen and (max-width: 768px) {
            margin-left: 0;
          }
        }
      }
    }
  }
`

export const LoadImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 2px;
  overflow: hidden;

  .lazy-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 1.2s opacity, 0.3s transform;
    border-radius: 2px;
    will-change: transform, opacity;
    &.active {
      opacity: 1;
      position: relative;
      z-index: 99;
    }
  }

  .lazy-image-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 2px;
    background: ${props => props.theme.bg.inset};
    animation: 3s linear 0s infinite normal none running breathe;
  }
`

export const CardContainer = styled.div`
  background: ${props => props.theme.bg.secondary};
  border-radius: 2px;
  margin-bottom: 10px;

  .header {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    font-size: ${props => props.theme.fontSizes[1]};
    border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);

    h2 {
      margin-left: 5px;
    }
  }

  .content {
    padding: 12px 20px;

    .item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      line-height: 26px;

      .index {
        width: 16px;
        height: 16px;
        border-radius: 1px;
        background-color: ${props => props.theme.bg.input};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${props => props.theme.fontSizes[0]};

        &.first {
          background-color: #ff461f;
        }

        &.second {
          background-color: #ff9f1f;
        }

        &.third {
          background-color: #0eb83a;
        }
      }

      a {
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 5px;
        color: ${props => props.theme.text.tertiary};
        font-size: ${props => props.theme.fontSizes[1]};
        transition: color 0.3s;

        &:hover {
          color: ${props => props.theme.text.link};
        }
      }
    }

    .comment-list {
      width: 100%;
      display: flex;
      flex-direction: column;

      .comment-item {
        display: flex;
        margin: 5px 0;

        .avatar {
          width: 32px;
          height: 32px;

          a {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 2px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 2px;
            }
          }
        }

        .comment-content {
          flex: 1 1 auto;
          margin-left: 10px;

          .info {
            display: flex;
            font-size: ${props => props.theme.fontSizes[0]};
            color: #86909c;
            align-items: center;

            .author {
              margin-right: 10px;

              a {
                color: #86909c;

                &:hover {
                  color: ${props => props.theme.text.link};
                }
              }
            }
          }

          .body {
            margin-top: 5px;
            font-size: ${props => props.theme.fontSizes[1]};
            color: ${props => props.theme.text.tertiary};
          }
        }
      }
    }
  }
`

export const FooterContainer = styled.footer`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0 10px 10px 10px;
  }

  .link {
    a {
      display: inline-block;
      margin: 0 4px;
      color: ${props => props.theme.text.tertiary};
    }
  }

  p {
    font-size: ${props => props.theme.fontSizes[0]};
    line-height: 16px;
    color: ${props => props.theme.text.tertiary};
    a {
      transition: color 0.3s;
      color: ${props => props.theme.text.tertiary};
      &:hover {
        color: ${props => props.theme.text.link};
      }
    }
    @media screen and (max-width: 768px) {
      line-height: 20px;
    }
  }
`

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 256px;
  height: 32px;
  border: 1px solid hsla(0, 0%, 59.2%, .2);
  border-radius: 2px;
  transition: all 0.3s;
  margin-left: 200px;

  .search-form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    label {
      width: 32px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.text.tertiary};
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      color: ${props => props.theme.text.tertiary};

      &::placeholder {
        color: ${props => props.theme.text.placeholder};
      }
    }
  }

  &:focus-within {
    width: 320px;
    border-color: ${props => props.theme.hover.primary};
  }

  &:focus-within .search-form label {
    color: ${props => props.theme.hover.primary};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.bg.primary};

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;

    img {
      border-radius: 50%;
      background-color: #ffffff;
    }

    span {
      margin-top: 16px;
      font-size: ${props => props.theme.fontSizes[3]};
    }
  }

  .dark-action {
    text-align: center;
  }

  .menu {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;

    .item {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      a {
        color: ${props => props.theme.text.tertiary};
      }

      &.active {
        background: ${props => props.theme.hover.primary};
        a {
          color: #ffffff;
        }
      }
    }
  }
`

export const MobileSearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: ${props => props.theme.bg.secondary};
  padding: 0 10px;
  display: flex;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  transform: translateY(-100%);
  transition: all .3s;

  &.is-show {
    opacity: 1;
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
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 156px;
  background: ${props => props.theme.bg.secondary};
  width: 100%;
  color: ${props => props.theme.text.tertiary};
  font-size: ${props => props.theme.fontSizes[1]};
`