import{_ as o,r,o as i,a as c,b as a,d as e,w as t,F as l,f as p,e as n}from"./app.2bf926e2.js";const d={},u=p(`<h2 id="basic-config" tabindex="-1"><a class="header-anchor" href="#basic-config" aria-hidden="true">#</a> Basic Config</h2><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>These options are important and require you to configure them correctly.</p></div><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Domain which to be deployed to.</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>Type: <code>Author</code></li><li>Required: No</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Global default author.</p><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><p>Navbar config</p>`,11),h=n("For details, see "),b=n("Layout \u2192 Navbar"),_=a("h3",{id:"sidebar",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),n(" sidebar")],-1),k=a("p",null,"Sidebar config",-1),m=n("For details, see "),f=n("Layout \u2192 Sidebar"),g=a("h3",{id:"locales",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),n(" locales")],-1),y=a("ul",null,[a("li",null,[n("Type: "),a("code",null,"Record<string, HopeThemeLocaleOptions>")])],-1),v=a("p",null,"I18n config of the theme, where you can set options for each language separately.",-1);function x(N,w){const s=r("RouterLink");return i(),c(l,null,[u,a("p",null,[h,e(s,{to:"/guide/layout/navbar.html"},{default:t(()=>[b]),_:1})]),_,k,a("p",null,[m,e(s,{to:"/guide/layout/sidebar.html"},{default:t(()=>[f]),_:1})]),g,y,v],64)}var A=o(d,[["render",x]]);export{A as default};