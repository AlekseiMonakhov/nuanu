import { MOCK_PAGES_ACCOMMODATION } from './pages/accommodation';
import { MOCK_PAGES_ART } from './pages/art';
import { MOCK_PAGES_REAL_ESTATE } from './pages/realEstate';
import { MOCK_PAGES_COMPONENTS } from './pages/components';
import { MOCK_PAGES_EVENTS } from './pages/events';
import { MOCK_PAGES_EXPERIENCE } from './pages/experience';
import { MOCK_PAGES_HOME } from './pages';
import { MOCK_PAGES_NOT_FOUND } from './pages/not-found';
import { MOCK_PAGES_EVENTS_SLUG } from './pages/events/slug';

export function MOCK_GET_PAGE(pathProp: string) {
  const path = pathProp.startsWith('/') ? pathProp : `/${pathProp}`;

  if (path === '/') {
    return MOCK_PAGES_HOME(path);
  }

  if (path === '/_components') {
    return MOCK_PAGES_COMPONENTS(path);
  }

  if (path === '/experience') {
    return MOCK_PAGES_EXPERIENCE(path);
  }

  if (path === '/accommodation') {
    return MOCK_PAGES_ACCOMMODATION(path);
  }

  if (path === '/realestate') {
    return MOCK_PAGES_REAL_ESTATE(path);
  }
  
  if (path === '/art') {
    return MOCK_PAGES_ART(path);
  }

  if (path === '/events') {
    return MOCK_PAGES_EVENTS(path);
  }

  if (path.startsWith('/events/')) {
    return MOCK_PAGES_EVENTS_SLUG(path);
  }

  return MOCK_PAGES_NOT_FOUND(path);
}


