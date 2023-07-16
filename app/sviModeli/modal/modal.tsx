import Image,{StaticImageData} from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ModalProps {
  imageSrc: StaticImageData | any;
  linkText: string;
  h2Text: string;
}

const Modal: React.FC<ModalProps> = ({ imageSrc, h2Text, linkText }) => {
  return (
		<div className="w-full md:w-1/2 lg:w-1/4 m-4">
			<h2 className='flex m-auto text-xl font-bold'>{h2Text}</h2>
			<Link href={linkText}>
				<Image src={imageSrc} width={200} height={undefined} alt="car" />
			</Link>
		</div>
	);
};

export default Modal;
