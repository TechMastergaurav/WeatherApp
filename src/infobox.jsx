import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
   let HOT_URL = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?b=1&s=170667a&w=0&k=20&c=7RWthXdjxMP_FkL17FlbLsjnqfJcSUkR7NJjD0d2AGE=";
   let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwiB4YLoiEO5R_Blx7RRHRb5CxPLwmWKwsw&s";
   let RAIN_URL = "https://images.news18.com/ibnkhabar/uploads/2024/02/weather-update-today-imd-forecast-22-february-2024-2024-02-24c1b4b2c1237e1b38658b5974ae1040.jpg?impolicy=website&width=400&height=300";
  
    return (
        <div className="InfoBox">
       
    
     <div className="cardContainer">
       <Card sx={{maxWidth: 345 , minWidth:200}}>
      <CardMedia
        sx={{ height: 140,  objectFit:'cover'}}
        image={info.humidity>85 ? RAIN_URL : info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component = {"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         
        </Typography>
      </CardContent>
     
    </Card>
        </div>
        </div>
    )
}