import { ReactNode } from "react";

type Props = {
    legend: string;
    children: ReactNode;
}



export const Photo = ({legend, children} : Props) => {
    return (
        <>
            {children}
            <p>{legend}</p>
        </>
    )
}

// <></>  Isso é um Fragment usado quando vc
//  precisa retornar mais de um elemento sem usar a Div.