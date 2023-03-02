import { Meta, Story, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import * as TaskStories from '../task/task.stories';

export default {
  title: 'Components/TaskList',
  component: TaskListComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta<TaskListComponent>;

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: TaskStories.actionsData.onPinTask,
    onArchiveTask: TaskStories.actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args?.['task'], id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args?.['task'], id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args?.['task'], id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args?.['task'], id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args?.['task'], id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args?.['task'], id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args['tasks'].slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
