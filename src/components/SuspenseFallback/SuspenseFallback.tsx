import React from 'react'
import { Spinner } from 'react-bootstrap'
import { SuspenseFallbackProps } from './types'
import { SuspenseContainer } from './SuspenseFallback.style'

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = () => {
    return (
        <SuspenseContainer>
            <Spinner animation='border'/>
        </SuspenseContainer>
    )
}