import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { InputAfter_StateDefaultOverlay } from '../InputAfter_StateDefaultOverlay/InputAfter_StateDefaultOverlay';
import { InputText } from '../InputText/InputText';
import classes from './Input_FilledTrueStateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    overlay?: string;
    root?: string;
  };
  swap?: {
    after?: ReactNode;
  };
  hide?: {
    email?: boolean;
    after?: boolean;
  };
  text?: {
    valueText?: ReactNode;
    addonText?: ReactNode;
  };
}
/* @figmaId 2:80 */
export const Input_FilledTrueStateDefault: FC<Props> = memo(function Input_FilledTrueStateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.email && <div className={classes.email}>Email</div>}
      <div className={classes.input}>
        <InputText
          className={classes.value}
          text={{
            inputText: props.text?.valueText || <div className={classes.valueText}>user@testmail.com</div>,
          }}
        />
        {props.hide?.after === false &&
          (props.swap?.after || (
            <InputAfter_StateDefaultOverlay
              classes={{ overlay: props.classes?.overlay || '' }}
              text={{
                addonText: props.text?.addonText,
              }}
            />
          ))}
      </div>
    </div>
  );
});
