// @ts-nocheck
import { FC } from "react";
import styles from './styles.module.scss';
import backgroundVideo from '../../assets/videos/background.mp4';
import { IFullScreenVideo } from "./types";

const FullScreenVideo: FC<IFullScreenVideo> = ({mainTitle}) => {
  return (
    <div id="home" className={styles.fullscreenVideo}>
      <div className={styles.overlay}></div>
      <h1 className={styles.homeTitle}>
        {mainTitle}
      </h1>
      <video src={backgroundVideo}
        loop
        autoPlay
        muted
        playsInline
        className={styles.videoBg} />
    </div>
  );
};

export default FullScreenVideo;
