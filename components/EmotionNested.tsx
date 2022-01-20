import { css } from "@emotion/react"

export const EmotionNested = () => {

  return (
    <section css={sectionCss}>
      <header className={"header"}><h1>Header</h1></header>
      <form className={'form'}>
        <input className={"input"} />
        <input className={"input"} />
      </form>
      <footer className={"footer"}>
        <h1 className={"h1"}>Footer</h1>
      </footer>
    </section>
  )
}

const sectionCss = css`
  display: flex;

  .header {
    color: red
  }

  .form {
    color: blue
  }

  .input {
    color: yellow;
  }

  .footer {
    background-color: brown;
  }

  .h1 {
    font-size: 2rem;
  }
`
