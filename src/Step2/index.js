import React, { useEffect } from "react";
import contractInterface from '../contract-abi.json';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {  useAccount, useContractRead, useContractWrite } from 'wagmi';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';

const PaperForm = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    padding: '20px'
  }));

const contractConfig = {
    addressOrName: '0x746B7D4c3BA8fF0B930F894E7416CaF802CF20Ee',
    contractInterface: contractInterface,
};
function Step2 () {
    const { address } = useAccount()
    const [diplomaId, setDiplomaId] = React.useState('');
    const [diplomaData, setDiplomaData] = React.useState({});
    const [allDiplomas, setAllDiplomas] = React.useState([]);
    const [addresses, setAddresses] = React.useState();

    const handleChangeTextField = (event) => {
        setAddresses(event.target.value);
    };
   
    const handleChange = (event) => {
        setDiplomaId(event.target.value);
    };
    
    const { data } = useContractRead({...contractConfig, functionName: 'getAllowedDiplomats',  args: [address] });
    const { data: metadataIpfs } = useContractRead({...contractConfig, functionName: 'uri',  args: [diplomaId] });
    const {
        data: mintData,
        write: mint,
        isLoading: isMintLoading,
        } = useContractWrite({
            addressOrName: '0x746b7d4c3ba8ff0b930f894e7416caf802cf20ee',
            contractInterface: contractInterface,
            functionName: 'batchMint',
            args: [ addresses?.replace('\n').split(','), diplomaId] 
        });
            //args: [ [addresses?.split(',')], diplomaId] 
    useEffect(()=>{
        if(data)
            setAllDiplomas(data)
    },[data])

    useEffect(()=>{
        async function fetchData() {
            if(metadataIpfs && diplomaId){
                const res = await fetch(metadataIpfs).then(response => response.json())
                setDiplomaData(res)
                console.log({res})
            }
          }
          fetchData();
    },[diplomaId,metadataIpfs])

    return (
        <Box display='flex' justifyContent='center' marginTop='2%' marginBottom='2%'>
         <Box width='60%'>   
            <PaperForm elevation={3}>
                <Typography variant="h5" component="div" gutterBottom >
                    Mint Certificates 
                </Typography>
                <Typography gutterBottom sx={{marginBottom: 3}}>
                    Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum. 
                </Typography>
                <Box sx={{ minWidth: 120, width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormControl  >
                    <InputLabel id="demo-simple-select-label" gutterBottom>Diploma Id   </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={diplomaId}
                    label="Diploma Id"
                    onChange={handleChange}
                    sx={{ minWidth: 120, width: '300px' }}
                    >
                        {allDiplomas.map(diploma=><MenuItem value={parseInt(diploma?._hex, 16)}>{parseInt(diploma?._hex, 16)}</MenuItem>)}
                    </Select>
                </FormControl>
                <Typography marginTop='12px' fontWeight={500} variant="h5" component="div" gutterBottom >
                    {diplomaData?.name}
                </Typography>
                {diplomaData?.image && 
                <>
                    <img style={{ maxWidth: '200px'}} src={`https://gateway.pinata.cloud/ipfs/${diplomaData?.image?.replace('ipfs://','')}`}/>
                    <Typography marginTop='8px' marginBottom='24px' fontWeight={300} variant="h6" component="div" gutterBottom >
                        {diplomaData?.description}
                    </Typography>
                    <Typography marginTop='8px' fontWeight={300} variant="h6" component="div" gutterBottom >
                        Add recipient Address
                    </Typography>
                    <TextField
                        multiline
                        style={{width: '500px', marginBottom: '24px'}}
                        rows={4}
                        label="Address,Address,Address"
                        value={addresses}
                        onChange={handleChangeTextField}
                    />
                    <LoadingButton
                        loadingPosition="start"
                        variant="outlined"
                        onClick={()=>{mint(); console.log(addresses.split(','))}}
                    >
                        Distribute Certificate
                    </LoadingButton>
                </>}
                
        </Box>
            </PaperForm>
        </Box>
        </Box>
    );
}

export { Step2 };