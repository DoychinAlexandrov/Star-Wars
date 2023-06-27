import styled from "styled-components";

const Wrapper = styled.nav`
.latest-news-section {
  text-align: center;
  margin: 20px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.news-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.news-item {
  width: 300px;
  margin: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  height: 200px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  padding: 10px;
}

.news-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.news-content p {
  font-size: 16px;
  line-height: 1.4;
}


`

export default Wrapper