import styled from "styled-components";

export const Container= styled.div`
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
width:80vw;
height:50vh;
background-color:#fff;
border-radius:2rem;

flex-direction:column;
div{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
}
label{
    width:50%;
}
ul{
    
    width:100%;
}
li{
    
    height:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   color:#fff;
    margin:0 auto;
    margin-top:1rem;
    background-color:#b96edf;
    width:95%;
    cursor:pointer;
    transition: background-color 0.2s;
    border:1px solid black;
    &:hover{
        background-color:#DA70D6;
        
    }
}
`
