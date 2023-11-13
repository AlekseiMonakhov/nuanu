import { ComponentsRegistry } from 'rc-api-registry';
import { HomeIntro } from './components/Intro';
import { HomeAbout } from './components/About';
import { HomeLink } from './components/HomeLink';

export const registry = new ComponentsRegistry([
  HomeIntro,
  HomeAbout,
  HomeLink,
]);
