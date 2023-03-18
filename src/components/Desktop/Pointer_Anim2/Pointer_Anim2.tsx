import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Pointer_Anim2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:65 */
export const Pointer_Anim2: FC<Props> = memo(function Pointer_Anim2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
    </div>
  );
});
