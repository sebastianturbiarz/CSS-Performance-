import styled from "@emotion/styled"

export const Styled = () => {

  return (
    <StyledSection>
      <header className={"header"}><h1>Header</h1></header>
      <form className={'form'}>
        <input className={"input"} />
        <input className={"input"} />
      </form>
      <footer className={"footer"}>
        <h1 className={"h1"}>Footer</h1>
      </footer>
    </StyledSection>
  )
}

const StyledSection = styled('section')`
  display: flex;

  .header {
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
