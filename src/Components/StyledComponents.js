import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100dvh;
`;

export const Banner = styled.div`
  width: 50%;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
@media screen and (max-width:780px){
    display: none;
}
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 0 50px;
  @media screen and (max-width:780px){
    width: 100%;
  }
  form{
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width:100%;
  max-width: 400px;
  border:1px solid #ddd
  h2{
    font-weight:bold;
    color:#101010;
  }
  input{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  button{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border: none;
    background: var(--accent-color);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  }
`;
