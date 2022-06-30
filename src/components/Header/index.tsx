import * as C from './styles'

type Props = {
    title : string ;
    subtitle?: string;
    bgColor?: string;
}

export const Header = ({title, subtitle, bgColor} : Props) => {
    return (
        <C.Container backgroundColor={bgColor}>
            <C.Text>{title}</C.Text>
            <C.Subtitle>{subtitle}</C.Subtitle>
        </C.Container>
    )
}