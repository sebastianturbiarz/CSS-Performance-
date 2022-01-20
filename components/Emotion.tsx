import { css } from "@emotion/react"

export const Emotion = () => {

  return (
    <section css={sectionCss}>
      <header css={headerCss}><h1>Header</h1></header>
      <form css={formCss}>
        <input css={inputCss} />
        <input css={inputCss} />
      </form>
      <footer css={footerCss}>
        <h1 css={h1Css}>Footer</h1>
      </footer>
    </section>
  )
}

const sectionCss = css`
  display: flex;

`

const headerCss = css`

  color: red
`

const formCss = css`

  color: blue
`

const inputCss = css`
  color: yellow;
`

const footerCss = css`
  background-color: brown;
`

const h1Css = css`
  font-size: 2rem;
`