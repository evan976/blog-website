import styled from 'styled-components'

export const ArticleContainer = styled.div`
  display: flex;

  .article-detail {
    width: 840px;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    background-color: ${props => props.theme.bg.secondary};
    border-radius: 2px;

    .article {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      .article-title {
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: 600;
        line-height: 1.5;
        color: ${props => props.theme.text.primary};
        text-align: center;
      }

      .article-meta {
        text-align: center;
        color: ${props => props.theme.text.tertiary};
        font-size: ${props => props.theme.fontSizes[1]};
      }

      .article-image {
        width: 100%;
        height: auto;
        margin: 20px 0;
        border-radius: 2px;

        img {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
      }

      .article-content {
        height: auto;
        overflow-y: auto;
      }
    }
  }

  .article-toc {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-left: 10px;
    padding: 20px;
    background-color: ${props => props.theme.bg.secondary};
    align-self: flex-start;
    position: sticky;
    top: 74px;

    .affix {
      max-height: 100vh;

    }
  }

  @media screen and (max-width: 768px) {
    .article-detail {
      width: 100%;
      padding: 10px;
    }

    .article-toc {
      display: none;
    }

    .article-content {
      width: 100%;
    }
  }
`

export const ArticleSkeletonContainer = styled.div`
  .module {
    border-radius: 2px;

    .content-skeleton {
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .main {
        flex: 1;

        .meta {
          width: 30%;
          height: 16px;
          margin-bottom: 12px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .content-skeleton {
        padding: 10px 20px;

        .main {
          .meta {
            margin-bottom: 6px;
          }

          .content {
            > .paragraph-line {
              margin-bottom: 6px !important;
            }
          }
        }
      }
    }
  }
`

export const LastestArticleSkeletonWrap = styled.div`
  .module {
    margin: 5px 0;

    .content-skeleton {
      display: flex;
      align-items: center;

      .line-content {
        flex: 1;
        height: 16px;
        margin-left: 10px;
      }
    }
  }
`