export default function YoutubeVideo({ url }) {
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      //eslint-disable-next-line react/no-unknown-property
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //eslint-disable-next-line react/no-unknown-property
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  );
}
