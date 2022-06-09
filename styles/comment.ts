import styled from 'styled-components'

export const CommentContainer = styled.div`
  width: 100%;
  height: 100%;

  .header {
    position: relative;
    width: 100%;
    height: 120px;
    background-color: ${props => props.theme.bg.secondary};
    border-top: 1px solid hsla(0, 0%, 59.2%, .1);
    opacity: .9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 64px;

    .title {
      text-align: center;
      font-size: ${props => props.theme.fontSizes[5]};
      line-height: ${props => props.theme.lineHeights.heading};
      margin-bottom: 20px;
      color: ${props => props.theme.text.link};
    }

    .summary {
      text-align: center;
      color: #00bc12;
    }
  }

  .main-comtent {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  
    .add-comment {
      width: '100%';
      height: '100%';
      background-color: ${props => props.theme.bg.secondary};
      border-radius: 2px;
      padding: 15px 20px;
    }

    .comment-list {
      margin-top: 10px;
      width: 100%;
      height: auto;
      min-height: 100px;
      background-color: ${props => props.theme.bg.secondary};
      border-radius: 2px;
    }
  }
`

export const CreateCommentWrap = styled.div`
  width: 100%;
  height: 100%;

  .comment-form {
    width: 100%;
    height: 100%;

    .user-info {
      height: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      gap: 10px;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: auto;
      }

      .field {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        border: 1px solid hsla(0, 0%, 59.2%, .2);
        border-radius: 2px;
        padding: 0 10px;
        transition: all .3s;

        &:focus-within {
          border-color: ${props => props.theme.hover.primary};
        }

        label {
          font-size: ${props => props.theme.fontSizes[1]};
          color: ${props => props.theme.text.placeholder};
          width: 48px;
        }
      }

      input {
        outline: none;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        color: ${props => props.theme.text.secondary};
      }
    }

    .comment-content {
      margin-top: 10px;
      width: 100%;
      height: 120px;

      textarea {
        width: 100%;
        height: 100%;
        border: 1px solid hsla(0, 0%, 59.2%, .2);
        border-radius: 2px;
        padding: 10px;
        color: ${props => props.theme.text.secondary};
        resize: none;
        outline: none;
        background: transparent;
      }
    }

    .comment-submit {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;

      button {
        width: 80px;
        height: 32px;
        color: #fff;
        background-color: ${props => props.theme.hover.primary};
        border-radius: 2px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;

        &.disabled {
          background-color: ${props => props.theme.bg.primary};
          cursor: not-allowed;
        }

        span {
          margin-right: 5px;
        }
      }
    }
  }
`

export const CommentItemWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  .item {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.bg.primary};
    border-radius: 2px;
    padding: 15px 20px;

    .reply {
      margin-top: 10px;
    }

    .landlord-content,
    .reply-content {
      display: flex;
      align-items: center;
      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 2px;
        /* border: 1px solid hsla(0, 0%, 59.2%, .2); */
        overflow: hidden;
        background: ${props => props.theme.bg.inset};
        margin-right: 10px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .content {
        display: flex;
        flex-direction: column;

        .base-info {
          display: flex;
          font-size: ${props => props.theme.fontSizes[0]};
          color: ${props => props.theme.text.primary};

          .info-item {
            margin-right: 10px;
          }
        }

        .comment-content {
          margin: 10px 0;
          font-size: ${props => props.theme.fontSizes[1]};
          color: ${props => props.theme.text.secondary};
        }

        .action {
          display: flex;
          align-items: center;
          font-size: ${props => props.theme.fontSizes[0]};
          color: ${props => props.theme.text.tertiary};

          .action-country {
            margin-left: 10px;
          }


          .reply-action {
            margin-left: 15px;
            display: flex;
            align-items: center;
            cursor: pointer;

            span {
              margin-left: 5px;
            }
          }
        }
      }
    }

    .reply-content {
      padding: 12px 15px;
      border-radius: 2px;
      background: ${props => props.theme.bg.input};
    }
  }
`