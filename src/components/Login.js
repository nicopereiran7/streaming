import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../config/firebase";

const Login = () => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserAuth(user);
      }
    });
  }, []);

  if (userAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Content>
        <CTA>
          <SignUp>SIGN UP FREE</SignUp>
          <Description>
            Get premier access to all series and movies exclusives only on
            Disney+
          </Description>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/img/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #05d5b1;
  width: 100%;
  letter-spacing: 2px;
  margin-bottom: 12px;
  font-size: 18px;
  padding: 20px;
  border: 1px solid transparent;
  transition: 0.3s ease all;

  &:hover {
    cursor: pointer;
    background-color: #1cdcbb;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 20px;
  margin: 0 0 24px;
  line-height: 1.5;
`;

export default Login;
