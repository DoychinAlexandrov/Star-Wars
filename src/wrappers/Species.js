import styled from "styled-components";

const Wrapper = styled.div`
.species-card {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    width: 280px;
    height: 380px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin: 10px;
}

.species-card img {
    width: 100%;
    height: 60%;
    object-fit: contain;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
}

.species-details {
    padding: 20px;
    color: #000;
}

.species-details h3 {
    font-size: 18px;
    margin-bottom: 10px;
    text-decoration-line: underline overline;
}

.species-details p {
    font-size: 14px;
    margin-bottom: 5px;
}

h1 {
  font-size: 32px;
  text-align: center;
  color: #fff;
  position: relative;
  animation: moveRight 2s linear infinite;
  padding:16px;
}

.species-slider {
  background-color: #222;
  color: #fff;
}

.species-card {
  background-color: rgb(40, 40, 43);
  color: #000;
  padding: 20px;
  margin: 10px;
}

.species-slider h1 {
  color: #fff;
}

.species-details {
  color: #fff;
}

.species-details span {
  font-weight: bold;
  color: rgb(250, 222, 75);
}


@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

`


export default Wrapper