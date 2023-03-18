import { memo, SVGProps } from 'react';

const IconCarrotLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.27358 1.96344C5.572 1.63187 5.54512 1.12117 5.21355 0.822753C4.88197 0.524338 4.37127 0.551217 4.07285 0.882789L0.438172 4.92132C0.161714 5.2285 0.161714 5.69481 0.438172 6.00198L4.07285 10.0405C4.37127 10.3721 4.88197 10.399 5.21354 10.1006C5.54512 9.80214 5.572 9.29143 5.27358 8.95986L2.12519 5.46165L5.27358 1.96344Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(IconCarrotLeftIcon);
export { Memo as IconCarrotLeftIcon };
