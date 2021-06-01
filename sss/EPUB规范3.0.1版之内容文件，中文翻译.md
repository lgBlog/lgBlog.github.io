›› [原文](http://www.idpf.org/epub/301/spec/epub-contentdocs.html)  ››、››  [旧版本](http://www.idpf.org/epub/30/spec/epub30-contentdocs.html)  ››  
# 综述  
## Purpose and Scope，目的与范围   
本节是说明性信息  

本EPUB内容文件规范3.0对HTML5、SVG和CSS在[EPUB®出版物](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)正文里的使用加以定义。  

本规范是构成EPUB3的一组相关规范中的一个。EPUB3是关于格式的交换、传递的第三次重大修订，用于以XML和Web标准为基础的数字出版物。对本规范的阅读、理解不能离开构成EPUB3的其它规格：   
   
	 EPUB3 Overview，EPUB3概述（[EPUB3Overview](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Overview)），提供关于EPUB的信息概述和到其它三个EPUB文件的路线图。应首先阅读EPUB3概述。  
	 EPUB Publications3.0.1，出版物301（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），为EPUB出版物的每个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)定义出版物级别的语义和总体合规要求。   
	 EPUB Open Container Format(OCF)3.0.1，开放容器格式（OCF）3.0.1（[OCF301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOCF3)），为封装一组相关的资源到一个单一文件（ZIP）的EPUB容器（[EPUB Container](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-container)）对格式和处理模型进行定义。  
	 EPUB Media Overlays3.0.1， 媒体叠加（[MediaOverlays301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOverlays3)），为同步文本和音频定义格式和处理模型。  

本规范取代EPUB内容文件3.0（[EPUB3Changes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Changes)）。请参阅[EPUB3Changes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Changes)了解本规范及其前身之间的差异。  

## Relationship to Other Specifications，与其它规范的关系  
本节是说明性的。  

#### Relationship to HTML5，与HTML5的关系      

本规范定义的XHTML文件类型（[XHTML document type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml)）是基于W3C（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)），且继承了（如无另外规定）HTML5的全部的语义、结构和处理行为。  

此外，本规范为W3C HTML5文件模式定义了一组扩展[set of extensions](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-extensions)，作者可以加在XHTML内容文件里面。  

本规范定义了一个简化的处理模式，阅读系统不需要脚本和HTML5表单或HTML5 DOM。合乎本规范的[EPUB阅读系统](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-reading-system)只需要能够处理合规的EPUB内容文件即可。  

由于[支持脚本、HTML5表单](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs)只是阅读系统的可选功能，合规的阅读系统不一定是完全合规的HTML5用户代理(即不一定完全实施HTML5处理模式)。  

#### Relationship to SVG，与SVG的关系  
本规范定义了一个SVG1.1的受限子集（[restricted subset of SVG 1.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg)），来代表HTML5内容文件里的內联（inline）矢量图形，或作为独立的SVG内容文件。

#### Relationship to CSS，与CSS的关系  
 
本规范定义的（[CSS Profile](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css)）以[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)作为基准。所有合乎[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)的CSS样式表，都可以用作EPUB出版物的上下文，[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)专门说明的例外。
本规范也综合了CSS3 Modules定义的特性，并引入了EPUB专有的CSS构造。   

#### Future Maintenance，将来的维护    

EPUB3引用未成文的W3C规范，将来可能发生不兼容的改变，导致本来合规的EPUB3内容文件不合乎将来引用（成文后的）规范的版本。  

IDPF预期在发生这些不兼容变更的时候要修订EPUB3规范。把这里定义的规范性限制更新为必要的。  

## Terminology，术语  

#### EPUB Publication，EPUB出版物  
含有一或多个符合本规范及其相关规范（[sibling specifications](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs)）的[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)集合，且打包在[EPUB容器](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-container)里。  
典型的EPUB出版物，是单个的智力作品或者艺术作品。本规范及其相关规范（[sibling specifications](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs)）并不对内容的性质加以限制。  

#### Rendition渲染  
一个逻辑文档实体，由一组相互关联的资源构成，代表对某个EPUB出版物的一种演绎。

#### Publication Resource，出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）  
含有内容或指令的资源，用于[EPUB出版物](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)的最起码一个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)的逻辑和渲染。缺了这些资源，出版物的渲染可能不是作者所打算的。出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）的例子有：包文件（Package Document）、EPUB内容文件（Content Documents）、 EPUB 样式表（Style Sheets）、声频视频、图像、嵌入字体和脚本。  

