import styled  from "styled-components";

export const HeaderComp = styled.header`
    font-family:"Montserrat";
    font-size: 25px;
    height: 100px;
    background-color: #222;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Ancor = styled.a`
    color: white;
    text-decoration: none;
    margin: 0px 10px;
    transition: 1s;
    &:hover{
        border-bottom: 1px solid #fff;
    }
`
export const Marca = styled.span`
    color: white;
`
