import{_ as n,f as a}from"./app.2bf926e2.js";var s="/assets/home.f3eda051.png";const e={},p=a('<p><code>vuepress-theme-hope</code> \u4FDD\u7559\u4E86\u9ED8\u8BA4\u4E3B\u9898\u7684\u9996\u9875\u914D\u7F6E\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u6539\u8FDB\u6837\u5F0F\u4E0E\u914D\u7F6E\u3002</p><p>\u5982\u679C\u60F3\u8981\u4F7F\u7528\u5B83\uFF0C\u8BF7\u5728 frontmatter \u4E2D\u8BBE\u7F6E <code>home: true</code>\u3002\u4EFB\u4F55 frontmatter \u4E4B\u540E\u7684\u5185\u5BB9\u5C06\u4F1A\u4EE5\u666E\u901A\u7684 Markdown \u88AB\u6E32\u67D3\uFF0C\u5E76\u63D2\u5165\u5230\u4E3B\u9875\u6E32\u67D3\u5185\u5BB9\u7684\u5E95\u90E8\u3002</p><p><img src="'+s+`" alt="\u9996\u9875\u622A\u56FE" loading="lazy"></p><h2 id="\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9009\u9879</h2><p>\u53EF\u4EE5\u914D\u7F6E\u7684 frontmatter \u53C2\u6570\u5982\u4E0B:</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li></ul><p>\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\u542F\u7528\u9996\u9875\u6837\u5F0F</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>\u7C7B\u578B: <code>string | false</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;Hello&#39;</code></li></ul><p>\u6807\u9898\uFF0C\u586B\u5165 <code>false</code> \u4F1A\u53D6\u6D88\u663E\u793A\u3002</p><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u4E3B\u9875\u56FE\u6807 (logo) \u5730\u5740\uFF0C\u9700\u8981\u586B\u5165\u7EDD\u5BF9\u8DEF\u5F84 (\u56FE\u7247\u9700\u8981\u653E\u5165 <code>.vuepress/public</code> \u6587\u4EF6\u5939)</p><h3 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u6DF1\u8272\u6A21\u5F0F\u4E0B\u4E3B\u9875\u56FE\u6807 (logo) \u5730\u5740\uFF0C\u9700\u8981\u586B\u5165\u7EDD\u5BF9\u8DEF\u5F84 (\u56FE\u7247\u9700\u8981\u653E\u5165 <code>.vuepress/public</code> \u6587\u4EF6\u5939)\uFF0C\u9ED8\u8BA4\u540C <code>heroImage</code>\u3002</p><h3 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u4E3B\u9875\u56FE\u6807\u66FF\u4EE3\u6587\u5B57\u3002</p><h3 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;Welcome to your VuePress site&#39;</code></li></ul><p>\u9644\u52A0\u6587\u5B57\u63CF\u8FF0</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>\u7C7B\u578B: <code>ActionConfig | ActionConfig[]</code></li></ul><p><code>ActionConfig</code> \u7ED3\u6784:</p><ul><li><code>text</code>: \u6309\u94AE\u6587\u5B57</li><li><code>link</code>: \u6309\u94AE\u94FE\u63A5</li><li><code>type</code>: \u6309\u94AE\u7C7B\u578B (\u4EC5\u652F\u6301 <code>&#39;primary&#39;</code> \u4E0E <code>&#39;default&#39;</code> (\u9ED8\u8BA4))</li></ul><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>\u7C7B\u578B: <code>Feature[]</code></li></ul><p><code>Feature</code> \u7ED3\u6784:</p><ul><li><code>title</code>: <code>string</code> \u6807\u9898</li><li><code>details</code>: <code>string</code> \u8BE6\u60C5</li><li><code>icon</code>(\u53EF\u9009): <code>string</code> \u56FE\u6807\u7684 FontClass</li><li><code>link</code>(\u53EF\u9009): <code>string</code> \u94FE\u63A5\u5730\u5740</li></ul><p>\u7279\u6027\u8BF4\u660E</p><h2 id="\u914D\u7F6E\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6848\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u6848\u4F8B</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> \u4E3B\u9875
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> \u4E00\u4E2A\u5177\u6709\u5F3A\u5927\u529F\u80FD\u7684 vuepress \u4E3B\u9898\u2728
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> \u5FEB\u901F\u4E0A\u624B \u{1F4A1}
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> \u914D\u7F6E \u{1F6E0}
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/config/

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown \u589E\u5F3A
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u65B0\u589E\u6587\u5B57\u5BF9\u9F50\u3001\u4E0A\u4E0B\u89D2\u6807\u3001\u811A\u6CE8\u3001\u6807\u8BB0\u3001\u4EFB\u52A1\u5217\u8868\u3001\u6570\u5B66\u516C\u5F0F\u3001\u6D41\u7A0B\u56FE\u3001\u56FE\u8868\u4E0E\u5E7B\u706F\u7247\u652F\u6301
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6D4F\u89C8\u91CF\u4E0E\u8BC4\u8BBA
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u914D\u5408 Waline \u6765\u5F00\u542F\u9605\u8BFB\u91CF\u7EDF\u8BA1\u4E0E\u8BC4\u8BBA\u652F\u6301
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/comment/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6587\u7AE0\u4FE1\u606F\u5C55\u793A
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u4E3A\u4F60\u7684\u6587\u7AE0\u6DFB\u52A0\u4F5C\u8005\u3001\u5199\u4F5C\u65E5\u671F\u3001\u9884\u8BA1\u9605\u8BFB\u65F6\u95F4\u3001\u5B57\u6570\u7EDF\u8BA1\u7B49\u4FE1\u606F
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/page<span class="token punctuation">-</span>info/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u535A\u5BA2\u652F\u6301
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u4E3A\u4F60\u7684\u6587\u7AE0\u6DFB\u52A0\u65E5\u671F\u3001\u6807\u7B7E\u548C\u5206\u7C7B\uFF0C\u5373\u53EF\u81EA\u52A8\u751F\u6210\u6587\u7AE0\u3001\u5206\u7C7B\u3001\u6807\u7B7E\u4E0E\u65F6\u95F4\u8F74\u5217\u8868
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/blog/intro/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6587\u7AE0\u52A0\u5BC6
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u4F60\u53EF\u4EE5\u4E3A\u4F60\u7684\u7279\u5B9A\u9875\u9762\u6216\u7279\u5B9A\u76EE\u5F55\u8FDB\u884C\u52A0\u5BC6\uFF0C\u4EE5\u4FBF\u964C\u751F\u4EBA\u4E0D\u80FD\u968F\u610F\u8BBF\u95EE\u5B83\u4EEC
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/encrypt/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u4E3B\u9898\u8272\u5207\u6362
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\u8272\u5E76\u5141\u8BB8\u7528\u6237\u5728\u9884\u8BBE\u7684\u4E3B\u9898\u989C\u8272\u4E4B\u95F4\u5207\u6362
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/theme<span class="token punctuation">-</span>color/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u6DF1\u8272\u6A21\u5F0F
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> contrast
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u53EF\u4EE5\u81EA\u7531\u5207\u6362\u6D45\u8272\u6A21\u5F0F\u4E0E\u6DF1\u8272\u6A21\u5F0F
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/interface/darkmode/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO \u589E\u5F3A
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> config
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u5C06\u6700\u7EC8\u751F\u6210\u7684\u7F51\u9875\u9488\u5BF9\u641C\u7D22\u5F15\u64CE\u8FDB\u884C\u4F18\u5316\u3002
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/seo/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u81EA\u52A8\u4E3A\u4F60\u7684\u7F51\u7AD9\u751F\u6210 Sitemap
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/sitemap/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed \u652F\u6301
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u751F\u6210\u4F60\u7684 Feed\uFF0C\u5E76\u901A\u77E5\u4F60\u7684\u7528\u6237\u8BA2\u9605\u5B83
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/feed/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA \u652F\u6301
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u8BA9\u4F60\u7684\u7F51\u7AD9\u66F4\u50CF\u4E00\u4E2A APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/pwa/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u66F4\u591A\u65B0\u7279\u6027
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> more
    <span class="token key atrule">details</span><span class="token punctuation">:</span> \u5305\u62EC\u535A\u5BA2\u4E3B\u9875\u3001\u56FE\u6807\u652F\u6301\u3001\u8DEF\u5F84\u5BFC\u822A\u3001\u9875\u811A\u652F\u6301\u3001\u5168\u5C4F\u6309\u94AE\u3001\u8FD4\u56DE\u9876\u90E8\u6309\u94AE\u7B49
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright \xA9 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div>`,34);function t(l,c){return p}var u=n(e,[["render",t]]);export{u as default};