"use client";
import React from 'react';
import styles from "@/app/styles/barmenu.module.css";
import stylesComponent from "@/app/styles/components.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {clsx} from "clsx";

import { useState, JSX, useEffect } from 'react';


interface NavLinkItem {
  kind?: undefined;
  segment: string;
  title: string;
  icon: JSX.Element;
}

interface NavParent {
  kind: 'parent'; // Discriminator
  title?: string;   // Title is optional as per NavigationItemType
  segment?: undefined; // Segment is optional and must be undefined if present
  icon: JSX.Element;
  children?: NavLinkItem[]; // Children are essentially NavLinkItems
}

interface NavHeader {
  kind: 'header'; // Discriminator
  title: string;
  segment?: string;
  icon?: JSX.Element;
}

// For items like: { kind: 'divider'; }
interface NavDivider {
  kind: 'divider'; // Discriminator
  title?: undefined; // Explicitly not having these properties
  segment?: undefined;
  icon?: undefined;
}

// NavigationItemType is the union of raw object shapes, often used for defining data constants.
// It's exported and used by the `NAVIGATION` constant.
export type NavigationItemType = (
  { segment: string; title: string; icon: JSX.Element; kind?: undefined; } |
  { kind: 'parent'; title?: string; segment?: undefined; icon: JSX.Element; children?: { segment: string; title: string; icon: JSX.Element }[]; } |
  { kind: 'divider'; title?: undefined; segment?: undefined; icon?: undefined; } |
  { kind: 'header'; title: string; segment?: string; icon?: JSX.Element; }
);

// NavigationItem is the union of our well-defined interfaces, used for props and internal logic.
type NavigationItem = NavLinkItem | NavDivider | NavHeader | NavParent;

interface MenuBarProps {
  navigation: NavigationItem[];
}

// PERSISTENT SETTINGS
const MENU_TOGGLE_STORAGE_KEY = 'menuBarToggleState'; 
const DEFAULT_MENU_TOGGLE_STATE = false; //

export default function MenuBar(props: MenuBarProps) {
  
  if (!props.navigation || props.navigation.length === 0) {
    return <p>Navigation is required to render the menu.</p>;
  }
  const headerItems = props.navigation.filter(item => item.kind === 'header' && item.segment === "/") as NavHeader[]; // Type assertion


  const [currentPage, setCurrentPage] = useState("dashboard");


  function handleNavLink(segment: string) {
    setCurrentPage(segment);
  }


  const [openParentIndices, setOpenParentIndices] = useState<Record<number, boolean>>({});

  function handleParentToggle(parentIndex: number) {
       setOpenParentIndices(prevOpenStates => ({...prevOpenStates, [parentIndex]: !prevOpenStates[parentIndex] }));
   }

   const [menuToggle, setMenuToggle] = useState(DEFAULT_MENU_TOGGLE_STATE);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
    const storedVal = localStorage.getItem(MENU_TOGGLE_STORAGE_KEY);
    if (storedVal !== null) {
      try {
        const persistedState = JSON.parse(storedVal);
        setMenuToggle(persistedState);
      } catch (error) {
        console.error("Error parsing menuToggle from localStorage on mount:", error);
        setMenuToggle(DEFAULT_MENU_TOGGLE_STATE);
      }
    }
  }, []); 

  useEffect(() => {

    if (isClient) {
      try {
        localStorage.setItem(MENU_TOGGLE_STORAGE_KEY, JSON.stringify(menuToggle));
      } catch (error) {
        console.error("Error saving menuToggle to localStorage:", error);
      }
    }
  }, [menuToggle, isClient]);
  function handleMenuToggle(){
       setMenuToggle(!menuToggle); 

  }

  return (
    <main className={styles.menuBarContainer}>

      {headerItems.map((item, index) => (
        <div className={styles.headerMenuContainer} key={`${index}-header-container`}>
          <div className={styles.hamburgerButtonContainer}>
            <div className={styles.hamburgerButton} onClick={handleMenuToggle}>
                {menuToggle ? <MenuIcon /> : <MenuOpenIcon />}
            </div>
          </div>
          <div className={styles.header}>
            <a key={`${index}-hdr-${item.title}`} href={item.segment} className={styles.logoLink}>
              {item.icon}
              <p>{item.title}</p>
            </a>
          </div>
        </div>
      ))}

      <div className={styles.mainContent}>

        <div  className={`${styles.barMenu} ${clsx({[styles.short]: menuToggle })}`} >
          {props.navigation.map((item, index) => {

            if (item.kind === 'divider') {
              return <hr key={`${index}-divider`} className={styles.divider} />;
            }

            if (item.kind === 'header' && item.segment != "/") {

              return <div className={styles.headerMenuContainer}  key={`${index}-hdr-container`}>

                <a key={`${index}-hdr`} href={item.segment} className={styles.header}>
                  {item.icon}
                  <p>{item.title}</p>
                </a>

              </div>
            }

            if (item.kind === 'parent') {
              if (!item.title && (!item.children || item.children.length === 0)) {
                return null; // Skip if no title and no children
              }
              const isThisParentHidden = !openParentIndices[index];

              return (
                <div className={`${styles.navParent} ${clsx({[styles.short]: menuToggle })}`}  key={index} onClick={() => handleParentToggle(index)}>
                  {item.title && (

                    <div className={`${styles.navLinkHeader} ${clsx({[styles.short]: menuToggle })}`} >
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  )}
                  {item.children && item.children.length > 0 && (

                    <div className={`${styles.children} ${clsx({[stylesComponent.hide]: isThisParentHidden })}`}>
                      {item.children.map((child) => (

                        <div
                          className={`${styles.childrenNavLink} ${clsx({[styles.short]: menuToggle })}`} 
                          key={child.segment}
                          onClick={
                            (e) => {
                              e.stopPropagation();
                              
                              handleNavLink(child.segment);
                            }
                          }
                        >
                          {child.icon && <span>{child.icon}</span>}
                          <span>{child.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }


            if (item.kind === undefined) {
              return (
                <div
                  onClick={
                    () => handleNavLink(item.segment)
                  }
                  className={styles.navLink}
                  key={`${index}-${item.segment}`}
                >
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              );
            }

            return null;
          })}
        </div>
        <div className={styles.frameContainer}>
          <iframe src={currentPage}></iframe>

        </div>
      </div>

    </main>
  );
}