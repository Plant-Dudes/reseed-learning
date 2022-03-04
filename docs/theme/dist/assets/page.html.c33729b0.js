import{_ as i,r as c,o as l,a as r,b as a,d as s,w as t,F as d,f as o,e}from"./app.2bf926e2.js";const p={},u=o(`<h2 id="icon-support" tabindex="-1"><a class="header-anchor" href="#icon-support" aria-hidden="true">#</a> Icon support</h2><p>You can configure the <code>icon</code> field in the frontmatter of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page.</p><p>This icon is used in navbar, sidebar, breadcrumb and page title.</p><details class="custom-block details"><summary>Example</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">icon</span><span class="token punctuation">:</span> home</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>`,4),h={class:"custom-container info"},m=a("p",{class:"custom-container-title"},"Info",-1),b=e("For icon settings, please see "),g=e("Icon Support"),f=a("h2",{id:"page-info-display",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#page-info-display","aria-hidden":"true"},"#"),e(" Page Info Display")],-1),k=e("Please see "),_=e("Page Info Section"),y=a("h2",{id:"breadcrumb",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#breadcrumb","aria-hidden":"true"},"#"),e(" Breadcrumb")],-1),v=e("Please see "),x=e("Breadcrumb"),w=e("."),C=o('<h2 id="heading-list" tabindex="-1"><a class="header-anchor" href="#heading-list" aria-hidden="true">#</a> Heading list</h2><p>In desktop mode, a list of article headings will automatically be displayed on the right side of the screen. (They will be placed in the sidebar on mobile devices)</p><p>If you don\u2019t want to display the title list on the right in desktop mode, please set <code>themeConfig.toc</code> to <code>false</code>.</p><p>You can also set it through <code>toc</code> in page frontmatter.</p><h2 id="contributors-and-last-updated-time" tabindex="-1"><a class="header-anchor" href="#contributors-and-last-updated-time" aria-hidden="true">#</a> Contributors and Last Updated Time</h2>',5),P=e("Please see "),T=e("Page Meta"),B=e("."),L=o(`<h2 id="prev-next-links" tabindex="-1"><a class="header-anchor" href="#prev-next-links" aria-hidden="true">#</a> Prev / Next Links</h2><p>Prev and next links are automatically inferred based on the sidebar order of the active page. You can also explicitly overwrite or disable them globally with theme config or on specific pages using <code>Front matter</code>:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">prev</span><span class="token punctuation">:</span> ./some<span class="token punctuation">-</span>other<span class="token punctuation">-</span>page
<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2>`,4),I=e("Please see "),N=e("Comment section"),S=e(" for details."),F=o(`<h2 id="custom-layout" tabindex="-1"><a class="header-anchor" href="#custom-layout" aria-hidden="true">#</a> Custom Layout</h2><p>By default the content of each <code>*.md</code> file is rendered in a <code>&lt;div class=&quot;page&quot;&gt;</code> container, along with the sidebar, auto-generated edit links and prev/next links. To use a fully custom component in place of the page, you can again specify the component to use using frontmatter:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> SpecialLayout</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This will render <code>SpecialLayout</code> layout registed in VuePress for the given page.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>The theme only provides <code>Layout</code>, <code>404</code> layout. Also:</p><ul><li>Provides a <code>Blog</code> layout when the blogging feature is enabled</li><li>Provides a <code>Slide</code> layout when the slideshow feature is enabled</li></ul></div><h2 id="custom-container-class" tabindex="-1"><a class="header-anchor" href="#custom-container-class" aria-hidden="true">#</a> Custom container Class</h2><p>By default, each page is rendered in a <code>div</code> with class <code>theme-container</code>. To apply some special styles to specific pages, you can additionally specify a class name by setting <code>containerClass</code> in frontmatter</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">containerClass</span><span class="token punctuation">:</span> fancy<span class="token punctuation">-</span>container</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This will render in <code>&lt;div class=&quot;theme-container fancy-container&quot; /&gt;</code> for the current page.</p>`,9);function V(q,Y){const n=c("RouterLink");return l(),r(d,null,[u,a("div",h,[m,a("p",null,[b,s(n,{to:"/guide/interface/icon.html"},{default:t(()=>[g]),_:1})])]),f,a("p",null,[k,s(n,{to:"/guide/feature/page-info.html"},{default:t(()=>[_]),_:1})]),y,a("p",null,[v,s(n,{to:"/guide/layout/breadcrumb.html"},{default:t(()=>[x]),_:1}),w]),C,a("p",null,[P,s(n,{to:"/guide/feature/meta.html"},{default:t(()=>[T]),_:1}),B]),L,a("p",null,[I,s(n,{to:"/guide/feature/comment.html"},{default:t(()=>[N]),_:1}),S]),F],64)}var R=i(p,[["render",V]]);export{R as default};