除了包文件本身，渲染一个rendition所需的出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）必须列在该rendition的[manifest](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）
、并且打包在容器文件里——除非在[Publication Resource Locations](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）
另有规定。  

不是出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）的例子包括：包文件（Package Document）[link](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem)元素（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）
所指定的那些资源，以及在向外打开的超链接里指定、落实到EPUB容器外的那些资源
(例如，由[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)元素的href属性所引用的)。  

#### Core Media Type Resource，核心媒体类型资源   
核心媒体类型的出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）是核心媒体类型（[Core Media Type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-core-media-type)），因此可以不加备选（[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）就放入EPUB出版物。  

#### EPUB Content Document，EPUB内容文件    
符合EPUB内容文件定义之一([XHTML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml) 或 [SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-svg))的出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）。  
EPUB内容文件是[核心媒体类型](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-core-media-type)资源，因此可以不加备选（[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）
就放入EPUB出版物。  

#### XHTML Content Document，XHTML内容文件  
符合[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的描述，定义在[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)的EPUB内容文件。  

XHTML内容文件使用[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的[XHTML syntax](http://www.w3.org/TR/html5/Overview.html#the-xhtml-syntax)语法。.   

#### SVG Content Document，SVG内容文件  
符合[SVG Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg)所列约束性表达的EPUB内容文件。  

#### EPUB Navigation Document，EPUB导航文件  

专门的[XHTML内容文件](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)，内含人、机可读的全局导航信息，符合[EPUB Navigation Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav)里面所写的限制。  

#### Scripted Content Document，脚本内容文件  
包含脚本的EPUB内容文件，或包含[HTML5 forms]([http://www.w3.org/TR/html5/Overview.html#forms HTML5 forms])元素的XHTML内容文件。  

更多信息请参[Scripted Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content)。   

#### Top-level Content Document，顶级内容文件  
从[spine](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-spine)引用的EPUB内容文件，不论是直接引用还是借助于备选链（[fallback chain](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow-manifest)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）  

#### Fixed-Layout Document 固定布局文档  
由spine直接引入的[EPUB 内容文件（Content Document）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）。spine在包文件（[Package Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-package-document)）里赋值pre-paginated。定义见：[rendition:layout Property](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-layout) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）
用于渲染固定布局文件的尺寸，定义在[Fixed-Layout Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fixed-layouts)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  

#### Core Media Type，核心媒体类型  
一组不需要备选的[Publication Resource](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-publication-resource-cmt-or-foreign)类型。更多信息请参[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。   

#### Package Document，包文件  
如[Package Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-documents) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）所定义，带有关于EPUB出版物书目、结构元数据的出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）。  

#### Manifest，仓单  
构成EPUB出版物给定rendition的所有出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）列表。更多信息请参[manifest](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）  

#### Spine，书脊  
出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）的有序列表，EPUB内容文件是典型的书脊，代表出版物给定rendition的默认阅读顺序。  
更多信息请参考[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  

#### Text-to-Speech (TTS)，语音合成   
使用合成声音对EPUB出版物的文本内容所做的渲染。  

#### EPUB Style Sheet (or Style Sheet)，EPUB样式表   
是符合[EPUB Style Sheets](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css)所定义的CSS样式表。  

#### Viewport，视口  
EPUB阅读系统的一个区域，通过它EPUB出版（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)）可视化地呈现给用户。  

#### CSSViewport，CSS视口   
能够显示CSS样式内容的视口（[viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport)）。  

#### SVG Viewport SVG 视口   
能够显示SVG图像的视口（[viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport)）。  

#### EPUB Container (or Container)，EPUB容器   
用于EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)）、基于ZIP的打包与发行格式，定义在[OCF301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOCF3).  

#### Author，作者  
负责生成EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)）的人或组织，不一定是所含内容或资源的创作者。  

#### User，用户  
使用EPUB阅读系统消费EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)）的个体。  

#### EPUB Reading System，EPUB阅读系统  
按照符合本EPUB3规范及其相关规范（[sibling specifications](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs)）的方式处理EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-publication)）以呈现给用户的系统。  

## 排字协议     

本规范使用下列排字协议：  
标记  
所有的标记（元素、attributes、properties）、代码（JS、伪代码）、机器可处理值（字符串、字符、媒体类型）以及文件名，都用橘红色单格字体。  
标记  
到标记的链接以及代码定义，都用橘红色单格字体，并且使用下划线标记。只链接每节的第一个实例。  
http://www.idpf.org/  
URI使用海军蓝单格字体。  
超链接  
超链接使用蓝色下划线。  
[引用]  
规范性和说明性的引用都放在方括号里。  
术语  
“术语”里定义的术语要大写。  
术语定义的链接，用蓝色下划线虚线。只链接每节的第一个实例。  
	  规范性元素、attributes和properties定义，放在蓝色文本框里。  
说明性的标记例子放在白色文本框。  
	 注  
	 说明性标注放在黄色文本框里，以“注”开头。  

	 注  
	 说明性警示放在红色文本框里，以“小心”开头。   

## Conformance Statements，合规声明  

本文件的关键字"MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL"（“必须”，“不可”，“要求”，“应该”，“不要”，“应该”，“不应该”，“推荐”，“可能”，和“可选”）应该按照[RFC2119](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRFC2119)的描述进行解读。

本规范的所有章节，除非标有“本节为说明性内容”的，都是规范性的。加给章节和附录的说明状态适用于它们包含的全部子内容和小节。

本规范的所有例子都是说明性的。

## Namespace prefix mappings，命名空间的前缀映射  
为方便，整个规范都使用下面的命名空间的前缀映射[XMLNS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refXMLNamespaces)：   
![XMLNS，贴图回避表格制作，图片内容和表格内容相同](http://imglf.nosdn.127.net/img/RGwzN2lzcVJ2RGEzYkJDRTBxOWdHaWJGQy9HaGMycURFeHpnWWJUWXFKcEk2QmNLbGVmNXNnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)  
（图片内容和下表内容相同）  
 前缀         命名空间URI  
 epub         http://www.idpf.org/2007/ops  
 m          http://www.w3.org/1998/Math/MathML   
 pls         http://www.w3.org/2005/01/pronunciation-lexicon   
 ssml         http://www.w3.org/2001/10/synthesis   
 svg         http://www.w3.org/2000/svg   

# EPUB Content Documents，EPUB内容文件  
## XHTML Content Documents，XHTML内容文件  

本节为创建XHTML内容文件定义[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)规则。核心媒体类型（[Core Media Type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-core-media-type)）是符合此规则的XML文档的一个实例，在本规范组及其相关规范（[sibling specifications](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs)）里称为XHTML内容文档（[XHTML Content Documents XHTML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)）。  

除另有注明外，本规范继承[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的所有关于语义、结构和处理行为的定义。  
   注  
   EPUB3的XHTML内容文件定义，引用W3C（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）规范里那些尚未定论、可能会变成不兼容的功能。  
   使用这些功能时，作者应考虑在交互操作性和文档使用寿命方面的固有风险。  

### Content Conformance，内容合规  
XHTML内容文件必须满足下面所有的指标：  

 › 文件（document）属性  

	 它必须满足在[XML Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-xml-constraints)（[Publications301]([http://idpf.org/epub/30/spec/epub30-contentdocs.html#refPublications3 Publications30])）为XML文档定义的合规约束；  
	  它必须符合XHTML语法[XHTML syntax](http://www.w3.org/TR/html5/Overview.html#the-xhtml-syntax)的[HT ML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)文件；  
	  对所使用的所有文件构造，凡由[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)定义的，它必须满足规范为那些构造定义的合规指标，[HTML5 Deviations and Constraints](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-deviations)明确改写的例外；  
	  它可以包含[HTML5 Extensions](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-extensions)所定义的对[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的扩展。并且必须满足那里定义的全部内容合规约束。  

› 文件（File）属性   
	 XHTML内容文件的文件名应该使用.xhtml扩展名。  

   注  
   从XHTML引用的所有出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）都必须满足[EPUB Publication-Content Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conf)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）里为出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）定义的合规约束。   

### Reading System Conformance，阅读系统合规条件    

一个合规的[EPUB阅读系统](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-reading-system)对[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)的处理必须满足以下全部指标：  
	 除非本规范以及[相关规范（sibling specifications）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs))明确规定为改写的，它必须按照[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)规范定义的语义处理XHTML内容文件，尊重那里所有适用的用户代理约束。   
	 它必须满足[HTML5 Extensions](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-extensions)里里规定的全部阅读系统合规条件。  
	 它必须识别并且在行为上适应[HTML5 Deviations and Constraints](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-deviations)里定义的约束。  
	 它必须满足[Scripted Content Documents — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs)定义的阅读系统合规条件。  
	  它必须按照[EPUB Style Sheets — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-rs-conf)里的定义支持XHTML内容文件的视觉渲染。  
	 它应该识别嵌入的ARIA标记，支持把任意给定的ARIA角色、状态和属性曝光给辅助平台的API（[WAI-ARIA](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refARIA)）。  

### HTML5 Extensions，HTML5扩展  
本节在[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的基础文件模型上定义EPUB3的[XHTML内容文件扩展](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)。  
### Semantic Markup 语义标记  
#### Semantic Inflection 语义变化  
##### Introduction， 介绍   

本节是介绍性内容  

语义变形是为元素附加额外意义的过程，使该元素在XHTML内容文件里有具体目的和/或属性。在EPUB出版物的上下文里，epub:type属性通常用来表示域名相关的语义，由其所携带的变形对基本[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)主机词汇进行补充。  
应用的语义总是细化其寄主元素的意义，从不改写它们的性质（例如，该属性可用以表明某个section是作品的一章，但不可以为了避免不适当的清单结构而用它来把p元素转换为列表项)。  

语义元数据不是给人使用的，而是给阅读系统和其它用户代理提供一个受控的方式，以更多了解有关文档的结构和内容，为它们提供机会改进用户的阅读体验。  

本规范使用"attribute axis:"来为语义变形定义方法，而不是添加新的XML元素到XHTML内容的文档词汇。可以附加epub：type属性到已有的元素来变出所需的语义，还定义了一种机制用以确定给属性提供控制值的外部词汇。  

##### The epub:type Attribute，epub:type属性  
epub:type属性在它所出现的元素上做语义改变。它的值是一个或多个空格隔开的术语，来自与文档实例相关的外部词汇，定义在[Vocabulary Association](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-vocab-association)。  

变化出的语义必须表达宿主元素的次级语义。对于语义中性的元素（如[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的[div](http://www.w3.org/TR/html5/Overview.html#the-div-element)和[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)），变出的语义不得附加已被现有元素表达过的意思（例如，div代表一个段落或部分）。阅读系统必须忽略（[ignore inflected semantics](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-rs-epubtype-prec)）与携带元素相冲突的变化语义。  

由于[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5) 的[head](http://www.w3.org/TR/html5/Overview.html#the-head-element)元素是文件的元数据容器，在这个元素或其任何子元素上面表达的结构性语义，一概没有意义。  
    注
    epub:type属性是要在功能上等同于W3C的Role属性[Role](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPFRoleAttribute)，但是受[Vocabulary Association](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-vocab-association)里所述的限制。IDPF的目的是为了本属性与W3C的下一个主要版本的语义机制相河蟹。  

	 属性名称  

 Type  

	 命名空间  

```
 http://purl.org/dc/elements/1.1/  
```

	 用法  

 可以加到所有的元素。  

	 值  

一列空格隔开的属性[property](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-assoc)值[Publications301](http://idpf.org/epub/30/spec/epub30-contentdocs.html#refPublications3)，限制定义在[Vocabulary Association](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-vocab-association)  

##### Vocabulary Association 词汇关联  

本规范采用[Vocabulary Association Mechanisms](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-assoc)（[Publications301](http://idpf.org/epub/30/spec/epub30-contentdocs.html#refPublications3)）定义的词汇关联，含以下的修改：  

<b>默认词汇</b>  

内容文件的默认词汇定义为[EPUB3结构化语义词汇](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUBStructureVocab)。  

<b>保留词汇</b>  

本规范保留那些有可能被作者用在epub:type属性里的前缀，文件规定见[EPUB Content Documents Reserved Prefixes](http://www.idpf.org/epub/vocab/structure/pfx)。

prefix属性  

prefix属性的定义没有变化，但是，当用在内容文件里面的时候，定义该属性在命名空间http://www.idpf.org/2007/ops。  

例子：  

''下面的例子说明epub:type属性用于变化出footnote和note reference的语义。引用的属性都定义在默认词汇表[default vocabulary](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-default-vocab)。''   
```
<html … xmlns:epub="http://www.idpf.org/2007/ops">
    …
    <p> … <a epub:type="noteref" href="#n1">1</a> … </p>    
    …
    <aside epub:type="footnote" id="n1">
        …    
    </aside>
    …
</html>  
```  

''下面的例子说明epub:type属性用于往HTML5的定义清单上变化出glossary语义。引用的属性都定义在默认词汇表[default vocabulary](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-default-vocab)。''  

```
<html … xmlns:epub="http://www.idpf.org/2007/ops"
    …
    <dl epub:type="glossary">
        …    
    </dl>        
    …
</html>    
```

''下面的例子说明epub:type属性用于变化出出版物源pagebreak语义。引用的属性都定义在默认词汇表[default vocabulary](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-default-vocab)(注：[dc:source](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-opf-dcsource)元素提供识别出版物的手段，分页信息用在其上)。''   

```
<html … xmlns:epub="http://www.idpf.org/2007/ops">
   …
  <p> … <span epub:type="pagebreak" title="234"/> … </p>    
   … 
</html>   
```

##### Processing Requirements，处理要求   

阅读系统应该如下处理epub：type属性：

    › 它可以把专门的行为与默认词汇里面定义的0个，几个或所有术语相关联。 
    › 它可以把专门的行为与非默认词汇里面定义的术语相关联。 
    › 它必须忽略不认识的术语。

当某个给定epub:type值所关联的阅读系统行为与携带元素的行为相冲突的时候，优先权给与元素的行为。  

#### Semantic Enrichment，语义增添  
##### Introduction，引言   
本节乃说明  
语义变化（[semantic inflections](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-semantic-inflection)）只是对标记里面结构的细化，和它不一样，语义增添乃是把分层意义加到内容里面，使得机器可以处理。  
[Microdata](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMicrodata)和[RDFa11](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRDFa)二者都是定义属性的规范，用于[XHTML内容文件](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)对内容的语义加以丰富。  
###### 内容合规  
合规的[XHTML内容文件](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)必须满足下面所有的指标：  
	 它必须许可[Microdata](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMicrodata)各属性的使用，定义见该规范；  
	 它必须允许使用[HTML+RDFa11](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTMLRDFa)所规定的各[RDFa11](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRDFa)属性。  

##### Processing Requirements，处理要求   
阅读系统可以处理[Microdata](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMicrodata)和[RDFa11](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRDFa)规定的各个属性。不过，这样的支持非必须。


#### SSML Attributes，SSML属性  
##### Overview，概述   
W3C语音合成标记语言[SSML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSSML)是用于帮助TTS引擎生成合成语音的语言。虽然SSML被设计成独立的文件类型，它也定义了适用于其它宿主语言的语义。   

本规范把[SSML 1.1 phoneme 元素](http://www.w3.org/TR/speech-synthesis11/#S3.1.10)重铸为两个属性——ssml:ph 和ssml:alphabet——并让它们在EPUB XHTML内容文件里可用。  

支持TTS的阅读系统应该如下面定义的支持SSML属性。  

  注
  更多关于EPUB3与语音合成方面的特性，请参考[Text-to-speech（TTS）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-tts) [EPUB3Overview](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Overview)。  

##### The ssml:ph attribute ，ssml:ph属性   

ssml：ph属性指定文本的音素/音标，文本由附加有本属性的元素代表。  

属性名称  
 Ph  

命名空间  
```
http://www.w3.org/2001/10/synthesis
```
用法  
全局属性（[Global Attribute](http://www.w3.org/TR/html5/single-page.html#global-attributes)）。可以加到所有的元素，只要能够把它们和音标等价物进行逻辑关联(如，含有文本信息的元素)。  
不得指定给已经拥有此属性的元素的子孙。  

值  
   音素/音标表达式，必须在语法上对正在使用的[phonemic/phonetic alphabet](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-cd-ssml-alphabet-attrib)具有有效性。  

此属性继承SSML1.1的phoneme元素[ph](http://www.w3.org/TR/speech-synthesis11/#S3.1.10)属性的所有语义，再加上下面的：  
    ›当ssml:ph属性出现在有文本子节点的元素上，应用发音的对应文件文本是一个字符串，它是按照文档顺序串接文本子节点得到的。指定的音标发音因此必须在逻辑上匹配元素的全部文本数据（即，不只是其内容的一个孤立部分）。  

   注   
   支持SSML属性和PLS文件([PLS Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-pls))的阅读系统必须遵循为这两个结构定义的优先规则[（precedence rules）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-pls-rs-casc)。

##### The ssml:alphabet attribute，ssml:alphabet属性  

这个属性指定在[ssml:ph](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-ssml-ph)的值里使用哪一个发音字母。  

属性名称  
 Alphabet  

命名空间  
```
 http://www.w3.org/2001/10/synthesis
```
用法  
全局，可以加到所有的元素。  

值  
 用在[ssml:ph](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-ssml-ph)值(继承的)里的发音字母名称。 

此属性继承[SSML 1.1](http://www.w3.org/TR/speech-synthesis11/#S3.1.10)的phoneme元素的[alphabet](http://www.w3.org/TR/speech-synthesis11/#S3.1.10)属性的所有语义，外加下面的：  
ssml:alphabet属性的值从文件树继承而来。用在所给ssml:ph属性的发音字母的确定，是通过找到ssml:alphabet第一次出现的位置，自ssml:ph属性出现的元素开始，接着是最靠近的父元素。  

支持本规范的[SSML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-ssml-attrib)功能的阅读系统应该支持值“ipa”所表达的IPA字母（[refIPA](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refIPA)）。

#### Content Switching，内容转换  
##### Introduction，介绍  

本节信息只是说明  

switch元素提供一个简单的机制，通过它作者可以裁剪显示给用户的出版物内容。这个机制不需要阅读系统具有脚本能力。  

阅读系统开发人员可以选择支持在[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)里无效的XML词汇和新的HTML元素。switch机制鼓励这一类的开发和实验，但与此同时也为希望利用它的作者提供了保障，知道自己的内容依然会在所有兼容的阅读系统上显示出来(即，在这些专门的标记一个都不被支持的情况下，还能够维持一个底线，使所有的XHTML内容文件都有效）。  
 
然而，内容切换不只是鼓励将来的开发，它还能够用来生成良好兼容性的出版物，兼容不能够处理EPUB3新特性的老式阅读系统。例如，现在是本地类型的MathML实例，可以用switch元素来添加，使得EPUB2阅读系统能够提供备选图像或文本。  

##### Definition，定义  

###### The epub:switch Element，epub:switch元素  
switch元素允许将XML碎片有条件地插入到[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)的内容模型里。  

属性名称  
   switch

命名空间  
```
    http://www.idpf.org/2007/ops 
```
用法  
    用在[Flow](http://www.w3.org/TR/html5/Overview.html#flow-content-0)和[Inline]([http://www.w3.org/TR/html5/Overview.html#phrasing-content-0 Inline])的内容里面，可重复。  

属性  

    id [可选]  
本元素的ID（[XML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refXML)），在文件范围内必须唯一。  

内容模式  
按这个顺序[case](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-epub-case)[1或多个]，[default](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-epub-default)[正好1个]。  

阅读系统必须单独处理文档中的每个switch元素，以确定它是否可以渲染[case](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#elemdef-case)子元素（由其所需的命名空间[required-namespace](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-case-required-namespace)属性值而确定的）。  

对于每个遇到的switch，阅读系统应渲染它支持的第一个case的内容，但可以从可用的选项进行自由选择。如果阅读系统对所有case子元素里面的标记都不支持，它必须渲染[default](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#elemdef-default)元素的内容。  

[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的object元素应该使用XHTML内容的文件中嵌入自定义（非核心）的内容类型。自定义标记应当被包裹在一个switch，只有当它代表的内容是文件的组成部分，并取决于的文件，要妥善处理中。  

Switch元素并不是要取代内在备选机制，好比：[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)的alttext属性、[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)的title和desc属性。作者总是应该考虑包含内在备选机制，即使是（为了确保访问）给不支持宿主语法（host grammar）的阅读系统加switch的时候也应该预备备选。  
  
例子  

''由switch元素插入的ChemML标记。''  
```
<epub:switch id="cmlSwitch">
   
   <epub:case required-namespace="http://www.xml-cml.org/schema">
      <cml xmlns="http://www.xml-cml.org/schema">
         <molecule id="sulfuric-acid">
            <formula id="f1" concise="H 2 S 1 O 4"/>
         </molecule>
      </cml>
   </epub:case>
   
   <epub:default>
      <p>H<sub>2</sub>SO<sub>4</sub></p>
   </epub:default>
   
</epub:switch>
```

''为了兼容EPUB2阅读系统加入MathML标记的例子。''  
```
<epub:switch id="mathmlSwitch">
   
   <epub:case required-namespace="http://www.w3.org/1998/Math/MathML">
      <math xmlns="http://www.w3.org/1998/Math/MathML">
         <mrow>
            <mn>2</mn>
            <mo> &#x2061;<!--INVISIBLE TIMES--></mo>
            <mi>x</mi>
         </mrow>
         <mrow>
            <mo>+</mo>
            <mi>y</mi>
            <mo>-</mo>
            <mi>z</mi>
         </mrow>
      </math>
   </epub:case>
   
   <epub:default>
      <p>2x + y - z</p>
   </epub:default>
   
</epub:switch>
```

###### The epub:case Element，epub:case元素  
case元素包含XML词汇表的标记实例。包含的标记可以是XHTML内容文件本地支持的(MathML、SVG情形)，不过这样的支持不作为要求。  

属性名称  
   case

命名空间  
   http://www.idpf.org/2007/ops

用法  
   switch要求的子元素，可重复 。  

属性  
   id [可选]  
本元素的ID（[XML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refXML)），在文件范围内必须唯一。  

   required-namespace [要求]  
       URI形式的扩展标识符[RFC2046](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRFC2046)，识别XML词汇或扩展名，阅读系统必须支持它们才能够处理case元素的内容。  

内容模式  
   XML碎片，符合required-namespace属性所识别的标记词汇。  

每个case元素必须为同一个内容提供替代表达。为确保内容得到最佳渲染，作者应当按其最佳渲染格式对各case元素排序。  

如果case元素包含有标记，而此标记在XHTML内容文档（例如，MATHML）里也是有效的，那么那个内容在switch元素的插入点必须是有效的（即，它的增加不得导致一个无效的文件）。  

case元素里面的外来标记应该格式良好，但并不一定要在插入点有效。作者应确保外来标记匹配使用它的上下文（例如，插入在內链上下文里的swtich元素里，不应该出现block元素）。  

  注  
  IDPF在http://www.idpf.org/epub/switch/ 维护有用于required-namespace属性的常用扩展标识符。  

###### The epub:default Element，epub:default元素  
default元素提供适用于任意XHTML内容文件的标记用于阅读系统不能够渲染某个case元素的情形。  

属性名称  
   Default  

命名空间  
   http://www.idpf.org/2007/ops

用法  
   epub：switch要求的最后一个子元素。  

属性  
   id [可选]  

本元素的ID（[XML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refXML)），在文件范围内必须唯一。  

内容模式  

   兼容HTML5的标记片段。  

default元素作为switch的备选，必须包含适合于XHTML内容文件的内容表达式。  

default元素不得包含会导致在switch插入的地方文件无效的内容：当所有的switch元素被default子元素取代的时候，XHTML必须有效。  

##### Processing，处理   
EPUB阅读系统必须支持switch元素。  

本规范对switch元素不要求具体的渲染途径。阅读系统可以选择，例如，应用CSS样式表来渲染每个switch，也可以使用其它合适的途径。对每个switch，所有的阅读系统必须只表达一个case元素或default元素的内容。   

处理switch元素必须假设它的所有子元素全部都有HTML5的[hidden](http://www.w3.org/TR/html5/Overview.html#the-hidden-attribute)属性组，唯有一个子元素是例外（也就是说，为那个元素制定的所有处理规则以及要求，都应该应用到不在渲染之列的内容。或译：也就是说，应该把为hidden属性规定的全部处理规则和要求，同样地应用到不被渲染的内容。原文如下：The switch element must be processed as though all of its children but one have the HTML5 hidden attribute set(i.e., all the same processing rules and requirements outlined for that attribute should be applied to the content not to be rendered.)）。  
   注  
   由于可以渲染的内容取决于用户阅读系统的能力，只能够保证到switch元素的链接。不建议进到switch元素内部的深引用。  

   注  
   switch元素在XHTML内容文件里的出现，是借助包文件manifest里面的switch（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）属性。  

#### The epub:trigger Element，epub:trigger元素  
trigger元素能够生成由标记定义的用户界面，用于控制多媒体对象，例如在脚本化或非脚本上下文里面的声频、音频播放。  

属性名称  
  Trigger  

命名空间  
  http://www.idpf.org/2007/ops  

用法  
[head](http://www.w3.org/TR/html5/single-page.html#the-head-element)的子元素，用在[Flow content](http://www.w3.org/TR/html5/Overview.html#flow-content-0)，可重复。  

属性   
  id [可选]  
本元素的ID（[XML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refXML)），在文件范围内必须唯一。  

  action [要求]  
        执行本事件的行动。  
        允许值: show | hide | play | pause | resume | mute | unmute 

  ref [要求]  
        IDREF，识别本行动的对象元素。  
Ev:defaultAction[可选]  
本trigger的可应用事件，定义在[XML Events](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEVENTS)。  

  ev:event [要求]  
本trigger的可应用事件，定义在[XML Events](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEVENTS)。  

  ev:observer [要求]  
本trigger的源对象，定义在[XML Events](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEVENTS)。  
Ev:phase[可选]  
本trigger的可应用事件，定义在[XML Events](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEVENTS)。  

Ev:propagate[可选]  
本trigger的可应用事件，定义在[XML Events](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEVENTS)。  

内容模式   
  无  

trigger元素把源对象(observer)里确定的事件与指定的目标对象(ref)有待操作的行动关联起来。  

所定义的action值的语义如下：  

show – 设置元素的DOM的[visibility](http://www.w3.org/TR/CSS21/visufx.html#propdef-visibility)（[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)）属性为可见。  
hide – 设置元素的DOM的[visibility](http://www.w3.org/TR/CSS21/visufx.html#propdef-visibility)（[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)）属性为隐藏。  

    play – 从头开始播放关联的资源(只适用于视频、音频元素)。  

    pause – 暂停播放(只适用于视频、音频元素)。  

    resume – 恢复(只适用于视频、音频元素)。  

    mute – 静音(只适用于视频、音频元素)。  

    unmute – 取消静音(只适用于视频、音频元素)。  

支持视频和音频的阅读系统必须支持epub:trigger元素。  

''视频播放器标记例子，使用trigger元素控制播放和静音。''   

```
<html xmlns="http://www.w3.org/1999/xhtml"
  xmlns:epub="http://www.idpf.org/2007/ops"
  xmlns:ev="http://www.w3.org/2001/xml-events">
  <head>
    <epub:trigger ev:observer="pause" ev:event="click" action="pause" ref="test"/>
    <epub:trigger ev:observer="resume" ev:event="click" action="resume" ref="test"/>
    <epub:trigger ev:observer="mute" ev:event="click" action="mute" ref="test"/>
    <epub:trigger ev:observer="mute" ev:event="click" action="show" ref="muted"/>
    <epub:trigger ev:observer="unmute" ev:event="click" action="unmute" ref="test"/>
    <epub:trigger ev:observer="unmute" ev:event="click" action="hide" ref="muted"/>
  </head>
  <body>
    <video id="test" src="birds.mp4" width="320" height="240"/>
    <p>
      <span class="button" id="resume">Play/Resume</span>
      <span class="button" id="pause">Pause</span>
      <span class="button" id="mute">Mute</span>
      <span class="button" id="unmute">Unmute</span>
      <span id="muted">MUTED</span>
    </p>
  </body>
</html>
```

#### **Alternate Style Tags**  

根据[AltStyleTags](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refAlternateStyleTags)，link元素的class属性可以取下面的任意值：horizontal、vertical、day和night。这些值继承那个规范定义的语义，用于对它们的使用。  

阅读系统应适当选择和利用这些标签样式集，视其为有效、且按照那个规范描述的（执行）。  

#### Custom Attributes，定制属性  
阅读系统可以引入本规范未曾定义的功能，以增强对EPUB出版物的渲染。为了实现这个尝试，开发人员可以自定义属性给XHTML内容文件使用。  
定制属性可以加给XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）的任意元素，前提是这样的属性来自外部命名空间，它被定义为一个命名空间（[XMLNS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refXMLNamespaces)）但不可映射到下面的URI：http://www.w3.org/1999/xhtml，或者http://www.idpf.org/2007/ops。  
定制属性，以及相关的行为，不得破坏EPUB出版物的完整性。不论在什么样的阅读系统上渲染，内容都必须对用户保持可消费、没有信息丢失或者是明显的恶化。  
	 注  
	 为了保证定制属性在各个阅读系统间的交互可操作性，墙裂建议开发人员把实施的扩展建档在：http://www.idpf.org/epub/extensions/attributes。  

#### aria-describedat Attributes，aria-describedat属性  
	 小心   
	 aria-describedat属性已经从ARIA1.1里除去了。其在EPUB里的使用已被废止。更多信息请见[errata](http://www.idpf.org/epub/301/spec/epub-contentdocs-errata/index.html)。  

来自[WAI-ARIA-1.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refARIA11)的aria-describedat属性可以加在XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）里的所有元素，只要是使用那里的语法和语义。这个属性可以引用EPUB容器外面的说明（见[Publication Resource Locations](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations)，[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。
### HTML5 Deviations and Constraints HTML5，差异和约束  

EPUB3的XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）有些适用的（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）基本文件模型，由它们而出的演化、以及对它们的约束，在本节予以定义。  

#### Embedded MathML，嵌入的MathML  
##### Introduction，介绍  

本节只是说明   

XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）支持嵌入的[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)，但是把它的用法局限于整个[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)标记语言的一个有限子集。  

该子集被设计来缓解在阅读系统上面实施的负担和提高访问性，同时保持与[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)用户代理的兼容性。  

    注:
manifest的item元素的[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)属性（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），表明XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）含有嵌入的[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)。  

##### Content Conformance，内容合规   

XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）里面出现的任何[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)标记都必须符合[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)规范[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)里的约束。外加下面的限制：  

**[Presentation MATHML](http://www.w3.org/TR/MathML/chapter3.html)**  
› 
m:math必须只含有[Presentation MathML](http://www.w3.org/TR/MathML/chapter3.html)，下面定义的m:annotation-xml元素除外。  

**[Content MathML](http://www.w3.org/TR/MathML/chapter4.html)**  
› 
[Content MathML](http://www.w3.org/TR/MathML/chapter4.html)可以包含在XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）的[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)标记里，且必须出现在m:semantics元素的m:annotation-xml子元素里面。  
› 
当按照前面的条件包含[Content MathML](http://www.w3.org/TR/MathML/chapter4.html)，给定的m:annotation-xml元素的encoding属性必须设置为功能等价的[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)-Content，  
      或设置为application/mathml-content+xml，而且其name属性必须设置为contentequiv。  

**[ Deprecated MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)，弃用的MATHML**  
› 
在[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)里标记为弃用的元素和属性，不得把它们放在XHTML内容文件的MathML标记里。  

**XHTML Content Document fragments**  
› 
XHTML内容文件片段可以包含在XHTML内容文件的[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)标记里，且必须，当有的时候，必须出现在m:semantics元素的m:annotation-xml子元素里面。   
› 
当按照上一段包含XHTML内容文件片段的时候，给定的m:annotation-xml元素的encoding属性必须设置为application/[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)-content+xml，  
      而且其name属性必须设置为alternate-representation。  
› 
任何被包含的XHTML内容文件片段，自身不得包含[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)标记。   
› 
所有添加的XHTML内容文件片段必须符合父元素m:math出现的地方的内容模式，保证m:math元素被给定的XHTML内容文件片段取代之后文件仍然有效。   

**[Alternative Content](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-mathml-alt)**  
› 
应该包含可选内容，必须按照[Alternative Content](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-mathml-alt)的定义加以表达。  

##### Reading System Conformance，阅读系统合规  
 
一个合规的EPUB阅读系统必须满足以下所有处理XHTML内容文件里内嵌MathML的条件：  
›  
它必须支持对[Presentation MathML](http://www.w3.org/TR/MathML/chapter3.html)的处理，而且可以支持对[Content MathML](http://www.w3.org/TR/MathML/chapter4.html)的处理，采用的是MathML 3.0规范（[MATHML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMathML)）里定义的语义。  
› 
如果它有一个[Viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport)，必须支持对Presentation MathML的视觉渲染。  
› 
当为MathML标记生成替代文本内容（[Alternative textual content](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-mathml-alt)）的时候，它应该能够从给定的Presentation MathML动态生成这样的内容。如果不能，就必须把优先权交给[XHTML 内容文件碎片](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#math-xhtml)，然后是m:math元素上面的alttext属性。   
›  
它必须把[包文件](http://www.idpf.org/epub/301/spec/epub-publications.html#mathml)manifest的item元素的[mathml](http://www.idpf.org/epub/301/spec/epub-publications.html#mathml)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）属性看作是XHTML内容文件是否要包含内嵌MathML的权威定义。   

##### **[Alternative Content](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-mathml-alt)，替代内容**  

阅读系统必须能够使用给定的[Presentation MathML](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-mathml-pres)标记动态生成所有需要的替代文本渲染（如输出到[TTS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-tts)引擎）。为了支持不能够这样做的阅读系统，应该给XHTML内容文件里的每个m:math元素包括替代文本内容。  

当简短的替代文本就足以应付的时候，应该首先考虑m:math的alttext属性来实现这个目的。当要求更大量的替代文本的时候，则应该使用[XHTML内容文件碎片](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#math-xhtml)（注意，阅读系统按照[优先顺序（preference order）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-mathml-rs-alt-text)所定义的查找这两个替代文本的位置）。  

为了阅读系统向前兼容性的目的，可以利用m：math元素的altimg属性来提供备选图像。建议结合altimg属性使用尺寸和对齐属性(altimg-width、altimg-height和altimg-valign)。  

   注
   所有引用的[出版物资源](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-publication-resource-cmt-or-foreign)必须符合[EPUB Publication-Content Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conf) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）对出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）的限制。  

#### **Embedded SVG，嵌入的SVG**  

XHTML内容文件支持按照引用(例如，从img或object元素) 和按照包括(通过在XHTML内容文件里直接包括svg:svg元素来进行嵌入) 两种方式嵌入[SVG1.1 document fragments](http://www.w3.org/TR/SVG/intro.html#TermSVGDocumentFragment)[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG).  

嵌入XHTML内容文件的SVG的内容合规约束，和[Restrictions on SVG1.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg-restrictions)里为SVG内容文件的定义是一样的。  

阅读系统处理XHTML内容文件里嵌入的SVG，必须按照[SVG Content Documents — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg-rs-conf)。 
 
  注 
  manifest的item元素的svg属性表明XHTML内容文件含有嵌入的SVG。  

##### **Embedded SVG and CSS，嵌入的SVG和CSS**   
 
通过引用方式嵌入在XHTML内容文件的SVG，为了给它添加样式，阅读系统不得把主文档的CSS样式规则应用到引用的SVG文档。  

通过inclusion嵌入XHTML内容文件的SVG，为了给它添加样式，阅读系统不得把主文档的CSS样式规则应用到被引用的SVG文档。   

  注
  通过引用加入的SVG，被当作一个单独的文件来处理，并可能——就像SVG内容文件会做的那样——包括它自己的CSS样式规则。请注意，这与（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）的[object](http://www.w3.org/TR/html5/Overview.html#the-object-element)元素引用外部的（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）元素的情况是一致的。  

#### **Unicode Restrictions，对Unicode的限制**   

本节列出对Unicode字符集的限制。  

**私有字符和嵌入字体（Private Use Characters and Embedded Fonts）**  

在[Unicode](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refUnicode5)里定义有私人使用区域（Private Use Area，PUA)。任何被包含的字符，如果其映射的编码点落在PUA内，都必须作成字符串的形式，字符串内含对嵌入字体的引用，而[嵌入字体](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-fonts)含有适合于那个编码点的字型。  

#### **Discouraged Constructs，不鼓励的构造**   

rp元素  
› 
在[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的[rp](http://www.w3.org/TR/html5/Overview.html#the-rp-element)元素，旨在给不认识旁注标记的旧版本阅读系统提供一个备选——围绕旁注标记的括号内可选显示。
     由于EPUB3阅读系统考虑了旁注，并能提供备选，所以不鼓励在内容文件里使用rp元素。  

embed元素  
› 
由于[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的[embed](http://www.w3.org/TR/html5/Overview.html#the-embed-element)元素没有为不支持脚本的阅读系统提供内在手段加载备选，当引用的资源含有脚本组件的时候，不鼓励使用embed元素。作者们应该使用object元素。  

#### Special Considerations，特殊考虑  
Body元素  
在编排的时候，假如对（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）的[body](http://www.w3.org/TR/html5/Overview.html#the-body-element)元素的默认渲染与值被设为always的page-break-before属性[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)相一致，但这个默认可以用合适的样式表所改写。  

## EPUB Navigation Documents，EPUB导航文件  
### Introduction，介绍   
本节只是说明   

EPUB导航文件是EPUB出版物的必须组件[required component](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conformance-nav) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。为作者提供了手段，可以在出版物里包括一个人机可读的全局导航层。这样就为用户保障了更好的使用和访问性能。   

EPUB导航文件是对XHTML内容文件的改编，按定义，是一个有效的XHTML内容文件。所有加给XHTML内容文件的关于内容和阅读系统的合规要求，也适用于EPUB导航文件。   

本改编的导航功能通过对（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）nav元素加以专门化来进行表达。EPUB导航文件的每个nav元素代表一个数据岛——在总体标记里汇集的特殊信息——阅读系统从这里可以提取导航信息。然而，和典型的XML数据岛不一样，nav元素里的信息是人读得懂的（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）文件。  

为了机器可读，EPUB导航文件里nav元素的内容模式被加以限制，只允许常规的XHTML内容文件。  
请注意导航文件不只是单单为了机器处理。把（导航）文件做成一个XHTML内容文件，可以让它也在EPUB出版物的线性阅读次序里也有用处，不需要生成额外的目录（也就是说，也可以把它加到[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#elemdef-opf-spine)，[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）里）。导航文件里定义的组件的显示，可以用[hidden](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-hidden)属性加以控制。[hidden](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-hidden)属性在spine之外对渲染不起作用（即：把组件藏起来不在[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#elemdef-opf-spine)里显现不是把组件藏起来在阅读系统的定制控制里也不显示）。  
不过，设计像这样双重用途的导航文件的时候，得留意机器在提取内容的时候有可能漏掉格式控制。阅读系统在生成定制控制，比如目录，的时候，它有可能从标记里剥离掉脚本、样式和其它HTML格式。如果使用了这样的格式和功能，需要把导航文件也放在线性阅读次序里。另一个设计考虑，是给导航文件的脚本和样式使用渐进增强（[progressive enhancement](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-cd-scripted-spine)）技术，以便于内容在非浏览器环境里渲染的时候也保持完整性。  

   注
   EPUB导航文件在包文件的manifest里由[nav](http://www.idpf.org/epub/301/spec/epub-publications.html#nav) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）属性指定。   

   注  
   EPUB导航文件取代定义在[OPF2](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOPF2)里的NCX文件。 
   在[NCX Superseded](http://www.idpf.org/epub/301/spec/epub-publications.html#ncx-superseded) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）里有EPUB3出版物怎么样包括NCX文件来向上兼容EPUB2阅读系统。   

### Content Conformance，内容合规    

一个合规的EPUB导航文件，必须符合以下所有指标：  

文件属性  
› 
它必须符合[XHTML Content Documents — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-conf-content)所有关于XHTML内容文件的合规约束。  
›  
它必须符合[EPUB Nav Document Definition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def)里面定义的EPUB导航文档构造有效，规定的所有内容合规约束。  
› 
作为合规的XHTML内容文件，它可以放在rendition的spine里。   

### Reading System Conformance，阅读系统合规  

合规的EPUB阅读系统必须符合下面所有处理[EPUB Navigation Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-nav)的指标：  
› 
遇到用户请求，阅读系统必须提供到EPUB导航文件的[nav](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-types)元素里的链接和链接标签的通道，允许用户激活所提供的链接。   
      当链接被激活时，阅读系统必须把应用程序的当前阅读位置重新定位到该链接确定的目标。   
› 
不论rendition里的导航文件是否是spine的一部分，阅读系统必须遵守上述规定。   

### EPUB Navigation Document，Definition EPUB导航文件定义   

#### **The nav Element: Restrictions，nav元素：限制**  

在EPUB导航文件里nav元素带有[epub:type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-content-type-attribute)属性的时候，本规范对此元素的内容模式及其在EPUB导航文档里的子元素做如下限制：  
› 
每个nav元素可以包括一个可选标题，表明导航列表的标题。标题必须是[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5)的一个[标题内容元素（HTML5heading content）](http://www.w3.org/TR/html5/dom.html#heading-content)。  
› 
可选标题后面必须就跟单个[ol](http://www.w3.org/TR/html5/Overview.html#the-ol-element)有序列表；不允许任何其它元素作为nav元素的直接子元素。这个有序列表代表内容导航的主干层次。  
› 
有序列表的每个列表项（[li](http://www.w3.org/TR/html5/Overview.html#the-li-element))代表出版物里面的一个主标题、结构或其它兴趣点，并必须包含一个[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)或[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)子元素。   
     链接所指向的内容文档里面的目标由[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)描述。[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)起标题的作用，把清单分解成不同的组（例如，一个插图大清单可以分割成几个清单，给每章一个清单）。  
    › 每个列表项的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)或span子元素可以包含任意有效的[HTML5 phrasing content](http://www.w3.org/TR/html5/Overview.html#phrasing-content-0)，但在串接全部在元素并应用空格规范化之后必须不会导致零长度的文本字符串。
›  
如果[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)包含不提供内在替代文本的[HTML5 embedded content](http://dev.w3.org/html5/spec/Overview.html#embedded-content-0)，它必须也包括一个title属性，属性有对链接标签的备用文本渲染（方式）。   
› 
在[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)的href属性里提供的相对IRI引用，必须落实到EPUB内容文件或其中的片段。  
› 
可以选择给[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)附加一个ol有序列表，表达该标题下面的附属内容层（例如，一节的所有小标题）。[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)必须后接ol有序列表：它不能用在“leaf（叶瓣？）”li元素里。  
      不论是否a或[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)取代它，此子表单必须服从本节为构造主导航清单关于内容方面所定义的全部要求，以此类推（按照这种方式表达的更多出版物层次）。   
› 
ol元素代表一个有序列表。在本规范的情况下，列表项的默认显示样式必须同等于CSS list-style：none（不支持CSS的阅读系统不得显示列表项的编号）。  
      作者们可以用CSS指定替代的列表项样式，但这些显然会被不支持层叠样式表（CSS）的阅读系统忽略。  

''下面的例子说明一个部分目录表（lot，"list of tables")nav元素，把[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)用作无链接标题来分组出小清单。''  
```
<nav epub:type="lot">
    <h2>List of tables, broken down into individual groups, one per major section of the publication content</h2>
    <ol>
        <li><span>Tables in Chapter 1</span>
            <ol>
                <li><a href="chap1.xhtml#table-1.1">Table 1.1</a>
                </li>
                <li><a href="chap1.xhtml#table-1.2">Table 1.2</a></li>
            </ol>
        </li>
        
        <li><span>Tables in Chapter 2</span>
            <ol>
                <li><a href="chap2.xhtml#table-2.1">Table 2.1</a>
                </li>
                <li><a href="chap2.xhtml#table-2.2">Table 2.2</a></li>
                <li><a href="chap2.xhtml#table-2.3">Table 2.3</a></li>
            </ol>
        </li>
        ...
        <li><span>Tables in Appendix</span>
            <ol>
                <li><a href="appendix.xhtml#table-a.1">Table A.1</a>
                </li>
                <li><a href="appendix.xhtml#table-a.2">Table B.2</a></li>
            </ol>
        </li>
    </ol>
</nav>
```

#### **The nav Element: Types，nav元素：types**  

EPUB导航文件里面定义的nav元素由它们的epub:type属性值进行语义上的区分。[默认](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-default-vocab)情况下，epub:type属性的各值取自EPUB3结构化语义词汇[StructureVocab](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUBStructureVocab)，但也允许取自其它词汇。更多信息请看[epub:type attribute](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-content-type-attribute)属性。  

##### **The toc nav Element**，toc nav元素   

toc nav元素定义EPUB出版物的主导航。它在概念上对应于印刷品的目录(即，它提供到出版物章节的导航）。  

出于可用性和辅助访问的原因，作者们应该提供一个全面的目录：toc nav不应该排除有些引用，这些引用完全基于它们在文件层次的嵌套深度（或：toc nav不应该仅基于它们在文件层次的嵌套深度就排除这些引用？原文:the toc nav should not exclude references based solely on their nesting depth within the document hierarchy...），就像是印刷品经常做的（尤其是简化目录的情形）。  

对于只从spine引用XHTML内容文件的rendition，toc nav通常对那些文件的[HTML5提纲（outlines）](http://www.w3.org/TR/html5/Overview.html#headings-and-sections)汇总作出反应（对出版物基本提纲没有贡献的子目录，都不包括）。  

toc nav元素里面li元素的顺序必须与每个目标EPUB内容文档（[ targeted EPUB Content Document](http://idpf.org/epub/30/spec/epub30-contentdocs.html#confreq-nav-a-href)）的目标元素的顺序相符，还必须按照rendition的[spine](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-spine)里面的内容文件顺序。  

toc nav元素必须在EPUB导航文档正好出现一次。  
 
   注  
   Toc的nav元素对应于被取代的NCX（[OPF2](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOPF2)）的navMap元素。  

##### **The page-list nav Element**，page-list nav元素   

page-list nav元素是分页信息容器。它提供到出版物内容里面的位置，对应于渲染源里面的页面边界位置，渲染源是本EPUB出版物所代表的。  
EPUB导航文件里page-list nav元素是可选的，而且不得超过一个。  

page-list nav结构里面所含的li元素顺序应该与每个EPUB目标内容文件（[targeted EPUB Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-nav-a-href)）的实际页面顺序相匹配，并且按照rendition的[spine](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-spine)里面的内容文件顺序。  

page-list nav元素只包含一个单独的ol子元素(即，它应该是平清单，而不是导航项目的嵌套结构）。  

   注  
   page-list nav元素对应于被取代了的NCX（[OPF2](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOPF2)）的pageList元素。  

   注   
   dc:source元素提供一个手段，指定所给分页信息要加载到的出版物源。   

##### **The landmarks nav Element**，landmark元素  
 
landmarks nav元素标识出版物的基本结构件，以便阅读系统为用户提供高效的访问。  

landmarks nav元素里面的每个链接目标的结构语义，由[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)各子元素的epub:type属性值来确定。epub:type属性是landmarks nav元素的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)各子元素所必须的。  

landmarks nav元素从EPUB结构化语义词汇（[EPUB Structural Semantics Vocabulary](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUBStructureVocab)）扩展出推荐的HTML上下文术语，引入[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)。  

''以下示例显示了一个landmarks nav，其结构语义引自EPUB结构化语义词汇（[EPUB Structural Semantics Vocabulary](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUBStructureVocab)）。''   
```
<nav epub:type="landmarks">
    <h2>Guide</h2>
    <ol>
        <li><a epub:type="toc" href="#toc">Table of Contents</a></li>
        <li><a epub:type="loi" href="content.html#loi">List of Illustrations</a></li>
        <li><a epub:type="bodymatter" href="content.html#bodymatter">Start of Content</a></li>
    </ol>
</nav>
```

landmarks nav元素在EPUB导航文件里面是可选的，而且不得出现超过一次。  

   注
   landmarks nav元素对应于被废弃的OPF guide元素。更多信息请看[guide](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-guide-elem)。  

##### **Other nav Elements**，其它nav元素   

除了上面定义的toc、page-list和landmarks nav元素，EPUB导航文件还可以选择一个或多个nav元素。这样添加的nav元素应该有一个epub:type属性提供机器可读的语义，而且有一个供人阅读的标题作为一级子元素。  

本规范对这样的额外nav元素不加以任何限制：可以用它们为任何信息域表达导航语义，它们也可以包含链接目标，不管这些目标链接的语义是否有差异。  

#### The hidden attribute，hidden属性    

在一些情形下，作者可能希望隐藏内容流里面的部分数据（如阅读系统对spine内容的主要渲染）。典型的例子是分页清单（[list of page breaks](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-types-pagelist)），通常都不作为内容流的一部分进行渲染，而是在一个导航用户界面里单独显示给用户。  

虽然可以使用CSS的display属性在具有CSS视口（[CSS Viewports](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport-css)）功能的阅读系统里面控制对EPUB导航文件的可视化渲染，并不是所有的阅读系统都提供这样的视口。为了控制在所有的阅读系统上的渲染，作者必须使用[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)的[hidden](http://www.w3.org/TR/html5/Overview.html#the-hidden-attribute)属性来指示导航数据的哪一部分（如有的话）被排除在内容流的渲染之外。hidden属性不影响导航数据在内容流之外的渲染(比如阅读系统提供的专门导航用户界面）。  

''下面的例子显示一个部分的page-list nav元素。hidden属性在根目录的出现表示整个清单都被排除在内容流的渲染之外。''  
```
<nav epub:type="page-list" hidden="">
    <h2>Pagebreaks of the print version, third edition</h2>
    <ol>
        <li><a href="frontmatter.xhtml#pi">I</a></li>
        <li><a href="frontmatter.xhtml#pii">II</a></li> … <li><a href="chap1.xhtml#p1">1</a></li>
        <li><a href="chap1.xhtml#p2">2</a></li> … </ol>
</nav>
```

''下面的例子显示一个部分的toc nav元素，这里的hidden属性被用来限制内容流的渲染限于两个顶级层次。''   
```
<nav epub:type="toc" id="toc">
  <h1>Table of contents</h1>
  <ol>
    <li>
      <a href="chap1.xhtml">Chapter 1</a>
      <ol>
        <li>
          <a href="chap1.xhtml#sec-1.1">Chapter 1.1</a>
          <ol hidden="">
            <li>
              <a href="chap1.xhtml#sec-1.1.1">Section 1.1.1</a>
            </li>
            <li>
              <a href="chap1.xhtml#sec-1.1.2">Section 1.1.2</a>
            </li>
          </ol>
         </li>
         <li>
           <a href="chap1.xhtml#sec-1.2">Chapter 1.2</a>
         </li>
       </ol>
     </li>
    <li>
      <a href="chap2.xhtml">Chapter 2</a>
    </li>
  </ol>
</nav>
```

## SVG Content Documents，SVG内容文件  

### Introduction，介绍  
 
本节是说明信息  

可伸缩矢量图（Scalable Vector Graphics，[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)）1.1规范(第二版)定义格式，用于表达终稿（final-form）矢量图和文本。  

虽然EPUB出版物通常使用XHTML内容文件作为顶级文件类型，SVG内容文件（[SVG Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-svg)）的使用也是许可的。SVG通常只是在特殊情况下使用，比如当可表达的内容只有页面图像终稿（final-form page images）的时候(比如，漫画、漫画书内容）。  

本节为[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)文件定义准则。合乎本准则的XML文件实例是核心媒体类型。在本规范以及相关规范（[sibling specifications](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs)）称之为SVG内容文件（[SVG Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-svg)）。  

   注
   本节为SVG内容文件定义合规要求。关于嵌在XHTML内容文件里的SVG的合规要求，请参看：[Embedded SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-svg)。  

### Content Conformance，内容合规  

SVG内容文件必须满足下列所有指标：   

文件属性（Document Properties）  
› 
必须满足[XML Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-xml-constraints) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）对XML文件定义的合规约束。  

› 必须是[SVG1.1文件碎片（Document gragment）](http://www.w3.org/TR/SVG/intro.html#TermSVGDocumentFragment)，其构造合乎规范，并且满足在[Restrictions on SVG1.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg-restrictions)里各项内容合规约束。  
›  
应该遵守[SVG Access](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVGAccess)的可访问准则。  

文件属性（File Properties）  
› 
SVG内容文件名应该使用.svg扩展名。  

   注  
   从SVG内容文件里引用的所有出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ），都必须符合[EPUB Publication-Content Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conf)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）里面规定的出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ）约束。  

### Restrictions on SVG 1.1，对SVG 1.1的限制   
 
对[SVG内容文件](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-svg)的内容模式以及[XHTML内容文件内嵌SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-svg)，本规范做如下限制：  
› 
不得出现[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)的动画元素（[Animation Elements](http://www.w3.org/TR/SVG/animate.html#AnimationElements)）和动画事件属性（[Animation Event attributes](http://www.w3.org/TR/SVG/script.html#AnimationEvents)）。  
› 
[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)的svg:foreignObject元素，必须要么含有HTML5的流内容（[flow content](http://www.w3.org/TR/html5/single-page.html#flow-content)）、要么含有单个HTML5的body元素（[body element](http://www.idpf.org/epub/301/spec/epub-contentdocs.html)）。这个内容必须表达一个XHTML内容文件的有效文件碎片。有关定义在[XHTML Content Documents — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-conf-content)。svg:foreignObject元素如果有requiredExtensions属性，必须设置为http://www.idpf.org/2007/ops.  

[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)的[svg:title](http://www.w3.org/TR/SVG11/struct.html#TitleElement)元素只能包含有效的XHTML内容文件句式内容（Phrasing content）。  

### Reading System Conformance，阅读系统合规   

处理SVG内容文件和嵌在XHTML里的SVG的时候，合规的EPUB阅读系统必须满足以下所有条件：   
›  
它必须支持SVG的语言功能，对http://www.w3.org/TR/SVG11/feature#SVG-dynamic特征字符串做出响应，http://www.w3.org/TR/SVG11/feature#Animation和http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute 这两个特性除外（见[Feature strings](http://www.w3.org/TR/SVG/feature.html)）（[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)）。  
› 
它必须满足[Scripted Content Documents — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs)规定的阅读系统合规条件。  
›  
如果有一个SVG视口（[SVG Viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport-svg)），它必须支持按照[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)第六节（[section 6](http://www.w3.org/TR/SVG11/styling.html)）定义的方式，使用CSS对SVG做视觉渲染，   
      也应该支持那个规范[附录N](http://www.w3.org/TR/SVG11/propidx.html)里面的所有规定。有嵌入SVG的情况下，它还必须符合[Embedded SVG and CSS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-svg-css)里面规定的约束。   
    › 它应该支持用户对SVG元素里文本的选择和搜索。   
    › 出现在svg:switch和svg:foreignObject元素上的 requiredExtensions属性，取值为 http://www.idpf.org/2007/ops 的时候，阅读系统必须视为出现了XHTML内容文件碎片。  
    › 它必须把包文件manifest里item元素的[svg](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)属性看作权威定义，判断XHTML内容文件是否内嵌有SVG。  

### Semantic Inflections，语义变化  
XHTML语义变化（[semantic inflections](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-semantic-inflection)）定义的语法和语义，在SVG内容文件（[SVG Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-svg)）的[epub:type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-epub-type)属性和[epub:prefix](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-prefix-attr)属性里继承使用。  
可以把epub:prefix属性用在SVG内容文件的根元素svg上。嵌入SVG（[embedded SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-svg)）里使用的前缀，必须在HTML5的根元素html上进行声明。定义见[XHTML Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-semantic-inflection)。  

## Scripted Content Documents，脚本化内容文件  

利用相关的基本规范（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)和[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)）里定义的手段，EPUB内容文件可以包含脚本。EPUB内容文件包含脚本时，在本规范和相关规范（[sibling specifications](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs)）里称之为脚本化内容文件（[Scripted Content Document-Reading Sysytem Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs))。当包含[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5)表单（[HTML5 forms](http://www.w3.org/TR/html5/Overview.html#forms)）实例时，这个标签也适用于XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml))。   

### Scripting Contexts，脚本上下文   

本规范定义了脚本可以出现的两种上下文：  

spine-level  

[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5) [script](http://www.w3.org/TR/html5/Overview.html#the-script-element)元素的实例，包含在顶级内容文件（[Top-level Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-top-level)）里。   

container-constrained  

（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）[script](http://www.w3.org/TR/html5/Overview.html#the-script-element)元素的实例，包含在[Epub Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)里，利用（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）的object、iframe或embed元素之一嵌入在父内容文件里。  

上面定义的两个上下文，无论JavaScript代码是直接嵌入在script元素，还是通过src属性引用，对文本的执行都是一样的。  
 
脚本放在哪个上下文决定了阅读系统可以加给它的权利和限制。关于必须遵循的一些具体要求，请参看[Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-content-reqs)和[Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs)（不是所有阅读系统都可以提供相同的脚本功能）。  

例子  

考虑下面的包文件例子：   

```
<package …>
    …
    <manifest>
        …
        <item id="chap01" 
            href="scripted01.xhtml" 
            media-type="application/xhtml+xml"
            properties="scripted"/>
        <item id="inset01" 
            href="scripted02.xhtml" 
            media-type="application/xhtml+xml"
            properties="scripted"/>
        <item id="slideshowjs" 
            href="slideshow.js" 
            media-type="text/javascript"/>
    </manifest>
    
    <spine …>
        <itemref idref="chap01"/>
        …
    </spine>
    …
</package>

```

以及下面的scripted01.xhtml文件：

```
<html …>
    <head>
        …
        <script type="text/javascript">
            alert("Reading System name: " + navigator.epubReadingSystem.name);
        </script>
    </head>
    <body>
        …
        <iframe src="scripted02.xhtml" … />
        …
    </body>
</html>
```

以及下面的scripted02.xhtml文件：  

```
<html …>
    <head>
        …
        <script type="text/javascript" href="slideshow.js"></script>
    </head>
    <body>
        …
    </body>
</html>
```

从这些例子里，可见：  
	 scripted01.xhtml文件里head的script元素的代码是一个spine-level脚本，因为文件引用自spine;  
	 scripted02.xhtml文件里head的script元素的代码是一个container-constrained脚本，因为它出现的HTML文件是通过iframe元素包含在scripted01.xhtml里面的。  

### Content Conformance，内容合规   

Container-constrained scripts，容器约束脚本  
› 
容器约束的脚本不得包含指令，修改父内容文件DOM或出版物里的其它内容。也不得包含对显示尺寸进行调节的指令。  

Spine-level scripts，Spine-level脚本  
› 
含有[spine-level](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-type-spine-level)脚本的EPUB内容文件必须利用渐进增强技术（progressive enhancement technique），为了用于本规范，对其作了如下的定义: 当文件被无脚本支持或禁用脚本的阅读系统渲染的时候，顶级文件内容（[top-level document content](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-top-level)）必须保持完整性，仍然能够为用户所用，且没有任何信息丢失或明显的恶化。  

Accessibility 辅助功能  
› 
有脚本——不论何种引用模式（[inclusion model](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-models)）——的EPUB内容文件，应该采用相关的辅助技术以确保内容能够被所有用户使用。（[WAI-ARIA](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refARIA)）（[WCAG20](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refWCAG20)）。  

Fallbacks 备选  
› 
含有脚本——不论何种引用模式（[inclusion model](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-models)）——的EPUB内容文件，可以为这些内容提供备选。或者通过使用内在备选机制(比如（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）的[object](http://www.w3.org/TR/html5/Overview.html#the-object-element)和[canvas](http://www.w3.org/TR/html5/Overview.html#the-canvas-element)元素)或者在内在备选机制行不通的情况下，使用manifest级别（[manifest-level](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow-manifest)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）的备选。   

  注  
  manifest里item元素的[scripted](http://www.idpf.org/epub/301/spec/epub-publications.html#scripted)属性（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）表明EPUB内容文件是脚本化内容文件。  

### Reading System Conformance，阅读系统合规   

EPUB阅读系统对脚本的支持是可选的。支持脚本的阅读系统必须满足下面的指标：  
› 
它必须支持容器限制脚本（[container-constrained](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-type-container-constrained)），也可以支持[spine-level](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-type-spine-level)脚本。  
› 
它feature可能把脚本化内容文件根据[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5)渲染成互动、脚本化的用户代理。  
› 
它不得允许容器限制脚本（container-constrained script）修改父内容文件的DOM，或出版物里的其它内容，也不得允许它变动容盛矩形的尺寸（注意：即使脚本不是容器限制的，阅读系统也可对修改施以限制，请参看[dom-manipulation feature](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#feature-dom-manipulation)）。  
› 
它可以在执行过程中对提供的脚本施加其它限制（如限制网络）。  
› 
它必须实施epubReadingSystem对象，这个对象根据[Appendix A, JavaScript epubReadingSystem Object](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#app-epubReadingSystem)里的定义由JavaScript的navigator扩展而来。  
      在容器限制脚本上下文里，它也必须支持[Features](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#app-ers-hasFeature-features)里定义的dom-manipulation和layout-change特性。  
›  
它必须把manifest里item元素的scripted属性视为EPUB内容文件是否应该包含脚本的权威定义。   

不支持脚本的阅读系统必须满足下面的指标：  
› 
必须按照脚本化内容文件备选([Fallbacks for Scripted Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#confreq-cd-scripted-flbk))的定义为脚本化内容提供备选。  

   注
   阅读系统渲染脚本化内容文件的方式，可能禁用其它的EPUB能力，且/或提供一个不同的渲染和用户经历(如：通过禁止分页)。  
   选择容器约束模式（[container-constrained model](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-type-container-constrained)）来限制脚本的作者，要保证脚本和非脚本内容之间的用户经历的连贯性（比如连贯的分页行为）。  
   为了增加出版物的交互操作性、使用寿命和访问性，只要有可能，作者就应该使用声明手段。而且，只要有可能，就应该避免包含脚本。  

### Security Considerations，安全考虑  

本节只是说明  

所有的EPUB作者和阅读系统开发人员都需要意识到，脚本内容一经阅读系统执行就会产生安全问题。由于阅读系统和浏览器采用的基本脚本模型是一样的，必须考虑在Web环境中遇到过的同样问题。   
 
每个阅读系统都应该确定具体文件中的脚本是否可以信任。建议把所有的脚本都视为不可信的（并且潜在是恶意的），并检查、防范一切攻击向量（vectors of attack）。特别是，应考虑以下因素：
*    对运行环境的攻击（如，从用户硬盘偷窃文件）；  
*    对阅读系统自身的攻击（如，偷窃用户书单或导致非预期行为）；  
*    一个内容文件对另一个内容文件的攻击（如，偷窃另外一个文件生成的数据）；   
*    未加密脚本对一个文件的的加密部分的攻击（如，注入的恶意脚本提取受保护的内容）；  
*    对局域网的攻击（如，从防火墙后面偷窃服务器的数据）；  

对这些未经信任的脚本提出下面的指导性建议： 

*    阅读系统的表现，应该仿佛给每一个内容文件分配了专门域，道理就在于基于浏览器的安全性很大程度上依赖于文档的URL和域。采用这种方法，将把文件彼此隔离，也与其它互联网域隔离，从而限制对外部URL，cookies，DOM存储等等的访问。  
  启用脚本和网络访问的阅读系统，还应该考虑提供方法，提醒用户网络活动在进行，和/或允许他们加以禁用。  

    注意
    在实践中，阅读系统可以跨文档共享域，但他们还是应该保持文件之间的隔离。 
    如果文件部分加密部分不加密，或文件的不同部分使用了不同的加密密钥，一个文件一个专门域的方法可能无法提供足够的保护。  

*    如果阅读系统允许存储持久数据，这些数据应作为敏感处理。脚本可以通过cookies和DOM保存持久性数据，阅读系统则可以阻止此类尝试。确实允许保存数据的阅读系统，必须确保不相关的文件（例如，那些有可能已被做手脚的文件）访问不到这些保存的数据。特别是，对文件标识符（或类似的元数据）的匹配检查不是控制对持久数据访问的有效方法。  

     允许本地存储的阅读系统，也应该提供方法，让用户检查、禁用或删除这些数据。如果相应的EPUB出版物被删除，这些数据也应该被销毁。  

需要注意的是，遵守这些建议并不能保证免遭上面列出的可能攻击；开发人员必须在阅读系统上下文里检查每一个潜在的弱点。  

### Event Model Considerations，事件模式考虑  

本节只是说明   

阅读系统应根据（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）遵循DOM事件模型（DOM Event model），先传递UI事件给脚本环境，再进行与这些事件相关的默认操作。阅读系统实施者应该确保脚本无法禁用关键功能（如导航），以限制[潜在的恶意](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-events)脚本对其阅读系统的冲击程度。这样，虽然脚本环境应该可以取消任何事件的默认操作，有些事件要么不会被通过，要么不能够被撤销。  

作者往出版物里添加脚本功能的时候，应考虑到各种可能的阅读系统实现（例如，不是所有的设备都有物理键盘，在许多情况下只为文本输入元素才激活软键盘）。因此，不推荐单靠键盘事件的做法；应始终为触发希望的行动提供替代方法。  

## Fixed-Layout Documents ，固定布局文件  
### Introduction，介绍  
本节是说明。  
本节定义尺寸属性的表达和解释规则，供包文件里标记为pre-paginated的EPUB内容文件（[EPUB Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)）使用。  本规范不定义初始包含块（[initial containing block](http://www.w3.org/TR/CSS2/visudet.html#containing-block-details)）该如何在阅读系统的显示区域摆放。  
	 注  
	 	关于[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)或者单个的spine项目该如何在预分页的方式加以渲染（即固定的高度和宽度），请参考固定布局属性（[Fixed-layout Properties](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-fxl)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  

### Reading System Conformance，阅读系统合规  
一个合规的阅读系统，在处理http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-fxl)）的时候，必须满足下面所有的指标：  
	 它必须为文件分配完整的内容渲染区域；  
	 它必须使用viewport meta标签里的尺寸来渲染XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)），然而也可以从包的 [rendition:viewport](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-viewport)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）属性取得尺寸。  
	它必须使用viewBox标签里的尺寸来渲染SVG内容文件（[SVG Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg)），然而也可以从包的[rendition:viewport](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-viewport)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）属性取得尺寸。  
	 如果出现和 [rendition:viewport](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-viewport)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）属性不一致，它必须使用内容里面的尺寸。  

### Viewport Rendering，视口渲染  
在渲染固定布局文件的时候，默认的意图是要最大可能地利用程序的显示区域。阅读系统不得往视口或者程序里面或者视口周围注入另外的内容，如边、空、抬头、脚注，诸如此类。  
	 注  
	 阅读系统把控制按钮显示给用户，是具体实施的事情，不在上面的限制之列。  

### Content Dimensions for XHTML and SVG，XHTML和SVG的内容尺寸  
每个引自spine项目的EPUB内容文件，如果spine项目设有pre-oaginated值，文件就必须含有viewport（供XHTML使用）或者viewBox（供SVG）表达，方法定义在下面，而不管该值是通过rendition的全局[rendition:layout](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-layout)属性（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），还是spine级别的改写（[spine-level override](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-layout-overrides)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  
对于XHTML和SVG两种内容文件来说，尺寸表达式定义出CSS像素的初始包含块（ICB）（[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)）。  

#### Expressing ICB Dimensions in XHTML，在XHTML里表达ICB尺寸  
对于XHTML内容文件，ICB尺寸必须按照[MetaTags](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMetaTags)的定义在viewoort meta标签里表达出来。在本规范的这个版本，只有高度和宽度是阅读系统必须识别的。  
  下面的例子演示一个viewoort meta标签。  
``` 
<head>
   …
   <meta name="viewport" content="width=1200, height=600"/>
   …
</head>  
```

阅读系统必须按照viewoort meta标签里声明的ICB尺寸来裁剪XHTML内容。位于ICB外面的内容将不可见。当ICB的高宽比和阅读系统的内容显示面积的高宽比不配的时候，阅读系统可以把ICB放在面积里面，确保用户界面。换句话说，增加的边框空白可以出现在内容的任意一边，或者两边。  

#### Expressing ICB Dimensions in SVG，在SVG里表达ICB尺寸  
对于SVG内容文件，ICB尺寸必须用[viewBox](http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute)（[SVG](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSVG)）属性予以表达。

  下面的例子演示一个viewBox声明。  
``` 
<svg xmlns="http://www.w3.org/2000/svg"
     version="1.1" width="100%" height="100%"
     viewBox="0 0 844 1200">
   …
</svg>
``` 

# EPUB Style Sheets，EPUB样式表  

本节定义CSS，以用于XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)）的样式。符合本节的一个CSS样式表实例，是核心媒体类型（[Core Media Type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-core-media-type)），在本规范以及[相关规范（sibling specifications）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sibling-specs))中叫做EPUB样式表（[EPUB Style Sheet](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-stylesheet)）。  

  小心  
  EPUB 3 CSS规则引用了还在讨论中的CSS规范，有可能按照不兼容的方式改变。当利用这些规范的功能的时候，作者应该考虑一些固有危险，构成对交互可操作性和文件寿命的潜在冲击。  

  注  
  EPUB 3 CSS规则把"-epub-"前缀（[prefix](http://www.w3.org/TR/CSS21/syndata.html#vendor-keywords)）用在下面列出的一些CSS3属性上。随着定义这些属性的CSS3模块的成熟和稳定，  
  将来EPUB创作指南可能鼓励作者们在EPUB3样式表里也包括这些属性的无前缀等价体。  

## Content Conformance，内容合规   

合规的EPUB样式表（[EPUB Style Sheet](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-stylesheet)）必须满足下面所有的指标：  
    › 它必须遵循EPUB 3 CSS规则（[EPUB3 CSS Profile](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-profile)）给出的全部内容限制。  
› 
它可以包含EPUB 3 CSS Profile没有明确指定的构造，但创作出来后的渲染保真度不取决于这些另外的构造。   
› 
必须是UTF-8或UTF-16编码。  
	
   注  
   引自CSS样式表的所有出版物资源（[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) ），都必须符合[EPUB Publication-Content Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conf) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）对出版物资源所作的限制。  

## Reading System Conformance，阅读系统合规  
› 
有CSS视口（[CSS Viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport-css)）的阅读系统应该支持——按照视口里对应规范的定义进行渲染——本规则涵盖的所有CSS构造，除非EPUB 3 CSS规则（[EPUB3 CSS Profile](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-profile)）另外有规定。  
› 
阅读系统可以支持EPUB 3 CSS规则没有明确指定的其它CSS构造，而且必须按照[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)的定义（[defined](http://www.w3.org/TR/CSS21/conform.html#ignore)）处理所有不受支持的构造。  

   注  
   就支持CSS渲染而言，各阅读系统能力不一，因此有可能忽略EPUB样式表的某些甚至全部样式信息。  
   此外，即使是阅读系统有[CSS Viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport-css)，也可能以不同于[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5)用户代理的方式渲染内容（如，将内容分页，而不是提供一个无限滚动的界面）。   

## EPUB 3 CSS Profile EPUB 3，CSS规则  

### CSS 2.1   

EPUB 3 CSS规则的样式基础是[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)。本规则包括了[CSS2.1](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS21)规范定义的所有样式表构造，下面的除外：  

	 position属性的值absolute只能够用于[rendition:layout Property](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-layout)属性（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）被设置为pre-paginated的XHTML内容文件。  
	 position属性的fixed值不是EPUB 3 CSS规则的一部分。为了避免渲染和交互操作性方面的潜在问题，不应该把它放在EPUB样式表里。  
	 direction和unicode-bidi属性不应该放在EPUB样式表里。作者应该另外使用合宜的[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5)标记来表达方向信息。  

带CSS视口（[CSS Viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport-css)）的阅读系统必须支持font-family属性。  

### CSS 2.0   

EPUB 3 CSS规则[定义](http://www.w3.org/TR/2008/REC-CSS2-20080411/generate.html#lists) （[CSS2.0](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS20)）了下面的值，供list-style-type属性使用：  

*    cjk-ideographic
*    hebrew
*    hiragana
*    hiragana-iroha
*    katakana
*    katakana-iroha

### CSS 3.0 Speech，CSS3.0语音  
 
使用[CSS3Speech-20110818](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Speech-dated)定义的语法和[CSS3Speech](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Speech)定义的语义，EPUB 3 CSS Profile包含有源自CSS3语音模块（[CSS3Speech](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Speech)）的下列属性的-epub-前缀版本：

*    -epub-cue
*    -epub-pause
*    -epub-rest
*    -epub-speak
*    -epub-speak-as
*    -epub-voice-family 

   注
   有关EPUB3合成语音的更多信息，请参看[Text-to-speech（TTS）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-tts) [EPUB3Overview](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Overview).  

### CSS Fonts Level 3，CSS三级字体  

采用[CSS3Fonts-20110324](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3FontsModule-dated)定义的语法和 [CSS3Fonts](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3FontsModule)定义的语义，EPUB3的CSS规则引入@font-face规则和描述符，二者的定义见“CSS Fonts Module Level 3”（[CSS3Fonts](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3FontsModule)）规范。  
 
带CSS视口（[viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport)）的阅读系统必须支持使用@font-face规则嵌入的 [OpenType](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOpenType)和 [WOFF](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refWOFF)字体。  

   注  
   关于字体备选处理要求，请参看[Embedded Font Intrinsic Fallback](http://www.idpf.org/epub/301/spec/epub-publications.html#confreq-resources-font-fallback)（嵌入字体固有备选）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  

此外，阅读系统至少必须支持下面的@font-face字体描述符：

*    font-family
*    font-style
*    font-weight
*    src
*    unicode-range 

为了向前兼容不支持[@font-face](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-fonts)规则的EPUB2阅读系统，作者应该使用font-family属性引用通用字体。  

   注  
   关于阅读系统字体混淆方面的要求，请参看[Resource Obfuscation](http://www.idpf.org/epub/301/spec/epub-ocf.html#resource-obfuscation)（[OCF3](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOCF3)）。

### CSS Text Level 3，CSS三级文本  

EPUB 3 CSS 规则采用[CSS3Text-20110412](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Text-dated)定义的语法和[CSS3Text](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Text)定义的语义，为来自CSS Text Level 3[CSS3Text](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Text)规范的下列属性引入了“-epub-”前缀版（此行文的原文，和前面“CSS三级字体”的原文有完全一样的句式）。

*    -epub-hyphens*
*    -epub-line-break
*    -epub-text-align-last 
*    -epub-word-break 

.* -epub-hyphens属性不包括对all值的支持。  

EPUB 3 CSS 规则 为来自CSS Text Level 3[CSS3Text](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Text)规范的下列属性引入了
此外，采用[CSS3Text-20110412](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Text-dated)定义的语法和[CSS3Text](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Text)定义的语义，EPUB 3 CSS 规则还从CSS Text Level 3引入了无前缀的text-transform属性。例外情形是fullwidth和fullsize-kana值，它们在EPUB 3 CSS 规则里有前缀（分别是-epub-fullwidth和-epub-fullsize-kana）。  
请注意，EPUB3修订后，CSS三级文本（CSS Text Level 3）放弃了对fullsize-kana值的支持。EPUB CSS3规则保留了这个值，但对其语义做如下定义：  
-epub-fullsize-kana  
> 	该值表示对HIRAGANA或者KATAKANA 字符的映射，如[Appendix B, -epub-fullsize-kana Character Mapping Reference](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#fullsize-kana-char-mapping)所示。这个值专用于日语注释文本。 

### CSS Text Decoration Level 3，CSS文本三级装饰  
采用[CSS3TextDecoration-20130103](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3TextDecoration-dated)定义的语法和[CSS3TextDecoration](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3TextDecoration)定义的语义，EPUB 3 CSS 规则从CSS Text Decoration Level 3（[CSS3TextDecoration](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3TextDecoration)）的下列属性引入了-epub-前缀版。   

-epub-text-emphasis

-epub-text-emphasis-color

-epub-text-emphasis-position

-epub-text-emphasis-style

-epub-text-underline-position

### CSS Writing Modes，CSS写作模式  

除了[下面说的](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#css-writing-modes-excl)的direction、unicode-bidi属性，EPUB 3 CSS规则引入定义在CSS Writing Modes Module Level 3[CSS3WritingModes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule)规范的所有功能，用的是带“-epub-”前缀的属性名称、[CSS3WritingModes-20110428](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule-dated)定义的语法和[CSS3WritingModes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule)定义的语义。此外，按照[CSS3WritingModes-20121115](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule-new-dated)的规定，"sideways"和"mixed"都可以是-epub-text-orientation属性的许可值。本属性的其它值都作废，如"vertical-right"、"rotate-right"、"rotate-left"、"rotate-normal" 以及"auto"。  

	 注  
	 	"vertical-right"、"rotate-right"、"rotate-left"、"rotate-normal"和"auto"的语义分别对应于[CSS3WritingModes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule)的"mixed"、"sideways-right"、"sideways-left"、"sideways"和"use-glyph-orientation"。  

-epub-text-combine属性不再使用，增加了来自[CSS3WritingModes-20121115](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule-new-dated)的-epub-text-combine-horizontal属性。  

	注  
	 -epub-text-combine属性的值可以映射到-epub-text-combine-horizontal，方式如下： 'none'到'none'、'horizontal'到'all'。'horizontal <number>'语法算出错。  
[CSS3WritingModes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3WritingModesModule)的unicode-bidi和direction属性没有被引入EPUB 3 CSS规则。作者应该使用适当的[HTML5](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-CONTENTDOCS.HTML#REFHTML5)标记来表达方向性信息。  

### Selectors  
EPUB 3 CSS 规则引入 [Selectors](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refSelectors)规范里对Selectors Level 3的支持。  

### Media Queries，媒体查询  

The EPUB 3 CSS规则引入定义在[MediaQueries](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refMediaQueries)规范里面的@media和@import媒体查询规则。  

### CSS Namespaces，命名空间  
EPUB 3 CSS规则引入定义在[CSS Namespaces](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSSNamespacesModule) Namespaces的@namespace，用于声明样式表的默认命名空间，以及用于把前缀绑定到命名空间。

### CSS Multi-Column Layout  
EPUB 3 CSS规则引入定义在CSS Multi-column Layout Module [CSSMultiCol](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Multicol)规范的全部特性，column-span属性除外。

    小心  
    作者在溢出的情形下，不要依靠column行为，因为它不稳定，还有可能变化。

    小心  
    分页算法在CSS里没有完全定义。因此作者要有思想准备具体的分页点在各个阅读系统不一样。   
 
阅读系统必须把oeb-column-number属性作为column-count属性的别名来对待。oeb-column-number属性的使用在EPUB样式表里面被废除了。下一个EPUB主要改版有可能去掉这个合规要求。  

### Ruby Positioning，旁注位置  

EPUB 3 CSS规则按照下面的定义引入-epub-ruby-position属性：   
![Ruby Positioning，注释的位置（与下表内容重复）](http://imglf2.nosdn.127.net/img/RGwzN2lzcVJ2RFoxRVMwT0ovcjVicmo4SStranpKQVZrY1NDdGZsclk4Zlh6OEpBaEVERU1RPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)  

Ruby Positioning，注释的位置（与下表内容重复）  

  Name          : 	-epub-ruby-position  
  Value         : 	over | under | inter-character  
  Initial，初值       : 	over  
  Applies to，应用于    : 	ruby text elements  
  Inherited，继承     : 	yes  
  Percentages，百分百   : 	N/A  
  Media，媒体         : 	visual  
  Computed value，得出的值: 	as specified  

这个属性控制旁注文本相对于其基础文本的摆放。值的意义如下：  

Over  
旁注文本放在其基础文本的[上方](http://www.w3.org/TR/css3-writing-modes/#over)  

Under  
旁注文本放在其基础文本的[下方](http://www.w3.org/TR/css3-writing-modes/#under)  

inter-character   
旁注文本放在其基础文本的右方(该值的典型用法，是Bopomofo注音符号旁注)。  

   注   
   在[CSS3Ruby](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refCSS3Ruby)，-epub-ruby-position属性将成为ruby-position属性的别名。  

### Display Property Values oeb-page-head and oeb-page-foot（显示属性值 oeb-page-head、oeb-page-foot，已废弃）  

废弃了oeb-page-head和oeb-page-foot这两个值，需要这将来的EPUB版本里移除或者替代掉。  
作者可以继续在EPUB样式表里包含这些值来定义标题和脚注。更多信息请参考[ConteentDocs30](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refContentDocs30)里的[oeb-page-head oeb-page-foot definitions](http://www.idpf.org/epub/30/spec/epub30-contentdocs.html#sec-css-oeb-head-foot)。    

# PLS Documents  

## Overview 概述  

本节只是说明   

W3C发音词典规范（[PLS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPLS)）为基于XML的发音词典定义语义和语法，以用于自动语音识别和[Text-to-speech（TTS）](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-tts)(TTS)引擎。  

下面的各节为放在EPUB出版物里的PLS文件定义合规指标，也为如何把PLS文件和[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)进行关联定义了规则。  

  注  
  EPUB3合成语音相关功能的更多信息请参看[Text-To-Speech](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-tts)（[EPUB3Overview](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Overview)）。  

## EPUB Publication Conformance EPUB，出版物合规   

包含PLS文件的时候，出版物的合规的rendition必须满足所有下面的指标：  
› 
PLS文件可以和XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)）关联。每个XHTML内容文件可以含有0到多个PLS文件关联。  
› 
PLS文件和它应用到的XHTML内容文件（[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub-xhtml)）相关联，必须使用（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）的[link](http://www.w3.org/TR/html5/Overview.html#the-link-element)元素，设其rel属性为pronunciation，设其type属性为[PLS media type](http://www.idpf.org/epub/301/spec/epub-publications.html#cmt-pls)（application/pls+xml）。  
› 
应该为每个PLS link指定link元素的hreflang属性，指定之后，其值必须匹配相关语音词汇的语言（[the language for which the pronunciation lexicon is relevant](http://www.w3.org/TR/pronunciation-lexicon/#S4.1)）（[PLS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPLS)）。   
› 
PLS文件必须满足定义在[PLS Documents — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-pls-conf-content)的内容合规条件。  
› 
PLS文件必须按照[EPUB Publication-Content Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conf)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）的定义进行表达和定位。  

   例子

''下面的例子显示和XHTML内容文件相关联的两个PLS文件（一个用于中文，一个用于蒙古文）。''

```    
<html … >    
    <head>
        …
        <link rel="pronunciation" type="application/pls+xml" hreflang="zh" href="../speech/zh.pls"/>
        <link rel="pronunciation" type="application/pls+xml" hreflang="mn" href="../speech/mn.pls"/>
    </head>        
    …
</html>
```

## Content Conformance 内容合规  

要能够被视为核心媒体类型资源[Core Media Type Resource](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-publication-resource-cmt)，PLS文件必须满足下面所有的指标：<font color='red'>作为核心媒体类型资源的PLS文件必须符合下列所有条件</font>   

文件属性（Document Properties）  
› 
必须满足[XML Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-xml-constraints)[Publications30]里面定义的关于XML合规限制。  
› 
对PLS文件的RELAX NG schema，它必须是有效的。见：[URI](http://www.w3.org/TR/pronunciation-lexicon/pls.rng)（[PLS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPLS)）。  

文件属性（File Properties）  
    › PLS文件的文件名应该使用.pls扩展名。  

## Reading System Conformance，阅读系统合规   

合规的EPUB阅读系统必须满足下面处理PLS文件的全部指标：  
   › 
有TTS功能的阅读系统，必须支持PLS。
   › 
支持PLS的阅读系统必须按照（[PLS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPLS)）的定义处理PLS文件。  
   › 
支持PLS的阅读系统必须把提供的发音指令应用到当前XHTML内容文件的所有文本节点，该内容文件的语言（[language](http://www.w3.org/TR/html5/Overview.html#the-lang-and-xml:lang-attributes)）（[HTML5](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refHTML5)）匹配[发音词汇相关的语言](http://www.w3.org/TR/pronunciation-lexicon/#S4.1)（[PLS](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPLS)）。  
     匹配语言标签的算法定义在[BCP47](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRFC5646)  
   › 
如果在给定语言里为给定的字符串目标不止一次指定发音规则，最后出现的规则优先，以这种方式重写前面的发音规则。  
   › 
有可能pls:grapheme匹配某个元素的文本节点（该元素带ssml:ph属性），在这样的情况下，支持PLS和SSML属性（[SML Attributes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-ssml-attrib)）的  
     阅读系统必须把优先权交给ssml：ph属性提供的任意发音指令。  

## 附录A. JavaScript对象epubReadingSystem  
### Syntax 语法   
ReadingSystem = navigator.epubReadingSystem;

### Description，描述  
epubReadingSystem对象提供一个界面，通过本界面脚本化内容文件（[Scripted Content Document-Reading Sysytem Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs)）可以查询关于[用户](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-user)的[阅读系统](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-epub-reading-system)的信息。  

该对象暴露有关本阅读系统的一些属性（[properties](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#app-ers-properties)），如名称、版本，也提供了[hasFeature](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#app-ers-hasFeature)方法，调用hasFeature可以确定它支持的特性。  

''例子：显示当前阅读系统名称的JavaScript函数：''  
 alert("Reading System name: " + navigator.epubReadingSystem.name);  

### Properties，属性  
必须提供下面的属性，可用来提取关于阅读系统的信息。  

要求的epubReadingSystem属性:  
![与下表内容重复](http://nos.netease.com/imglf1/img/RGwzN2lzcVJ2RFlQOXhseFFGY1daRm1tN2FCRFNMK05Wck9SQXNNYTVmTUFFS2dQMFpET1RRPT0.png?imageView&thumbnail=500x0)  
（插图与下表内容重复）  
 Name 	     ：Description  
 name 	     ：返回代表阅读系统名称的字符串值(如：AnReader，iBooks， Kindle)。  
 version      ：返回代表阅读系统版本的字符串值(如：1.0, 2.1.1)。   
 layoutStyle  ：返回代表阅读系统内容布局风格的字符串值；   
              ：阅读系统通常返回paginated或scrolling其中一个值，但也可能为它支持的所有其它标记格式定义值。  

### Methods，方法  
#### hasFeature，  

##### Syntax，语法  
hasFeature(feature[, version])  

##### Description，说明  
对于识别的功能性，hasFeature方法返回一个boolean值，表明是否有支持的版本。  
如果含有可选的version参数，返回值表明仅仅支持指定的版本。   
如阅读系统识别不了这个功能，方法返回undefined。  
''例子，显示当前阅读系统是否支持脚本对DOM进行操作的JavaScript函数。''  
```
 var feature = "dom-manipulation";
 var conformTest = navigator.epubReadingSystem.hasFeature(feature);
 alert("Feature " + feature + " supported?: " + conformTest); 
```
##### Features 功能  
  
下表详细列明支持脚本（[spine-level](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-context)或[container-constrained](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-context)）的所有阅读系统必须识别的功能。阅读系统可能支持这些功能的某些或全部（更多信息请参看：[Scripted Content Documents — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-rs-reqs)）：  

功能名称大小写敏感。  
要求的epubReadingSystem功能：  

 Name 	 	 ：Description  
 dom-manipulation ：脚本可以改变文件DOM的结构(只适用于spine-level脚本)。  
 layout-changes   :脚本可以修改影响内容布局的属性和CSS样式(只适用于spine-level脚本)。  
 touch-events 	 :装置支持触摸事件，阅读系统把触摸事件传递给文本。   
 mouse-events 	 :装置支持鼠标事件，阅读系统把鼠标事件传递给文本。  
 keyboard-events  :装置支持键盘事件，阅读系统把键盘事件传递给文本。  
 spine-scripting  :支持Spine-level脚本。  
（列表内容与下图重复）：  
![ 列表内容重复](http://imglf0.nosdn.127.net/img/RGwzN2lzcVJ2RFlQOXhseFFGY1daRWlaYnN5RC9XN2NIbU9LTDVYNWpRT3RBekNta3pSeGRRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)  
如果阅读系统支持本节定义的功能，它都应该返回true，不管被查询的时候没有设置版本参数，还是设置为1.0。否则，它必须返回false。阅读系统开发人员不应该独立于本规范对这些功能的版本号进行修改。  

阅读系统开发人员可以添加其它的功能，但是本规范的将来版本续写本清单的方式有可能导致冲突，或与这些添加不兼容。  

## 附录B.-epub-fullsize-kana字符映射参考  
本节是说明。  
下表为[text-transform](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#css-propdef-text-transform)属性的值-epub-fullsize-kana提供字符映射。
（直接链接到原文，翻译略，表为日语假名字母表。）  
[日语假名字符映射](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#fullsize-kana-char-mapping)  

## 附录C. 致谢与贡献人  

本附录不是规范内容（翻译省略，[原文点此]( http://www.idpf.org/epub/301/spec/epub-contentdocs.html#app-contributors)）
