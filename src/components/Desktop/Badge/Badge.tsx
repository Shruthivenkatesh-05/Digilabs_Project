import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 2:181 */
export const Badge: FC<Props> = memo(function Badge(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>NEW</div>}
    </div>
  );
});
