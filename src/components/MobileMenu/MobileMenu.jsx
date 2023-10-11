import { Backdrop, CloseModalIcon, Contact, ContactsContainer, Link, MenuModal, MobileMenuItem, MobileMenuList } from "./MobileMenu.styled"

const MobileMenu=({onClose})=>{
    return (
        <Backdrop>
            <MenuModal>
                <CloseModalIcon onClick={onClose}/>
                <MobileMenuList>
                    <MobileMenuItem onClick={onClose}>
                        <Link to='/'>About us</Link>
                    </MobileMenuItem>
                    <MobileMenuItem onClick={onClose}>
                        <Link to='/catalog'>Our catalog</Link>
                    </MobileMenuItem>
                    <MobileMenuItem onClick={onClose}>
                            <Link to='/favorites'>Your favorites</Link>
                    </MobileMenuItem>
                </MobileMenuList>
                <ContactsContainer>
                    <Contact>Contact Information:</Contact>
                    <Contact>Address: 14000, Chernihiv, Shevchenko street, 27</Contact>
                    <Contact>Phone: +38(093)11-33-254</Contact>
                    <Contact>Email: rent-car@ukr.net</Contact>
                </ContactsContainer>
            </MenuModal>
        </Backdrop>
    )
}

export default MobileMenu