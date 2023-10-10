import Logo from '../../assets/convincely-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Convincely Logo" />
      <p>Senior Frontend Test</p>
    </HeaderContainer>
  )
}
