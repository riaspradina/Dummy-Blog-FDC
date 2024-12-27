import FeaturedPost from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/hero";
import Head from "next/head";

import { Fragment } from "react";

const DUMMY_POSTS = [
  {
    slug: "behel",
    title: "Behel Gigi",
    image: "behel.jpg",
    date: "2024-12-24",
    isFeatured: true,
    excerpt:
      "Gigi rapi sempurna dengan perawatan oleh Ortodontis berpengalaman.",
  },
  {
    slug: "cabut",
    title: "Cabut Gigi Bungsu",
    image: "cabut.jpg",
    date: "2024-11-24",
    isFeatured: true,
    excerpt: "Prosedur yang aman ditangani Dokter Gigi Spesialis Bedah Mulut.",
  },
  {
    slug: "scalling",
    title: "Scaling Gigi",
    image: "scalling.jpg",
    date: "2024-10-24",
    isFeatured: true,
    excerpt: "Bersihkan karang gigi dengan nyaman untuk senyum yang sehat.",
  },
  {
    slug: "bleaching",
    title: "Bleaching Gigi",
    image: "bleaching.jpg",
    date: "2024-9-24",
    isFeatured: true,
    excerpt:
      "Hasil instan cerah alami dalam 1x kunjungan dengan prosedur yang nyaman.",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
}
