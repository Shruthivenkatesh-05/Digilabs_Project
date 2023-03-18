import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Timer_Value10.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:1494 */
export const Timer_Value10: FC<Props> = memo(function Timer_Value10(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes._109876543210}>
        <div className={classes.textBlock}>10</div>
        <div className={classes.textBlock2}>09</div>
        <div className={classes.textBlock3}>08</div>
        <div className={classes.textBlock4}>07</div>
        <div className={classes.textBlock5}>06</div>
        <div className={classes.textBlock6}>05</div>
        <div className={classes.textBlock7}>04</div>
        <div className={classes.textBlock8}>03</div>
        <div className={classes.textBlock9}>02</div>
        <div className={classes.textBlock10}>01</div>
        <div className={classes.textBlock11}>00</div>
      </div>
    </div>
  );
});
