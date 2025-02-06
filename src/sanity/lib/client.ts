import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "cnuerwve",
  dataset : "production",
  apiVersion: "2025-01-27",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
