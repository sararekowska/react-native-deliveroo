import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "h9qdb74t",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-03-07",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export default client;