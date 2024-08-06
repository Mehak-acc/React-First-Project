import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

export const useMediaQuerySizes = () => {
    const theme = useTheme();
    const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));
    const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
    return { isExtraSmall, isSmall, isMedium, isLarge };
}