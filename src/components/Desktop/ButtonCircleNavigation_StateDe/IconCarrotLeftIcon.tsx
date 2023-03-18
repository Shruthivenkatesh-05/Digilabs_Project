import { memo, SVGProps } from 'react';

const IconCarrotLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.24329 1.66896C6.61275 1.25845 6.57948 0.626158 6.16897 0.256699C5.75846 -0.11276 5.12617 -0.0794815 4.75671 0.331029L0.256706 5.33103C-0.0855687 5.71133 -0.0855687 6.28865 0.256706 6.66896L4.75671 11.669C5.12616 12.0795 5.75845 12.1127 6.16896 11.7433C6.57947 11.3738 6.61275 10.7415 6.24329 10.331L2.34536 5.99999L6.24329 1.66896Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(IconCarrotLeftIcon);
export { Memo as IconCarrotLeftIcon };
