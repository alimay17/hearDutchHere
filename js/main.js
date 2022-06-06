/*=============================================
=   Main Javascript Page for Hear Dutch Here  =
= Author: Alice Smith                         =
=============================================*/

import * as data from './data.js';

/* Create a dynamic list from array data */
function buildLinkList(myList, listElement) {
  const navDisplay = document.getElementById(listElement);
  myList.map(element => {
    let aLink = document.createElement('a');
    aLink.href = element.url;
    aLink.textContent = element.name;

    let aListItem = document.createElement('li');
    aListItem.appendChild(aLink);

    navDisplay.appendChild(aListItem);
  });
}

buildLinkList(data.lessonPages, 'lessonsList');
buildLinkList(data.exercisePages, 'exercises')
buildLinkList(data.vocabPages, 'vocab')
buildLinkList(data.vocabPages2, 'vocab2')
buildLinkList(data.vocabPages3, 'vocab3')
buildLinkList(data.grammarPages, 'grammar')
buildLinkList(data.culturePages, 'culture')
buildLinkList(data.morePages, 'more')