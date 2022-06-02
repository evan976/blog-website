import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${props => props.theme.bg.primary};
  padding: 10px 0;
`

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 10px;
  background: ${props => props.theme.bg.secondary};
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
  background: ${props => props.theme.bg.secondary};

  .list-header {
    padding: 1.3rem 1rem;
    border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
    display: flex;

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

      &.active > a {
        color: ${props => props.theme.text.link};
      }

      a {
        font-size: ${props => props.theme.fontSizes[1]};
        color: ${props => props.theme.text.tertiary};
        transition: all 0.3s;

        &:hover {
          color: ${props => props.theme.text.link};
        }
      }


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
          color: #86909c;
          border-right: 1px solid hsla(0, 0%, 59.2%, .2);
        }
        
        .tag-list {
          display: flex;
          align-items: center;

          a {
            position: relative;
            flex-shrink: 0;
            padding: 0 8px;
            color: #86909c;
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
              font-weight: 700;
              line-height: 24px;
              color: ${props => props.theme.text.primary};
              font-size: ${props => props.theme.fontSizes[2]};
            }
          }

          .summary {
            color: #86909c;
            font-size: ${props => props.theme.fontSizes[1]};
            /* color: ${props => props.theme.text.tertiary}; */
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
            margin-top: 10px;
            font-size: ${props => props.theme.fontSizes[1]};

            .item {
              padding-right: 16px;
              color: #86909c;
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
    transition: 1.2s opacity, 0.3s transform;
    z-index: 1;
    border-radius: 2px;
    will-change: transform, opacity;
    &.active {
      opacity: 1;
      position: relative;
    }
  }

  .lazy-image-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    border-radius: 2px;
    background: ${props => props.theme.bg.inset};
    animation: 1.5s linear 0s infinite normal none running breathe;
  }
`