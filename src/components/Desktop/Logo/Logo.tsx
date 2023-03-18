import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse3Icon } from './Ellipse3Icon';
import classes from './Logo.module.css';
import { SubtractIcon } from './SubtractIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:3 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon} />
      </div>
      <div className={classes.subtract}>
        <SubtractIcon className={classes.icon2} />
      </div>
    </div>
  );
});
