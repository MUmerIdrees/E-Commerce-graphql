import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/tHxZ9hN/hat.jpg',
      route: 'shop/hats'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/BGWjwSr/jacket.jpg',
      route: 'shop/jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/SJ5r75r/sneaker.jpg',
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/N3wCnHV/women.jpg',
      route: 'shop/womens'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/gt8V3dF/mens.jpg',
      route: 'shop/mens'
    },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
