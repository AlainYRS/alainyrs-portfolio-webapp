import {ReactNode} from 'react';
import styles from "./skills.module.css"

type Props = {
    children: ReactNode;
}

export default async function SkillsLayout({children}:Props){
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
};