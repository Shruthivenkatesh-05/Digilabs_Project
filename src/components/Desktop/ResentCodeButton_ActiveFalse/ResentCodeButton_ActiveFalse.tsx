import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_WithIconFalseStateDisab } from '../Button_WithIconFalseStateDisab/Button_WithIconFalseStateDisab';
import { Timer_Value10 } from '../Timer_Value10/Timer_Value10';
import classes from './ResentCodeButton_ActiveFalse.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:1499 */
export const ResentCodeButton_ActiveFalse: FC<Props> = memo(function ResentCodeButton_ActiveFalse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Button_WithIconFalseStateDisab
        text={{
          button: <div className={classes.button}>Resend 00:</div>,
        }}
      />
      <Timer_Value10 />
    </div>
  );
});
