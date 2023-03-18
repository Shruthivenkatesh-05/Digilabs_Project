import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ButtonCircleNavigation_StateDe } from '../ButtonCircleNavigation_StateDe/ButtonCircleNavigation_StateDe';
import classes from './BannerNavigationButton_StateDe.module.css';

interface Props {
  className?: string;
  classes?: {
    buttonCircleNavigation?: string;
    root?: string;
    iconCarrotLeft?: string;
    icon?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2:224 */
export const BannerNavigationButton_StateDe: FC<Props> = memo(function BannerNavigationButton_StateDe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ButtonCircleNavigation_StateDe
        className={`${props.classes?.buttonCircleNavigation || ''} ${classes.buttonCircleNavigation}`}
        classes={{ iconCarrotLeft: props.classes?.iconCarrotLeft || '', icon2: props.classes?.icon || '' }}
        swap={{
          icon: props.swap?.icon,
        }}
      />
    </div>
  );
});
