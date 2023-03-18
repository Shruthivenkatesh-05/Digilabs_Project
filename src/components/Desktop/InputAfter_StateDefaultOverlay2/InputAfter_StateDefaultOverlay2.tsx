import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconCarrotDown } from '../IconCarrotDown/IconCarrotDown';
import classes from './InputAfter_StateDefaultOverlay2.module.css';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
  hide?: {
    addonText?: boolean;
  };
}
/* @figmaId 2:40 */
export const InputAfter_StateDefaultOverlay2: FC<Props> = memo(function InputAfter_StateDefaultOverlay2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {!props.hide?.addonText && <div className={classes.addonText}>@testmail.com</div>}
      <div className={classes.iconFrame}>{props.swap?.icon || <IconCarrotDown />}</div>
    </div>
  );
});
