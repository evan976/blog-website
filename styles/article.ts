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
      align-items: center;
      .article-title {
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: 600;
        line-height: 1.5;
        color: ${props => props.theme.text.primary};
        text-align: center;
      }

      .article-meta {
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
    }
  }

  .article-toc {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-left: 10px;
  }
`