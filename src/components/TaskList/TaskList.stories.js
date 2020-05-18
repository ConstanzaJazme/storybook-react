import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './TaskList';
import { task, actions } from '../Task/Task.stories';

export const defaultTasks = [
  { ...task, id: '1', title: 'Tarea 1' },
  { ...task, id: '2', title: 'Tarea 2' },
  { ...task, id: '3', title: 'Tarea 3' },
  { ...task, id: '4', title: 'Tarea 4' },
  { ...task, id: '5', title: 'Tarea 5' },
  { ...task, id: '6', title: 'Tarea 6' },
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Tarea 6 (pinned)', state: 'TASK_PINNED' },
];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />)
  .add('withPinnedTasks', () => <PureTaskList tasks={withPinnedTasks} {...actions} />)
  .add('loading', () => <PureTaskList loading tasks={[]} {...actions} />)
  .add('empty', () => <PureTaskList tasks={[]} {...actions} />);
