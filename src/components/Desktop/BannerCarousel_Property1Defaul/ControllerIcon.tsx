import { memo, SVGProps } from 'react';

const ControllerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4.07701} cy={4.92329} r={4.03854} fill='white' />
  </svg>
);
const Memo = memo(ControllerIcon);
export { Memo as ControllerIcon };
