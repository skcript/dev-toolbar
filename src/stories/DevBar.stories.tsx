/* eslint-disable @next/next/no-img-element */
import React from 'react';

import DevBar from '../components/DevBar';

export default {
  title: 'DevBar',
  component: DevBar,
};

const Template: any = (args: any) => <DevBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ratio: 16 / 9,
  children: <img
    className="Image"
    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
    alt="Landscape photograph by Tobias Tullius"
  />,
};
