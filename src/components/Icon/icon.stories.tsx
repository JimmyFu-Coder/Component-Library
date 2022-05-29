import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Icon, {IconProps} from "./icon"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

export default {
    title: "Icon",
    component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => <Icon {...args} icon={"search"} ></Icon>

export const Default = Template.bind({})
Default.args = {
    theme:"primary"
}


