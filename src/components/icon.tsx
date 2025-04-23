import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function Icon({svg, ...props}: IconProps) {
  const SvgComponent = svg;

  return <SvgComponent {...props} />;
}
