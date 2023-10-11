import { useEffect } from "react";
import { Backdrop, CloseModalIcon, MenuModal } from "./MobileFilterModalFavorites.styled"
import FormikFilterFavorites from "../FormikFilterFavorites/FormikFilterFavorites";

const MobileFilterModalFavorites=({onClose, onSubmit})=>{
    const handleCloseModal = e => {
        (e.code === 'Escape' || e.currentTarget === e.target) && onClose();
      };

      useEffect(() => {
        window.addEventListener('keydown', handleCloseModal);
        return () => {
          window.removeEventListener('keydown', handleCloseModal);
        };
      });   

    return (
        <Backdrop onClick={handleCloseModal}>
            <MenuModal>
                <CloseModalIcon onClick={onClose}/>
                <FormikFilterFavorites onSubmit={onSubmit}/>
            </MenuModal>
        </Backdrop>
    )
}

export default MobileFilterModalFavorites