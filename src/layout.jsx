import React, { useState, useContext, useEffect } from 'react'
import {
  AppShell,
  Container,
  useMantineTheme,
} from '@mantine/core'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function Layout({ children }) {
  const theme = useMantineTheme()

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          padding: '20px',
        },
      }}
      fixed
      footer={<Footer />}
      header={<Navbar />}
    >
      <Container size='lg' pb={100} >
        {children}
      </Container>
    </AppShell>
  )
}
