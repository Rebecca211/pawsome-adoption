// File: ./_app/js/util/sanity-client.js
import { createClient } from 'https://cdn.skypack.dev/@sanity/client';

export const sanity = createClient({
  projectId: '83o3bs7v',
  dataset: 'production',
  apiVersion: '2023-06-28',
  useCdn: true
});
