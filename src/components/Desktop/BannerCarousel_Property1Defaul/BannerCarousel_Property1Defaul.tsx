import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Banner } from '../Banner/Banner';
import classes from './BannerCarousel_Property1Defaul.module.css';
import { ControllerIcon } from './ControllerIcon';
import { ControllerIcon2 } from './ControllerIcon2';
import { ControllerIcon3 } from './ControllerIcon3';
import { ControllerIcon4 } from './ControllerIcon4';
import { ControllerIcon5 } from './ControllerIcon5';
import { ControllerIcon6 } from './ControllerIcon6';
import { ControllerIcon7 } from './ControllerIcon7';
import { ControllerIcon8 } from './ControllerIcon8';
import { Group21Icon } from './Group21Icon';
import { Group21Icon2 } from './Group21Icon2';
import { Group21Icon3 } from './Group21Icon3';
import { IconCarrotLeftIcon } from './IconCarrotLeftIcon';
import { IconCarrotLeftIcon2 } from './IconCarrotLeftIcon2';
import { IconCarrotLeftIcon3 } from './IconCarrotLeftIcon3';
import { IconCarrotLeftIcon4 } from './IconCarrotLeftIcon4';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group21?: ReactNode;
    group212?: ReactNode;
    group213?: ReactNode;
  };
  text?: {
    label?: ReactNode;
    developerHandoffImprovements?: ReactNode;
    youLlNowSeeAHighlightAroundSym?: ReactNode;
    button?: ReactNode;
    label2?: ReactNode;
    developerHandoffImprovements2?: ReactNode;
    youLlNowSeeAHighlightAroundSym2?: ReactNode;
    button2?: ReactNode;
    label3?: ReactNode;
    developerHandoffImprovements3?: ReactNode;
    youLlNowSeeAHighlightAroundSym3?: ReactNode;
    button3?: ReactNode;
  };
}
/* @figmaId 2:331 */
export const BannerCarousel_Property1Defaul: FC<Props> = memo(function BannerCarousel_Property1Defaul(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Banner
        className={classes.banner}
        classes={{
          group21: classes.group21,
          badge: classes.badge,
          frame1: classes.frame1,
          controller: classes.controller,
          bannerController: classes.bannerController,
          controller2: classes.controller2,
          bannerController2: classes.bannerController2,
          controller3: classes.controller3,
          bannerController3: classes.bannerController3,
          controller4: classes.controller4,
          bannerController4: classes.bannerController4,
          buttonWhite: classes.buttonWhite,
          frame12: classes.frame12,
          contentFrame: classes.contentFrame,
          iconCarrotLeft: classes.iconCarrotLeft,
          buttonCircleNavigation: classes.buttonCircleNavigation,
          icon: classes.icon7,
          iconCarrotLeft2: classes.iconCarrotLeft2,
          buttonCircleNavigation2: classes.buttonCircleNavigation2,
          navigationButtons: classes.navigationButtons,
        }}
        swap={{
          group21: props.swap?.group21 || (
            <div className={classes.group21}>
              <Group21Icon className={classes.icon} />
            </div>
          ),
          controller: (
            <div className={classes.controller}>
              <ControllerIcon className={classes.icon2} />
            </div>
          ),
          controller2: (
            <div className={classes.controller2}>
              <ControllerIcon2 className={classes.icon3} />
            </div>
          ),
          controller3: (
            <div className={classes.controller3}>
              <ControllerIcon3 className={classes.icon4} />
            </div>
          ),
          controller4: (
            <div className={classes.controller4}>
              <ControllerIcon4 className={classes.icon5} />
            </div>
          ),
          icon: <IconCarrotLeftIcon className={classes.icon6} />,
          icon2: (
            <div className={classes.icon7}>
              <IconCarrotLeftIcon2 className={classes.icon8} />
            </div>
          ),
        }}
        text={{
          label: props.text?.label || <div className={classes.label}>NEW</div>,
          developerHandoffImprovements: props.text?.developerHandoffImprovements || (
            <div className={classes.developerHandoffImprovements}>Developer handoff improvements</div>
          ),
          youLlNowSeeAHighlightAroundSym: props.text?.youLlNowSeeAHighlightAroundSym || (
            <div className={classes.youLlNowSeeAHighlightAroundSym}>
              You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
            </div>
          ),
          button: props.text?.button || <div className={classes.button}>Share</div>,
        }}
      />
      <Banner
        className={classes.banner2}
        classes={{
          group21: classes.group212,
          badge: classes.badge2,
          frame1: classes.frame13,
          controller: classes.controller5,
          bannerController: classes.bannerController5,
          controller2: classes.controller6,
          bannerController2: classes.bannerController6,
          controller3: classes.controller7,
          bannerController3: classes.bannerController7,
          controller4: classes.controller8,
          bannerController4: classes.bannerController8,
          buttonWhite: classes.buttonWhite2,
          frame12: classes.frame14,
          contentFrame: classes.contentFrame2,
          icon2: classes.icon14,
          iconCarrotLeft: classes.iconCarrotLeft3,
          buttonCircleNavigation: classes.buttonCircleNavigation3,
          icon: classes.icon16,
          iconCarrotLeft2: classes.iconCarrotLeft4,
          buttonCircleNavigation2: classes.buttonCircleNavigation4,
          navigationButtons: classes.navigationButtons2,
        }}
        swap={{
          group21: props.swap?.group212 || (
            <div className={classes.group212}>
              <Group21Icon2 className={classes.icon9} />
            </div>
          ),
          controller: (
            <div className={classes.controller5}>
              <ControllerIcon5 className={classes.icon10} />
            </div>
          ),
          controller2: (
            <div className={classes.controller6}>
              <ControllerIcon6 className={classes.icon11} />
            </div>
          ),
          controller3: (
            <div className={classes.controller7}>
              <ControllerIcon7 className={classes.icon12} />
            </div>
          ),
          controller4: (
            <div className={classes.controller8}>
              <ControllerIcon8 className={classes.icon13} />
            </div>
          ),
          icon: (
            <div className={classes.icon14}>
              <IconCarrotLeftIcon3 className={classes.icon15} />
            </div>
          ),
          icon2: (
            <div className={classes.icon16}>
              <IconCarrotLeftIcon4 className={classes.icon17} />
            </div>
          ),
        }}
        text={{
          label: props.text?.label2 || <div className={classes.label2}>NEW</div>,
          developerHandoffImprovements: props.text?.developerHandoffImprovements2 || (
            <div className={classes.developerHandoffImprovements2}>Developer handoff improvements</div>
          ),
          youLlNowSeeAHighlightAroundSym: props.text?.youLlNowSeeAHighlightAroundSym2 || (
            <div className={classes.youLlNowSeeAHighlightAroundSym2}>
              You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
            </div>
          ),
          button: props.text?.button2 || <div className={classes.button2}>Share</div>,
        }}
      />
      <Banner
        className={classes.banner3}
        swap={{
          group21: props.swap?.group213 || <Group21Icon3 className={classes.icon18} />,
        }}
        text={{
          label: props.text?.label3,
          developerHandoffImprovements: props.text?.developerHandoffImprovements3,
          youLlNowSeeAHighlightAroundSym: props.text?.youLlNowSeeAHighlightAroundSym3,
          button: props.text?.button3,
        }}
      />
    </div>
  );
});
