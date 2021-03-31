export default function ({ url }) {
  return (
    <div className="">
      <figure>
        <a href={url} className="">
          <img src={url} />
        </a>
      </figure>
    </div>
  );
}
