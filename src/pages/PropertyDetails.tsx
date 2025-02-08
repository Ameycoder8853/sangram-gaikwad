import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { MessageSquare } from "lucide-react";

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

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "properties", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProperty({ id: docSnap.id, ...docSnap.data() } as Property);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleWhatsAppClick = () => {
    if (!property) return;
    const propertyUrl = `https://sangramgaikwad.com/property/${property.id}`;
    const message = `Hi, I'm interested in the property: ${property.title} (${property.location}). Here is the link: ${propertyUrl}`;
    const phoneNumber = "919881950536"; // Replace with actual realtor number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-white">Loading...</div>;
  }

  if (!property) {
    return <div className="container mx-auto px-4 py-8 text-white">Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                className="h-[300px] w-full object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold text-white">{property.title}</h1>
            <p className="mb-4 text-2xl font-bold text-white">
              {formatPrice(property.price)}
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold  text-white">Location</h2>
                <p className="text-gray-300">{property.location}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold  text-white">Property Type</h2>
                <p className="text-gray-300">{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
              </div>
              {property.type === "residential" && (
                <div>
                  <h2 className="text-xl font-semibold  text-white">Configuration</h2>
                  <p className="text-gray-300">{property.bedrooms}</p>
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold  text-white">Carpet Area</h2>
                <p className="text-gray-300">{property.area}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold  text-white">Parking</h2>
                <p className="text-gray-300">{property.parking}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold  text-white">Description</h2>
                <p className="text-gray-300">{property.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold  text-white">Amenities</h2>
                <ul className="list-inside list-disc text-gray-300">
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Book Now on WhatsApp
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PropertyDetails;
