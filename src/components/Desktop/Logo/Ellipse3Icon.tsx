import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3} cy={3} r={3} transform='rotate(-180 3 3)' fill='#4ACD7C' />
  </svg>
);
const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };