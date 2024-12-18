import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API


const categories = defineCollection({
    loader: file("src/data/categories.json"),
    schema: ({image}) =>
        z.object({
            id: z.number(),
            srcColor: image(),
            category: z.number(),   
        }),
});

export const collections = { categories };