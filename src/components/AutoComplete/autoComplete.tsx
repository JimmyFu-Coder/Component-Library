import React, {ChangeEvent, ReactElement, useState} from 'react'
import Input, {InputProps} from "../Input/input";
import Icon from "../Icon/icon";

interface DataSourceObject {
    value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]> ;
    onSelect?: (item: DataSourceType) => void,
    renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        renderOption,
        value,
        ...restProps
    } = props

    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
        if (value) {
            const results = fetchSuggestions(value)
            if (results instanceof Promise) {
                setLoading(true)
                results.then(data => {
                    setLoading(false)
                    setSuggestions(data)
                })
            } else {
                setSuggestions(results)
            }
        } else {
            setSuggestions([])
        }
    }
    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value)
        console.log("InputValue", inputValue)
        console.log("Value", value)
        setSuggestions([])
        if (onSelect) {
            onSelect(item)
        }
    }
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value
    }
    const generateDropDown = () => {
        return (
            <ul>
                {suggestions.map((item, index) => {
                    return <li key={index} onClick={() => handleSelect(item)}>{renderTemplate((item))}</li>
                })}
            </ul>
        )
    }


    return (
        <div className="viking-auto-complete">
            <Input value={inputValue}
                   onChange={handleChange}
                   {...restProps}
            />
            {loading && <ul><Icon icon='spinner' spin/></ul>}
            {(suggestions.length > 0) && generateDropDown()}
        </div>
    )
}