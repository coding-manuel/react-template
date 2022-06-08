import React, { useState, useContext, useEffect } from 'react';
import { createStyles, Menu, Header, Container, Group, Avatar, useMantineColorScheme, Switch, Text } from '@mantine/core';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const { classes, cx } = useStyles();
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();

  const [checked, setChecked] = useState(false);

  const handleLogoClick = () => {
    navigate("/home")
  }
  const handleToggle = () => {
    toggleColorScheme()
  }

  useEffect(()=>{
    colorScheme === 'dark' ? setChecked(true) : setChecked(false)
  }, [colorScheme])

  return (
    <Header fixed height={HEADER_HEIGHT} className={classes.root}>
      <Container size='xl' className={classes.header}>
        <img onClick={handleLogoClick} style={{height: 30, cursor: "pointer"}} src='https://www.pngfind.com/pngs/m/115-1159599_jeep-uk-twitter-jeep-logo-transparent-background-hd.png' alt="" />
        <Group spacing={24}>
          <Menu placement='end' closeOnItemClick={false} control={<Avatar sx={{cursor: "pointer"}} size='sm' />} styles={{itemLabel: {width: '100%'}}}>
            {/* <Menu.Item component={Link} to={`/artist/${currentAccount}`} icon={<User size={16} weight="regular" />}>Your Profile</Menu.Item> */}
            <Menu.Item ><Switch checked={checked} onChange={handleToggle} styles={{root:{flexDirection: 'row-reverse', justifyContent: 'space-between', width: '100%'}, label:{paddingLeft: 0, paddingRight: 8}}} label={<Text variant='xs'>Dark Mode</Text>} /></Menu.Item>
          </Menu>
        </Group>
      </Container>
    </Header>
  )
}
