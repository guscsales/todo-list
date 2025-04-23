export default function Icon({svg, ...props}) {
  const SvgComponent = svg;

  return <SvgComponent {...props} />;
}
