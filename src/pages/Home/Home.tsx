import React from 'react'
import { HomeProps } from './types'
import Layout from 'layouts/Home'

export const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            Yesterday 🏹 Tomorrow 💸
        </Layout>
    )
}