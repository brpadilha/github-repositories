import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px; /*tamanho da fonte*/
  color: #3a3a3a;
  max-width: 450px; /*largura máxima de pixels do texto */
  line-height: 56px; /*espaçamento entre as letras */
  margin-top: 80px; /*margen do h1 para o topo */
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex; /*forçar a ficar um no lado do outro, independente do tamanho da página */

  input {
    flex: 1; /* vai fazer com que o input tente ocupar o máximo de espaço possível, e o nosso espaço máximo aqui é de 700px. */
    height: 70p;
    padding: 0 24px;
    border: 0; /*sem bordar */
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0; /* Tira a borda da direita */

    ${(
      props, // função que vai verificar se a propriedade hasError existe
    ) =>
      props.hasError &&
      css`
        border-color: #c53030;
        background-color: #fff0f1;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;

    border: 0px;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;
    /* Demora 0.2 segundos para escurecer o fundo do botão */

    &:hover {
      /* Quando passa o mouse em cima */
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
