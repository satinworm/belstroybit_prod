export type StrapiSingleResponse<T> = {
	data: {
		id: number;
		attributes: T;
	};
};

export type StrapiPagination = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};

export type TStrapiMedia = {
	attributes: any;
	name: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string;
	provider: string;
	provider_metadata: string | null;
	created_at: string;
	updated_at: string;
};

export type TStrapiMediaResponse = TStrapiMedia[];

type StrapiMediaFormat = {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path: string;
	url: string;
};

export type GeoSpatial = {
	id: number;
	latitude: string;
	longitude: string;
};
