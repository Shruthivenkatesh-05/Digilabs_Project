import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconCarrotDown.module.css';
import { IconCarrotDownIcon } from './IconCarrotDownIcon';

interface Props {
  className?: string;
}
/* @figmaId 2:29 */
export const IconCarrotDown: FC<Props> = memo(function IconCarrotDown(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>
        <IconCarrotDownIcon className={classes.icon2} />
      </div>
    </div>
  );
});
