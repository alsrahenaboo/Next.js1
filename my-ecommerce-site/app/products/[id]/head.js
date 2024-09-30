// app/products/[id]/head.js
export default function Head({ params }) {
  return (
    <>
      <title>Product {params.id} - E-Commerce</title>
      <meta name="description" content={`Details for product ${params.id}`} />
    </>
  );
}
