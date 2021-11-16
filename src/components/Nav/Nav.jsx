import { Button, ButtonGroup } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import '../Nav/nav.css'







function Nav(){
    return(
        <div>
            <ButtonGroup variant="outline" spacing="6" bg = 'brand.secundary' borderRadius = '15px' className = 'c-containerNav'>
                <Button className = 'c-navButton' > <Icon as={BiHomeAlt} className = "c-icon" d='block'/> Home</Button>
                <Button  variant = 'ghost' size = 'lg' ><Icon as={MdOutlinePeopleAlt} /> Candidatos</Button>
                <Button variant = 'ghost' size = 'lg' ><Icon as={MdOutlineAddBox} /> Crear</Button>
                <Button variant = 'ghost' size = 'lg' ><Icon as={FiShoppingBag} /> Ofertas</Button>
            </ButtonGroup>
        </div>
    )
}

export default Nav;
