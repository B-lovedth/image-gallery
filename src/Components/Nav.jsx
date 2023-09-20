import { useState,useRef } from "react";
import { Wrapper } from "./StyledComponents";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import {FaSearch, FaSignOutAlt} from 'react-icons/fa'

const Nav = () => {
  const [error, setError] = useState("");
  const searchParam = useRef()
  const { currentUser, logOut ,query,setQuery} = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSearch=(e)=>{
    e.preventDefault()
    setQuery(searchParam.current.value)
    navigate('/search')
  }
  return (
    <>
    <Wrapper className="a-nav">
      <h4>Gallery</h4>
      {error && (
        <Toast bg="danger">
          <Toast.Header>
            <strong className="me-auto">Gallery</strong>
          </Toast.Header>
          <Toast.Body>Something went wrong</Toast.Body>
        </Toast>
      )}
      <div className="profile-dropdown">
        <div className="profile-info">
          <img
            className="profile-image"
            src="https://picsum.photos/700/500?random=2"
            alt="Profile Image"
          />
          <span className="profile-name">{currentUser.email.slice(0,currentUser.email.indexOf("@"))}</span>
        </div>
        <div className="dropdown-content">
          <button onClick={handleLogOut} className="logout-button">
            <FaSignOutAlt/>
          </button>
        </div>
      </div>
    </Wrapper>
    <Wrapper className="subHead" >
        <div className="top">
        <h2>
            {window.location.pathname === '/' ? 'Home' : 'Search'}
        </h2>
        <h5>Query : {query}</h5>
        </div>
        <form onSubmit={handleSearch} className="search-bar">
            <input ref={searchParam} type="text" placeholder="Search" />
            <button type="submit"><FaSearch/></button>
        </form>
    </Wrapper>
    </>
  );
};

export default Nav;
