import Container from '@mui/material/Container';
import NavBar from '@/components/Navbar';
import AttractionCard from '@/components/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export async function getStaticProps() {
  const res = await fetch('https://www.melivecode.com/api/attractions')
  const data = await res.json()

  return {
    props: {
      attractions: data,
    },
  }
}



export default function Home({attractions}) {
  return (
    <div>
        <NavBar/>
        <Container maxWidth="2xl">
          <div style={{marginTop: 24}}>
            <Typography gutterBottom variant="h4">
            Attractions!!!
            </Typography>
            <Grid container spacing={3}>
              {attractions.map((item)=> {
                return(
                <Grid key={item.id} item xs={12} lg={4}>
                  <AttractionCard attraction={item}/>
                </Grid>
              )})} 
            </Grid>
          </div>
        </Container>
    </div>
  )
}

