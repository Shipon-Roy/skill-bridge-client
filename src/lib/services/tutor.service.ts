import { env } from "../env";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// no dynamic and no {cache: no-store} : SSG --> static page
// {cache: no-store} : SSR -> dynamic page
// next: {revalidate : 10} : ISR -> Mix between static and dynamic

interface ServiceOption {
  cache?: RequestCache;
  revalidate?: number;
}

interface GetBlogParams {
  isFeatured?: boolean;
  search?: string;
  page?: string;
  limit?: string;
}

export const tutorService = {
  getAllTutors: async function (
    params?: GetBlogParams,
    options?: ServiceOption,
  ) {
    try {
      const url = new URL(`${API_URL}/api/tutors`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== "" && value !== null) {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["tutors"] };

      const res = await fetch(url.toString(), config);

      const data = await res.json();

      //   if (data.success) {
      //     return { data: data, error: null };
      //   }

      return { data: data.data, error: null };
    } catch (err) {
      return { data: null, error: { message: "somthing went wrong!" } };
    }
  },
};
