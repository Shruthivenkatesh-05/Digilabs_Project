import { memo, SVGProps } from 'react';

const ControllerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5} cy={5} r={5} fill='white' />
  </svg>
);
const Memo = memo(ControllerIcon);
export { Memo as ControllerIcon };
