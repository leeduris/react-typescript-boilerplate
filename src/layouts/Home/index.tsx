import * as React from 'react'
import * as S from './style'
import { HomeLayoutProps } from './types'

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
    const { children } = props
    return (
        <S.HomeContainer>
            { children }
        </S.HomeContainer>
    )
}

export default HomeLayout