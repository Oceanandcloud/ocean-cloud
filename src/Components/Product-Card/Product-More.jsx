import React from "react";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';



export function ProductMore({ features, colors, more_info, price_info }) {
  return <Accordion>
    <AccordionSummary expandIcon={"+"} aria-controls="panel1a-content" id="panel1a-header">
      <Typography className="accordion-heading">Learn More about the product</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <BasicTabs
        features={features}
        colors={colors}
        more_info={more_info}
        price_info={price_info}
      ></BasicTabs>
    </AccordionDetails>
  </Accordion>;
}


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ features, colors, more_info, price_info }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Features" {...a11yProps(0)} />
          <Tab label=" More Information" {...a11yProps(1)} />
          <Tab label="Price" {...a11yProps(2)} />
          <Tab label="Colors" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ul>
          {more_info.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ul>
          {price_info.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="colors">
          {colors.map((color, index) => (
            <div key={index} className="color-card" style={{ backgroundColor: color }}>
              <p>{color}</p>
            </div>
          ))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}


