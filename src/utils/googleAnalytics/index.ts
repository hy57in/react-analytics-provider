import {event} from './event';
import {click} from './click';
import {initialize} from './initialize';
import {set} from './set';
import {exception} from './exception';

export const googleAnalytics = {
  initialize,
  event,
  exception,
  click,
  set,
};
