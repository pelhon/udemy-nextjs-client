import * as Styled from './styles'

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <>
    <Styled.Wrapper>
      <Styled.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Illustration
        src="/img/hero-illustration.svg"
        alt="Ilustração de pessoa em frente de telas com código"
      />
    </Styled.Wrapper>
  </>
)

export default Main
