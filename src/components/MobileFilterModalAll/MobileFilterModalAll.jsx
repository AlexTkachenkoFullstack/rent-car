import { useEffect } from "react";
import FormikFilterAll from "../FormikFilterAll/FormikFilterAll"
import { Backdrop, CloseModalIcon, MenuModal } from "./MobileFilterModalAll.styled"

const MobileFilterModal=({onClose, onSubmit})=>{
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
                <FormikFilterAll onSubmit={onSubmit}/>
            </MenuModal>
        </Backdrop>
    )
}

export default MobileFilterModal