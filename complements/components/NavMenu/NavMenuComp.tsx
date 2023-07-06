'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import '../../../app/globals.css';
import CompStyles from './NavMenuComp.module.css';

export default function NavMenuComp(){
    const [DisplayMenu, setDisplayMenu] = useState(false);
    const [Locale, setLocale] = useState('en');

    return(
        <>
            <div className={(CompStyles.NavMenu)}>
                <div id={CompStyles.BurgerIcon} onClick={()=>setDisplayMenu(!DisplayMenu)}>
                    <Image src="/Icons/MenuIcon.png" fill alt=""/>
                </div>
                <label className={(CompStyles.LabelMenu)}>Skills Set</label>
                <div id={CompStyles.MultiLangs}>
                    <a className={(CompStyles.LangIcon)}>
                        <Image src="/Icons/Flags/ESlng.png" fill alt=""/>
                    </a>
                    <a className={(CompStyles.LangIcon)}>
                        <Image src="/Icons/Flags/ENlng.png" fill alt=""/>
                    </a>
                </div>
            </div>
            {DisplayMenu &&
                <div className={(CompStyles.DivMenu)}>
                    <Link href="/" id="HomeMenu" className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Home.png" fill alt=""/>
                    </Link>
                    <label className={(CompStyles.LabelMenu)} htmlFor="HomeMenu">Home</label>

                    <Link href="/skills" id="SkillsMenu" className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Skills.png" fill alt=""/>
                    </Link>
                    <label className={(CompStyles.LabelMenu)} htmlFor="SkillsMenu">Skills</label>

                    <Link href="/jobs" id="JobExpMenu" className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/JobExperience.png" fill alt=""/>
                    </Link>
                    <label className={(CompStyles.LabelMenu)} htmlFor="JobExpMenu">Jobs</label>

                    <Link href="/education" id="AcademicMenu" className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Academic.png" fill alt=""/>
                    </Link>
                    <label className={(CompStyles.LabelMenu)} htmlFor="AcademicMenu">Education</label>

                    <Link href="/portfolio" id="PortfolioMenu" className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Portfolio.png" fill alt=""/>
                    </Link>
                    <label className={(CompStyles.LabelMenu)} htmlFor="PortfolioMenu">Portfolio</label>

                    <Link href="/git" id="GitRepoMenu" className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Git.webp" fill alt=""/>
                    </Link>
                    <label className={(CompStyles.LabelMenu)} htmlFor="GitRepoMenu">Git</label>
            </div>
            }
        </>
    )
};