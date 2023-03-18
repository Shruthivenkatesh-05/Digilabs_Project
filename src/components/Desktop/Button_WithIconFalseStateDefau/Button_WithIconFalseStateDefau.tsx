import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_WithIconFalseStateDefau.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 2:143 */
export const Button_WithIconFalseStateDefau: FC<Props> = memo(function Button_WithIconFalseStateDefau(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});
