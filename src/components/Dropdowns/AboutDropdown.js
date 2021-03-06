import React, {useState} from 'react'
import styled from 'styled-components'
import {AboutData} from "../../data/MenuData";
import {Link} from 'react-router-dom'
import '../../css/Dropdown.css';

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: lightskyblue;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1': '0')};
  top: ${({isOpen}) => (isOpen ? '0': '-100%')};
`
const DropdownWrapper = styled.div``
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover{
    color: #000d1a;
  }
`
const AboutDropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <DropdownContainer onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            <DropdownWrapper>
                <DropdownMenu>
                    {AboutData.map((item, index) => (
                        <DropdownLink to={item.link} key={index} className={item.className} onClick={() => setClick(false)}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}
export default AboutDropdown