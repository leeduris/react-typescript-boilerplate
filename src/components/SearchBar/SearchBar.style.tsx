import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
`

export const Searchbox = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 20%;
    border: 1px solid #ccc;
    border-radius: .2em .2em .2em .2em;
    z-index: 1;
`

export const Select = styled.select`
    background-color: #ddd;
    margin-right: -1.2em;
    padding: .72em .5em;
    border-radius: 0em .2em .2em 0em;
    border: none;
    cursor: pointer;

    @media(max-width: 850px){
        display: none;
    }
`

export const SearchIconWrapper = styled.span`
    background-color: #fabd60;
    color: #131A22;
    border-radius: 0em .2em .2em 0em;
    padding: .32em .5em;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover{
        background-color: #ff9900;
    }
`