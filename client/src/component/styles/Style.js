import styled from 'styled-components';


// BUTTON
export let Button =styled.button`
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 12px 20px 12px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
    &:hover:after {
        top: 0px;
        left: 0px;
      }
      @media (min-width: 768px){
        Button{padding: 13px 50px 13px;
        }
    }
`;

//INPUT
export let Input = styled.input`
display: inline-block;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  padding: 10px 20px;
  border: 1px solid rgba(0,0,0,0.9);
  border-right-color: #000000;
  border-bottom: 2px solid #000000;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  font: normal 17px/normal Verdana, Geneva, sans-serif;
  color: rgba(0,0,0,1);
  text-indent: 5px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  word-spacing: 1px;
  background: #fff5bf;
  -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
  box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
  text-shadow: 0 0 1px rgba(0,0,0,0.9) ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
`;

// SELECT

export let Select = styled.select`
display: block;
font-size: 20px;
font-family: normal 17px/normal Verdana, Geneva, sans-serif;
font-weight: 400;
color: #444;
line-height: 1.3;
padding: 10px 20px;;
width: 250px;
max-width: 100%; 
box-sizing: border-box;
margin: 20px auto;
border: 2px solid black;
box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
border-radius: .3em;
-moz-appearance: none;
-webkit-appearance: none;
appearance: none;
background-color: #fff;
background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
  linear-gradient(to bottom, #ffffff 0%,#f7f7f7 100%);
background-repeat: no-repeat, repeat;
background-position: right .7em top 50%, 0 0;
background-size: .65em auto, 100%;
`; 

export let ButtonLading = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background-size: 120% auto;
  background-image: linear-gradient(315deg, #833ab4 0%, #fd1d1d 50%, #fcb045);
&:hover {
  background-position: right center;
}
&:active {
  top: 2px;
}
`;