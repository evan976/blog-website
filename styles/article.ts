import styled from 'styled-components'

export const ArticleContainer = styled.div`
  display: flex;

  .left-content {
    width: 840px;
    display: flex;
    flex-direction: column;

    .article-detail {
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

        .article-categorize {
          display: flex;
          font-size: ${props => props.theme.fontSizes[0]};

          .category {
            margin-right: 10px;
            display: flex;
            align-items: center;

            .item {
              padding: 5px 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: ${props => props.theme.text.tertiary};
              background: ${props => props.theme.bg.primary};
              border-radius: 2px;
            }
          }

          .tags {
            display: flex;
            align-items: center;

            .item {
              padding: 5px 10px;
              display: flex;
              justify-content: center;
              margin-right: 5px;
              align-items: center;
              border-radius: 2px;
            }
          }
        }
      }
    }

    .article-comment {
      margin-top: 10px;
      background-color: ${props => props.theme.bg.secondary};

      .add-comment {
        width: 100%;
        background-color: ${props => props.theme.bg.secondary};
        padding: 10px;
        border-radius: 2px;

        .add-comment-title {
          margin: 10px 0;
          font-size: ${props => props.theme.fontSizes[3]};
          color: ${props => props.theme.text.secondary};
        }
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
    .left-content {
      width: 100%;
      .article-detail {

        .article-categorize {
          flex-direction: column;

          .tags {
            margin-top: 10px;
          }
        }
      }

      .article-content {
        width: 100%;
      }
    }

    .article-toc {
      display: none;
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