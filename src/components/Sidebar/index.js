import React from 'react'
import {
SidebarContainer,
Icon,
CloseIcon,
SidebarMenu,
SideBtnWrap,
SidebarRoute,
SidebarLink
}from './SidebarElements'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
        <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="games" onClick={toggle}><i class="fas fa-gamepad"> </i>GAMES</SidebarLink>
                <SidebarLink to="apps" onClick={toggle}><i class="fas fa-th"> </i> APPS</SidebarLink>
                <SidebarLink to="topic" onClick={toggle}><i class="fas fa-bars"> </i>TOPIC</SidebarLink>
                <SidebarLink to="products" onClick={toggle}><i class="fas fa-cube"> </i>PRODUCTS</SidebarLink>
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In
                </SidebarRoute>

            </SideBtnWrap>

        </SidebarContainer>
    );
}

export default Sidebar
