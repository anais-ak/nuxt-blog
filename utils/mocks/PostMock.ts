import { faker } from "@faker-js/faker";
import { PostI } from "@/types/";

const images: string[] = [
  "~/assets/img/unsplash.jpg",
  "~/assets/img/unsplash.jpg",
  "~/assets/img/unsplash.jpg",
];

const getPost = (): PostI => {
  return {
    id: faker.datatype.number().toString(),
    title: faker.lorem.sentence(5),
    previewText: faker.lorem.paragraph(),
    thumbnail: faker.helpers.arrayElement(images),
  };
};

const getPostList = (listSize: number): PostI[] => {
  return Array.from({ length: listSize }, getPost);
};

export function getAllPosts(listSize: number): PostI[] {
  return getPostList(listSize);
}

export function getPostById(id: string) {
  return getPostList(5).find((post) => post.id === id) || null;
}
