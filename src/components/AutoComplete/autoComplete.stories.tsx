import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AutoComplete, AutoCompleteProps} from "./autoComplete";

export default {
    title: "AutoComplete",
    component: AutoComplete,

} as ComponentMeta<typeof AutoComplete>

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
}

const Template: ComponentStory<typeof AutoComplete> = (args: AutoCompleteProps) => (
    <AutoComplete fetchSuggestions={handleFetch}/>)

export const Default = Template.bind({})
Default.args = {}