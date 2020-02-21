import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Input',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultInput = () => (
  <>
    <bds-input
      placeholder={text('placeholder', 'nome completo')}
      label={text('label', '')}
      disabled={boolean('disabled', false)}
      danger={boolean('danger', false)}
      icon={text('icon', '')}
      value={text('value', '')}
      type={text('type', '')}
      error-message={text('errorMessage', '')}
      helper-message={text('helperMessage', '')}
      min={text('min', null)}
      minlength={number('minlength', null)}
      max={text('max', null)}
      maxlength={number('maxlength', null)}
      readonly={boolean('readonly', false)}
      fullwidth={boolean('fullwidth', false)}
    >
    </bds-input>
  </>
);

export const dangerInput = () => (
  <>
    <bds-input danger></bds-input>
    <br />
    <bds-input danger icon="email"></bds-input>
    <br />
    <bds-input danger label="Name"></bds-input>
    <br />
    <bds-input danger icon="email" label="Name"></bds-input>
  </>
);

export const disabledInput = () => (
  <>
    <bds-input disabled></bds-input>
    <br />
    <bds-input disabled value="Action descripition"></bds-input>
    <br />
    <bds-input disabled icon="email" value="Action descripition"></bds-input>
    <br />
    <bds-input disabled label="Action" value="Action descripition"></bds-input>
    <br />
    <bds-input disabled icon="email" label="Action" value="Action descripition"></bds-input>
  </>
)