import React from 'react';
import { BackgroundCircle } from './background-circle';
import { Eyes } from './eyes';
import { Mouth } from './mouth';
import { FaceContainer } from './face-container';

export const Face = ({ width, height, centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthRadius, mouthWidth }) => {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
      />
    </FaceContainer>
  );
};
