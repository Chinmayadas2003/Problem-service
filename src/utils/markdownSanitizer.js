const marked =require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
var TurndownService = require('turndown')


function sanitizeMarkdownContent(markdownContent){
    var turndownService = new TurndownService()

    //1. convert markdown to html
    const convertedhtml = marked.parse(markdownContent);

    console.log("convereted html",convertedhtml);

    //2. sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedhtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    })

    console.log("sanitized html",sanitizedHtml);
    //convert the snaitized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("sanitized markdown",sanitizedMarkdown);
    return sanitizedMarkdown;
}
/*
const input =` #hello world
### this is a markdown
-something
<script>alert('wohoo')</script>`;

sanitizeMarkdownContent(input);*/

module.exports= sanitizeMarkdownContent;