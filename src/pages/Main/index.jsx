import { ComposableMap, Geographies, Geography, Graticule, Sphere, ZoomableGroup } from "react-simple-maps"
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [geo, setGeo] = useState();
  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";
  return (
    <main className="bg-zinc-800 h-full  text-white flex flex-col justify-center items-center wrapper pt-10">
      <h1 className="px-6 pb-2">Detay Görüntüle :
       <span>  {geo?.properties?.name ? geo.properties.name : "(Ülke seçiniz)"}</span></h1>
      <ComposableMap height={450} projectionConfig={{ rotate: [-10, 0, 0], scale: 170 }}>
        <ZoomableGroup>
      <Graticule stroke="gray" strokeWidth={0.3} />
      <Sphere stroke="gray" strokeWidth={0.3} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Link to={`/detail?code=${geo.id}`}>
            <Geography
                    key={geo.rsmKey} geography={geo} onMouseEnter={() => setGeo(geo)} onMouseLeave={() => setGeo(null)}
                    style={{default: {fill: "#EEE",}, hover: {fill: "rgb(54 197 94)",},}}
                  /></Link>
          ))
        }
      </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    </main>
  )
}

export default Main