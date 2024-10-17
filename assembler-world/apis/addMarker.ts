import { saveMarker } from "@/constants/UrlApis";

interface linkMarkerResponse {
  message: string;
  success: boolean;
  token?: string;
  error?: string;
}

export const addMarker = async (markerId: number, token: string): Promise<linkMarkerResponse> => {
  const res = await fetch(saveMarker, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth": token
    },
    body: JSON.stringify({  }),
  });

  const data: linkMarkerResponse = await res.json();
  return data;
};
