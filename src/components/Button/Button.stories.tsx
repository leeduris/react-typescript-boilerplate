import { Button } from './Button'
import { ThemeButtonProps } from './types'

const Template = (args) => <Button {...args} />

export const ThemeButton: ThemeButtonProps = Template.bind({})
ThemeButton.args = { variant: 'primary', children: 'Primary' }

export default {
    component: Button,
    title: 'components/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'select' }
        },
        size: {
            options: ['lg', 'md', 'sm'],
            control: { type: 'radio' }
        }
    }
}

