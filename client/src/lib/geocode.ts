type GoogleAddressComponent = {
  long_name: string;
  types: string[];
};

type GoogleGeocodeResult = {
  geometry?: {
    location?: {
      lat?: number;
      lng?: number;
    };
  };
  address_components?: GoogleAddressComponent[];
};

export type GeocodeData = {
  lat?: number;
  lon?: number;
  bairro?: string;
  logradouro?: string;
  numeroEncontrado?: string;
  cidade?: string;
  estado?: string;
  cepEncontrado?: string;
};

const GOOGLE_GEOCODE_KEY = "AIzaSyBs7pQorgiixQJBhXFQFY4_ouvlFXlgFEs";

export const geocodeAddress = async (query: string): Promise<GeocodeData | null> => {
  const params = new URLSearchParams({
    address: query,
    key: GOOGLE_GEOCODE_KEY,
  });
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Falha ao consultar o Google Maps.");
  }
  const data = (await response.json()) as { status?: string; results?: GoogleGeocodeResult[] };
  if (!data || data.status !== "OK" || !Array.isArray(data.results) || data.results.length === 0) {
    return null;
  }
  const result = data.results[0];
  const location = result.geometry?.location;
  const components = Array.isArray(result.address_components) ? result.address_components : [];

  const getComponent = (types: string[]) =>
    components.find((component) => types.every((type) => component.types.includes(type)))?.long_name || "";

  const bairro =
    getComponent(["sublocality", "political"]) ||
    getComponent(["neighborhood", "political"]) ||
    "";
  const logradouro = getComponent(["route"]) || "";
  const numeroEncontrado =
    getComponent(["street_number"]) ||
    getComponent(["premise"]) ||
    getComponent(["subpremise"]) ||
    "";
  const cidade =
    getComponent(["locality"]) ||
    getComponent(["administrative_area_level_2"]) ||
    "";
  const estado =
    getComponent(["administrative_area_level_1"]) ||
    "";
  const cepEncontrado = getComponent(["postal_code"]) || "";

  return {
    lat: typeof location?.lat === "number" ? location.lat : undefined,
    lon: typeof location?.lng === "number" ? location.lng : undefined,
    bairro,
    logradouro,
    numeroEncontrado,
    cidade,
    estado,
    cepEncontrado,
  };
};
