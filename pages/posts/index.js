import AllPost from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "behel",
    title: "Behel Gigi",
    image: "behel.jpg",
    excerpt:
      "Gigi rapi sempurna dengan perawatan oleh Ortodontis berpengalaman.",
  },
  {
    slug: "cabut",
    title: "Cabut Gigi Bungsu",
    image: "cabut.jpg",
    excerpt: "Prosedur yang aman ditangani Dokter Gigi Spesialis Bedah Mulut.",
  },
  {
    slug: "scalling",
    title: "Scalling Gigi",
    image: "scalling.jpg",
    excerpt: "Bersihkan karang gigi dengan nyaman untuk senyum yang sehat.",
  },
  {
    slug: "bleaching",
    title: "Bleaching Gigi",
    image: "bleaching.jpg",
    excerpt:
      "Hasil instan cerah alami dalam 1x kunjungan dengan prosedur yang nyaman.",
  },
];

function AllPostsPage() {
  return <AllPost posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
