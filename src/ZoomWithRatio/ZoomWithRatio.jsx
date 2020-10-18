import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { getValueInRange } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    zoom: ${({ zoom }) => zoom};
  }
`;

export const ZoomWithRatio = ({ minRatio, maxRatio, children }) => {
  const [zoom, setZoom] = useState(1);
  const child = useRef();
  const parent = useRef();

  useEffect(() => {
    if (child.current && parent.current) {
      setZoom(getMaxZoomWithinParent(child.current, parent.current));
    }
  }, [child.current]);

  const getMaxZoomWithinParent = (childElement, parentElement) => {
    const widthRatio = parentElement.clientWidth / childElement.clientWidth;
    const heightRatio = parentElement.clientHeight / childElement.clientHeight;
    const maxPossibleRatio =
      widthRatio < heightRatio ? widthRatio : heightRatio;
    return getValueInRange(maxPossibleRatio, minRatio, maxRatio);
  };

  return (
    <Container ref={parent} zoom={zoom}>
      {React.cloneElement(children, {
        ref: child,
      })}
    </Container>
  );
};
