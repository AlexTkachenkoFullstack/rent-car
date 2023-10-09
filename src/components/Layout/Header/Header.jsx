import { BurgerButton, BurgerIcon, Container, HeaderContainer, HeaderLeft, HeaderMiddle, HeaderMiddleText, HeaderRight, Link, Logo } from "./Header.styled"
import logo from './/..//..//..//assets/images/logo.svg'
const Header = () => {
    return (<HeaderContainer >
                <Container className="container">
                    <HeaderLeft>
                        <Link to='/'>
                            <Logo src={logo} alt='car-logo'/>
                        </Link>
                        <BurgerButton>
                            <BurgerIcon/>
                        </BurgerButton>
                    </HeaderLeft>
                    <HeaderMiddle>
                        <HeaderMiddleText>Car Rental with Us:</HeaderMiddleText>
                        <HeaderMiddleText>Your Journey, Our Assurance.</HeaderMiddleText>
                    </HeaderMiddle>
                    <HeaderRight>
                        <Link to='/'>About us</Link>
                        <Link to='/catalog'>Our catalog</Link>
                        <Link to='/favorites'>Your favorites</Link>
                    </HeaderRight>
                </Container>
            </HeaderContainer>)
}

export default Header