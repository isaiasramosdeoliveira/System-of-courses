import React from "react";
import styled from "styled-components";
import img from "../../assets/img/img_1.png";
import Button from "../../components/Button/Button";

const Container = styled.section`
  .presentation {
    h1 {
      font-size: 40px;
    }
    h3, h1{
      text-align:center;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    img{
      margin-top:15px;
      width: 55%;
    }
  }
  .describes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .describe {
      width: 500px;
      margin-top: 80px;
      margin: 40px;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <div className="presentation">
        <div className="text">
          <h1>Venha conferir nossos cursos.</h1>
          <br />
          <h3>Com cumpom de até R$500</h3>
        </div>
        <img src={img} alt="Imagem demostrativa" />
      </div>
      <div className="describes">
        <div className="describe">
          <h2>Descrição dos cursos.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at
            nostrum iusto ea necessitatibus eius nihil quibusdam, culpa facere
            obcaecati, quo reprehenderit corrupti voluptates quos aliquam
            laudantium rerum sunt error!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in
            illum accusantium rem est ipsam, a blanditiis consectetur porro sed
            ducimus. Delectus, laudantium! Eum, esse autem deserunt suscipit
            blanditiis id.
            <Button text="Ver mais" />
          </p>
        </div>
        <div className="describe">
          <h2>Descrição dos cursos.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at
            nostrum iusto ea necessitatibus eius nihil quibusdam, culpa facere
            obcaecati, quo reprehenderit corrupti voluptates quos aliquam
            laudantium rerum sunt error!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in
            illum accusantium rem est ipsam, a blanditiis consectetur porro sed
            ducimus. Delectus, laudantium! Eum, esse autem deserunt suscipit
            blanditiis id.
            <Button text="Ver mais" />
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Main;
