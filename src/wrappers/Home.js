import styled from "styled-components";

const Wrapper = styled.div`
.hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.movie-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(70%);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.title {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.additional-text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.watch-now-button,
.explore-button {
    padding: 12px 36px;
    font-size: 18px;
    margin-left: 16px;
    cursor: pointer;
}

.watch-now-button {
    background-color: #fade4b;
    color: #000;
    border: 1px solid;
    border-radius: 25px;
}

.explore-button {
    background-color: #000;
    color: #fff;
    border-color: #fade4b;
    border-radius: 25px;
}
/* /////
 */
.video-section {
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio for responsive sizing */
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .video-container {
        padding-top: 75%; /* Adjust the aspect ratio for smaller screens */
    }
}
/* ////// */
.subscribe-section {
    text-align: center;
    margin: 0 auto;
    max-width: 400px;
    background-color: #000;
    padding: 20px;
    border-radius: 4px;
    margin-top: 10px;
    border: 2px solid #add8e6;
}
span {
    color: aqua;
    font-weight: bold;
}

.section-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
}

.subscribe-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
    font-size: 16px;
    color: #fff;
}

input[type="email"] {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    border: 2px solid #add8e6;
}

input[type="checkbox"] {
    margin-right: 5px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #add8e6;
    border: none;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

button:hover {
    background-color: #add8e6;
}

.privacy-policy {
    margin-top: 10px;
    font-size: 14px;
    color: #fff;
}

.privacy-policy a {
    color: #add8e6;
    text-decoration: none;
}

.privacy-policy a:hover {
    text-decoration: underline;
}
.line {
    display: flex;
    justify-content: center;
    align-items: center;
}
.line img {
    max-width: 80%;
    max-height: 80%;
    width: auto;
    height: auto;
}



`

export default Wrapper