import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import ActionAreaCard from "../components/Card/Card";

export default function Index() {
  return (
    <>
      <Paper sx={{
        height: '100vh',
        width: 'inherit',
        position: 'absolute',
        top: 0,
        left: '-516px',
        //background: 'linear-gradient(270deg, rgba(9,4,0,0.8001794467787114) 0%, rgba(9,9,121,0) 25%, rgba(0,212,255,0) 100%)'
        background: 'linear-gradient(90deg, rgba(251,171,126,0.7581626400560224) 0%, rgba(247,206,104,0.3912158613445378) 22%, rgba(255,255,255,0) 66%)',

      }}/>
      <Box sx={{ width: 'fit-content' }}>
        {/* <ActionAreaCard image=""/> */}
        <Paper sx={{
          overflow: 'hidden',
          display: 'flex',
          width: 'inherit',
          height: 700,
          marginBlockStart: 9,
          marginInlineStart: 2,
          boxShadow: 0
        }}
        >
          <img style={{
            width: 'inherit',
            height: 'inherit',
          }} src="/images/michelles_cat.png" alt="michelles_cat.png" />
        </Paper>
      </Box>
    </>
  );
}