import styled from "styled-components";


type Props = {
    backgroundColor?: string;
}

export const Container = styled.div<Props>`
    width: 100%;
    height: 130px;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    margin: 0px 0px 0px 0px;
    display: flex;
    flex-direction: column;
`

export const Text = styled.h1`
    margin-left: 30px;
`

export const Subtitle = styled.p`
    align-items: top;
    margin-left: 30px;
`
