import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input, {InputProps} from "./input";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);


export default {
    title: "Input",
    component: Input,
    argTypes: {
        icon: {icon: "search"}
    }
} as ComponentMeta<typeof Input>;

const style = {width: "300px"}

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} style={style}></Input>

export const Default = Template.bind({})
Default.args = {
    disabled: false,
    size: "sm",
    placeholder: "placeholder",
    style: style
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true,
    size: "sm",
    placeholder: "placeholder",
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    disabled: false,
    size: "sm",
    placeholder: "placeholder",
    icon: "search"
}

export const prependInput = Template.bind({})
prependInput.args = {
    disabled: false,
    size: "sm",
    placeholder: "placeholder",
    prepend: "https://"
}
export const appendInput = Template.bind({})
appendInput.args = {
    disabled: false,
    size: "sm",
    defaultValue: "google",
    append: ".com"
}
