import React from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'
import { ErrorContainer } from './ErrorBoundary.style'

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer className="text-secondary d-flex flex-column align-items-center justify-content-center">
                    <h1>Something went wrong</h1>
                    <p className="text-secondary">Try refreshing the page, or try again later</p>
                </ErrorContainer>
            )
        }

        return this.props.children
    }


}