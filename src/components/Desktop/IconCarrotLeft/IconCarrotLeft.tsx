import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconCarrotLeft.module.css';
import { IconCarrotLeftIcon } from './IconCarrotLeftIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    icon?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2:214 */
export const IconCarrotLeft: FC<Props> = memo(function IconCarrotLeft(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <IconCarrotLeftIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
