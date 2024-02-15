import { PCancelable } from '@anton.bobrov/vevet-init';
import type { Loader, google } from 'google-maps';

let gMapsLoader: Loader | false;

const API_KEY = 'AIzaSyAP8xMDo2fGX8cWffqoEHqva25TBnoSBF4';

export type { Loader, google };

export function loadGoogleMaps() {
  return new PCancelable<Loader>((resolve, reject) => {
    if (gMapsLoader) {
      resolve(gMapsLoader);
    } else {
      import('google-maps')
        .then((module) => {
          gMapsLoader = new module.Loader(API_KEY);

          resolve(gMapsLoader);
        })
        .catch(reject);
    }
  });
}
