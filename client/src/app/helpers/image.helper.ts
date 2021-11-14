import { ImageInput } from '../models/images/image.model';
import { imageUrl } from '../constants';

export const getImageUrl = ({ size, path }: ImageInput): string => {
	const imagePath = path.includes('/') ? path : `/${path}`;
	return `${imageUrl}/${size}${imagePath}`;
};
