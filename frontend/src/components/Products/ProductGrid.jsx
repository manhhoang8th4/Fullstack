import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProductGrid = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
          <Link key={index} to={`/product/${product.id || index}`} className="block">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-full h-96 mb-4">
                <img
                  src={product.images?.[0]?.url || "placeholder.jpg"}
                  alt={product.images?.[0]?.altText || product.name || "Product image"}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-sm mb-2">{product.name || "Tên sản phẩm"}</h3>
              <p className="text-gray-500 font-medium text-sm tracking-tighter">
                ${product.price || 0}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>Không có sản phẩm để hiển thị.</p>
      )}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      price: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          altText: PropTypes.string,
        })
      ),
    })
  ),
};

ProductGrid.defaultProps = {
  products: [],
};