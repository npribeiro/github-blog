import styled from 'styled-components'

export const PostCardContainer = styled.button`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-code-post']};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme['base-code-post']};
  outline: 0;
  transition: 300ms;
  overflow: hidden;
  text-align: left;

  header {
    margin-bottom: 1.25rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme['base-title']};
      font-size: 1.25rem;
      line-height: 160%;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
      text-align: right;
      margin-left: 1.5rem;
    }
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;

    p {
      text-align: left;
      line-height: 160%;
      color: ${({ theme }) => theme['base-text']};
    }
  }

  &:hover {
    transition: border-color 0.3s;
    border-color: ${({ theme }) => theme['base-label']};
  }
`
