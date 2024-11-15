"use client";
import React, { ReactNode } from "react";
import { Tilt } from "react-tilt";

interface tiltStylesType {
  reverse: boolean;
  max: number;
  perspective: number;
  scale: number;
  speed: number;
  transition: boolean;
  axis: null;
  reset: boolean;
  easing: string;
  glare: boolean;
  "max-glare": number;
}

const TiltWraper = ({
  children,
  tiltStyles,
}: {
  children: ReactNode;
  tiltStyles: any;
}) => {
  return <Tilt options={tiltStyles}>{children}</Tilt>;
};

export default TiltWraper;
