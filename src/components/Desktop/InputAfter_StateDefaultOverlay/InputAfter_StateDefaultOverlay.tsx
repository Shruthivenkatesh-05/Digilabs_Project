import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconCarrotDown } from '../IconCarrotDown/IconCarrotDown';
import classes from './InputAfter_StateDefaultOverlay.module.css';

interface Props {
  className?: string;
  classes?: {
    overlay?: string;
  };
  text?: {
    addonText?: ReactNode;
  };
}
/* @figmaId 2:35 */
export const InputAfter_StateDefaultOverlay: FC<Props> = memo(function InputAfter_StateDefaultOverlay(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.overlay || ''} ${classes.overlay}`}></div>
      {props.text?.addonText != null ? props.text?.addonText : <div className={classes.addonText}>@testmail.com</div>}
      <div className={classes.iconFrame}>
        <IconCarrotDown />
      </div>
    </div>
  );
});
