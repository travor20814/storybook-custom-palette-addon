import React, { Fragment } from "react";
import { RowContent } from './RowContent';
import { PRIMARY_COLOR_KEY, SECONDARY_COLOR_KEY } from 'src/constants';

export const PanelContent: React.FC = () => (
  <Fragment>
    <RowContent label="Primary" targetVariable={PRIMARY_COLOR_KEY} />
    <RowContent label="Secondary" targetVariable={SECONDARY_COLOR_KEY} />
  </Fragment>
);
