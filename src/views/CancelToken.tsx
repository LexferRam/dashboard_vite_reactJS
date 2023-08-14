import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';

export default function CancelToken() {
    const [value, setValue] = React.useState('1');
    const [data, setData] = React.useState({})

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        const source = axios.CancelToken.source();
        let isMounted = true;
        (async() => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${value+2}`, { cancelToken: source.token })
            if (isMounted) {
                setData(response.data)
            }
        })()
        return () => {
            isMounted = false
            source.cancel()
        }
    },[value])

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                {[1, 2, 3].map(item => (
                    <TabPanelItem key={item.toString()} item={item.toString()} data={data}/>
                ))}
            </TabContext>
        </Box>
    );
}


const TabPanelItem = ({item, data}: {item: string, data:any}) => {
    return (
        <TabPanel value={item.toString()}>Item {item} {JSON.stringify(data)}</TabPanel>
    )
}