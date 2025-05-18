import React, { JSX } from 'react';
import styles from "@/app/styles/barmenu.module.css";

interface NavItemBase {
  title: string;
  icon?: JSX.Element;
}

// Options in menu
interface NavLinkItem extends NavItemBase {
  segment: string; 
  kind?: undefined; 
  children?: NavLinkItem[];
}

// For logo and link to home
interface NavHeader {
  kind: 'header';
  title: string;
  segment?: string;
  icon?: JSX.Element;
}
// Divider line
interface NavDivider {
  kind: 'divider';
  title?: undefined;
  segment?: undefined;
  icon?: undefined;
}

export type NavigationItemType = (
  { segment: string; title: string; icon: JSX.Element; children?: { segment: string; title: string; icon: JSX.Element }[]; kind?: undefined; } |
  { kind: 'divider'; title?: undefined; segment?: undefined; icon?: undefined; } |
  { kind: 'header'; title: string; segment?: string; icon?: JSX.Element; }
);

type NavigationItem = NavLinkItem | NavDivider | NavHeader;

interface MenuBarProps {
  navigation: NavigationItem[];
}

export default function MenuBar(props:MenuBarProps){

  if (!props.navigation || props.navigation.length === 0) {
    return <p>Navigation is required to render the menu.</p>;
  }

    return(

        <div className={styles.barMenu}>
            {props.navigation.map((item, index)=>{

                const key = index;


                if (item.kind === 'divider') {
                    return <hr key={`divider-${index}`}/>;
                }

                if (item.kind === 'header') {
                    return (
                        <a href={item.segment}>
                            {item.icon}
                            <p key={key}>
                                {item.title}
                            </p>
                        </a>
                    );
                }
                
                // Check if there are a segment and title
                if (item.segment && item.title) {
                    const navLinkItem = item as NavLinkItem; // Cast for easier access to children
                    return (
                    <div key={key}>
                        
                        <a href={`/${navLinkItem.segment}`}>
                            {navLinkItem.icon}
                            {navLinkItem.title}
                        </a>

                        {/* Render children if they exist */}
                        {navLinkItem.children && navLinkItem.children.length > 0 && (
                        <div >
                            {navLinkItem.children.map((child) => (
                            <div key={child.segment} >
                                {child.icon && <span>{child.icon}</span>}
                                <a href={`/${navLinkItem.segment}/${child.segment}`}>
                                    {child.title}
                                </a>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                    );
                }
                
            })}
        </div>

    );

}