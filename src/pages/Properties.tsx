import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Helmet } from "react-helmet";

interface Property {
  id: string;
  title: string;
  price: number;
  location?: string;
  type: "residential" | "commercial";
  bedrooms?: string;
  description: string;
  images: string[];
  amenities: string[];
  area: string;
  parking: string;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const Properties = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 5500000000]);
  const [propertyType, setPropertyType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<string>("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const propertiesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Property[];
        setProperties(propertiesData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter(property => {
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesType = !propertyType || property.type === propertyType;
    const matchesLocation = !location || property.location === location;
    const matchesBedrooms = !bedrooms || property.bedrooms === bedrooms;

    if (property.type === "commercial") {
      return matchesPrice && matchesType;
    }
    return matchesPrice && matchesType && matchesLocation && matchesBedrooms;
  });

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading properties...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Properties for Sale in Pune | Sangram Realty</title>
        <meta name="description" content="Browse our exclusive collection of properties for sale in Pune. Luxury apartments, villas, and commercial spaces in prime locations like Baner, Balewadi, and Wakad." />
        <meta name="keywords" content="properties for sale pune, luxury apartments pune, commercial property pune, residential property pune, 2bhk pune, 3bhk pune, property listing pune, real estate listings pune, baner properties, balewadi properties, wakad properties, premium homes pune, investment property pune, ready possession flats pune, under construction projects pune, luxury villas pune, penthouse pune, office space pune, commercial real estate pune, property rates pune" />
        <link rel="canonical" href="https://sangramgaikwad.com/properties" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 bg-primary text-white">
        <h1 className="mb-8 text-3xl font-bold">Properties</h1>

        <div className="mb-8 grid gap-4 rounded-lg bg-primary p-4 shadow-md md:grid-cols-4 text-white">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">Price Range</label>
            <Slider
              className=" [&>span]:bg-gray-900"
              defaultValue={[0, 5500000000]}
              max={5500000000}
              step={500000}
              onValueChange={setPriceRange}
            />

            <div className="mt-2 flex justify-between text-sm">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Property Type</label>
            <Select onValueChange={setPropertyType}>
  <SelectTrigger>
    <SelectValue placeholder="Select type" />
  </SelectTrigger>
  <SelectContent className=" text-white">
    <SelectItem value="residential" className="hover:bg-gray-900">Residential</SelectItem>
    <SelectItem value="commercial" className="hover:bg-gray-900">Commercial</SelectItem>
  </SelectContent>
</Select>

          </div>

          {propertyType === "residential" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium">Location</label>
                <Select onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary text-white ">
<SelectItem value="dubai">Dubai</SelectItem>

                    <SelectItem value="Baner">Baner</SelectItem>
                    <SelectItem value="Balewadi">Balewadi</SelectItem>
                    <SelectItem value="Wakad">Wakad</SelectItem>
                    <SelectItem value="Tathawade">Tathawade</SelectItem>
                    <SelectItem value="Punawale">Punawale</SelectItem>
                    <SelectItem value="Ravet">Ravet</SelectItem>
                    <SelectItem value="Bavdhan">Bavdhan </SelectItem>
                    <SelectItem value="Pashan">Pashan</SelectItem>
                    <SelectItem value="Baner annex">Baner annex </SelectItem>
                    <SelectItem value="Sus">Sus </SelectItem>
                    <SelectItem value="Hinjewadi phase 1">Hinjewadi phase 1 </SelectItem>
                    <SelectItem value="Hinjewadi phase 2">Hinjewadi phase 2 </SelectItem>
                    <SelectItem value="Hinjewadi phase 3">Hinjewadi phase 3  </SelectItem>
                    <SelectItem value="Bhosale nagar">Bhosale nagar  </SelectItem>
                    <SelectItem value="Aundh">Aundh </SelectItem>
                    <SelectItem value="Kharadi">Kharadi</SelectItem>
                    <SelectItem value="Wagholi">Wagholi</SelectItem>
                    <SelectItem value="Dhanori">Dhanori</SelectItem>
                    <SelectItem value="Nibm">Nibm</SelectItem>
                    <SelectItem value="Koregaon park">Koregaon park</SelectItem>



                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Bedrooms</label>
                <Select onValueChange={setBedrooms}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bedrooms" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary text-white">
                    <SelectItem value="1BHK">1 BHK</SelectItem>
                    <SelectItem value="2BHK">2 BHK</SelectItem>
                    <SelectItem value="3BHK">3 BHK</SelectItem>
                    <SelectItem value="4BHK">4 BHK</SelectItem>
                    <SelectItem value="5BHK">5 BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => navigate(`/property/${property.id}`)}
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold  text-white">{property.title}</h3>
                <p className="text-lg font-bold text-white">
                  {formatPrice(property.price)}
                </p>
                <div className="mt-2 text-sm text-white">
                  <p>{property.location}</p>
                  {property.type === "residential" && <p>{property.bedrooms}</p>}
                  <p>{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Properties;
