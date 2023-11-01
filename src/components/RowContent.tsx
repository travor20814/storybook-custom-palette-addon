import React, { useState, useEffect } from "react";
import { styled } from "@storybook/theming";
import { useGlobals } from '@storybook/manager-api';
import InputColor from 'react-input-color';

const Layout = styled.div({
  width: '100%',
  padding: '24px',
  display: 'grid',
  gridTemplateColumns: '160px 1fr',
  columnGap: '12px',
  rowGap: '16px',
});

const Label = styled.span({
  fontSize: '16px',
  fontWeight: '400',
  letterSpacing: '1px',
  color: '#9b9b9b',
});

interface RowContentProps {
  label: string;
  targetVariable: string;
}

export const RowContent: React.FC<RowContentProps> = ({ label, targetVariable }) => {
  const [globals, updateGlobals] = useGlobals();
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (color) {
      updateGlobals({
        [targetVariable]: color,
      });
    }
  }, [color, targetVariable]);

  useEffect(() => {
    if (globals[targetVariable] && globals[targetVariable] !== color && !color) {
      setColor(globals[targetVariable]);
    }
  }, [globals, targetVariable, color]);

  return (
    <Layout>
      <Label>{label}</Label>
      {color && (
        <InputColor initialValue={color} onChange={({ hex }) => setColor(hex)} />
      )}
    </Layout>
  );
};
