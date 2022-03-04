import{_ as i,r as a,o as s,a as d,b as e,d as n,F as r,e as t,f as l}from"./app.2bf926e2.js";const c={},h=t("The theme adds feed suport using "),u={href:"https://vuepress-theme-hope.github.io/v2/feed/",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"vuepress-plugin-feed2",-1),f=t("."),_=l('<div class="custom-container info"><p class="custom-container-title">Info</p><p><code>vuepress-theme-hope</code> provides <code>feed</code> options in <code>themeConfig.plugins</code> as plugin options to <code>vuepress-plugin-feed2</code>.</p></div><h2 id="enable-feed-output" tabindex="-1"><a class="header-anchor" href="#enable-feed-output" aria-hidden="true">#</a> Enable Feed Output</h2><p><code>@mr-hope/vuepress-plugin-feed</code> plugin can generate feed in the following three formats for you:</p><ul><li>Atom 1.0 (Default output: atom.xml)</li><li>JSON 1.1 (Default output: feed.json)</li><li>RSS 2.0 (Default output: rss.xml)</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Atom and JSON are provided to improve more feed software adaptation.</p><p>Please use RSS if possible.</p></div><p>Please set <code>atom</code>, <code>json</code> or <code>rss</code> to <code>true</code> in the <code>themeConfig.plugins.feed</code> according to the format you want to generate.</p><p>Considering that rare people stick to feed now, the plugin provides a minimal configuration to adjust the automatic generation of detailed feed files. Also it allows you to freely define the output content of the feed.</p><h2 id="channel-settings" tabindex="-1"><a class="header-anchor" href="#channel-settings" aria-hidden="true">#</a> Channel Settings</h2><p>You can customize information of feed channel by setting the <code>channel</code> option in <code>themeConfig.plugins.feed</code>.</p><p>We recommend you to set the following options:</p><ul><li>Convert the date when the feed was created to ISOString and write it to <code>channel.pubDate</code></li><li>Set the content update cycle (unit: minute) in <code>channel.ttl</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Default channel settings</p><ul><li><p>The title and description of the channel is the name and description of the site by default</p></li><li><p>The link of the channel and the last update time will be automatically generated by the plugin.</p></li></ul></div>',12),g=t("For detailed options and their values, please see "),m={href:"https://vuepress-theme-hope.github.io/v2/feed/config/channel.html",target:"_blank",rel:"noopener noreferrer"},v=t("Feed Channel Config"),b=e("h2",{id:"generation-control",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#generation-control","aria-hidden":"true"},"#"),t(" Generation control")],-1),C=e("h3",{id:"default-generation-logic",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default-generation-logic","aria-hidden":"true"},"#"),t(" Default generation logic")],-1),x=e("p",null,"By default, all articles are added to the feed stream.",-1),y=t("For the content read by default, see "),k={href:"https://vuepress-theme-hope.github.io/v2/feed/config/item.html",target:"_blank",rel:"noopener noreferrer"},S=t("Configuration \u2192 Item Control"),w=e("h3",{id:"custom-feed-item",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-feed-item","aria-hidden":"true"},"#"),t(" Custom feed item")],-1),F=e("p",null,[t("You can control how feed item is generated in specific article by configuring the "),e("code",null,"feed"),t(" option in frontmatter.")],-1),D=t("For detailed options and their default values, see "),N={href:"https://vuepress-theme-hope.github.io/v2/feed/config/item.html",target:"_blank",rel:"noopener noreferrer"},I=t("Configuration \u2192 Project Settings"),T=t("."),j=e("h3",{id:"custom-feed-generation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-feed-generation","aria-hidden":"true"},"#"),t(" Custom Feed Generation")],-1),B=e("p",null,[t("You can take full control of feed items generation by configuring the "),e("code",null,"getter"),t(" in the plugin options.")],-1),E=t("For detailed options and their default values, see "),O={href:"https://vuepress-theme-hope.github.io/v2/feed/config/getter.html",target:"_blank",rel:"noopener noreferrer"},V=t("Configuration \u2192 Feed Getter"),A=t(".");function G(P,Y){const o=a("ExternalLinkIcon");return s(),d(r,null,[e("p",null,[h,e("a",u,[p,n(o)]),f]),_,e("p",null,[g,e("a",m,[v,n(o)])]),b,C,x,e("p",null,[y,e("a",k,[S,n(o)])]),w,F,e("p",null,[D,e("a",N,[I,n(o)]),T]),j,B,e("p",null,[E,e("a",O,[V,n(o)]),A])],64)}var L=i(c,[["render",G]]);export{L as default};