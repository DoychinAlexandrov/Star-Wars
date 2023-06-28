import styled from "styled-components";

const Wrapper = styled.div`
.gallery{
    -webkit-column-count:3;
    -moz-column-count:3;
    column-count:3;
    -webkit-column-width:33%;
    -moz-column-width:33%;
    column-width:33%;
    padding:0 12px
}

.gallery .pics{
    -webkit-transition:all 350ms ease;
    transition:all 350ms ease;
    cursor:pointer;
    margin-bottom:12px;
}
.gallery .pics:hover{
    filter:opacity(.8)
}

@media (max-width:991px){
    .gallery{
        -webkit-column-count:2;
        -moz-column-count:2;
        column-count:2;
    }
}
@media (max-width:480px){
    .gallery{
        -webkit-column-count:1;
        -moz-column-count:1;
        column-count:1;
        -webkit-column-width:100%;
        -moz-column-width:100%;
         column-width:100%;
    }
}
/* model */
.model{
    width:100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #000;
    transition:opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility:hidden
    opacity:0;
    transform:scale(0);
    overflow:hidden;
    z-index:999;
}
.model.open{
    visibility:visible;
    opacity:1;
    transform:scale(1)
}
.model img{
    width:auto;
    max-width:100%;
    height:auto;
    max-height:100%;
    display:block;
    line-height:0;
    box-sizing:border-box;
    padding: 20px 0 20px;
    margin:0 auto;
}
.model.open svg{
    position:fixed;
    top:10px;
    right:10px;
    width:2rem;
    height:2rem;
    padding:5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    cursor:pointer;
}

`
export default Wrapper