import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
    const IMG_URL = "data:image/jpeg;base64,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";
   
  return(
    <div className='info-box'>
        <div className='card-container'>
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Humidity :{info.humidity}</p>
          <p>Max temperature : {info.tempMax}&deg;C</p>
          <p>Min Temperature : {info.tempMin}&deg;C</p>
          <p>Weather can be described as {info.tempWeather} and feels like {info. tempFeelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        
    </div>
  )
}