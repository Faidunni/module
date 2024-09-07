export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`You did not select element`);
  }
}

// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw Error(`You did not select elements`);
//   }
// }

// export default getElement;
