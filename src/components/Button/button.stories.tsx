import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button, {ButtonProps} from './button'


export default {
    title: "Button",
    component: Button,
    argTypes: {
        btnType: {
            options: ["primary", "danger", 'default', "link"],
            control: { type: 'radio' },
        },
        size:{
            options: ["lg","sm"],
            control: { type: 'radio' },
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button btnType={"danger"}>Button</Button>

export const Default = Template.bind({})
Default.args = {
}

export const DifferentSize = Template.bind({})
DifferentSize.args = {
    size:"sm"
}

export const DifferentType = Template.bind({})
DifferentType.args = {
    btnType:"primary"
}