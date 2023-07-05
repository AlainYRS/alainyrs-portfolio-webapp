import LocStyles from "./skills.module.css"
import NavMenuComp from "@/complements/components/NavMenu/NavMenuComp"
export default function Skills(){
    return (
        <>
            <NavMenuComp/>
            <div id={(LocStyles.SkillSet)}>Skill set
                <div id={(LocStyles.SoftSkill)}> Soft Skills
                    <div>
                        <input type="checkbox" id="SoftSkill_1"/>
                        <label htmlFor="SoftSkill_1">Project Management</label>
                        <div>
                            <ul>
                                <li>Data management.</li>
                                <li>Problem solving.</li>
                                <li>Results oriented.</li>
                                <li>Attention to detail.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="SoftSkill_2"/>
                        <label htmlFor="SoftSkill_2">Business Management</label>
                        <div>
                            <ul>
                                <li>Sales analytics.</li>
                                <li>Organization.</li>
                                <li>Decision making.</li>
                                <li>Product development.</li>
                                <li>Quality control.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="SoftSkill_3"/>
                        <label htmlFor="SoftSkill_3">Personnel Management</label>
                        <div>
                            <ul>
                                <li>Teamwork.</li>
                                <li>Team lead.</li>
                                <li>Supervising.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="SoftSkill_4"/>
                        <label htmlFor="SoftSkill_4">Customer Service</label>
                        <div>
                            <ul>
                                <li>Sales management.</li>
                                <li>Business to business B2B.</li>
                                <li>Retail sales B2C.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="SoftSkill_5"/>
                        <label htmlFor="SoftSkill_5">Proactivity</label>
                        <div>
                            <ul>
                                <li>Self-taught.</li>
                                <li>Self-motivated.</li>
                                <li>Multitasking.</li>
                                <li>Time management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id={(LocStyles.HardSkill)}> Hard Skills
                    <div>
                        <input type="text" id="HardSkill_1"/>
                        <label htmlFor="HardSkill_1">Microsoft</label>
                        <ul>
                            <ul>Microsoft Office Suite
                                <ul>Advance Excel Skills
                                    <li>Emmulators</li>
                                    <li>Visual Basic for Applications VBA embeded programming language</li>
                                    <li>Macros</li>
                                    <li>Pivot Tables, Functions, Graphics, Forms & more...</li>
                                </ul>
                                <li>Word</li>
                                <li>Power Point</li>
                                <li>Access</li>
                            </ul>
                        </ul>
                    </div>
                    <div>
                        <input type="text" id="HardSkill_2"/>
                        <label htmlFor="HardSkill_2">Reporting</label>
                        <ul>
                            <li>Microsoft Power BI Dashboards</li>
                            <li>Key Performance Indicators KPIs</li>
                            <li>Balance Score Cards BSC</li>
                            <li>Sales Annual Opperating Plans AOPs</li>
                            <li>Incentive Schemes</li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" id="HardSkill_3"/>
                        <label htmlFor="HardSkill_3">Databases</label>
                        <ul>
                            <li>SQL</li>
                            <li>MySql</li>
                            <li>Firestore (No SQL)</li>
                            <li>Microsoft Access</li>
                        </ul>
                        <li>Data Analysis</li>
                        <li>Data Modulation</li>
                        <li>Process Automation</li>
                        <li>Reports Automation</li>
                    </div>
                    <div>
                        <input type="text" id="HardSkill_5"/>
                        <label htmlFor="HardSkill_5">Web Development</label>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>TypeScript</li>
                            <ul>Frameworks
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>Angular</li>
                                <li>Laravel</li>
                            </ul>
                            <li>Github</li>
                            <li>Progressive Web Applications PWAs</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>C#, ASP.NET</li>
                            <li>Google Cloud</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                        </ul>
                    </div>
                    <div>
                        <input type="text" id="HardSkill_6"/>
                        <label htmlFor="HardSkill_6">Programming Languages</label>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <h1>Hard Skills</h1>
                    <ul>Microsoft
                        <progress id="PowerBI" value="32" max="100"><a>Power BI</a></progress>
                        <li>Power BI</li>
                        <li>Excel</li>
                        <li>Word</li>
                        <li>PowerPoint</li>
                        <li>Access</li>
                        <li>Macros</li>
                        <li>Visual Basic for Applications VBA</li>
                        <li>SQL</li>
                        <li>SharePoint</li>
                        <li>Teams</li>
                        <li>OneDrive</li>
                        <li>OneNote</li>
                        <li>Outlook</li>
                        <li>Project</li>
                        <li>Visio</li>
                    </ul>
                </div>
            </div>
        </>
    )
}