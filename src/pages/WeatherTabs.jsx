import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { WeatherCard } from "./WeatherCard";

export default function TabsDemo(props) {
    const {weatherData,forecastData} = props;
    const {weather,main,clouds,wind} = weatherData;
    const {list,city} = forecastData;
    console.log(weatherData);

  return (
    <Tabs defaultValue="current weather" className="w-[90%] mx-auto mt-10 bg-primary shadow-sm shadow-slate-400 border-0 rounded-xl">
      <TabsList className="grid w-full grid-cols-2 ">   
        <TabsTrigger value="current weather">Current Weather</TabsTrigger>
        <TabsTrigger value="5 day forecast">5 Day Forecast</TabsTrigger>
      </TabsList>
      <TabsContent value="current weather" className="">
        <Card>
          <CardHeader>
            <CardTitle className="mx-auto">{city.name}'s Current Weather</CardTitle>        
          </CardHeader>
          <CardContent className="">
            <p className="grid w-full grid-cols-2"><span className="col-span-1 mr-2 justify-self-end">Main Weather Condition:</span> <span className="col-span-1">{weather[0].description}</span></p>
            <p className="grid w-full grid-cols-2"><span className="col-span-1 mr-2 justify-self-end">Temperature:</span> <span className="col-span-1">{(main.temp-273.15).toFixed(1)} °C</span></p>
            <p className="grid w-full grid-cols-2"><span className="col-span-1 mr-2 justify-self-end">Humidity:</span> <span className="col-span-1">{main.humidity}%</span></p>
            <p className="grid w-full grid-cols-2"><span className="col-span-1 mr-2 justify-self-end">Wind:</span> <span className="col-span-1">{wind.speed} m/s</span></p>
            <p className="grid w-full grid-cols-2"><span className="col-span-1 mr-2 justify-self-end">Clouds:</span> <span className="col-span-1">{clouds.all}%</span></p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="5 day forecast">
        <Card>
          <CardHeader>
            <CardTitle className="mx-auto">{city.name}'s 5-Day Forecast (every 3 hour)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row overflow-scroll h-full">
            {list.map((item, index) => (
              <WeatherCard data={item} city={city} key={index} />
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
