import styled from 'styled-components/macro'

export const AppContainer = styled.div`
display:felx;
flex-direction:column;
align-items:center;
min-height:100vh;
`

export const MemeGeneratorContainer = styled.div`
display:felx;
flex-direction:column;
align-items:center;
min-height:100vh;
width:100%;
padding:25px;
@media screen and (min-width:768px) {
    width:85%;
    max-width:1140%;
}
`
export const Heading = styled.h1`
color:#35469c;
font-family:"Roboto";
text-align:center;
font-size:24px;
@media screen and (min-width:768px) {
    font-size:36px;
    text-align:left;
}
`

export const FormAndMemeContainer = styled.div`
display:felx;
flex-direction:column;
justify-content:space-between;
align-items:center;
min-height:100vh;
width:100%;
padding:25px;
@media screen and (min-width:768px) {
    flex-direction:row-reverse;
    
}
`

export const MemeContainer = styled.div`
display:felx;
flex-direction:column;
align-items:center;
justify-content:space-between;
background-image:url("https://assets.ccbp.in/frontend/react-js/nature-img.png");
background-size:cover;
min-height:100vh;
padding:25px;
@media screen and (min-width:768px) {
    width:48%;
}
`

export const TextContent = styled.p`
color:#ffffff;
font-family:"Open Sans";
text-align:center;
font-size:24px;
}
`
export const MemeGeneratorForm = styled.form`
display:felx;
flex-direction:column;
justify-content:space-between;
align-items:center;
@media screen and (min-width:768px) {
    width:45%;
}
`

export const CustomLabel = styled.label`
color:#ffffff;
font-family:"Open Sans";
text-align:center;
font-size:24px;

`

export const CustomInput = styled.input`
color:#5a7184;
background-color:#ffffff;
font-family:"Open Sans";
text-align:center;
font-size:24px;
height:48px;
outline:none;
`

export const CustomSelect = styled.select`
color:#1e293b;
background-color:#ffffff;
font-family:"Open Sans";
text-align:center;
font-size:24px;
height:48px;
outline:none;
border:1px solid #d7dfe9;
`

export const CustomOption = styled.option`
font-size:14px;
height:48px;
outline:none;
border:1px solid #d7dfe9;
`

export const GenerateButton = styled.button`
color:#5a7184;
background-color:#ffffff;
font-family:"Open Sans";
text-align:center;
font-size:24px;
height:48px;
cursor:pointer;
margin-top:15px;
margin-bottom:15px;
outline:none;
`
