import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button, {ButtonProps} from './button'



export default {
    title: "Button",
    component: Button,
    argTypes: {
        btnType: {
            options: ["primary", "danger", 'default', "link"],
            control: {type: 'inline-radio'},
        },
        size: {
            options: ["lg", "sm"],
            control: {type: 'inline-radio'},
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}
                                                                               onClick={() => alert(123)}>Button</Button>

export const Default = Template.bind({})
Default.args = {}


export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true
}
