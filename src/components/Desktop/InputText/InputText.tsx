import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Pointer_Anim2 } from '../Pointer_Anim2/Pointer_Anim2';
import classes from './InputText.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    pointer?: boolean;
  };
  text?: {
    inputText?: ReactNode;
  };
}
/* @figmaId 2:69 */
export const InputText: FC<Props> = memo(function InputText(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.inputText != null ? (
        props.text?.inputText
      ) : (
        <div className={classes.inputText}>user@testmail.com</div>
      )}
      {props.hide?.pointer === false && <Pointer_Anim2 />}
    </div>
  );
});
