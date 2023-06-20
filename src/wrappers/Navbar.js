import styled from "styled-components";

const Wrapper = styled.nav`
background: #000;
.nav-center{
    width:90vw;
    max-width:1120px;
    margin:0 auto;
    display:flex;
    padding:1.5rem 2rem;
   
}
.logo{
    width:200px;
    display: block; 
    margin: 0 auto;
    padding:0.5rem;
    
}
.nav-links{
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    margin-top:1rem;
    margin-left:auto;
    margin-right: auto;
    text-transform: uppercase;
    
}
.nav-link{
    color:#A9A9A9;
    padding:0.5rem 0.5rem 0.5rem 0;
    transition: #fff;
    letter-spacing:2px;
    text-decoration:none;
    font-size:18px;
    
    
}
.nav-link:hover{
    color:#fff;
}
 @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }


`

export default Wrapper