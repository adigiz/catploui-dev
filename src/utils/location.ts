interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeometryLocation {
  lat: number;
  lng: number;
}

interface Geometry {
  location: GeometryLocation;
  location_type: string;
  viewport: {
    northeast: GeometryLocation;
    southwest: GeometryLocation;
  };
}

interface GoogleGeocodingResult {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
}

interface GoogleGeocodingResponse {
  results: GoogleGeocodingResult[];
  status: string;
}

async function getStateFromZip(zip: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    if (!res.ok) return null;

    const data: GoogleGeocodingResponse = await res.json();

    if (data.status === 'OK' && data.results.length > 0) {
      const result = data.results[0];
      
      // Find the state component in address_components
      const stateComponent = result.address_components.find(
        (component) => component.types.includes('administrative_area_level_1')
      );
      
      return stateComponent?.short_name ?? null;
    }

    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}

export { getStateFromZip };
export type { GoogleGeocodingResponse, GoogleGeocodingResult, AddressComponent };