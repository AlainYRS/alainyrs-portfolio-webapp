import CompStyles from './NavMenuComp.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NavMenuComp(){
    return(
        <>
            <div className={(CompStyles.NavMenu)}>
                <a id={CompStyles.MenuIcon} className={(CompStyles.MenuIcon)}>
                    <Image className={(CompStyles.IconImg)} src="/Icons/MenuIcon.png" fill alt=""/>
                </a>
                <div className={(CompStyles.DivMenu)}>
                    <label className={(CompStyles.LabelMenu)} htmlFor="HomeMenu">Home</label>
                    <Link href="/"   id="HomeMenu" className={(CompStyles.MenuIcon)}>
                        <Image className={(CompStyles.IconImg)} src="/Icons/Home.png" fill alt=""/>
                    </Link>
                </div>
                <div className={(CompStyles.DivMenu)}>
                    <label className={(CompStyles.LabelMenu)} htmlFor="SkillsMenu">Skills</label>
                    <div id={CompStyles.SkillsMenu} className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Skills.png" fill alt=""/>
                    </div>
                </div>
                <div className={(CompStyles.DivMenu)}>
                    <label className={(CompStyles.LabelMenu)} htmlFor="JobExpMenu">Jobs</label>
                    <div  id={CompStyles.JobExpMenu} className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/JobExperience.png" fill alt=""/>
                    </div>
                </div>
                <div className={(CompStyles.DivMenu)}>
                    <label className={(CompStyles.LabelMenu)} htmlFor="AcademicMenu">Education</label>
                    <div  id={CompStyles.AcademicMenu} className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Academic.png" fill alt=""/>
                    </div>
                </div>
                <div className={(CompStyles.DivMenu)}>
                    <label className={(CompStyles.LabelMenu)} htmlFor="PortfolioMenu">Portfolio</label>
                    <div id={CompStyles.PortfolioMenu} className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Portfolio.png" fill alt=""/>
                    </div>
                </div>
                <div className={(CompStyles.DivMenu)}>
                    <label className={(CompStyles.LabelMenu)} htmlFor="GitRepoMenu">Git</label>
                    <div id={CompStyles.GitRepoMenu} className={(CompStyles.MenuIcon)}>
                        <Image src="/Icons/Git.webp" fill alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
};