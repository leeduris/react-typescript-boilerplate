import React from 'react'
import { SearchOutlined } from '@material-ui/icons'
import { Searchbox, Select, SearchIconWrapper, Container } from './SearchBar.style'
import { Props } from './types'


export const SearchBar = ({ name, searchInput, onChange, placeholder }: Props) => {
    return (
        <Container>
            <Select>
                <option value="all">ALL</option>
            </Select>
            <Searchbox
                name={name}
                value={searchInput}
                onChange={ev => onChange(ev.target.value)}
                placeholder={placeholder}
            />
            <SearchIconWrapper>
                <SearchOutlined/>
            </SearchIconWrapper>
        </Container>
    )
}

SearchBar.defaultProps = {
    type: 'text',
    placeholder:'',
}
