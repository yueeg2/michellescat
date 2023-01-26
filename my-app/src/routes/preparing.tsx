import ConstructionIcon from '@mui/icons-material/Construction';
import Box from '@mui/material/Box/Box';

export default function Preparing() {
  return (
    <p id="preparing-state">

      <Box sx={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center'
      }}>
        <ConstructionIcon sx={{ fontSize: 90 }} />
        <span style={{ lineHeight: 4 }}>Oops... 這個頁面目前還是空的 :(</span>
      </Box>
      <br />


      <br />

      先看看其他頁面的新東西 :)
      <br />
      或聯絡{" "}
      <a href="mailto:yuesu198@gmail.com" target="_blank" rel="noopener noreferrer">
        yuesu198@gmail.com
      </a> 看看
      .
    </p>
  );
}