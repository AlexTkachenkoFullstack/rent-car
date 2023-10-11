import { BurgerButton, BurgerIcon, Container, HeaderContainer, HeaderLeft, HeaderMiddle, HeaderMiddleText, HeaderRight, Link, Logo } from "./Header.styled"
import logo from './/..//..//..//assets/images/logo.svg'
import { useState } from "react";
import MobileMenu from "../../MobileMenu/MobileMenu";
const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    return (<HeaderContainer >
                <Container className="container">
                    <HeaderLeft>
                        <BurgerButton onClick={openModal}>
                            <BurgerIcon/>
                        </BurgerButton>
                        <Link to='/'>
                            <Logo src={logo} alt='car-logo'/>
                        </Link>   
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
                {showModal && <MobileMenu onClose={closeModal}/>}
            </HeaderContainer>)
}

export default Header