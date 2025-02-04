import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage, auth } from "@/lib/firebase";
import { collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus } from "lucide-react";

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
  customDetails?: Record<string, string>;
}

const AdminProperties = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [parking, setParking] = useState("");
  const [amenities, setAmenities] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [customFields, setCustomFields] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      if (auth.currentUser?.email !== "admin@gmail.com") {
        navigate("/login");
        return;
      }
      fetchProperties();
    };
    checkAuth();
  }, [navigate]);

  const fetchProperties = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "properties"));
      const propertiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Property[];
      setProperties(propertiesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast({
        title: "Error",
        description: "Failed to fetch properties",
        variant: "destructive",
      });
    }
  };

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrls = [];
      if (images) {
        for (let i = 0; i < images.length; i++) {
          const imageRef = ref(storage, `properties/${Date.now()}_${images[i].name}`);
          const uploadResult = await uploadBytes(imageRef, images[i]);
          const url = await getDownloadURL(uploadResult.ref);
          imageUrls.push(url);
        }
      }

      const customDetails = customFields.reduce((acc, { key, value }) => {
        if (key && value) acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      const propertyData: Omit<Property, 'id'> = {
        title,
        price,
        type: propertyType,
        description,
        images: imageUrls,
        amenities: amenities.split(',').map(a => a.trim()),
        area,
        parking,
        customDetails,
      };

      if (propertyType === "residential") {
        propertyData.location = location;
        propertyData.bedrooms = bedrooms;
      }

      await addDoc(collection(db, "properties"), propertyData);
      toast({
        title: "Success",
        description: "Property added successfully",
      });
      fetchProperties();
      resetForm();
    } catch (error) {
      console.error("Error adding property:", error);
      toast({
        title: "Error",
        description: "Failed to add property",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProperty = async (propertyId: string) => {
    try {
      await deleteDoc(doc(db, "properties", propertyId));
      toast({
        title: "Success",
        description: "Property deleted successfully",
      });
      fetchProperties();
    } catch (error) {
      console.error("Error deleting property:", error);
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setTitle("");
    setPrice(0);
    setLocation("");
    setBedrooms("");
    setDescription("");
    setArea("");
    setParking("");
    setAmenities("");
    setImages(null);
    setCustomFields([]);
  };

  const addCustomField = () => {
    setCustomFields([...customFields, { key: "", value: "" }]);
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="mb-8 text-3xl font-bold text-white">Admin Properties Management</h1>

      <div className="mb-8 space-y-6 rounded-lg bg-primary p-6 shadow-md">
        <h2 className="text-2xl font-semibold  text-white">Add New Property</h2>
        <form onSubmit={handleAddProperty} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Title</label>
              <Input
              className="text-gray-900"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Price (₹)</label>
              <Input
              className="text-gray-900"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Property Type</label>
              <Select
                value={propertyType}
                onValueChange={(value: "residential" | "commercial") => setPropertyType(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-primary text-white ">
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {propertyType === "residential" && (
              <>
                <div>
                  <label className="mb-2 block text-sm font-medium">Location</label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary text-white">
                      <SelectItem value="Baner">Baner</SelectItem>
                      <SelectItem value="Balewadi">Balewadi</SelectItem>
                      <SelectItem value="Wakad">Wakad</SelectItem>
                      <SelectItem value="Pimple Nilakh">Pimple Nilakh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Bedrooms</label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
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
            <div>
              <label className="mb-2 block text-sm font-medium">Area</label>
              <Input
                className="text-gray-900"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g., 1200 sq ft"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Parking</label>
              <Input
              className="text-gray-900"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
                placeholder="e.g., 2 Cars"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Description</label>
            <Textarea
            className="text-gray-900"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Amenities (comma-separated)</label>
            <Input
            className="text-gray-900"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
              placeholder="Swimming Pool, Gym, 24/7 Security"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Images</label>
            <Input
            className="text-white"
              type="file"
              onChange={(e) => setImages(e.target.files)}
              multiple
              accept="image/*"
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Custom Details (Optional)</h3>
              <Button type="button" onClick={addCustomField} variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Field
              </Button>
            </div>
            {customFields.map((field, index) => (
              <div key={index} className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder="Field name"
                  value={field.key}
                  onChange={(e) => {
                    const newFields = [...customFields];
                    newFields[index].key = e.target.value;
                    setCustomFields(newFields);
                  }}
                />
                <Input
                  placeholder="Field value"
                  value={field.value}
                  onChange={(e) => {
                    const newFields = [...customFields];
                    newFields[index].value = e.target.value;
                    setCustomFields(newFields);
                  }}
                />
              </div>
            ))}
          </div>

          <Button type="submit" disabled={loading}>
            Add Property
          </Button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold  text-white">{property.title}</h3>
                  <p className="text-lg font-bold text-white">
                    ₹{property.price.toLocaleString('en-IN')}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDeleteProperty(property.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-sm text-white">
                {property.type === "residential" && (
                  <>
                    <p>{property.location}</p>
                    <p>{property.bedrooms}</p>
                  </>
                )}
                <p>{property.type}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminProperties;