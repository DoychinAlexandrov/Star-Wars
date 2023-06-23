import styled from "styled-components";

const Wrapper = styled.div`
 .section {
    color: #feda4a;
    display: flex;
    justify-content: center;
    position: relative;
    height: 800px;
    font-family: sans-serif;
    font-size: 500%;
    font-weight: 500;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 400px;
    text-align: center;
}

.fade {
    position: relative;
    width: 100%;
    height: 40vh;
    top: -25px;
    background-image: linear-gradient(0deg, transparent, #000 65%);
}
.container {
    position: relative;
    top: 99999px;
    transform-origin: 50% 100%;
    animation: starwars 60s linear;
}
@keyframes starwars {
    0% {
        top: -100px;
        transform: rotateX(20deg) translateZ(0);
    }
    100% {
        top: -6000px;
        transform: rotateX(25deg) translateZ(-2500px);
    }
}

`

export default Wrapper