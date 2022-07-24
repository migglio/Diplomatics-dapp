import React, { useEffect } from "react";
import './Step2.css';
import contractInterface from '../contract-abi.json';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

const PaperForm = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    borderRadius: '10px',
    padding: '80px'
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

    useEffect(()=>{
        if(data)
            setAllDiplomas(data)
    },[data])

    useEffect(()=>{
        async function fetchData() {
            if(metadataIpfs && diplomaId){
                console.log({metadataIpfs})
                const res = await fetch(`${metadataIpfs?.replace('ipfs://','https://gateway.pinata.cloud/ipfs/')}`).then(response => response.json())
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
                <h2 className="MintTitle">
                    Mint Certificates 
                </h2>
                <Box className="FormDiploma">
                <FormControl >
                    <InputLabel id="demo-simple-select-label" gutterBottom>Diploma Id</InputLabel>
                    <Select
                        value={diplomaId}
                        label="Diploma Id"
                        onChange={handleChange}
                        sx={{ minWidth: 120, width: '300px' }}
                    >
                        {allDiplomas.map(diploma=><MenuItem value={parseInt(diploma?._hex, 16)}>{parseInt(diploma?._hex, 16)}</MenuItem>)}
                    </Select>
                </FormControl>
                
                {diplomaData?.image && 
                <>
                
{/*     margin: 93px;
    background-color: #E4DBFF;
    border-radius: 10px;
 */}
                <Box display='flex' margin='80px' sx={{ backgroundColor: '#E4DBFF',padding: '16px 0px', borderRadius:'10px' }} justifyContent='center' flexDirection='column' alignItems='center'  >
                    <Typography alignSelf='center' fontFamily='Inter' color='rgba(72, 72, 72, 1)' fontWeight={700} variant="h5" gutterBottom >
                        {diplomaData?.name}
                    </Typography>
                    <img className="ImgIPFS" src={`https://gateway.pinata.cloud/ipfs/${diplomaData?.image?.replace('ipfs://','')}`} alt='NFT'/>
                    <Typography marginTop='12px' fontFamily='Inter'>
                        {diplomaData?.description}
                    </Typography>
                </Box>
                    <Typography fontFamily='Inter' className="AddAddress" gutterBottom>
                        Add recipient address
                    </Typography>
                    <Tooltip title="You can add more than one wallet if you separate them with a comma.">
                    <TextField
                        multiline
                        style={{width: '500px', marginBottom: '24px', marginTop: '90px'}}
                        rows={2}
                        label="Address, address, address..."
                        value={addresses}
                        onChange={handleChangeTextField}
                    />
                    </Tooltip>
                    <LoadingButton
                        loading={isMintLoading}
                        className="MintButton"
                        loadingPosition="start"
                        variant="outlined"
                        onClick={()=>{mint(); console.log(addresses.split(','))}}
                    >
                        Distribute Certificates
                    </LoadingButton>
                </>}
                
        </Box>
            </PaperForm>
        </Box>
        </Box>
    );
}

export { Step2 };