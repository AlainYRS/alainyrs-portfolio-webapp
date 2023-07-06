import {ReactNode} from 'react';
import '../../app/globals.css'

type Props = {
    children: ReactNode;
}

export default async function ExperienceLayout({children}:Props){
    return(
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}