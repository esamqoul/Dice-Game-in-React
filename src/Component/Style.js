import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
}
  
`;
export const StartingPage = styled.div`
  height: 100vh;
  margin: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 225, 225, 0.1);
  border-radius: 20px;
  margin: 0 auto;
  @media (min-width: 600px) {
    width: 427px;
  }
`;
export const HeaderTop = styled.div`
  height: 63px;
  margin: 0 auto;
  display: grid;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: end;
  align-items: center;
  padding: 0px 16px;

  h2 {
    font-size: 14px;
    color: white;
    font-weight: bold;
  }
`;
export const Main = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  padding: 50px 0;

  img {
    width: 124px;
  }
`;

export const Fotter = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  flex-flow: column;
  p {
    padding: 16px 0;
    font-size: 10px;
    opacity: 0.4;
    font-weight: normal;
  }
  @media (min-width: 600px) {
    width: 425px;
  }
`;
export const Dise = styled.div`
  display: block;
  margin: auto;
  align-content: space-between;

  img {
    width: 44px;
    height: 44px;
    margin: 0 6px;
  }
`;
export const BetAdd = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  h2 {
    font-size: 32px;
    padding: 20px 40px;
    color: white;
    font-weight: bold;
  }
  img {
    width: 44px;
  }
`;
export const Button = styled.button`
  height: 44px;
  background-color: #ff2983;
  margin: 32px 16px;
  display: inline-block;
  padding: 0 16px;
  border-radius: 2em;
  box-sizing: border-box;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  -webkit-transition: all 0.2s;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.4;

  :hover {
    background-color: #ff036d;
  }
`;
export const HistoryPage = styled.div`
  display: grid;
  padding-top: 32px;

  h1 {
    font-size: 32px;
    padding: 20px 40px;
    color: white;
    font-weight: bold;
  }
  h2 {
    font-size: 32px;
    padding: 20px 40px;
    color: white;
    font-weight: bold;
    display: grid;
    justify-content: left;
  }
  img {
    width: 12px;
  }
`;

export const HistoryPageFotter = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  flex-flow: column;
  p {
    padding: 16px 0;
    font-size: 10px;
    opacity: 0.4;
    font-weight: normal;
  }
  @media (min-width: 600px) {
    width: 425px;
  }
`;
export const HistoryPageDise = styled.div`
  display: block;
  margin: auto;
  align-content: space-between;

  img {
    width: 12px;
    height: 12px;
    margin: 0 6px;
  }
`;
export const ButtonForm = styled(Button)`
  margin: 0;
  opacity: 1;
  width: 100%;
  :hover {
    background-color: #ff036d;
  }
`;

export const Formcontainer = styled.div`
  background: #6d3bcb;
  color: #6a79a6;
  display: inline-block;
  padding: 0em 2em;
  width: 280px;
  .navigation {
    text-align: left;
    ol {
      list-style: none;
      position: absolute;
      padding: 30px 0;
      z-index: 100;
      li {
        display: inline-flex;
        text-align: left;
        a {
          color: #fff;
          text-decoration: none;
          position: relative;
          z-index: 2;
          cursor: pointer;
          opacity: 0;
          &.done {
            opacity: 1;
          }
        }
      }
      margin-bottom: 30px;
    }
  }
  .sign-form {
    text-align: left;
    margin: 85px 0 0 0;
    #next-page {
      opacity: 0;
      width: 40px;
      height: 40px;
      display: inline-block;
      margin-left: 20px;
      background: url("https://jdniki.github.io/signup/images/next-page.svg");
      background-size: contain;
      &:hover {
        background: url("https://jdniki.github.io/signup/images/next-pagehover.svg");
        background-size: contain;
      }
    }
    .questions {
      list-style: none;
      -webkit-transition: height 0.4s;
      transition: height 0.4s;
      width: 88%;
      display: inline-block;
      height: 80px;
      
      li {
        position: absolute;
        span {
          display: block;
          margin-bottom: 10px;
        }
        input {
          font-size: 0.9em;
          margin: 0.3em 0 1em 0;
          border: none;
          background: none;
          border-bottom: 3px solid #fff;
          padding: 0.5em 0.1em;
          transition: all 0.5s ease;
          padding: 10px;
          font-size: 16px;
          color: #fff;
          margin-bottom: 30px;
          border: none;
          border-bottom: 1px solid #fff;
          outline: none;
          background: rgba(255, 255, 255, 0.1);
          &:focus {
            outline: none;
            border-bottom: 3px solid #5d38c5;
          }
        }
        &:not(:first-child) {
          opacity: 0;
          margin-top: 150px;
        }
        /*-------------Password ------------------*/
        #viewpswd {
          position: absolute;
          opacity: 0;
          z-index:-100;
        }
        #show-pwd {
          margin: -2.75em 0em;
          width: 40px;
          height: 40px;
          position: absolute;
          right: 0;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
        }
      }
    }
  }
}
`;
