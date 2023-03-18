import { memo, SVGProps } from 'react';

const ControllerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.2} cx={4} cy={4} r={4} fill='white' />
  </svg>
);
const Memo = memo(ControllerIcon);
export { Memo as ControllerIcon };
