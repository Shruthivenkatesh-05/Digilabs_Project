import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Badge } from '../Badge/Badge';
import { BannerController_DisplayFalseS } from '../BannerController_DisplayFalseS/BannerController_DisplayFalseS';
import { BannerController_DisplayTrueSt } from '../BannerController_DisplayTrueSt/BannerController_DisplayTrueSt';
import { BannerNavigationButton_StateDe } from '../BannerNavigationButton_StateDe/BannerNavigationButton_StateDe';
import { ButtonWhite_WithIconTrueStateD } from '../ButtonWhite_WithIconTrueStateD/ButtonWhite_WithIconTrueStateD';
import classes from './Banner.module.css';
import { Group21Icon } from './Group21Icon';

interface Props {
  className?: string;
  classes?: {
    group21?: string;
    badge?: string;
    frame1?: string;
    controller?: string;
    bannerController?: string;
    controller2?: string;
    bannerController2?: string;
    controller3?: string;
    bannerController3?: string;
    controller4?: string;
    bannerController4?: string;
    buttonWhite?: string;
    frame12?: string;
    contentFrame?: string;
    iconCarrotLeft?: string;
    buttonCircleNavigation?: string;
    icon?: string;
    iconCarrotLeft2?: string;
    buttonCircleNavigation2?: string;
    navigationButtons?: string;
    root?: string;
    icon2?: string;
  };
  swap?: {
    group21?: ReactNode;
    controller?: ReactNode;
    controller2?: ReactNode;
    controller3?: ReactNode;
    controller4?: ReactNode;
    icon?: ReactNode;
    icon2?: ReactNode;
  };
  text?: {
    label?: ReactNode;
    developerHandoffImprovements?: ReactNode;
    youLlNowSeeAHighlightAroundSym?: ReactNode;
    button?: ReactNode;
  };
}
/* @figmaId 2:230 */
export const Banner: FC<Props> = memo(function Banner(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.imageFrame}>
        <div className={`${props.classes?.group21 || ''} ${classes.group21}`}>
          {props.swap?.group21 || <Group21Icon className={classes.icon3} />}
        </div>
      </div>
      <div className={`${props.classes?.contentFrame || ''} ${classes.contentFrame}`}>
        <div className={`${props.classes?.frame1 || ''} ${classes.frame1}`}>
          <Badge
            className={props.classes?.badge || ''}
            text={{
              label: props.text?.label,
            }}
          />
          {props.text?.developerHandoffImprovements != null ? (
            props.text?.developerHandoffImprovements
          ) : (
            <div className={classes.developerHandoffImprovements}>Developer handoff improvements</div>
          )}
          {props.text?.youLlNowSeeAHighlightAroundSym != null ? (
            props.text?.youLlNowSeeAHighlightAroundSym
          ) : (
            <div className={classes.youLlNowSeeAHighlightAroundSym}>
              You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
            </div>
          )}
        </div>
        <div className={`${props.classes?.frame12 || ''} ${classes.frame12}`}>
          <div className={classes.frame3}>
            <BannerController_DisplayTrueSt
              className={props.classes?.bannerController || ''}
              classes={{ controller: props.classes?.controller || '' }}
              swap={{
                controller: props.swap?.controller,
              }}
            />
            <BannerController_DisplayFalseS
              className={props.classes?.bannerController2 || ''}
              classes={{ controller: props.classes?.controller2 || '' }}
              swap={{
                controller: props.swap?.controller2,
              }}
            />
            <BannerController_DisplayFalseS
              className={props.classes?.bannerController3 || ''}
              classes={{ controller: props.classes?.controller3 || '' }}
              swap={{
                controller: props.swap?.controller3,
              }}
            />
            <BannerController_DisplayFalseS
              className={props.classes?.bannerController4 || ''}
              classes={{ controller: props.classes?.controller4 || '' }}
              swap={{
                controller: props.swap?.controller4,
              }}
            />
          </div>
          <ButtonWhite_WithIconTrueStateD
            className={props.classes?.buttonWhite || ''}
            text={{
              button: props.text?.button || <div className={classes.button}>Share</div>,
            }}
          />
        </div>
      </div>
      <div className={`${props.classes?.navigationButtons || ''} ${classes.navigationButtons}`}>
        <BannerNavigationButton_StateDe
          className={classes.bannerNavigationButton}
          classes={{
            buttonCircleNavigation: `${props.classes?.buttonCircleNavigation || ''} ${classes.buttonCircleNavigation}`,
            iconCarrotLeft: props.classes?.iconCarrotLeft || '',
            icon: props.classes?.icon2 || '',
          }}
          swap={{
            icon: props.swap?.icon,
          }}
        />
        <BannerNavigationButton_StateDe
          className={classes.bannerNavigationButton2}
          classes={{
            buttonCircleNavigation: `${props.classes?.buttonCircleNavigation2 || ''} ${
              classes.buttonCircleNavigation2
            }`,
            icon: props.classes?.icon || '',
            iconCarrotLeft: props.classes?.iconCarrotLeft2 || '',
          }}
          swap={{
            icon: props.swap?.icon2,
          }}
        />
      </div>
    </div>
  );
});
