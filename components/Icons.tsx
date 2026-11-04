export function PixelHeart({ size = 16, color = '#E0452B' }: { size?: number; color?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 7 6" width={size} height={(size * 6) / 7} shapeRendering="crispEdges" fill={color}>
      <path d="M1 0h2v1h1V0h2v1h1v2h-1v1h-1v1h-1v1H3V5H2V4H1V3H0V1h1z" />
    </svg>
  );
}
