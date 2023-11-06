import React, { useMemo } from 'react';
import { styled } from '@storybook/theming';
import { useGlobals } from '@storybook/manager-api';
import { RowContent } from './RowContent';
import { PALETTE } from 'src/constants';

const Container = styled.div({
  width: '100%',
  padding: '24px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '12px',
});

const Title = styled.h3({
  fontSize: '18px',
  fontWeight: '500',
  color: '#fff',
  margin: '0',
  padding: '4px 0',
  borderBottom: '1px solid #9b9b9b',
});

const Layout = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '4px',
});

export const PanelContent: React.FC = () => {
  const [globals] = useGlobals();
  const isReady = useMemo(() => !!globals[PALETTE.primary.main.key], [globals]);

  if (!isReady) return null;

  return (
    <Container>
      <Title>Primary</Title>
      <Layout>
        {Object.entries(PALETTE.primary).map(([key, value]) => (
          <RowContent
            key={key}
            label={`primary.${key}`}
            targetVariable={value.key}
            note={value.note}
            effect={value.effect}
          />
        ))}
      </Layout>
      <Title>Secondary</Title>
      <Layout>
        {Object.entries(PALETTE.secondary).map(([key, value]) => (
          <RowContent
            key={key}
            label={`secondary.${key}`}
            targetVariable={value.key}
            note={value.note}
            effect={value.effect}
          />
        ))}
      </Layout>
      <Title>Error</Title>
      <Layout>
        {Object.entries(PALETTE.error).map(([key, value]) => (
          <RowContent
            key={key}
            label={`error.${key}`}
            targetVariable={value.key}
            note={value.note}
            effect={value.effect}
          />
        ))}
      </Layout>
      <Title>Warning</Title>
      <Layout>
        {Object.entries(PALETTE.warning).map(([key, value]) => (
          <RowContent
            key={key}
            label={`warning.${key}`}
            targetVariable={value.key}
            note={value.note}
            effect={value.effect}
          />
        ))}
      </Layout>
      <Title>Success</Title>
      <Layout>
        {Object.entries(PALETTE.success).map(([key, value]) => (
          <RowContent
            key={key}
            label={`success.${key}`}
            targetVariable={value.key}
            note={value.note}
            effect={value.effect}
          />
        ))}
      </Layout>
      <Title>Typography</Title>
      <Layout>
        {Object.entries(PALETTE.text).map(([key, value]) => (
          <RowContent
            key={key}
            label={`text.${key}`}
            targetVariable={value.key}
          />
        ))}
      </Layout>
      <Title>Action</Title>
      <Layout>
        {Object.entries(PALETTE.action).map(([key, value]) => (
          <RowContent
            key={key}
            label={`action.${key}`}
            targetVariable={value.key}
            note={(value as any)?.note}
            effect={(value as any)?.effect}
          />
        ))}
      </Layout>
      <Title>Background</Title>
      <Layout>
        {Object.entries(PALETTE.background).map(([key, value]) => (
          <RowContent
            key={key}
            label={`${key}`}
            targetVariable={value.key}
            note={(value as any)?.note}
            effect={(value as any)?.effect}
          />
        ))}
      </Layout>
      <Title>Border</Title>
      <Layout>
        {Object.entries(PALETTE.border).map(([key, value]) => (
          <RowContent
            key={key}
            label={`${key}`}
            targetVariable={value.key}
            note={(value as any)?.note}
            effect={(value as any)?.effect}
          />
        ))}
      </Layout>
      <Title>Divider</Title>
      <Layout>
        {Object.entries(PALETTE.divider).map(([key, value]) => (
          <RowContent
            key={key}
            label={`${key}`}
            targetVariable={value.key}
            note={(value as any)?.note}
            effect={(value as any)?.effect}
          />
        ))}
      </Layout>
      <Title>Overlay</Title>
      <Layout>
        {Object.entries(PALETTE.overlay).map(([key, value]) => (
          <RowContent
            key={key}
            label={`overlay.${key}`}
            targetVariable={value.key}
            note={value.note}
          />
        ))}
      </Layout>
    </Container>
  );
};
