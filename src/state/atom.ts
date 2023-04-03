import {atom} from 'recoil';
import { ThemeLight } from '../global/variables/modes';

export const modeState = atom({
    key: 'modeState',
    default: ThemeLight
})