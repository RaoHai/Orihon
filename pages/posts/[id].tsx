import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query
  return <p>Post: {id}</p>
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'T0262_001' } }
    ],
    fallback: true // false or 'blocking'
  };
}

export default Post;
