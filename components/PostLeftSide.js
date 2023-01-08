import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Sidebar from "./Sidebar";

import styled from "styled-components";

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 25%;
  position: absolute;
  left: 0;
  z-index: 700;
  background: #fff;
`;

const LeftSideWrapper = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <ul>
        <li>item1</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <About />
      <Contact />
    </Wrapper>
  );
};

export default LeftSideWrapper;
