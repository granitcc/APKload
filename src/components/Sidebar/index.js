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
import './sidebar.scss'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}  >
            <Icon onClick={toggle}>
        <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink> <input type="text" placeholder="Search.." className="searchbox" /> </SidebarLink>
                <SidebarLink to="/games" onClick={toggle}><i class="fas fa-gamepad"> </i>GAMES</SidebarLink>
                <SidebarLink to="/app" onClick={toggle}><i class="fas fa-th"> </i> APPS</SidebarLink>
                <SidebarLink to="/apkloadappfeatures" onClick={toggle}><i class="fas fa-bars"> </i>TOPIC</SidebarLink>
                <SidebarLink to="/install" onClick={toggle}><i class="fas fa-cube"> </i>PRODUCTS</SidebarLink>
                
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In  <i class="fas fa-sign-in-alt"></i>
                </SidebarRoute>

            </SideBtnWrap>

        </SidebarContainer>
    );
}

export default Sidebar
