import { memo, SVGProps } from 'react';

const ControllerIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.2} cx={4.07706} cy={3.9233} r={3.23083} fill='white' />
  </svg>
);
const Memo = memo(ControllerIcon2);
export { Memo as ControllerIcon2 };
