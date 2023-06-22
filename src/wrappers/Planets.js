import styled from "styled-components";

const Wrapper = styled.div`
.planet-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.planet-card {
    width: 300px;
    margin: 16px;
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.planet-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.planet-info {
    padding: 16px;
}

.planet-info h2 {
    margin-bottom: 8px;
}

.planet-info p {
    margin-bottom: 4px;
}

h1 {
  font-size: 32px;
  text-align: center;
  color: #fff;
  position: relative;
  animation: moveRight 2s linear infinite;
  padding:16px;
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
.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

`
export default Wrapper