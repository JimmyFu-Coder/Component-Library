import React, {useState} from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from "./components/Menu/subMenu";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Transition from "./components/Transition/transition";
import Input from "./components/Input/input";
import {AutoComplete} from "./components/AutoComplete/autoComplete";

library.add(fas)

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query))
}

function App() {
    const [show, setShow] = useState(false);
    return (
        < >
            <Input icon="search" ></Input>
            <AutoComplete fetchSuggestions={handleFetch}/>
            <Menu onSelect={index => alert(index)} defaultOpenSubMenu={['2']}>
                <MenuItem>link1</MenuItem>
                <MenuItem disabled>
                    link2
                </MenuItem>
                <SubMenu title="dropdown">
                    <MenuItem>
                        drop1
                    </MenuItem>
                </SubMenu>
                <MenuItem>link3</MenuItem>
            </Menu>

            <Button size={"lg"} onClick={() => setShow(!show)}>Toggle</Button>
            <Transition in={show} timeout={300} animation={"zoom-in-left"}>
                <p>Edit <code>src/App.tsx</code></p>
            </Transition>
            <Transition in={show} timeout={300} animation={"zoom-in-top"} wrapper={true}>
                <Button size={"lg"} btnType={"primary"} >Edit </Button>
            </Transition>
        </>
    );
}

export default App;
