webpackJsonp([0x758a40cb69e9],{78:function(t,e){(function(e){"use strict";var r;t.exports={siteMetadata:(r={title:"Gatsby",author:"Narendra",description:"Gatsby starter for bootstrap a blog",url:"https://jaxx2104.github.io/gatsby-starter-bootstrap"},r.author="Narendra",r.twitter="narendra",r),pathPrefix:"/",plugins:["gatsby-plugin-react-helmet","gatsby-transformer-remark","gatsby-plugin-glamor",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography.js"}},{resolve:"gatsby-plugin-sass",options:{precision:8}},{resolve:"gatsby-source-filesystem",options:{name:"src",path:e+"/articles"}}]}}).call(e,"/")},158:function(t,e,r){(function(n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var c=r(1),l=a(c),u=r(15),p=a(u),f=r(132),d=a(f),h=r(79),m=a(h),g=function(t){function e(){return o(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.frontmatter.path,tags:e.node.frontmatter.tags,categories:e.node.frontmatter.categories,title:e.node.frontmatter.title,date:e.node.frontmatter.date,description:e.node.frontmatter.description})}),t},e.prototype.render=function(){var t=this.getPostList();return n.createElement("div",null,t.map(function(t){return n.createElement("div",{className:"container",key:t.path},n.createElement("div",{className:"articles col-md-12"},n.createElement("div",{className:"article-wrap"},n.createElement("div",{className:"page-header"},n.createElement(p.default,{style:{boxShadow:"none"},to:t.path},n.createElement("h1",null,t.title),n.createElement("time",{dateTime:t.date},t.date)),n.createElement(d.default,{categories:t.categories}),n.createElement(m.default,{tags:t.tags})),n.createElement("div",{className:"page-content",dangerouslySetInnerHTML:{__html:t.description}}))))}))},e}(l.default.Component);e.default=g,t.exports=e.default}).call(e,r(4))},363:function(t,e,r){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var i=r(1),c=n(i),l=r(129),u=n(l),p=r(158),f=n(p),d=r(78),h=function(e){function r(){return a(this,r),o(this,e.apply(this,arguments))}return s(r,e),r.prototype.render=function(){var e=this.props.pathContext.tag,r=this.props.data.allMarkdownRemark.edges;return t.createElement("div",{className:"tag-container"},t.createElement(u.default,{title:'Posts tagged as "'+e+'" | '+d.siteMetadata.siteTitle}),t.createElement(f.default,{postEdges:r}))},r}(c.default.Component);e.default=h;e.pageQuery="** extracted graphql fragment **"}).call(e,r(4))}});
//# sourceMappingURL=component---src-templates-tag-js-7f7e736c2b405404a329.js.map