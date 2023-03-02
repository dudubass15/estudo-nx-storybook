import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';

export default {
  title: 'Components/Task',
  component: TaskComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TaskComponent>;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<TaskComponent> = (args: TaskComponent) => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  }
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
};
