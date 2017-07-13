import PropTypes from 'prop-types';
import React from 'react';
import ProductItem from './ProductItem';
import { PRODUCTS } from '../actions/types';

const Products = ({ filter }) => {
	const rows = [];

	PRODUCTS.forEach(p => {
		const nameLC = p.name.toLowerCase();
		const filterLC = filter.toLowerCase();

		if (nameLC.indexOf(filterLC) !== -1) {
			rows.push(
				<ProductItem key={p.name} data={p} />
			);
		}
	});

	return <div>{rows}</div>;
};

Products.propTypes = {
	filter: PropTypes.string
};

export default Products;
