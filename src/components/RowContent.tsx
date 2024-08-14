import React, { useState, useEffect, useMemo } from 'react';
import { styled } from '@storybook/theming';
import { useGlobals } from '@storybook/manager-api';
import InputColor from 'react-input-color';
import { hex6ToHex8 } from '../utils';
import { usePreviousValue } from '../hooks';

const Layout = styled.div({
  width: '100%',
  padding: '0 0 8px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '12px',
});

const Label = styled.span({
  fontSize: '16px',
  fontWeight: '400',
  letterSpacing: '1px',
  color: '#fff',
});

const ColorLayout = styled.div({
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  gap: '4px',
});

const CurrentColor = styled.span({
  fontSize: '12px',
  fontWeight: '400',
  color: '#9b9b9b',
});

interface RowContentProps {
  label: string;
  targetVariable: string;
  note?: string;
  effect?: { key: string; alpha: number };
}

export const RowContent: React.FC<RowContentProps> = ({
  label,
  targetVariable,
  note,
  effect,
}) => {
  const [globals, updateGlobals] = useGlobals();
  const currentGlobalColor = useMemo(
    () => globals[targetVariable],
    [globals[targetVariable]]
  );
  const prevGlobalColor = usePreviousValue(currentGlobalColor);
  const [color, setColor] = useState<string>(globals[targetVariable]);
  const prevStateColor = usePreviousValue(color);

  useEffect(() => {
    if (color !== prevStateColor) {
      updateGlobals({
        [targetVariable]: color,
        ...(effect?.key
          ? {
              [effect.key]: hex6ToHex8(color.substring(0, 7), effect.alpha),
            }
          : {}),
      });
    }
  }, [color, prevStateColor, targetVariable, effect?.key]);

  useEffect(() => {
    if (currentGlobalColor !== prevGlobalColor && currentGlobalColor) {
      setColor(currentGlobalColor);
    }
  }, [currentGlobalColor, prevGlobalColor]);

  return (
    <Layout>
      <Label>{label}</Label>
      {color && (
        <ColorLayout>
          <InputColor
            initialValue={color}
            onChange={({ hex }) => {
              setColor(hex);
            }}
            disabled={!!note}
          />
          <CurrentColor>{`(${color}) ${note ? `${note}` : ''}`}</CurrentColor>
        </ColorLayout>
      )}
    </Layout>
  );
};
