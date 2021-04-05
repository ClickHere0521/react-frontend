import React, { useState, useEffect ,Fragment} from 'react';
import  Link  from 'next/link';
import { MENUITEMS } from '../../constant/menu'
import { Container, Row } from 'reactstrap';

const SideMenu = (props) => {

    const [navClose, setNavClose] = useState({ right: '0px' });

    useEffect(() => {
        if (window.innerWidth < 750) {
            setNavClose({ right: '-410px' })
        }
        if (window.innerWidth < 1199) {
            setNavClose({ right: '-300px' })
        }
    }, [])

    const openNav = () => {
        setNavClose({ right: '0px' })
    }

    const closeNav = () => {
        setNavClose({ right: '-410px' })
    }
    // eslint-disable-next-line
    const onMouseEnterHandler = () => {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    const handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))

        if (event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else {
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const openMblNav = (event) => {
        if (event.target.classList.contains('sub-arrow'))
          return;
       
        if (event.target.nextElementSibling.classList.contains('opensubmenu')){
            event.target.nextElementSibling.classList.remove('opensubmenu')
            document.getElementById('arrow').classList.remove('minus-arrow')
        }

        else {
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
            document.getElementById('arrow').classList.add('minus-arrow')
        }
    }

    useEffect(() => {
        const currentUrl = location.pathname;
        MENUITEMS.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems)
                })
            })
        })

    }, [])

    const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                    }
                })
            }
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })

    }

    // Click Toggle menu
    const toggletNavActive = (item) => {
        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }
    return(
        <Fragment>
            <ul id="sub-menu" className="sm pixelstrap sm-vertical ">
                        {
                            MENUITEMS.map((menuItem, i) => {
                                return (
                                    <li key={i} className={` ${menuItem.megaMenu ? 'mega-menu' : ''}`}>
                                        <a className="nav-link" onClick={(e) => openMblNav(e)} > {menuItem.title}
                                            <span id="arrow" className="sub-arrow"></span>
                                        </a>
                                        {menuItem.children && !menuItem.megaMenu ?
                                            <ul className="nav-submenu" >
                                                {menuItem.children.map((childrenItem, index) => {
                                                    return (
                                                        
                                                        <li key={index} className={`${childrenItem.children ? 'sub-menu ' : ''}`}>
                                                            {(childrenItem.type === 'sub') ?
                                                                <a href="#javascript" onClick={() => toggletNavActive(childrenItem)} >
                                                                    {childrenItem.title} <i className="fa fa-angle-right pl-2"></i>
                                                                </a>
                                                                : ''}
                                                            {(childrenItem.type === 'link') ?
                                                               
                                                               <Link href={`${childrenItem.path}`} >
                                                                    <a>
                                                                        {childrenItem.title} 
                                                                    </a>
                                                                </Link>
                                                               
                                                            : ''}
                                                            {childrenItem.children ?
                                                                <ul className={`nav-sub-childmenu ${childrenItem.active ? 'menu-open ' : 'active'}`}>
                                                                    {childrenItem.children.map((childrenSubItem, key) =>
                                                                        <li key={key}>
                                                                            {(childrenSubItem.type === 'link') ?
                                                                                <Link href={childrenSubItem.path} >
                                                                                    <a className="sub-menu-title">{childrenSubItem.title}</a>
                                                                                </Link>
                                                                                : ''}
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                                :
                                                                ''
                                                            }
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            :
                                            <div className={`mega-menu-container  ${menuItem.active ? 'opensubmenu' : ''}`}>
                                                {
                                                    menuItem.megaMenu === true
                                                        ?
                                                        <Container>
                                                            <Row>
                                                                {
                                                                    (menuItem.children).map((megaMenuItem, i) => {
                                                                        return (
                                                                            <div className={`${menuItem.megaMenuType == 'small' ? 'col-xl-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `} key={i}>
                                                                                <div className="link-section" >
                                                                                    <div className="menu-title">
                                                                                        <h5  onClick={(e) => handleMegaSubmenu(e)}>{megaMenuItem.title}</h5>
                                                                                    </div>
                                                                                    <div className="menu-content">
                                                                                        <ul>
                                                                                            {menuItem.title === 'Elements' ?
                                                                                                
                                                                                                (megaMenuItem.children).map((subMegaMenuItem, i) => {
                                                                                                    return (
                                                                                                        <li key={i}>
                                                                                                            <a href={subMegaMenuItem.path}>
                                                                                                                <i className={`icon-${subMegaMenuItem.icon}`}></i>{subMegaMenuItem.title}</a>
                                                                                                        </li>
                                                                                                    )
                                                                                                }) :
                                                                                                (megaMenuItem.children).map((subMegaMenuItem, i) => {
                                                                                                    return (
                                                                                                        <li key={i}>
                                                                                                            <a href={subMegaMenuItem.path}>
                                                                                                                {subMegaMenuItem.title}
                                                                                                            </a>
                                                                                                        </li>
                                                                                                    )
                                                                                                })
                                                                                            }
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </Row>
                                                        </Container>
                                                        : ''}
                                            </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
        </Fragment>
    )
}

export default SideMenu;