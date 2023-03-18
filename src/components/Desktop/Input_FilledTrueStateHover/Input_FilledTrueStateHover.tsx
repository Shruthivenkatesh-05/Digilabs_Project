import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { InputAfter_StateDefaultOverlay } from '../InputAfter_StateDefaultOverlay/InputAfter_StateDefaultOverlay';
import { InputText } from '../InputText/InputText';
import classes from './Input_FilledTrueStateHover.module.css';

interface Props {
  className?: string;
  classes?: {
    value?: string;
    root?: string;
  };
  hide?: {
    email?: boolean;
  };
  text?: {
    valueText?: ReactNode;
  };
}
/* @figmaId 2:101 */
export const Input_FilledTrueStateHover: FC<Props> = memo(function Input_FilledTrueStateHover(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.email && <div className={classes.email}>Email</div>}
      <div className={classes.input}>
        <InputText
          className={`${props.classes?.value || ''} ${classes.value}`}
          text={{
            inputText: props.text?.valueText || <div className={classes.valueText}>user@testmail.com</div>,
          }}
        />
      </div>
    </div>
  );
});
