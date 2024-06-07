import "./App.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Sidebar from "./components/SidebarSeller";


function App() {

      const Container = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '700px',
        margin: '20px'

      }));

      const Header = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100px',
        margin: '20px'
      }));

      const Footer = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100px',
        margin: '20px'
      }));

  return (
    <div className="App">
      <header className="App-header">
        Hello world
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header>HEADER</Header>
            </Grid>
            <Grid item xs={2} sx={{position: "relative"}}>
                <Sidebar/>
            </Grid>
            <Grid item xs={10} >
              <Container>CONTAINER</Container>
            </Grid>
            <Grid item xs={12}>
                <Footer>Footer</Footer>
            </Grid>
          </Grid>
      </header>
    </div>
  );
}

export default App;
