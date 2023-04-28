import React from 'react';
import Activities from './Activities';

import { TMessage } from '../../types/interfaces/chat';

export const defaultMessages: TMessage = {
    intro: 'Привет, чем займемся сегодня?',
    variants: () => {
        return (
            <Activities />
        )
    }
}