import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BannerController_DisplayFalseS.module.css';
import { ControllerIcon } from './ControllerIcon';

interface Props {
  className?: string;
  classes?: {
    controller?: string;
    root?: string;
  };
  swap?: {
    controller?: ReactNode;
  };
}
/* @figmaId 2:191 */
export const BannerController_DisplayFalseS: FC<Props> = memo(function BannerController_DisplayFalseS(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.controller || ''} ${classes.controller}`}>
        {props.swap?.controller || <ControllerIcon className={classes.icon} />}
      </div>
    </div>
  );
});
