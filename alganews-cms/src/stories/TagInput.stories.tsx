import { Story, Meta } from '@storybook/react';
import TagInput, { TagInputProps } from '../components/TagInput/TagInput';

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Post não encontrado',
  description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
}