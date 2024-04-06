import { FC } from "react";
import styles from './styles.module.scss'
import Image from 'next/image';
import backgroundVideo from '..//../assets/videos/background.mp4';
import orderCallIcon from '..//..//assets/svg/Order-a-call-icon.svg';
import chatIcon from '..//../assets/svg/Open-ßhat-icon.svg';
import { IFullScreenVideo } from "./types";

const FullScreenVideo: FC<IFullScreenVideo> = () => {

    return (
        <section id="home" className={styles.fullscreenVideo}>
        <h1 className={styles.homeTitle}>
          Time to
          <br /> invest in
          <br /> Nuanu</h1>
        <video src={backgroundVideo}
          loop
          autoPlay
          muted
          className={styles.videoBg} />
        <div className={styles.callToAction}>
          <a href="#formSection" className={styles.buttonPrimary}>
            <Image src={orderCallIcon}
              alt="Order a call"
              width={24}
              height={24}
              className={styles.icon} />
            Order a call
          </a>
          <button id="openChat" className={styles.buttonSecondary}>
            <Image src={chatIcon}
              alt="Chat icon"
              width={24}
              height={24}
              className={styles.icon} />
            Open chat
          </button>
        </div>
      </section>
    );
};

export default FullScreenVideo;