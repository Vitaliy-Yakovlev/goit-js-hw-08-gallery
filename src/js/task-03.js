const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const titleImgRef = document.querySelector('#gallery');

// const makeMarkupListImage = ({ url, alt }) => {
//   const listRef = document.createElement('li');
//   const listImageRef = document.createElement('img');
//   listImageRef.src = url;
//   listImageRef.alt = alt;

//   listRef.append(listImageRef);

//   return listImageRef;
// };

// const elementsList = images.map(makeMarkupListImage);
// titleImgRef.append(...elementsList);
// console.log(titleImgRef);

const titleImgRef = document.querySelector('#gallery');

const makeMarkupList = elementsList => {
  const { url, alt } = elementsList;
  return `
    <li> <img src="${url}" alt="${alt}" > </li>
    `;
};

const makeMarkupListImage = images.map(makeMarkupList).join('');
titleImgRef.insertAdjacentHTML('beforeend', makeMarkupListImage);

console.log(titleImgRef);
