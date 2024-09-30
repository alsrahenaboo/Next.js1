
export default function ProductDetail({ params }) {
  const products = {
    1: {
      name: "Product 1",
      price: "$10",
      description: "Description for product 1",
    },
    2: {
      name: "Product 2",
      price: "$20",
      description: "Description for product 2",
    },
    3: {
      name: "Product 3",
      price: "$30",
      description: "Description for product 3",
    },
  };

  const product = products[params.id];

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
           
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-1 text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="ml-2 text-sm text-gray-600">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="mt-6">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
