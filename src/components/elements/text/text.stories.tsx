import * as React from 'react';

import Text from './text';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'components/Text',
  component: Text,
};

export const Default = () => {
  return (
    <>
      <Text.H1>This is h1 with font-family: Grotesk and font-weight: 600</Text.H1>
      <Text.H2>This is h2 with font-family: Grotesk and font-weight: 600</Text.H2>
      <Text.H3>This is h3 with font-family: Grotesk and font-weight: 600</Text.H3>
      <Text.H4>This is h4 with font-family: Grotesk and font-weight: 600</Text.H4>
      <Text.H4Thin>This is h4 with font-family: Poppins and font-weight: 400</Text.H4Thin>
      <Text.H5>This is h5 with font-family: Grotesk and font-weight: 700</Text.H5>
      <Text.H5Semi>This is h5 with font-family: Poppins and font-weight: 600</Text.H5Semi>
      <Text.H5Thin>This is h5 with font-family: Poppins and font-weight: 400</Text.H5Thin>
      <Text.H6>This is h6 with font-family: Grotesk and font-weight: 600</Text.H6>
      <Text.H6Thin>This is h6 with font-family: Grotesk and font-weight: 400</Text.H6Thin>
      <Text.Quote>This is quote with font-family: Grotesk and font-weight: 400</Text.Quote>
    </>
  );
};
