import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  &.signin {
    max-width: 100%;
    flex-direction: row;
    padding: 0;
  }
`;
export const GridBox = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    .skeleton{
      height: 10rem;
    }
  }
  .skeleton {
    height: 20rem;
    width: 100%;
    border-radius: 10px;
    background-color: #ddd;
    animation: load 1.5s ease-in-out infinite;
    @keyframes load {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.3;
      }
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 4rem;
  justify-content: space-between;
  &.a-nav {
    padding-top: 1rem;
    h4 {
      font-weight: 500;
      color: #101010;
      font-size: 1.5rem;
    }

    .profile-dropdown {
      position: relative;
      display: inline-flex;
      gap: 1rem;
      align-items: center;
    }

    .profile-info {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 20px;
    }

    .profile-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .profile-name {
      font-weight: bold;
    }

    .dropdown-content {
      button {
        background: var(--accent-color);
      }
    }

    .logout-button {
      background-color: #04aa6d;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .logout-button:hover {
      background-color: #3e8e41;
    }
  }
  &.subHead {
    margin: 3rem 0;
    h2 {
      font-weight: bold;
      color: #101010;
      font-size: 2.5rem;
    }
    h5 {
      font-weight: 500;
      color: var(--accent-color);
      font-size: 1rem;
    }
    .search-bar {
      position: relative;
      button {
        position: absolute;
        right: 0;
        top: 0;
        height: 2.5rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background: transparent;
        color: #101010;
        font-weight: bold;
        cursor: pointer;
      }
      input {
        height: 2.5rem;
        width: 20rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #ddd;
      }
    }
  }
  @media screen and (max-width: 780px) {
    &.subHead {
      flex-direction: column;
      align-items:stretch;
      .search-bar {
        input {
          width: 100%;
        }
      }
    }
    h2 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 0.8rem;
    }
  }
`;

export const Banner = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    max-width: 400px;
    h2 {
      font-weight: bold;
      color: #101010;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 10px;
      border: 1px solid #ccc;
    }
    button {
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
