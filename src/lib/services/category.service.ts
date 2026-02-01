import { env } from "../env";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
  getAllCategories: async function (
    params?: GetBlogParams,
    options?: ServiceOption,
  ) {
    try {
      const url = new URL(`${API_URL}/category`);

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

      config.next = { ...config.next, tags: ["category"] };

      const res = await fetch(url.toString(), config);

      const data = await res.json();

      return { data: data.data, error: null };
    } catch (err) {
      return { data: null, error: { message: "somthing went wrong!" } };
    }
  },
};
