import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.digitalyagnesh.com/api",
  baseURL: "http://localhost:8000/api",
});

// aboutdata
const getAboutDetails = async () => {
  try {
    const { data } = await api.get("/aboutus");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useAboutData = () => {
  return useQuery({
    queryKey: ["aboutData"],
    queryFn: getAboutDetails,
  });
};

// getservicedata

export const getServices = async () => {
  try {
    const { data } = await api.get("/service");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useServiceData = () => {
  return useQuery({
    queryKey: ["serviceData"],
    queryFn: getServices,
  });
};

// export const getServicesDetails = async (id) => {
//   try {
//     const { data } = await api.get(`/service/${id}`);

//     return data?.result;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const useServiceDetailsData = (id) => {
//   return useQuery({
//     queryKey: ["serviceDetails", id],

//     queryFn: () => getServicesDetails(id),
//     enabled: !!id,
//   });
// };

// getClients

export const getClients = async () => {
  try {
    const { data } = await api.get("/review");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useClientData = () => {
  return useQuery({
    queryKey: ["clientData"],
    queryFn: getClients,
  });
};

// team
export const getTeam = async () => {
  try {
    const { data } = await api.get("/team");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useTeamData = () => {
  return useQuery({
    queryKey: ["teamData"],
    queryFn: getTeam,
  });
};

// contact

export const addContactData = async (formData) => {
  try {
    const { data } = await api.post("/userContact", formData);
    return data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

// React Query hook to use in the form
export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addContactData,
    onSuccess: () => {
      queryClient.invalidateQueries(["contactData"]); 
    },
  });
};

