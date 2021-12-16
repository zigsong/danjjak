import * as React from 'react';

import { Text, TextProps } from './Themed';

export const MonoText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
};

export const LightText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'cafe-surround-air' }]} />;
};

export const BoldText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'cafe-surround' }]} />;
};
