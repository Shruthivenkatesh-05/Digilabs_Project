import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconCarrotLeft } from '../IconCarrotLeft/IconCarrotLeft';
import classes from './ButtonCircleNavigation_StateDe.module.css';
import { IconCarrotLeftIcon } from './IconCarrotLeftIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    iconCarrotLeft?: string;
    icon2?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 2:217 */
export const ButtonCircleNavigation_StateDe: FC<Props> = memo(function ButtonCircleNavigation_StateDe(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <IconCarrotLeft
        className={props.classes?.iconCarrotLeft || ''}
        classes={{ icon: props.classes?.icon2 || '' }}
        swap={{
          icon: props.swap?.icon || <IconCarrotLeftIcon className={classes.icon} />,
        }}
      />
    </button>
  );
});
