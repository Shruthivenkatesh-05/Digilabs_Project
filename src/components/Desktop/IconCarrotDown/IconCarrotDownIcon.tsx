import { memo, SVGProps } from 'react';

const IconCarrotDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.66896 0.256699C1.25845 -0.11276 0.626158 -0.0794815 0.256699 0.331029C-0.11276 0.741539 -0.0794815 1.37383 0.331029 1.74329L5.33103 6.24329C5.71133 6.58556 6.28865 6.58556 6.66896 6.24329L11.669 1.74329C12.0795 1.37383 12.1127 0.741539 11.7433 0.331029C11.3738 -0.0794815 10.7415 -0.11276 10.331 0.256699L5.99999 4.15463L1.66896 0.256699Z'
      fill='#7A7A85'
    />
  </svg>
);
const Memo = memo(IconCarrotDownIcon);
export { Memo as IconCarrotDownIcon };
