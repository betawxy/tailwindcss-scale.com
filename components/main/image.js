export default function ({ url }) {
  return (
    <div className="magic-block-image">
      <figure>
        <a
          href={url}
          className="block-display-image-parent block-display-image-size-smart"
        >
          <img src={url} />
        </a>
      </figure>
    </div>
  );
}
