import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as o,b as n,e as s,f as p,d as l}from"./app-D1py-eEI.js";const c={},u=l(`<h2 id="初始化go项目" tabindex="-1"><a class="header-anchor" href="#初始化go项目"><span>初始化Go项目</span></a></h2><p>新建一个文件夹，并新建main.go作为核心包文件。输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go mod init <span class="token punctuation">[</span>项目名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成最基本的golang项目。 准备好项目文件目录:</p><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202405081434124.png" style="zoom:50%;"><p>作用大致如下：</p><ul><li><strong>config:</strong> 存放一些基本设置，如初始化数据库连接所需参数。</li><li><strong>models:</strong> 存放数据相关的结构体和方法。</li><li><strong>router:</strong> 存放初始化路由的方法</li><li><strong>service:</strong> 存放处理路由返回数据的方法</li><li><strong>sql:</strong> 存放数据库相关的方法</li><li><strong>test:</strong> 存放测试相关代码。</li></ul><h2 id="构建用户数据" tabindex="-1"><a class="header-anchor" href="#构建用户数据"><span>构建用户数据</span></a></h2><p>在models文件夹中新建user_basic.go文件，用来存放用户数据。</p><div class="language-golang line-numbers-mode" data-ext="golang" data-title="golang"><pre class="language-golang"><code>package models

import (
	&quot;gorm.io/gorm&quot;
)

type UserBasic struct {
	gorm.Model
	Name          string
	Password      string
	Phone         string
	email         string
	Identity      string
	ClientIp      string
	ClientPort    string
	LoginTime     uint64
	HeartbeatTime uint64
	LogoutTime    uint64
	IsLogout      bool
	DeviceInfo    string
}

func (table *UserBasic) TableName() string {
	return &quot;user_basic&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GORM是一个用于Go语言的开源对象关系映射(ORM)库，它简化了与关系型数据库的交互。使用GORM,您可以更轻松地执行常见的CRUD(创建、读取、更新和删除)操作，而无需编写大量的SQL查询。</p><p>以下是GORM的一些主要用途：</p><ol><li>简化数据库操作：GORM允许您将Go结构体映射到数据库表，并自动处理许多常见的数据库操作(如插入、更新、删除等)。这使得开发人员能够专注于业务逻辑，而不是编写繁琐的SQL查询。</li><li>类型安全：GORM在编译时检查您的代码，确保类型转换正确，从而避免潜在的运行时错误。</li><li>智能查询构建：GORM可以根据上下文自动生成合适的查询语句，提高性能并减少潜在的SQL注入风险。</li><li>预加载关联数据：通过使用GORM的预加载功能，您可以在查询结果中预先加载相关的数据，从而减少与数据库的交互次数。</li><li>支持多种数据库：GORM支持多种主流数据库，包括MySQL、PostgreSQL、SQLite和Microsoft SQL Server等。</li></ol><p>运行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> gorm.io/gorm
go get <span class="token parameter variable">-u</span> gorm.io/driver/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>即可下载gorm包以及对应的mysql数据库包。</p><h2 id="构建测试代码" tabindex="-1"><a class="header-anchor" href="#构建测试代码"><span>构建测试代码</span></a></h2><p>接下来，我们通过一些代码测试gorm包的功能，之前我们已经编写了用户参数结构体。下面我们用gorm新建一张用户表：</p><h3 id="新建数据库" tabindex="-1"><a class="header-anchor" href="#新建数据库"><span>新建数据库</span></a></h3><p>使用Navicat等工具连接数据库，右键选择新建数据库</p><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202405081440376.png" alt="image-20240508144031272" style="zoom:33%;"><p>在test文件夹下新建测试文件test_gorm.go文件 输入以下代码：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;IMChat/models&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
	<span class="token string">&quot;gorm.io/gorm&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;root:gyb20010204@tcp(121.36.227.7:3306)/ginchat?charset=utf8&amp;parseTime=True&amp;loc=Local&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;failed to connect database&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 迁移 schema</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>UserBasic<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// Create</span>
	user <span class="token operator">:=</span> <span class="token operator">&amp;</span>models<span class="token punctuation">.</span>UserBasic<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>          <span class="token string">&quot;gyb&quot;</span><span class="token punctuation">,</span>
		Password<span class="token punctuation">:</span>      <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
		LoginTime<span class="token punctuation">:</span>     time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		HeartbeatTime<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		LogoutTime<span class="token punctuation">:</span>    time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>

	<span class="token comment">// Read</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 根据整型主键查找</span>

	<span class="token comment">// Update</span>
	db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gyb3&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202405081454311.png" alt="image-20240508145437252" style="zoom:50%;"><h2 id="测试路由接口" tabindex="-1"><a class="header-anchor" href="#测试路由接口"><span>测试路由接口</span></a></h2><h3 id="router编写" tabindex="-1"><a class="header-anchor" href="#router编写"><span>router编写</span></a></h3><p>在router包中创建app.go文件</p><p>新建index接口</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> router

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;IMChat/service&quot;</span>
    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span> service<span class="token punctuation">.</span>GetIndex<span class="token punctuation">)</span>

    <span class="token keyword">return</span> r
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.go中启动路由</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">main</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;IMChat/router&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:</span><span class="token operator">=</span> <span class="token class-name"><span class="token namespace">router<span class="token punctuation">.</span></span>Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    _ <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">r<span class="token punctuation">.</span></span>Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8081&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 监听并在 0.0.0.0:8081 上启动服务</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),r={href:"http://localhost:8081/index",target:"_blank",rel:"noopener noreferrer"},d=n("img",{src:"https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202405081458831.png",alt:"image-20240508145802761",style:{zoom:"50%"}},null,-1);function m(v,k){const a=t("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[s("访问"),n("a",r,[s("http://localhost:8081/index"),p(a)])]),d])}const h=e(c,[["render",m],["__file","项目初始化.html.vue"]]),f=JSON.parse('{"path":"/project/IM%E8%81%8A%E5%A4%A9%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96.html","title":"项目初始化","lang":"zh-CN","frontmatter":{"title":"项目初始化","order":1,"description":"初始化Go项目 新建一个文件夹，并新建main.go作为核心包文件。输入命令： 生成最基本的golang项目。 准备好项目文件目录: 作用大致如下： config: 存放一些基本设置，如初始化数据库连接所需参数。 models: 存放数据相关的结构体和方法。 router: 存放初始化路由的方法 service: 存放处理路由返回数据的方法 sql: ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/project/IM%E8%81%8A%E5%A4%A9%E7%B3%BB%E7%BB%9F/%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"疼了也不哭"}],["meta",{"property":"og:title","content":"项目初始化"}],["meta",{"property":"og:description","content":"初始化Go项目 新建一个文件夹，并新建main.go作为核心包文件。输入命令： 生成最基本的golang项目。 准备好项目文件目录: 作用大致如下： config: 存放一些基本设置，如初始化数据库连接所需参数。 models: 存放数据相关的结构体和方法。 router: 存放初始化路由的方法 service: 存放处理路由返回数据的方法 sql: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目初始化\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"初始化Go项目","slug":"初始化go项目","link":"#初始化go项目","children":[]},{"level":2,"title":"构建用户数据","slug":"构建用户数据","link":"#构建用户数据","children":[]},{"level":2,"title":"构建测试代码","slug":"构建测试代码","link":"#构建测试代码","children":[{"level":3,"title":"新建数据库","slug":"新建数据库","link":"#新建数据库","children":[]}]},{"level":2,"title":"测试路由接口","slug":"测试路由接口","link":"#测试路由接口","children":[{"level":3,"title":"router编写","slug":"router编写","link":"#router编写","children":[]}]}],"git":{},"readingTime":{"minutes":2.84,"words":853},"filePathRelative":"project/IM聊天系统/项目初始化.md","autoDesc":true}');export{h as comp,f as data};
