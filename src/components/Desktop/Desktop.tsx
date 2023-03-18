import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BannerCarousel_Property1Defaul } from './BannerCarousel_Property1Defaul/BannerCarousel_Property1Defaul';
import { Button_WithIconFalseStateDefau } from './Button_WithIconFalseStateDefau/Button_WithIconFalseStateDefau';
import { Button_WithIconTrueStateDefaul } from './Button_WithIconTrueStateDefaul/Button_WithIconTrueStateDefaul';
import classes from './Desktop.module.css';
import { Group21Icon } from './Group21Icon';
import { Group21Icon2 } from './Group21Icon2';
import { Group21Icon3 } from './Group21Icon3';
import { Group21Icon4 } from './Group21Icon4';
import { Group21Icon5 } from './Group21Icon5';
import { Group21Icon6 } from './Group21Icon6';
import { IconEyeBlocked } from './IconEyeBlocked/IconEyeBlocked';
import { Input_FilledTrueStateDefault } from './Input_FilledTrueStateDefault/Input_FilledTrueStateDefault';
import { Input_FilledTrueStateHover } from './Input_FilledTrueStateHover/Input_FilledTrueStateHover';
import { Input_FilledTrueStatePressed } from './Input_FilledTrueStatePressed/Input_FilledTrueStatePressed';
import { InputAfter_StateDefaultOverlay2 } from './InputAfter_StateDefaultOverlay2/InputAfter_StateDefaultOverlay2';
import { Logo } from './Logo/Logo';
import { ResentCodeButton_ActiveFalse } from './ResentCodeButton_ActiveFalse/ResentCodeButton_ActiveFalse';

