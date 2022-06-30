import {Button} from './styles'

type Props = {
    conteudo?: string;
    clickFn: (txt: string) => void;
}

export const  ButtonTestProps = ({conteudo, clickFn} : Props) => {

    const handleClick = () => {
        clickFn('INFORMAÇÃO DO FILHO PARA O PAI, ATRAVES DA PROPS');
    }
 
    return (
        <Button onClick={handleClick} >{conteudo}</Button>
    );
    }