import styled from "styled-components";
import {
  breakpointXS,
  grey,
  primary,
  widthNavMenu,
} from "../styles/globalStyles";

const MainContainerNFP = styled.div`
  height: 80vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${primary};
  @media (min-width: ${breakpointXS}) {
    margin-left: calc(${widthNavMenu}*1.3);
  }
`;

const AnchorHome = styled.a`
  text-decoration: none;
  color: ${grey};
  cursor: pointer;
`;

const TitleCentered = styled.h2`
  text-align: center;
  font-family: "permanent marker", sans-serif;
`;

const NotFoundPage = () => {
  return (
    <>
      <MainContainerNFP>
        <TitleCentered>Ups...There is nothing in this page.</TitleCentered>
        <p>
          Please go to
          <AnchorHome href="/home"> Home Page</AnchorHome>
        </p>
      </MainContainerNFP>
    </>
  );
};

export default NotFoundPage;
