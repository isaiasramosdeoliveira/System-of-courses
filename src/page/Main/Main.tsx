import React from "react";
import styled from "styled-components";
import img from '../../assets/img/img_1.png';


const Container = styled.section``;

const Main = () => {
  return (
    <main>
      <div className="presentation">
        <div className="text">
          <h1>Venha conferir nossos cursos.</h1>
          <h3>Com cumpom de até R$500</h3>
        </div>
        <img src={img} alt="Imagem demostrativa" />
      </div>
      <div>
        <h2>Descrição dos cursos.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at
          nostrum iusto ea necessitatibus eius nihil quibusdam, culpa facere
          obcaecati, quo reprehenderit corrupti voluptates quos aliquam
          laudantium rerum sunt error!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in illum
          accusantium rem est ipsam, a blanditiis consectetur porro sed ducimus.
          Delectus, laudantium! Eum, esse autem deserunt suscipit blanditiis id.
        </p>
      </div>
    </main>
  );
};

export default Main;
