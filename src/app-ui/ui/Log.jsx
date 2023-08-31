export default function Log ({ doc = {}, onClick = null }) {
  return (
    <div>
      {(doc.title || doc.message) && (
        <div onClick={onClick}>
          {!!doc.title && (
            <h6>{doc.title}</h6>
          )}

          {!!doc.message && (
            <p>{doc.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
