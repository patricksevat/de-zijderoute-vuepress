const grayMatter = require('gray-matter');
const md = require('markdown-it')();
const glob = require('glob');
const fs = require('fs');
const nodePath = require('path');

const replaceRegex = /\/(dynamic-pages|pages)/;

module.exports = {
  patterns: [
    '**/dynamic-pages/*.md',
    '**/pages/*.md',
    '**/*.vue',
  ],
  title: 'De Zijderoute Kinderyoga',
  description: 'De Zijderoute - Avontuurlijke kinderyoga',
  extendPageData ($page) {
    const {
      frontmatter,         // page's frontmatter object
      regularPath,         // current page's default link (follow the file hierarchy)
    } = $page

    // Change url to something more friendly
    $page.path = regularPath.replace(replaceRegex, '');

    // TODO better approach:
    // 0. create plugin
    // 1. parse Netlify config YML/TOML/JSON/JS
    // Create a cache for all relation fields
    // 2. Retrieve list of possible relation fields and the dir location
    // 3. Hook into the `extendPageData`
    // 4. set $page[relationFieldName] with frontmatter and (parsed) content
    if(frontmatter && frontmatter.cards) {
      const { cards } = frontmatter;
      $page.cards = cards.map(cardTitle => {
        const availableCards = retrieveCards();
        return availableCards.find(card => {
          return card.frontmatter.title === cardTitle
        })
      })
    }
  }
}

let cache;

function retrieveCards () {
  if(cache) {
    console.log('returning cache');
    return cache;
  }

  const cardsDir = nodePath.join(__dirname, '..', 'cards');
  const allCardsFilePath = glob.sync(`${cardsDir}/*.md`);
  cache = allCardsFilePath.map(filePath => {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = grayMatter(fileContents);

    return {
      _filepath: filePath,
      _content: fileContents,
      _strippedContent: content,
      frontmatter: data,
      parsedMarkdown: md.render(content),
    }
  })

  return cache;
}
