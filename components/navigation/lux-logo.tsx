export function LuxLogo(
  props: React.SVGProps<SVGSVGElement>,
): React.ReactElement {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M50 85 L15 25 L85 25 Z" fill="currentColor" />
    </svg>
  );
}
