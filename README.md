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
    $page.path = regularPath.replace(replaceRegex, '');

    // 1. Add extra fields.
    $page.xxx = 'xxx'

    // 2. Change frontmatter.
    frontmatter.sidebar = 'auto'
  }
    ``` 
    
4. Adding Netlify CMS relations
