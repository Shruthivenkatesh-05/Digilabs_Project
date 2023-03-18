import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_WithIconFalseStateDisab.module.css';

interface Props {
  className?: string;
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 2:145 */
export const Button_WithIconFalseStateDisab: FC<Props> = memo(function Button_WithIconFalseStateDisab(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});
