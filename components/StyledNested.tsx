import styled from "@emotion/styled"

export const StylNested = () => {

  return (
    <SectionStyl>
      <HeaderStyl><h1>Header</h1></HeaderStyl>
      <FormStyl>
        <InputStyl />
        <InputStyl />
      </FormStyl>
      <FooterStyl>
        <H1Styl>Footer</H1Styl>
      </FooterStyl>
    </SectionStyl>
  )
}

const SectionStyl = styled('section')`
  display: flex;

`

const HeaderStyl = styled('header')`

  color: red
`

const FormStyl = styled('form')`

  color: blue
`

const InputStyl = styled('input')`
  color: yellow;
`

const FooterStyl = styled('footer')`
  background-color: brown;
`

const H1Styl = styled('h1')`
  font-size: 2rem;
`