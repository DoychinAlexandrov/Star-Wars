import styled from "styled-components";

const Wrapper = styled.div`
  .vehicle-list {
    text-align: center;
  }

  h1 {
    font-size: 32px;
    text-align: center;
    color: #fff;
    position: relative;
    animation: moveRight 2s linear infinite;
    padding: 16px;
  }

  .vehicle-list h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .vehicle-list ul {
    list-style: none;
    padding: 0;
  }

  .vehicle-list li {
    display: inline-block;
    margin: 10px;
  }

  .vehicle-image {
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .vehicle-image:hover {
    transform: scale(1.1);
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #000; 
    padding: 20px;
    max-width: 400px;
    border-radius: 8px;
    position: relative;
    z-index: 9999; 
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
    color: #fff; 
    font-size: 25px;
  }

  .modal h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #fff;
    text-decoration: underline;
  }

  .modal p {
    margin-bottom: 8px;
    color: #fff; 
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
    width: 300px;
    height: auto;
    margin: 10px;
  }
`;

export default Wrapper;
