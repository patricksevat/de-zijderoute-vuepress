1. follow [VuePress getting started guide](https://v1.vuepress.vuejs.org/guide/getting-started.html)
    a. Also create `docs/.vuepress/config.js`
2. Follow [NetlifyCMS add to you site guide](https://www.netlifycms.org/docs/add-to-your-site/)
    Main points: set up Identity, make sure `/admin` route is available
3. If you have multiple Netlify CMS collections but want them all to be available top-level
    a. you have a `docs/dynamic-pages/` folder but want them to be available under `your-site.com/foo.html` rather than
    `your-site.com/dynamic-pages/foo.html` you can use the `extendPageData` method in `.vuepress/config.js`:
    ```javascript
extendPageData ($page) {
    const {
      _filePath,           // file's absolute path
      _computed,           // access the client global computed mixins at build time, e.g _computed.$localePath.
      _content,            // file's raw content string
      _strippedContent,    // file's content string without frontmatter
      key,                 // page's unique hash key
      frontmatter,         // page's frontmatter object
      regularPath,         // current page's default link (follow the file hierarchy)
      path,                // current page's real link (use regularPath when permalink does not exist)
    } = $page

    // Change url to something more friendly
    const replaceRegex = /\/(dynamic-pages|pages)/;
    $page.path = regularPath.replace(replaceRegex, '');
  }
    ``` 
    
4. Adding Netlify CMS relations (the basic way):

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

### notes to self
* masonry effect is done via css grid
    * https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
    * https://css-tricks.com/preventing-a-grid-blowout/
    * For now kept quite static in terms of columns
* icons are imported using @mdi/js in .vuepress/config as SVGs during build time, other icons used in Vue components should be treeshaken
* Netlify forms is bitchy
    * (generates a weird undefined in textarea?) => seems to be part of vuetify
    * appears set up was wrong, POST request missing?
