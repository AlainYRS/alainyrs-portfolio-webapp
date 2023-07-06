'use client';
import LocStyles from "./skills.module.css"
import NavMenuComp from "@/complements/components/NavMenu/NavMenuComp"
import { useState } from "react"
export default function Skills(){
    const [SkillSet, setSkillSet] = useState({
        DataManagement: 70,
        ProblemSolving: 70,
        ResultsOriented: 70,
        AttentionDetail: 70,
        SalesAnalytics: 70,
        Organization: 70,
        DecisionMaking: 70,
        ProductDevelopment: 70,
        QualityControl: 70,
        Teamwork: 70,
        TeamLead: 70,
        Supervising: 70,
        SalesManagement: 70,
        B2B: 70,
        B2C: 70,
        SelfTaught: 70,
        SelfMotivated: 70,
        Multitasking: 70,
        TimeManagement: 70,
    })
    const [DispSkill, setDispSkill] = useState({
        ProjectManagement: true,
        BusinessManagement: true,
        PersonnelManagement: true,
        CustomerService: true,
        Proactivity: true,
        OfficeSuite: true,
        Reportting: true,
        Databases: true,
        WebDevelopment: true,
        ProgrammingLanguages: true,
        Frameworks: true,
    })

    return (
        <>
            <NavMenuComp/>
            <div id={(LocStyles.SkillSet)}>
                <div id={(LocStyles.SoftSkill)} className={(LocStyles.Skills)}>
                    <h2 className={(LocStyles.SkillsTitle)}>Soft Skills</h2>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, ProjectManagement: !DispSkill.ProjectManagement})}>Project Management</label>
                        {DispSkill.ProjectManagement &&
                            <div>
                                <li>Data management.</li>
                                <li>Problem solving.</li>
                                <li>Results oriented.</li>
                                <li>Attention to detail.</li>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label  onClick={()=>setDispSkill({...DispSkill, BusinessManagement: !DispSkill.BusinessManagement})}>Business Management</label>
                        {DispSkill.BusinessManagement &&
                            <div>
                                <li>Sales analytics.</li>
                                <li>Organization.</li>
                                <li>Decision making.</li>
                                <li>Product development.</li>
                                <li>Quality control.</li>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label  onClick={()=>setDispSkill({...DispSkill, PersonnelManagement: !DispSkill.PersonnelManagement})}>Personnel Management</label>
                        {DispSkill.PersonnelManagement &&
                            <div>
                                <li>Teamwork.</li>
                                <li>Team lead.</li>
                                <li>Supervising.</li>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label  onClick={()=>setDispSkill({...DispSkill, CustomerService: !DispSkill.CustomerService})}>Customer Service</label>
                        {DispSkill.CustomerService &&
                            <div>
                                <li>Sales management.</li>
                                <li>Business to business B2B.</li>
                                <li>Retail sales B2C.</li>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, Proactivity: !DispSkill.Proactivity})}>Proactivity</label>
                        {DispSkill.Proactivity &&
                            <div>
                                <li>Self-taught.</li>
                                <li>Self-motivated.</li>
                                <li>Multitasking.</li>
                                <li>Time management.</li>
                            </div>
                        }
                    </div>
                </div>
                <div id={(LocStyles.HardSkill)} className={(LocStyles.Skills)}>
                    <h2 className={(LocStyles.SkillsTitle)}>Hard Skills</h2>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, OfficeSuite: !DispSkill.OfficeSuite})}>Office suite</label>
                        {DispSkill.OfficeSuite &&
                            <div>
                                <li>Excel (Expert)</li>
                                <li>Word</li>
                                <li>Power Point</li>
                                <li>Access</li>
                                <hr/>
                                <p>- Visual Basic for Applications VBA</p>
                                <p>- Emmulators</p>
                                <p>- Macros</p>
                                <p>- Pivot Tables, Functions, Forms & more...</p>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, Reportting: !DispSkill.Reportting})}>Reporting</label>
                        {DispSkill.Reportting &&
                            <div>
                                <li>Power BI Dashboards</li>
                                <li>Key Performance Indicators KPIs</li>
                                <li>Balance Score Cards BSC</li>
                                <li>Sales Annual Opperating Plans AOPs</li>
                                <li>Incentive Schemes</li>
                                <hr/>
                                <p>- Reports Automation</p>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, Databases: !DispSkill.Databases})}>Databases</label>
                        {DispSkill.Databases &&
                            <div>
                                <li>SQL</li>
                                <li>MySql</li>
                                <li>Firestore (No SQL)</li>
                                <li>Microsoft Access</li>
                                <hr/>
                                <p>- Data Analysis</p>
                                <p>- Data Modulation</p>
                                <p>- Process Automation</p>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, WebDevelopment: !DispSkill.WebDevelopment})}>Web Development</label>
                        {DispSkill.WebDevelopment &&
                            <div>
                                <li>HTML, CSS, JavaScript</li>
                                <li>TypeScript</li>
                                <hr/>
                                <p>- Github</p>
                                <p>- Progressive Web Applications PWAs</p>
                                <p>- Google Cloud</p>
                                <p>- Adobe Photoshop</p>
                                <p>- Adobe Illustrator</p>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, ProgrammingLanguages: !DispSkill.ProgrammingLanguages})}>Programming Languages</label>
                        {DispSkill.ProgrammingLanguages &&
                            <div>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>C#</li>
                                <li>ASP.NET</li>
                            </div>
                        }
                    </div>
                    <div className={(LocStyles.SkillGroup)}>
                        <label onClick={()=>setDispSkill({...DispSkill, Frameworks: !DispSkill.Frameworks})}>Frameworks</label>
                        {DispSkill.Frameworks &&
                            <div>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>Angular</li>
                                <li>Laravel</li>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}