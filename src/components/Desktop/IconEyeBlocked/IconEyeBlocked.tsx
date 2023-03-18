import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconEyeBlocked.module.css';
import { IconEyeBlockedIcon } from './IconEyeBlockedIcon';

interface Props {
  className?: string;
}
/* @figmaId 2:115 */
export const IconEyeBlocked: FC<Props> = memo(function IconEyeBlocked(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>
        <IconEyeBlockedIcon className={classes.icon2} />
      </div>
    </div>
  );
});
