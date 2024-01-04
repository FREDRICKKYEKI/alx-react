import React from 'react';
import { getFooterCopy, getFullYear } from '../utils';

export default function Footer() {
    return (
        <footer>
            <i>Copyright {getFullYear()} - {getFooterCopy(true)}</i>
        </footer>
    );
}