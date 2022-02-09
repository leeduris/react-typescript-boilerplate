import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
    test('render Button component', () => {
        render(<Button>Click me</Button>)

        screen.getByText('Click me')
    })
})