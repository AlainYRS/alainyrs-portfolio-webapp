'use client';
import CompStyles from './NavMenuComp.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavMenuComp(){
    const [DisplayMenu, setDisplayMenu] = useState(false);

    return(
        <>
            <div className={(CompStyles.NavMenu)}>
                <div className={(CompStyles.DivMenu)}>
                    <div id={CompStyles.BurgerIcon} className={(CompStyles.MenuIcon)} onClick={()=>setDisplayMenu(!DisplayMenu)}>
                        <Image className={(CompStyles.IconImg)} src="/Icons/MenuIcon.png" fill alt=""/>
                    </div>
                    {DisplayMenu &&
                        <>
                            <Link href="/" id="HomeMenu" className={(CompStyles.MenuIcon)}>
                                <Image className={(CompStyles.IconImg)} src="/Icons/Home.png" fill alt=""/>
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
                        </>
                    }
                </div>
            </div>
        </>
    )
};