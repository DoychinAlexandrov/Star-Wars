import styled from "styled-components";

const Wrapper = styled.div`
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    
    
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  margin: 16px;
}

.character-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.character-name-button {
    background-color: #555;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    padding: 8px 16px;
    cursor: pointer;
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


.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  padding-bottom: 16px;
}

.pagination-button {
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: rgb(250, 222, 75);
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:hover {
  background-color: #eee;
}

.pagination-button:disabled {
  background-color: #rgb(250, 222, 75);
  cursor: not-allowed;
}

.page-number {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 0 16px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    background-color: #333;
    width: 500px;
    padding: 20px;
    border-radius: 4px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.modal-content {
    display: flex;
}

.character-image {
    width: 200px;
    height: auto;
    margin-right: 20px;
    border-radius: 4px;
}

.character-info {
    flex-grow: 1;
}

.character-name {
    font-size: 24px;
    margin-bottom: 10px;
}

.modal p {
    margin: 0;
    margin-bottom: 5px;
}

.modal strong {
    font-weight: bold;
}
.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

.spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    animation: spin 2s linear infinite;
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