import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-D1py-eEI.js";const t={},p=e(`<h2 id="_1-常规例子" tabindex="-1"><a class="header-anchor" href="#_1-常规例子"><span>1. 常规例子</span></a></h2><ol><li><p>先准备好一个配置类，如下：</p><ol><li>使用<code>@ConfigurationProperties</code>该类必须是个bean对象。</li><li>该类必须有setting方法，否则无法注入值。</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// 字符串</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
    <span class="token comment">// Integer</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> sum<span class="token punctuation">;</span>
    <span class="token comment">// boolean</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flag<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token comment">// 对象</span>
    <span class="token keyword">private</span> <span class="token class-name">Person</span> person<span class="token punctuation">;</span>
    <span class="token comment">// List&lt;对象&gt;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> personList<span class="token punctuation">;</span>
    <span class="token comment">// Map&lt;String, 对象&gt;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Setter</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>yml文件写法如下</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">user-name</span><span class="token punctuation">:</span> test1
  <span class="token key atrule">sum</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">flag</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">size</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">person</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> person1
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
  <span class="token key atrule">person-list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> person1
      <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> person2
      <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> person3
      <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">map</span><span class="token punctuation">:</span>
    <span class="token key atrule">key1</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> map1
      <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">key2</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> map2
      <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>结果</p><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202404190943870.png" alt="image-20240419094357813" style="zoom:50%;"></li></ol><h2 id="_2-非常规例子-不建议" tabindex="-1"><a class="header-anchor" href="#_2-非常规例子-不建议"><span>2. 非常规例子(不建议)</span></a></h2><ol><li><p><code>ConfigurationProperties</code>不配prefix，默认是从yml文件根结构开始，如下例子：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// List&lt;对象&gt;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> personList<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Setter</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>yml编写</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">person-list</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> person1
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> person2
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> person3
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>结果</p><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202404190945444.png" alt="image-20240419094547373" style="zoom:33%;"></li></ol>`,4),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","yml文件字符串、List、Map的书写方式并使用@ConfigurationProperties注入配置类.html.vue"]]),k=JSON.parse('{"path":"/guide/SpringBoot%E5%AD%A6%E4%B9%A0/yml%E6%96%87%E4%BB%B6%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%81List%E3%80%81Map%E7%9A%84%E4%B9%A6%E5%86%99%E6%96%B9%E5%BC%8F%E5%B9%B6%E4%BD%BF%E7%94%A8@ConfigurationProperties%E6%B3%A8%E5%85%A5%E9%85%8D%E7%BD%AE%E7%B1%BB.html","title":"yml配合@ConfigurationProperties注入","lang":"zh-CN","frontmatter":{"title":"yml配合@ConfigurationProperties注入","description":"1. 常规例子 先准备好一个配置类，如下： 使用@ConfigurationProperties该类必须是个bean对象。 该类必须有setting方法，否则无法注入值。 yml文件写法如下 结果 image-20240419094357813 2. 非常规例子(不建议) ConfigurationProperties不配prefix，默认是从yml文...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/SpringBoot%E5%AD%A6%E4%B9%A0/yml%E6%96%87%E4%BB%B6%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%81List%E3%80%81Map%E7%9A%84%E4%B9%A6%E5%86%99%E6%96%B9%E5%BC%8F%E5%B9%B6%E4%BD%BF%E7%94%A8@ConfigurationProperties%E6%B3%A8%E5%85%A5%E9%85%8D%E7%BD%AE%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"疼了也不哭"}],["meta",{"property":"og:title","content":"yml配合@ConfigurationProperties注入"}],["meta",{"property":"og:description","content":"1. 常规例子 先准备好一个配置类，如下： 使用@ConfigurationProperties该类必须是个bean对象。 该类必须有setting方法，否则无法注入值。 yml文件写法如下 结果 image-20240419094357813 2. 非常规例子(不建议) ConfigurationProperties不配prefix，默认是从yml文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"yml配合@ConfigurationProperties注入\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 常规例子","slug":"_1-常规例子","link":"#_1-常规例子","children":[]},{"level":2,"title":"2. 非常规例子(不建议)","slug":"_2-非常规例子-不建议","link":"#_2-非常规例子-不建议","children":[]}],"git":{},"readingTime":{"minutes":0.9,"words":271},"filePathRelative":"guide/SpringBoot学习/yml文件字符串、List、Map的书写方式并使用@ConfigurationProperties注入配置类.md","autoDesc":true}');export{d as comp,k as data};
