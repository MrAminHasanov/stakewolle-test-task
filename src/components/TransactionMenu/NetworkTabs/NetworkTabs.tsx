import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'


interface componentProps {
  setActivePage: (arg: number) => void,
  activePage: number
}

function NetworkTabs(
  { setActivePage, activePage }
    : componentProps
) {

  const handleChange = (event: React.SyntheticEvent, newActivePage: number) => {
    setActivePage(newActivePage);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activePage}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="ETH Main Net" {...a11yProps(0)} />
          <Tab label="Test Net" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
}

export default NetworkTabs