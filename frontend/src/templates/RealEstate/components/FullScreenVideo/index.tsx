// @ts-nocheck
import { FC } from "react";
import styles from './styles.module.scss'
import backgroundVideo from '..//../assets/videos/background.mp4';
import { IFullScreenVideo } from "./types";

const FullScreenVideo: FC<IFullScreenVideo> = () => {

  return (
    <div id="home" className={styles.fullscreenVideo}>
      <h1 className={styles.homeTitle}>
        Time to
        <br /> invest in
        <br /> Nuanu</h1>
      <video src={backgroundVideo}
        loop
        autoPlay
        muted
        className={styles.videoBg} />
    </div>
  );
};

export default FullScreenVideo;