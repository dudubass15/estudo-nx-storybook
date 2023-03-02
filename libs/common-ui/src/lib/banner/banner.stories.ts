import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { BannerComponent } from './banner.component';

export default {
  title: 'Components/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BannerComponent>;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Apenas um teste'
}
