import { Fragment } from "react";
import Markdownify from "../Markdownify";
import styles from "./index.module.scss";
import SpeechBubble from "../../public/images/pi-creatures/bubble-speech.svg";
import ThoughtBubble from "../../public/images/pi-creatures/bubble-thought.svg";
import { useSectionWidth } from "../Section";

// pi creature/character, with "smart" positioning, and speech/thought bubble
const PiCreature = ({
  emotion = "hooray",
  text,
  thought,
  placement,
  flip,
  design,
}) => {
  // bubble component
  let Bubble = Fragment;
  if (text) {
    if (thought) Bubble = ThoughtBubble;
    else Bubble = SpeechBubble;
  }

  const sectionWidth = useSectionWidth();

  return (
    <div
      className={styles.pi_creature}
      data-flip={flip || false}
      data-placement={placement || "auto"}
      data-design={design}
      data-text={text ? true : false}
      data-sectionWidth={sectionWidth}
    >
      <div className={styles.frame}>
        <img src={`/images/pi-creatures/${emotion}.svg`} />
        <Bubble />
        {text && (
          <div className={styles.text}>
            <Markdownify>{text}</Markdownify>
          </div>
        )}
      </div>
    </div>
  );
};

export default PiCreature;