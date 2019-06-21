import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'
import { ExtComponent2 } from './ext2.component';

export const appStates = [
  {
    path: '',
    component: ExtComponent
  },
  {
    path: 'ext2',
    component: ExtComponent2
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
]
