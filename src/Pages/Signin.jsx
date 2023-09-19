import { Container, Banner, FormContainer } from "../Components/StyledComponents";
import banner from '../assets/banner.jpg'
const Signin = () => {
  return (
    <Container>
      <Banner>
        <img src={banner} alt="banner" />
        </Banner>
      <FormContainer>
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Signin;
