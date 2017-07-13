import PropTypes from 'prop-types';
import React from 'react';

const ProductItem = ({ data }) =>
	<div>
		<p>{data.name}</p>
	</div>;

ProductItem.propTypes = {
	data: PropTypes.object
};

export default ProductItem;
