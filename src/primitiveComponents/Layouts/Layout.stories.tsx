import { Meta, Story } from '@storybook/react'
import { Layout } from './Layout'

export default {
  title: 'components/layouts',
  component: Layout,
  layout: 'fullscreen',
} as Meta

const Template: Story = () => <Layout />

export const Default = Template.bind({})
Default.args = {}

Default.parameters = {
  layout: 'fullscreen',
}
