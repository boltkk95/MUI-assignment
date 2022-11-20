import InterviewDetails from '../Components/InterviewDetails';
import InterviewNotice from '../Components/InterviewNotice';
import InterviewPreparation from '../Components/InterviewPreparation';
import {Grid, Container} from '@mui/material';

function App() {
  return (
    <div>
        <InterviewNotice/>
        <Container maxWidth='lg'>
        <Grid container sx={{mb:2}}>
        <Grid item sm={12} md={7}>
          <InterviewDetails/>
        </Grid>
        <Grid item sm={12} md={5}>
          <InterviewPreparation/>
        </Grid>
        </Grid>
       </Container>
       </div>
  );
}

export default App;
