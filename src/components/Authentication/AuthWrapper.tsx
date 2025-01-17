import styled from "styled-components";

const StyledLoginPage = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f8f8f8;
  @media (max-width: 991px) {
    padding-top: 100px;
    height: 100%;
    padding-bottom: 50px;
  }
`;

type Props = {
  children: React.ReactNode;
};

const AuthWrapper: React.FC<Props> = ({ children }) => {
  return <StyledLoginPage>{children}</StyledLoginPage>;
};

export default AuthWrapper;
