import {atom} from 'recoil';
import { ThemeDark } from '../global/variables/modes';

export const modeState = atom({
    key: 'modeState',
    default: ThemeDark
})