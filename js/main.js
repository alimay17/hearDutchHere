/*=============================================
=   Main Javascript for Hear Dutch Here       =
= Author: Alice Smith                         =
=============================================*/
import { navLinks } from "./linksLists/mainNav.js";
import * as siteMap from "./linksLists/siteMap.js";

/* Create a dynamic list from an array */
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

/* All Pages Navigation List */
buildLinkList(navLinks, 'navMain');

/* Site Map Lists */
if (document.title == 'Site Map - Hear Dutch Here') {
  buildLinkList(siteMap.lessonPages, 'lessonsList');
  buildLinkList(siteMap.exercisePages, 'exercises')
  buildLinkList(siteMap.vocabPages, 'vocab')
  buildLinkList(siteMap.vocabPages2, 'vocab2')
  buildLinkList(siteMap.vocabPages3, 'vocab3')
  buildLinkList(siteMap.grammarPages, 'grammar')
  buildLinkList(siteMap.culturePages, 'culture')
  buildLinkList(siteMap.morePages, 'more')
}