import { useFetch, useRuntimeConfig } from "#app";

export const useAppFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig()

  return useFetch(request, { baseURL: config.public.baseUrl, ...opts })
}
