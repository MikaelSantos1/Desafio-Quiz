import styled from "styled-components";

export const Container= styled.div`
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
width:80vw;
max-width:1200px;
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
    max-width:800px;
}
li{
    
    height:3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:#fff;
    margin:0 auto;
    margin-top:1rem;
    background-color:#df9eff;
    width:95%;
    cursor:pointer;
    transition: background-color 0.2s;
    border:1px solid black;
    &:hover{
        background-color:#DA70D6;
        
    }
    
}

button{
 width:150px;
 height:50px;
 background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: #eeeeee;
  &:hover {
    opacity: 0.8;
  }
    }

    h3{
        font-size:2rem;
        margin-bottom:2rem;
    }
`
