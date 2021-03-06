import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import useDimensions from "../utils/usedimensions";
import MenuToggle from "../components/MenuToggle";
import Navigation from "../components/Navigation";
import RobotMonetizer from "../components/RobotMonetizer";
import ReadingProgress from "../utils/readingprogress";
import useOnClickOutside from "../utils/useOnClickOutside";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 960px;
  margin: auto;
  padding: 0px 16px;
`;

const StyledTitle = styled.h2`
  color: #fff;
`;

const StyledBodyText = styled.p`
  color: #fff;
  font-size: 1.2em;
  line-height: 1.6;
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function monetizer() {
  const [isOpen, setToggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const target = React.createRef();

  const ref = useRef();
  useOnClickOutside(ref, () => setToggleOpen(false));


  return (
    <>
      <div ref={ref}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation
          title="Choose Explorer"
          link="/choose"
          character="Monetizer"
          title1="The blockchain"
          link1="#blockchain"
          title2="Smart contracts"
          link2="#smart"
          title3="Crypto currencies"
          title4="Ethereum wallet"
        />
        <MenuToggle toggle={() => setToggleOpen(!isOpen)} />
      </motion.nav>
      </div>
      <ReadingProgress target={target}/>
      <div ref={target}>
      <StyledContainer>
        <h1>Monetizer starter</h1>
        <RobotMonetizer />
      </StyledContainer>
      <StyledContentContainer >
        <StyledTitle id="blockchain">The blockchain</StyledTitle>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledTitle id="smart">Smart contracts</StyledTitle>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledTitle>Crypto currencies</StyledTitle>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledTitle>Ethereum wallet</StyledTitle>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
      </StyledContentContainer>
      </div>
    </>
  );
}
