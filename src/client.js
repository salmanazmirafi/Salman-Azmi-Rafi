import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "chp8asb8",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  token:
    "skCoXOYwLdkQ7A4DB37sHe0ssxWVru9iJUr7JiPU8fs3JwoBzfSwiF4kpKTevn5THewgtfnimnK5PgNseWu1pz1oz8R0eUyG8Ez6SruFC46dmiBK4V2dFmEoIlndcI3Dl777LrTGNKO1TsLouqJoSvh9Rm51XfeoCYi1NT2xVUFiQL3GWxBs",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