interface Props {
  className?: string;
  hide?: {
    email?: boolean;
    after?: boolean;
    email2?: boolean;
    after2?: boolean;
    addonText?: boolean;
    email3?: boolean;
    pointer?: boolean;
    email4?: boolean;
    email5?: boolean;
    email6?: boolean;
    email7?: boolean;
    email8?: boolean;
  };
}
/* @figmaId 2:13 */
export const Desktop: FC<Props> = memo(function Desktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.signIn1}>
        <Logo className={classes.logo} />
        <div className={classes.createAccount}>
          <p className={classes.labelWrapper}>
            <span className={classes.label7}>Not member? </span>
            <span className={classes.label8}> Create account</span>
          </p>
        </div>
        <div className={classes.signInWrapper}>
          <div className={classes.signIn}>
            <div className={classes.textFrame}>
              <div className={classes.title}>
                <div className={classes.textBlock}>Welcome to </div>
                <div className={classes.textBlock2}>Systempackage</div>
              </div>
            </div>
            <div className={classes.form}>
              <Input_FilledTrueStateDefault
                className={classes.input}
                classes={{ overlay: classes.overlay }}
                hide={{
                  email: true,
                  after: false,
                }}
                text={{
                  valueText: <div className={classes.valueText}>hellouser</div>,
                  addonText: <div className={classes.addonText}>@heads.design</div>,
                }}
              />
              <Input_FilledTrueStateDefault
                className={classes.input2}
                swap={{
                  after: (
                    <InputAfter_StateDefaultOverlay2
                      swap={{
                        icon: <IconEyeBlocked />,
                      }}
                      hide={{
                        addonText: true,
                      }}
                    />
                  ),
                }}
                hide={{
                  email: true,
                  after: false,
                }}
                text={{
                  valueText: <div className={classes.valueText2}>•••••••••• </div>,
                }}
              />
            </div>
            <div className={classes.buttonsFrame}>
              <Button_WithIconTrueStateDefaul
                className={classes.button2}
                text={{
                  button: <div className={classes.button}>Next</div>,
                }}
              />
              <Button_WithIconFalseStateDefau
                text={{
                  button: <div className={classes.button3}>Forgot your password?</div>,
                }}
              />
            </div>
          </div>
          <BannerCarousel_Property1Defaul
            className={classes.bannerCarousel}
            swap={{
              group21: <Group21Icon className={classes.icon} />,
              group212: <Group21Icon2 className={classes.icon2} />,
              group213: <Group21Icon3 className={classes.icon3} />,
            }}
            text={{
              label: <div className={classes.label}>NEW</div>,
              developerHandoffImprovements: (
                <div className={classes.developerHandoffImprovements}>Developer handoff improvements</div>
              ),
              youLlNowSeeAHighlightAroundSym: (
                <div className={classes.youLlNowSeeAHighlightAroundSym}>
                  You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </div>
              ),
              button: <div className={classes.button4}>Share</div>,
              label2: <div className={classes.label2}>NEW</div>,
              developerHandoffImprovements2: (
                <div className={classes.developerHandoffImprovements2}>Developer handoff improvements</div>
              ),
              youLlNowSeeAHighlightAroundSym2: (
                <div className={classes.youLlNowSeeAHighlightAroundSym2}>
                  You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </div>
              ),
              button2: <div className={classes.button5}>Share</div>,
              label3: <div className={classes.label3}>NEW</div>,
              developerHandoffImprovements3: (
                <div className={classes.developerHandoffImprovements3}>Developer handoff improvements</div>
              ),
              youLlNowSeeAHighlightAroundSym3: (
                <div className={classes.youLlNowSeeAHighlightAroundSym3}>
                  You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </div>
              ),
              button3: <div className={classes.button6}>Share</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.signIn2}>
        <div className={classes.signInWrapper2}>
          <div className={classes.signIn3}>
            <div className={classes.textFrame2}>
              <div className={classes.title2}>Enter the verification code to continue</div>
              <div className={classes.valueText9}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label9}>We sent to </span>
                  <a className={classes.label10} href='mailto:hellouser@heads.dessign' target='_blank' rel='noreferrer'>
                    hellouser@heads.design
                  </a>
                  <span className={classes.label11}>. If you don’t see it, check your spam.</span>
                </p>
              </div>
            </div>
            <div className={classes.codeFrame}>
              <Input_FilledTrueStatePressed
                className={classes.input3}
                classes={{ value: classes.value }}
                hide={{
                  email: true,
                }}
                text={{
                  valueText: <div className={classes.valueText3}> </div>,
                }}
              />
              <Input_FilledTrueStateHover
                className={classes.input4}
                classes={{ value: classes.value2 }}
                hide={{
                  email: true,
                }}
                text={{
                  valueText: <div className={classes.valueText4}> </div>,
                }}
              />
              <Input_FilledTrueStateHover
                className={classes.input5}
                classes={{ value: classes.value3 }}
                hide={{
                  email: true,
                }}
                text={{
                  valueText: <div className={classes.valueText5}> </div>,
                }}
              />
              <Input_FilledTrueStateHover
                className={classes.input6}
                classes={{ value: classes.value4 }}
                hide={{
                  email: true,
                }}
                text={{
                  valueText: <div className={classes.valueText6}> </div>,
                }}
              />
              <Input_FilledTrueStateHover
                className={classes.input7}
                classes={{ value: classes.value5 }}
                hide={{
                  email: true,
                }}
                text={{
                  valueText: <div className={classes.valueText7}> </div>,
                }}
              />
              <Input_FilledTrueStateHover
                className={classes.input8}
                classes={{ value: classes.value6 }}
                hide={{
                  email: true,
                }}
                text={{
                  valueText: <div className={classes.valueText8}> </div>,
                }}
              />
            </div>
            <div className={classes.buttonsFrame2}>
              <Button_WithIconFalseStateDefau
                text={{
                  button: <div className={classes.button7}>Back</div>,
                }}
              />
              <ResentCodeButton_ActiveFalse />
            </div>
          </div>
          <BannerCarousel_Property1Defaul
            className={classes.bannerCarousel2}
            swap={{
              group21: <Group21Icon4 className={classes.icon4} />,
              group212: <Group21Icon5 className={classes.icon5} />,
              group213: <Group21Icon6 className={classes.icon6} />,
            }}
            text={{
              label: <div className={classes.label4}>NEW</div>,
              developerHandoffImprovements: (
                <div className={classes.developerHandoffImprovements4}>Developer handoff improvements</div>
              ),
              youLlNowSeeAHighlightAroundSym: (
                <div className={classes.youLlNowSeeAHighlightAroundSym4}>
                  You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </div>
              ),
              button: <div className={classes.button8}>Share</div>,
              label2: <div className={classes.label5}>NEW</div>,
              developerHandoffImprovements2: (
                <div className={classes.developerHandoffImprovements5}>Developer handoff improvements</div>
              ),
              youLlNowSeeAHighlightAroundSym2: (
                <div className={classes.youLlNowSeeAHighlightAroundSym5}>
                  You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </div>
              ),
              button2: <div className={classes.button9}>Share</div>,
              label3: <div className={classes.label6}>NEW</div>,
              developerHandoffImprovements3: (
                <div className={classes.developerHandoffImprovements6}>Developer handoff improvements</div>
              ),
              youLlNowSeeAHighlightAroundSym3: (
                <div className={classes.youLlNowSeeAHighlightAroundSym6}>
                  You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </div>
              ),
              button3: <div className={classes.button10}>Share</div>,
            }}
          />
        </div>
        <div className={classes.createAccount2}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label12}>Not member? </span>
            <span className={classes.label13}> Create account</span>
          </p>
        </div>
        <Logo className={classes.logo2} />
      </div>
      <div className={classes.success}>
        <Logo className={classes.logo3} />
        <Button_WithIconFalseStateDefau
          className={classes.passwordButton}
          text={{
            button: <div className={classes.button11}>Success!</div>,
          }}
        />
      </div>
    </div>
  );
});
