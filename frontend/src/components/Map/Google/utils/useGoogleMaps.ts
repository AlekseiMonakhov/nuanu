import { RefObject, useEffect, useState } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { Loader, loadGoogleMaps, google as TGoogle } from './loadGoogleMaps';
import styles from './styles.module.scss';

interface IProps {
  ref: RefObject<HTMLElement>;
  lng: number;
  lat: number;
  label: string;
}

export function useGoogleMaps({ ref, lng, lat, label }: IProps) {
  const [loader, setLoader] = useState<Loader | null>(null);
  const [google, setGoogle] = useState<TGoogle | null>(null);

  useEffect(() => {
    const promise = loadGoogleMaps();

    promise.then((data) => setLoader(data)).catch(() => {});

    return () => promise.cancel();
  }, []);

  useEffect(() => {
    if (!loader) {
      return undefined;
    }

    let isDestroyed = false;

    loader
      .load()
      .then((data) => {
        if (!isDestroyed) {
          setGoogle(data);
        }
      })
      .catch(() => {});

    return () => {
      isDestroyed = true;
    };
  }, [loader]);

  useEffect(() => {
    if (!google || !ref.current) {
      return undefined;
    }

    const map = new google.maps.Map(ref.current, {
      center: { lat, lng },
      zoom: 18,
      draggable: !vevet.isMobile,
      fullscreenControl: false,
      draggableCursor: 'default',
      mapTypeControl: false,
      streetViewControl: false,
      gestureHandling: 'cooperative',
    });

    // eslint-disable-next-line no-new
    new google.maps.Marker({
      position: { lat, lng },
      map,
      label: {
        className: styles.label,
        text: label,
        color: '#ea4335',
        fontSize: `${14}px`,
      },
    });

    return () => {};
  }, [google, lat, lng, label, ref]);
}
