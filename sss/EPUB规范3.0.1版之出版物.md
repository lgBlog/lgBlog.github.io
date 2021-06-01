[原文链接](http://www.idpf.org/epub/301/spec/epub-publications.html)：
http://www.idpf.org/epub/301/spec/epub-publications.html
 
# EPUB出版物推荐规范3.0.1，26/06/2014
* [本版本](http://www.idpf.org/epub/301/spec/epub-publications-20140626.html)   

* [最新版本](http://www.idpf.org/epub3/latest/publications)   

* [上个版本](http://www.idpf.org/epub/301/spec/epub-publications-20140228.html)  

* [与前版本差异](http://code.google.com/p/epub-revision/source/diff?spec=svn4920&old=4905&r=4920&format=side&path=%2Ftrunk%2Fsrc%2Fspec%2Fepub-publications.xml)  

版权所有©：IDPF™，
Copyright © 2010-2013 International Digital Publishing Forum™，EPUB乃IDPF的注册商标

## 目录
# Overview 概述
## Purpose and Scope 目的与范围  

本节是说明信息

本规范，即EPUB出版物3.0.1规范，为EPUB®3定义出版级语义和合规要求，包括描述对[rendition(渲染)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition ) 如何进行处理的[包文件](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-package-document)格式，以及该文件与其它[出版物资源](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-publication-resource-cmt-or-foreign)该如何进行关联的规则, 以创建一个合规的EPUB出版物。

本规范是构成EPUB3的一组相关规范中的一个，EPUB3是用于以XML和Web标准为基础的数字出版物进行交换和传递格式的第三次重大修订。它的阅读、理解不能离开构成EPUB3的其它规范： 

* [EPUB 3.0 概述](http://www.idpf.org/epub/301/spec/epub-publications.html#refEPUB3Overview)，提供关于EPUB的信息概述以及到其它三个EPUB文件的路线图。应首先阅读EPUB3概述。  
* [EPUB 3.0.1 内容文档](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)，为用于[EPUB出版物] (http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-epub-publication)内容的XHTML、SVG和CSS加以定义。   
* [EPUB 3.0.1 开放容器格式（OCF）](http://www.idpf.org/epub/301/spec/epub-publications.html#refOCF3)，为了封装一组相关的资源到一个单一文件（ZIP）的[EPUB容器](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)，对格式和处理模型进行定义。  
* [EPUB 3.0.1 媒体叠加](http://www.idpf.org/epub/301/spec/epub-publications.html#refOverlays3)，为同步文本和音频定义格式以及处理模型。  

本规范取代[EPUB出版物规范3.0](http://www.idpf.org/epub/301/spec/epub-publications.html#refPublications30)。请参阅[EPUB3Changes](http://www.idpf.org/epub/301/spec/epub-publications.html#refEPUB3Changes)了解本规范及其前身之间的差异。

## Terminology 术语  

#### EPUB Publication(EPUB出版物)

打包在[EPUB Container(EPUB容器)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)里的含有一个或者多个[Rendition(渲染)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition)的集合，符合本规范及其[配套规范](http://www.idpf.org/epub/301/spec/epub-publications.html#sibling-specs)。  

#### Rendition(渲染)  
逻辑文件的一个实体，由一组相互关联的资源组成，表达对某个EPUB出版物的特定处理。  
 
#### Default Rendition(默认渲染)   
[Container – META-INF/container.xml](Container – META-INF/container.xml)  [OCF301](http://www.idpf.org/epub/301/spec/epub-publications.html#refOCF3)文件里第一个rootfile元素里所列的Rendition。  .

#### Publication Resource(出版物资源) 

包含内容或指令的资源，它对EPUB出版物的至少一个Rendition贡献逻辑和渲染方式。缺了这些资源，出版物的处理有可能不是[Author(作者)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-author)所打算的。出版物资源的例子有[包文件（Package Document）](Package Document)、[EPUB内容文件（Content Documents）](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub)、 [EPUB 样式表（Style Sheets）](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-stylesheet)、音频、视频、图像、嵌入字体和脚本 。 

除了包文件本身，用作处理某个Rendition所需的出版物资源列在该Rendition的[manifest](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)，并且打包在[EPUB Container](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)文件里（除非在[Publication Resource Locations](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations)另有规定）。   

不是出版物资源的资源例子包括：Package Document [link](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem)元素所指定的，以及在向外打开的超链接里指定、在EPUB容器外面落实的资源
(例如，由[HTML5](http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)元素的href属性引用的)。

#### Foreign Resource，外来资源 
[核心媒体类型](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-core-media-type)之外的资源。外来资源至少需要一个fallback（备选方案），定义见[Restrictions and Fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)。

#### Core Media Type Resource，核心媒体类型资源 
核心媒体[Core Media Type](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-core-media-type)类型的出版物资源，可以不加[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)就放入EPUB出版物。

#### EPUB Content Document，EPUB内容文件 

符合EPUB内容文件定义之一([XHTML](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml) 或 [SVG](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-svg))的出版物资源。
EPUB内容文件是核心媒体[Core Media Type](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-core-media-type)类型资源，因此可以不加[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)就放入EPUB出版物。

#### XHTML Content Document，XHTML内容文件 

符合[HTML5](http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)描述，定义在[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的EPUB内容文件。

XHTML内容文件使用HTML5的[XHTML syntax](http://www.w3.org/TR/html5/Overview.html#the-xhtml-syntax)语法。  

#### SVG Content Document，SVG内容文件 
符合[SVGContent Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里所列明之限制的EPUB内容文件。  

#### EPUB Navigation Document，EPUB导航文件 
专门的XHTML内容文件，内含人、机可读的全球导航信息，符合[EPUB Navigation Documents] (http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里面所写的限制。  

#### Scripted Content Document，脚本内容文件 
包含脚本的EPUB内容文件([Scripted Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content))，或包含[HTML5 forms](http://www.w3.org/TR/html5/Overview.html#forms)元素的XHTML内容文件。

更多信息请参[Scripted Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）。

#### Top-level Content Document，顶级内容文件 
直接由[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-spine)引用的EPUB内容文件，不论是直接引用还是借助[fallback chain](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow-manifest) （[Publications301](http://www.idpf.org/epub/301/spec/epub-publications.html#refPublications3)）。  

#### Fixed-Layout Document，固定格式文件
由spine直接引用而来的EPUB内容文件，这包文件里已经赋值为pre-paginated。 规定见[The rendition:layout Property](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-layout) （[Publications301](http://www.idpf.org/epub/301/spec/epub-publications.html#refPublications3)）。  
在[Fixed-Layout Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fixed-layouts)里，规定有用于渲染固定格式文件的尺寸（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）。  

#### Synthetic Spread 合成铺展  
相邻的两页同时展现这一个设备屏幕。   

#### Core Media Type，核心媒体类型  
一组不需要fallback的出版物资源类型。更多信息请参[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources)。   

#### Package Document，包文件 
如[Package Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-documents)所定义的出版物资源，带有关于EPUB出版物的某个rendition的书目和结构的元数据。  
 
#### Unique Identifier，唯一识别符 
唯一识别符是EPUB出版物的主要识别符，由[unique-identifier](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-package-unique-identifier)属性所定义. 唯一识别符可以为同一个作品的一个或多个Renditions所共有。它们符合EPUB标准、且体现同样的内容。  

唯一识别符比ISBN粗线条。然而，对内容的显著修改、删节等等需要新的唯一识别符。  

#### Release Identifier，版本识别符 
版本识别符允许EPUB出版物的任何实例能够和其它的相对比，以确定它们是否完全相同，还是同一个布置的不同版本，抑或不相干。 
更多信息请参[Release Identifier](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-package-unique-identifier)。

#### Manifest，仓单 
所有出版物资源的列表，它们构成某个EPUB出版物的规定rendition。
更多信息请参[Manifest](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)。  

#### Spine，书脊 
出版物资源--EPUB内容文件就是典型例子--的有序列表，代表出版物的给定rendition的默认阅读顺序。
更多信息请参[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem)。  

#### Media Overlay Document，媒体叠加文件 

属于XML文件，它把XHTML内容文件（[XHTML Content Document](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)）与事先录制的旁白声频相关联，以便同步播放，定义在[MediaOverlays301](http://www.idpf.org/epub/301/spec/epub-publications.html#refOverlays301)。

#### Text-to-Speech (TTS)，文本到语音 
使用合成声音对EPUB出版物的文本内容进行处理。

#### EPUB Style Sheet (or Style Sheet)，EPUB样式表 

是符合[EPUB Style Sheets](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css)所定义的CSS样式表。

#### Viewport，视口 

EPUB阅读系统的一个区域，通过它EPUB出版物可视化地呈现给用户[User](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-user)。

#### CSSViewport，CSS视口 
能够显示CSS样式化内容的视口。

#### EPUB Container (or Container)，EPUB容器 

用于EPUB出版（Publication）、基于ZIP的打包与发行格式，定义在[OCF3](). 

#### Author，作者 

负责生成EPUB出版物的人或组织，不一定是所含内容或资源的创作者。

#### User，用户 
使用EPUB阅读系统消费EPUB出版物的个体。 

#### EPUB Reading System (or Reading System)，EPUB阅读系统 
按照与EPUB3本规范及其相关规范相符的方式将EPUB出版物呈现给用户的系统。  

#### User Agent  
客户端或者应用程序，如浏览器、屏幕阅读器，它们读取HTML。 

# Typographic Conventions，排字协定   

本规范使用了下面的排字协定：  

### Markup，标记  
所有的标记（元素、属性）、代码（JS、伪代码）、机器可处理的值（字符串、字母、媒体类型）和文件名，以橘红色单格字体显示。  

### Markup，标记  
到markup和代码定义的链接，以橘红色单格字体显示并且加下划线。只对每节的第一个实例予以链接。   

### http://www.idpf.org/  

以海军蓝单格字体显示URI  

### hyperlink  

超链接以蓝色下划线标记。  

### [引用]  

标准化的以及说明性质的引用放在方括号里。  

### 术语  

定义的术语以大写开头。  

### 链接到术语定义的链接以蓝色虚下划线表示。 

标准化元素、属性的定义，见于蓝色方框内。
 
NOTE，注  
说明性的标记见于白色方框内。  
 
CAUTION，警告  

说明性的警告语放在带“警告”标题的红色方框里。 

## 合规声明  
本文件的关键字"MUST"、"MUST NOT"、"REQUIRED"、"SHALL"、"SHALL NOT"、"SHOULD"、"SHOULD NOT"、"RECOMMENDED"、"MAY"和"OPTIONAL"（“必须”，“不可”，“要求”，“应该”，“不要”，“应该”，“不应该”，“推荐”，“可能”，和“可选”）应该按照[RFC2119](http://www.idpf.org/epub/301/spec/epub-publications.html#refRFC2119)的描述进行解读。。

本规范的所有章节，除标有“本节为说明内容”的，都是规范性的。给章节、附录加的说明状态适用于它们包含的所有内容和小节。

本规范的所有例子都是说明性质的。

# EPUB Publication，EPUB出版物  

本节为EPUB出版物和EPUB阅读系统定义出版物级别的合规要求。具体出版物资源的合规要求以及内容的处理，位于本节引用的规范。

## 内容合规条件  
 
EPUB出版物的每个Rendition（渲染）必须满足以下所有指标：

### All Publication Resources，所有的出版资源   

所有出版资源都必须在包文件里加以列明（按照[manifest]()里面的定义）,符合对核心媒体类型和备选的约束（[Core Media Types and Fallback](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources)），并按照[出版物资源位置（Publication Resource Locations](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources)）的规定加以定位。  

### Package Document，包文件 

它必须包含正好一个包文件，符合[Package Document — Content Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-content-conf)定义的内容要求。  

### Content Document，内容文件 

它必须至少包含一个EPUB内容文件，与定义在[EPUB Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的内容要求相符。  

### EPUB Navigation Documents, 导航文档   

它必须至少包含一个EPUB导航文件，与定义在[EPUB Navigation Documents — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-content-conf)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的内容要求相符。  

### EPUB Style Shetts，的样式表  

它可能包含零个或多个EPUB的样式表，与定义在[EPUB Style Sheets — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-content-conf)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的内容要求相符。  

### EPUB Pronunciation Lexicons，EPUB语音词典 

它可能包含零个或多个PLS文件，与定义在[PLS Documents — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-pls-conf-content)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的内容要求相符。  

### MediaOverlay Documents，媒体叠加文件  

它可能包含零个或多个媒体叠加文件（[Media Overlay Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-media-overlay-document)），与定义在[Media Overlay Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#refOverlays3)的内容要求相符。  

### Additional Publication Resources，额外的出版资源 

除了上面列出的，它可能还包含零个或更多的出版资源，其中每一个必须符合[All Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-epub-content-conformance-all)的要求。  

### Container，容器 

它必须按照[OCF301](http://www.idpf.org/epub/301/spec/epub-publications.html#refOCF3)的定义打包在一个EPUB容器[EPUBContainer](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)里面。  

## Reading System Conformance 阅读系统合规条件  

一个阅读系统[EPUB Reading System](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-epub-reading-system)必须满足以下所有指标：  
### EPUB3处理 
*   必须按照[OCF301](http://www.idpf.org/epub/301/spec/epub-publications.html#refOCF3)的定义处理EPUB容器；
*   必须按照[Package Document — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-rs-conf)的定义处理包文件，并且遵守在包文件里表达的所有展示逻辑（比如：阅读顺序、备选链和绑定、页面方向和固定格式）；
*   遇到同一个唯一标识符的两个不同EPUB出版物的时候，不能够出现灾难性的失败；
*   除非是本节所说的有条件行为，它必须支持所有的核心媒体类型资源；
*   它可能支持任意一组外来资源，并且必须按照[Restrictions and Fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)的定义给没有支持的外来资源布置fallbacks；
*   必须按照[XHTML Content Documents — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-conf-rs) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的定义处理XHTML内容文件；
*   必须按照[SVG Content Documents — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg-rs-conf) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的定义处理SVG内容文件；
*   如果有CSS视口，必须支持按照[EPUB Style Sheets — Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-rs-conf) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的定义对XHTML内容文件的可视化处理；
*   如果有处理光栅图像的能力，它必须支持[raster image Core Media Types](http://www.idpf.org/epub/301/spec/epub-publications.html#cmt-grp-image)；
*   如果有处理矢量图像的能力，它必须支持[vector image Core Media Types](http://www.idpf.org/epub/301/spec/epub-publications.html#cmt-grp-image)；
*   如果有处理预录音频的能力，它必须支持[MP3 audio Core Media Type](http://www.idpf.org/epub/301/spec/epub-publications.html#cmt-mp3)；应该支持[MP4 audio Core Media Type](http://www.idpf.org/epub/301/spec/epub-publications.html#cmt-mp4-aac)和，并且应该支持媒体叠加（[MediaOverlays301](http://www.idpf.org/epub/301/spec/epub-publications.html#refOverlays3)）；
*   如果支持TTS处理，它必须支持[PLS Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-pls) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)），[EPUB CSS Profile](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的CSS3语音特色，以及XHTML内容文件的的[SSML attributes ](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-ssml-attrib) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）；
*   必须支持EPUB正典碎片标识符[EPUBCFI](http://www.idpf.org/epub/301/spec/epub-publications.html#refEPUBCFI)链接方案，并可以支持[EPUB Linking Scheme Registry](http://www.idpf.org/epub/linking/)定义的其它链接方案。  

>   注意  

>   建议阅读系统至少支持[H.264](http://www.idpf.org/epub/301/spec/epub-publications.html#refH264)的和[VP8](http://www.idpf.org/epub/301/spec/epub-publications.html#refVP8)视频编解码器其中的一个，但是这不作为合规的要求。    

>   内容创作者和阅读系统开发人员在决定按照某个（或二个）格式来采用或实施视频的时候，应考虑带宽、播放质量、技术使用版税要求等因素。  
   

### 向后（Backward）兼容 
应该按照[OPF2](http://www.idpf.org/epub/301/spec/epub-publications.html#refOPF2)、[OPS2](http://www.idpf.org/epub/301/spec/epub-publications.html#refOPS2)和[OCF2](http://www.idpf.org/epub/301/spec/epub-publications.html#refOCF2)定义的处理EPUB2出版物。  
对于某个EPUB出版物的任意给定Rendition，即使其包文件的version属性低于3，甚至是没有version属性值，也必须尝试加以处理。  

### 向前（forward）兼容  
对于某个EPUB出版物的任意给定Rendition，如果其包文件的version属性高于3，应该尝试加以处理。  
 
### XML处理   

必须是[non-validating processor](http://www.w3.org/TR/xml/#proc-types)(合规的非验证处理器)[ XML](http://www.idpf.org/epub/301/spec/epub-publications.html#refXML)；  

必须是按照[XMLNS](http://www.idpf.org/epub/301/spec/epub-publications.html#refXMLNamespaces)定义的合规处理器（[conformant processor](http://www.w3.org/TR/REC-xml-names/#ProcessorConformance)）；  

必须支持xml-stylesheet处理指令[ASSOCSS](http://www.idpf.org/epub/301/spec/epub-publications.html#refXMLStylesheets)，有可能支持其它的处理指令；  

必须是由[XML Base](http://www.idpf.org/epub/301/spec/epub-publications.html#refXMLBase)定义的合规应用。  

>     注意  
>     一个合规的阅读系统不必是一个专门的程序或设备，但可以作为一个发布的系统存在。  

# Package Documents 包文件  

## 引言  

'''本节是说明性的'''	  

包文件携带关于某EPUB出版物之[Rendition] ( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition) （渲染）的书目和结构方面的元数据，因此是如何处理和显示Rendition（渲染）的主要信息来源。

包文件是一个由一组容器元素组成的XML文档，每个元素用来放置关于出版物某一方面的信息。这些容器把出版物的元数据有效地集中起来、落实组成它的个体资源、向用户提供阅读顺序和渲染出版物的其它信息。  

下面的清单小结包文件所含的信息：  

*   Rendition（渲染）元数据（Publication metadata）——元数据的收录和/或引用机制，适用于整个出版物和/或其特定Rendition，包括Rendition（渲染）里面的具体资源；  
*   仓单（manifest）——确定（通过IRI）和描述（通过MIME媒体类型）共同组成出版物之给定Rendition的一组资源；  
*   仓单（manifest）——确定（通过IRI）和描述（通过MIME媒体类型）共同组成出版物之给定Rendition的一组资源；  
*   书脊（spine）——对顶级资源引用的ID序列，通过它可以访问或利用组中所有其它资源。spine 定义给定Rendition的默认阅读顺序。   
*   备选链（fallback chains）—— 为出版物定义顶级资源有序列表的备选措施，可以看作是阅读系统能够选来用于渲染的内容等价物。  
*   绑定（bindings）—— 将基于脚本的实施与常用媒体类型进行关联的可选手段。  

## 内容合规要求  
一个包文件必须满足以下所有指标：  

文件（Document）属性  

它必须满足在[XML Conformance ](http://idpf.org/epub/301/spec/epub-publications.html#sec-xml-constraints)里为XML文档定义的合规约束；  

它必须适用于包文件方案[Appendix A, Package Document Schema](http://idpf.org/epub/301/spec/epub-publications.html#app-package-schema)， 并符合[Package Document Definition](http://idpf.org/epub/301/spec/epub-publications.html#sec-package-def)里列出的关于内容合规的全部约束。  

文件（File）属性  
包文件的文件名应该使用.opf扩展名。  
包文件具有MIME媒体类型application/oebps-package+xml [RFC4839](http://idpf.org/epub/301/spec/epub-publications.html#refRFC4839)。

## 阅读系统合规条件  

阅读系统必须满足下列所有的指标：  

处理(processing)  

\>它对包文件的处理必须与[Package Document Definition](http://idpf.org/epub/301/spec/epub-publications.html#sec-package-def)里说明的所有约束相一致。  
\>它应该按照[General Properties](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-layout-general) 所说的处理元数据表达。   
\>它必须按照[Fixed-Layout Properties](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-fxl)所说的处理固定格式元数据。   
\>对于使用rendition:layout属性加以表达的[fixed layouts](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-fxl)，它必须按照[Fixed-Layout Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fixed-layouts)的规定处理尺寸（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）  
\>它必须忽略和布局表达相关的那些归属（proprietary）元数据，假如它们在行为上和[Fixed-Layout Properties](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-fxl)所规定的属性语义相冲突的话。  

## 包文件定义  

除非另外有说明，本节定义的所有元素[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)都在http://www.idpf.org/2007/opf 命名空间[XMLNS](http://idpf.org/epub/301/spec/epub-publications.html#refXMLNamespaces)。

### package元素  
package元素是包文件的根容器，它给Rendition封装元数据和资源信息。  

>  元素名称  
>     Package   
    
>  用法   
>      package元素是包文件的根容器。  

>   属性  

> 	version [需要]  
>       指定Rendition所符合的EPUB规范版本。  
>       属性必须有3.0的值以表明满足本规范。   

> 	unique-identifier [需要]  
     指定dc:identifier元素的[IDREF](http://idpf.org/epub/301/spec/epub-publications.html#refXML XML)，提供包的优先或首要识别符。详情请看[Publication Identifiers](http://idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-identifiers)。  

>    prefix [可选]   
>        本规范没有保留对前缀的声明机制。  
        详情请看[he prefix Attribute](http://idpf.org/epub/301/spec/epub-publications.html#sec-prefix-attr)。  

>    xml:lang [可选]  
        指定使用内容的语言和运载元素以及子元素的属性值，见[XML](http://www.idpf.org/epub/301/spec/epub-publications.html#refXML)2.12节的定义[Language Identification](http://www.w3.org/TR/REC-xml/#sec-lang-tag)。   

>    dir [可选]  
>        指定内容的基本文本方向和运载元素以及子元素的属性值。 
>        按[Unicode](http://idpf.org/epub/301/spec/epub-publications.html#refUnicode5)确定的固有方向优先级高于本属性。
>        许可值为ltr(从左到右)或rtl（从右到左）。  

>    id [可选]
        本元素的ID[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)，在全文内部必须唯一。  

>    内容模式   

>    按照这个次序: metadata[需要]，manifest[需要]，spine[需要]，guide[可选/弃用]，bindings[可选]，collection[0~多个]。

### metadata元素   

metadata元素为给定的Rendition封装元数据信息。  

>    元素名称>  元素名称  
>     Package   
    
>  用法   
>      package元素是包文件的根容器。  

>   属性  

> 	version [需要]  

>    metadata  

>    用法    
>   package要求的第一个子元素。  

>    属性  
>   本规范没有定义metadata元素的属性。  

>    内容模式：

>    按如下次序： dc:identifier [1或多个], dc:title [1或多个], dc:language [1或多个], DCMES Optional Elements [0或多个], meta [1或多个], OPF2 meta [0或多个], link [0或多个]  

>     

要求出版物的每个Rendition必须包含的最少元数据，其构成是[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)（Dublin Core Metadata Element Set）的三个元素——[title](http://idpf.org/epub/301/spec/epub-publications.html#sec-opf-dcidentifier), [identifier](http://idpf.org/epub/301/spec/epub-publications.html#elemdef-opf-dcidentifier)和[language](http://idpf.org/epub/301/spec/epub-publications.html#elemdef-opf-dclanguage)——以及[DCTERMS](http://idpf.org/epub/301/spec/epub-publications.html#refDCTERMS)（DCMI Metadata Terms）的[modified](http://idpf.org/epub/301/spec/epub-publications.html#last-modified-date)属性。一个最小元数据组、但完整的出版物实例请看节尾的[例子](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-elem-examples)。

另外的可选元数据使用[DCMES optional elements](http://idpf.org/epub/301/spec/epub-publications.html#sec-opf-dcmes-optional)和[meta](http://idpf.org/epub/301/spec/epub-publications.html#sec-meta-elem)元素加以表达。  

例子：

下例是所有出版物必须包含的最小元数据组。  

```
<package … unique-identifier="pub-id">
    …
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:identifier id="pub-id">urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809</dc:identifier>
        <dc:title>Norwegian Wood</dc:title>
        <dc:language>en</dc:language>
        <meta property="dcterms:modified">2011-01-01T12:00:00Z</meta>
    </metadata>
    …
</package>  
```

### DCMES的 identifier元素   

[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)的identifier元素含有与EPUB出版物的给定Rendition相关的单个识别符，例如：UUID、DOI、ISBN或ISSN。  

>     元素名称  

>       dc:identifier

>     命名空间  

>     http://purl.org/dc/elements/1.1/  

>     用法  

>     metadata要求的子元素，可重复。  

>     属性  

>     id[可选]  

本元素的ID（[XML](http://idpf.org/epub/301/spec/epub-publications.html#ref)）必须全文唯一。  

>     id是包含唯一识别符的identifier元素所要求的。见下文。  

>     内容模式：  

>     文本  

每个Rendition的metadata段都必须含有至少一个identifier元素，元素内含出版物明确的标识符。允许使用多重identifier元素，但只有一个可以通过package元素的[unique-identifier](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-package-unique-identifier)属性标记为[Unique Identifier(唯一识别符)](http://idpf.org/epub/301/spec/epub-publications.html#gloss-unique-identifier)。  

下例说明出版物的唯一识别符元素。  

```
<package … unique-identifier="pub-id">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:identifier id="pub-id">urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809</dc:identifier>
        …
    </metadata>
</package>   
```

本规范把EPUB出版物的唯一标识符与唯一指定其某个版本的标识符加以区分（即，能够区分相同EPUB出版物的不同版本）。Rendition一经修改，就必须包含一个新的[last modified date](http://www.idpf.org/epub/301/spec/epub-publications.html#elemdef-meta)。  

要确定一个打包出版物的特定版本，可以通过结合唯一识别符和Rendition的最后修改日期的方法构造一个发行标识符（[Release Identifier](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-release-identifier)）。关于发行标识符的语义和要求的详细信息，请参阅[Release Identifier](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-release-identifier)   

Rendition不同，标示符也得要不同。  

除了必须至少一个字符长度，本规范对标识符没有加其它的限制或要求。不过，还是强烈建议让所有的标识符都是完全合格的URI。  

阅读系统在处理元素值之前，必须按照XML规范的定义去掉值前后的空白。  

要确定一个identifier是否符合某个建立的系统，或者已获发行人的许可，阅读系统应该解析属性的值。如果从这个值不能确定构造，或可能导致模糊的结果，作者可以通过加[identifier-type](http://idpf.org/epub/301/spec/epub-publications.html#identifier-type)属性来增加精度，以便于阅读系统识别。加过之后，identifier-type属性优先级高于identifier解析值。  

下例说明怎样利用identifier-type属性把identifier另标为一个DOI。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="pub-id">urn:doi:10.1016/j.iheduc.2008.03.001</dc:identifier>
    <meta refines="#pub-id" property="identifier-type" scheme="onix:codelist5">06</meta>
    …
</metadata>  

```
本规范不要求或背书各标识符必须使用何种具体的构造，也不在属性定义之外对identifier-type标识符强加限制或要求。 

当EPUB出版物来自另一个出版物的时候，源出版物的标识符可以放在出版物的元数据，而且必须用DCMES 的[source](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-opf-dcsource)元素加以表明。  

### DCMES title元素    
[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)的title元素代表为EPUB出版物命名的实例。  

>     元素名称  

>        dc:title  

>     命名空间  

>        http://purl.org/dc/elements/1.1/  

>     用法  

>       metadata要求的子元素，可重复。  

>     属性  

>        id[可选]  

>           本元素的ID（XML），必须全文唯一。  

>        xml:lang[可选]  

如[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)的2.12节[Language Identification](http://www.w3.org/TR/REC-xml/#sec-lang-tag)所定义的，为内容、为携带元素及子元素的属性值指定语言。  

>        dir[可选]  

>           为内容、为携带元素及子元素的属性值指定基本文本方向。  

本属性让位于使用[Unicode](http://idpf.org/epub/301/spec/epub-publications.html#refUnicode5)确定的固有方向。

>           许可值为ltr（从左到右）或rtl。  

>     内容模式： 
   文本  

每个metadata部分都必须有一个含有出版物名称的title元素。允许有多个title元素，但要把[title-type](http://idpf.org/epub/301/spec/epub-publications.html#title-type)属性[附加上](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-meta-refines)用以指明title的类型(例如，作品的主标题、小标题等等)。

下例说明如何指明各种不同的标题。
```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:title id="t1">A Dictionary of Modern English Usage</dc:title>
    <meta refines="#t1" property="title-type">main</meta>
    
    <dc:title id="t2">First Edition</dc:title>
    <meta refines="#t2" property="title-type">edition</meta>
    
    <dc:title id="t3">Fowler's</dc:title>
    <meta refines="#t3" property="title-type">short</meta>
    …
</metadata>   
```
当添加title-type属性的时候，作者应该只将一个title元素指定为包含出版物的主标题。如果没有提供确定标题类型的手段，或是不理解，阅读系统将第一个title元素作为主标题。在此情况下，本规范没有定义如何处理其它的title元素。  

可选的display-seq属性也可以添加给每个title，用于指定它们的显示优先级和其它渲染效果。  

下例说明如何指明显示顺序。  

```
   
```

不同的Rendition的title可以不一样。  

除了必须至少一个字符长度，本规范对于标题没有强加另外的限制或要求。  

阅读系统在处理元素值之前，必须按照XML规范中定义的去掉值前后的空白。  

例子  

下例说明如何将标题"THE LORD OF THE RINGS, Part One: The Fellowship of the Ring"分类。  

```
<metadata xmln<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:title id="t1">The Red and the Black</dc:title>
    <meta refines="#t1" property="title-type">main</meta>
    <meta refines="#t1" property="display-seq">1</meta>
    
    <dc:title id="t2">A Chronicle of the Nineteenth Century</dc:title>
    <meta refines="#t2" property="title-type">subtitle</meta>
    <meta refines="#t2" property="display-seq">2</meta>
    
    <dc:title id="t3">A Chronicle of 1830</dc:title>
    <meta refines="#t3" property="title-type">subtitle</meta>
    <meta refines="#t3" property="display-seq">3</meta>
    …
</metadata>s:dc="http://purl.org/dc/elements/1.1/">
    <dc:title id="t1">The Fellowship of the Ring</dc:title>
    <meta refines="#t1" property="title-type">main</meta>
    
    <dc:title id="t2">The Lord of the Rings</dc:title>
    <meta refines="#t2" property="title-type">collection</meta>
    <meta refines="#t2" property="group-position">1</meta>
    
  <dc:title id="t3">THE LORD OF THE RINGS, Part One: The Fellowship of the Ring</dc:title>
    <meta refines="#t3" property="title-type">extended</meta> 
    …
</metadata>

```

下例显示如何分类复杂标题”The Great Cookbooks of the World: Mon premier guide de cuisson, un Mémoire. The New French Cuisine Masters, Volume Two. Special Anniversary Edition”

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title id="t1" xml:lang="fr">Mon premier guide de cuisson, un Mémoire</dc:title>
    <meta refines="#t1" property="title-type">main</meta>
    <meta refines="#t1" property="display-seq">2</meta>
    
    <dc:title id="t2">The Great Cookbooks of the World</dc:title>
    <meta refines="#t2" property="title-type">collection</meta>
    <meta refines="#t2" property="display-seq">1</meta>
    
    <dc:title id="t3">The New French Cuisine Masters</dc:title>
    <meta refines="#t3" property="title-type">collection</meta>
    <meta refines="#t3" property="group-position">2</meta>
    <meta refines="#t3" property="display-seq">3</meta>
    
    <dc:title id="t4">Special Anniversary Edition</dc:title>
    <meta refines="#t4" property="title-type">edition</meta>
    <meta refines="#t4" property="display-seq">4</meta>
    
    <dc:title id="t5">The Great Cookbooks of the World: 
        Mon premier guide de cuisson, un Mémoire. 
        The New French Cuisine Masters, Volume Two. 
        Special Anniversary Edition</dc:title>
    <meta refines="#t5" property="title-type">extended</meta>
    …
</metadata>

```

### DCMES的 language元素 

DCMES的language元素定义给定Rendition内容的语言。

>     元素名称

>       dc:language

>     命名空间

>       http://purl.org/dc/elements/1.1/

>     用法
 
>       metadata要求的子元素。  

>     属性  

>       id[可选]  

本元素的ID（[XML](http://idpf.org/epub/301/spec/epub-publications.html#ref)），必须全文唯一。  

>     内容模式  

>        文本


每个Rendition的metadata部分都必须有至少一个language元素，其值符合[RFC5646](http://idpf.org/epub/301/spec/epub-publications.html#refRFC5646)。  

下例表示出版物是美式英语。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:language>en-US</dc:language>
    …
</metadata>

```

对多国文字的出版物，可以有另外的language元素，但是每个元素的值必须符合[RFC5646](http://idpf.org/epub/301/spec/epub-publications.html#refRFC5646)。  
不同Rendition的language可以不同。  

阅读系统在处理元素值之前，必须按照XML规范中的定义去掉值前后的空白。  

### DCMES 的可选元素   

[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)元素组除前面定义的identifier、language和title之外的所有其它元素，划定为可选。这些元素全部符合下面的一般规定。  

>     元素名称  

>    contributor | coverage | creator | date | description | format | publisher | relation | rights | source | subject | type

>     命名空间  

>       http://purl.org/dc/elements/1.1/

>     用法

>       metadata的可选子元素，可重复。

>     属性

>       id[可选]  

本元素的ID（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），必须全文唯一。 

>       xml:lang*[可选]  

指定使用内容的语言和运载元素以及子元素的属性值，见[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)的2.12节所定义的[Language Identification](http://www.w3.org/TR/REC-xml/#sec-lang-tag)。

>       dir*[可选]

>          指定内容的基本文本方向和运载元素以及子元素的属性值。 

按[Unicode](http://idpf.org/epub/301/spec/epub-publications.html#refUnicode5)确定的固有方向优先级高于本属性。

>          许可值为ltr或rtl。

>     内容模式

>        文本

* xml:lang和dir属性只允许加于下列元素： contributor, coverage, creator, description, publisher, relation, rights 和subject.

不同的rendition可以有不同的可选元数据。  

所有的[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)可选元素的值必须至少一个字符长度。 

阅读系统在处理元素值之前，必须按照XML规范中定义的去掉值前后的空白。  

除了下面的，本规范对这些元素的[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)定义不做修改。  

### DCMES contributor元素  

contributor元素用于表示人、机构等的名称，他们对出版物内容的生成起的是次要作用。  

contributor元素的使用在所有其它方面和下面描述的creator元素完全一样。   

### DCMES creator元素  

creator元素用于表示人、机构等的名称，他们对出版物内容的生成起的是主要作用。可以为该元素添加role属性，以表示creator在生成内容方面起的作用。   

下例说明如何用MARC relators术语把creator表示为作者。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:creator id="creator">Haruki Murakami</dc:creator>
    <meta refines="#creator" property="role" scheme="marc:relators" id="role">aut</meta>
    …
</metadata>  
```

creator元素应该包含作者的名称，因为阅读系统将把它显示给用户。可以添加file-as属性来包括正规化的名称，并且用[alternate-script](http://idpf.org/epub/301/spec/epub-publications.html#alternate-script)属性来表示在另外一语言或脚本里的作者名称。  

下例说明作者名称的可以用来处理或渲染不同方式。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:creator id="creator">Haruki Murakami</dc:creator>
    <meta refines="#creator" property="role" scheme="marc:relators" id="role">aut</meta>
    <meta refines="#creator" property="alternate-script" xml:lang="ja">村上 春樹</meta>
    <meta refines="#creator" property="file-as">Murakami, Haruki</meta>
    …
</metadata>
```

如果一个EPUB出版物超过一个作者，每个作者应该单独放在creator元素里。作者们名称的渲染顺序应该说明在display-seq属性里。  

下例说明如何为creator元素指定显示顺序。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:creator id="creator01">Lewis Carroll</dc:creator>
    <meta refines="#creator01" property="role" scheme="marc:relators">aut</meta>
    <meta refines="#creator01" property="display-seq">1</meta>
    
    <dc:creator id="creator02">John Tenniel</dc:creator>
    <meta refines="#creator02" property="role" scheme="marc:relators">ill</meta>
    <meta refines="#creator02" property="display-seq">2</meta>
    …
</metadata>
```

如果没有手段确定作者的顺序，阅读系统必须使用metadata字段的第一个creator元素。如果阅读程序把creator元数据暴露给User，只要有可能（也就是说，不要被出于显示方面的考虑束缚了），它应该包括metadata字段所列的所有作者。  

次要贡献人应该使用DCMES的contributor元素。  

DCMES date元素  

date元素只能够用于定义EPUB出版物的出版日期。出版日期不同于[last modified date](http://www.idpf.org/epub/301/spec/epub-publications.html#last-modified-date)(Rendition的最后修改的时间), 后者应该使用[DCTERMS](http://idpf.org/epub/301/spec/epub-publications.html#refDCTERMS)的modified属性。  

建议日期字符串要符合[ISO8601](http://www.idpf.org/epub/301/spec/epub-publications.html#refISO8601)，尤其是W3C的[Date and Time Formats](http://www.idpf.org/epub/301/spec/epub-publications.html#refDateTime)格式。这些字符串机器和人都可以阅读。  

下例说明出版物日期。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:date>2000-01-01T00:00:00Z</dc:date>
    …
</metadata>  
```

其它的日期应该用[DCTERMS](http://idpf.org/epub/301/spec/epub-publications.html#refDCTERMS)词汇里面的专门日期属性进行表达。   

出版物日期对出版物的所有实例有可能是共同的，也有可能随实例改变（例如，出版物按照需要生成）。  

只允许一个date元素。  

DCMES source元素  

source元素只能够用来指定出版物源的识别符，本EPUB出版物由它而来。  
当一个Rendition含有页面标示符—使用来自EPUB Structural Semantics Vocabulary[StructureVocab](http://www.idpf.org/epub/301/spec/epub-publications.html#refEPUBStructureVocab)的[pagebreak](http://www.idpf.org/epub/vocab/structure/epub30-vocab-structure.html#pagebreak)属性--的时候，就应该把细化的source-of属性附加到在源分页上做标示的source元素上。  

下例说明出版物的ISBN标识符以及它所出源的ISBN标识符。  

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:identifier id="isbn-id">urn:isbn:9780101010101</dc:identifier>
    <meta refines="#isbn-id" property="identifier-type" scheme="onix:codelist5">15</meta>
    
    <dc:source id="src-id">urn:isbn:9780375704024</dc:source>
    <meta refines="#src-id" property="identifier-type" scheme="onix:codelist5">15</meta>
    …
</metadata>  
```

DCMES type元素  

type元素用于表明给定的出版物是某个特殊类型(例如：EPUB格式打包的注释或字典)。  

和本元素一同使用的注册信息，IDPF维护有专门链接：http://www.idpf.org/epub/vocab/package/types . 

### meta元素  
meta元素提供包含包元数据的一般手段，对包、内容，以及该元数据细化的主元数据进行表达是允许的。  

>     元素名称  

>       meta  

>     用法  

>       metadata的子元素，可重复。

>     属性

>       property [要求]  

一个[property](http://idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)（属性）  

详情请看词汇关联机制（[Vocabulary Association Mechanisms](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-assoc)）

>       refines [取决于上下文]  

确定由本元素增加的表达或资源。本属性的值必须是相对的IRI[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)，指向它所描述的资源或元素。  

refines元素视被表达的元数据类型是可选的。如果被省略，meta元素定义主表达式[（primary expression)](http://idpf.org/epub/301/spec/epub-publications.html#primary-expression)。  

>       id[可选]

>          本元素的ID（XML），必须全文唯一。 

>       scheme [可选]  

[property](http://idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)数据类型的值，表明元素值所出之源。 

>        xml:lang[可选]  

如[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)的2.12节[Language Identification](http://www.w3.org/TR/REC-xml/#sec-lang-tag)所定义的，为内容、为携带元素及子元素的属性值指定语言。

>        dir[可选]

>           为内容、为携带元素及子元素的属性值指定基本文本方向。  

本属性让位于使用[Unicode](http://idpf.org/epub/301/spec/epub-publications.html#refUnicode5)确定的固有方向。

>           许可值为ltr（从左到右）或rtl。  

>        内容模式

>          文本

每个meta元素定义一个metadata表达式，其中property属性定义该表达式里所作的声明，而元素的文本内容表达断言。 

本规范定义了两类可以用meta元素来定义的metadata表达式：  

*   主表达式，由meta元素定义的表达式建立[EPUB出版物](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-epub-publication)的某个方面。省略掉refines属性的meta元素定义主表达式。
*   次表达式，由meta元素定义的表达式增加表达式的意义，或其refines属性引用的资源。例如，次表达式可以通过表达一个媒体剪辑的时长来细化它，或通过定义人的角色来细化作者或贡献人。 
    次表达式不限于细化主表达式和资源；它们可以用来细化其它的次表达式，由此生成信息链。

>    注意：
>    所有的[DCMES](http://idpf.org/epub/301/spec/epub-publications.html#refDCMES)元素都是主表达式，并且允许用meta元素次表达式进行细化。


本规范为property属性保留了一组词汇[reserves a set of vocabularies](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-reserved-vocabs)，但是任何词汇表的术语，只要是为词汇声明了前缀[prefix is declared](http://idpf.org/epub/301/spec/epub-publications.html#sec-prefix-attr)，都可以使用。

scheme属性可以用来识别meta元素值取值的系统或方案。 

下例说明怎样把subexpression加到creator来指明它代表作者。scheme指明值取自MARC relators术语。   

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:creator id="creator">Haruki Murakami</dc:creator>
    <meta refines="#creator" property="role" scheme="marc:relators" id="role">aut</meta>
    …
</metadata>
```

如果不认识scheme的属性值，阅读系统就应该把元素的值处理为字符串。

如果meta元素的property属性定义了阅读系统不认识的表达式，就应该忽略所有的meta元素。遇到不认识的表达式的时候，阅读系统不得崩溃。
为了保证[Rendition Identifier](http://idpf.org/epub/301/spec/epub-publications.html#gloss-package-identifier)能够构造，metadata元素必须正好包含一个meta元素，为出版物定义一个[DCTERMS](http://idpf.org/epub/301/spec/epub-publications.html#refDCTERMS)的modified属性。 

还可以另外加modified属性，但是它们必须具有不同的主体(也就是说，它们必须包含refines属性，指向某个元素或资源)。

每个meta元素都必须表达一个值，其长度在空格规范化之后至少是一个字符。 

除非某个单独属性明确定义空格规范化的算法，阅读系统在进一步处理meta元素值之前，必须按照[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)规范裁剪它们前后的空格。 
 
例子

下例代表一组更完整的、典型的Rendition将包含的metadata组。  

``` 
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    …
    <dc:identifier id="pub-id">urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809</dc:identifier>
    <meta refines="#pub-id" property="identifier-type" scheme="xsd:string">uuid</meta>
    
    <dc:identifier id="isbn-id">urn:isbn:9780101010101</dc:identifier>
    <meta refines="#isbn-id" property="identifier-type" scheme="onix:codelist5">15</meta>
    
    <dc:source id="src-id">urn:isbn:9780375704024</dc:source>
    <meta refines="#src-id" property="identifier-type" scheme="onix:codelist5">15</meta>
    
    <dc:title id="title">Norwegian Wood</dc:title>
    <meta refines="#title" property="title-type">main</meta>
    
    <dc:language>en</dc:language>
    
    <dc:creator id="creator">Haruki Murakami</dc:creator>
    <meta refines="#creator" property="role" scheme="marc:relators" id="role">aut</meta>
    <meta refines="#creator" property="alternate-script" xml:lang="ja">村上 春樹</meta>
    <meta refines="#creator" property="file-as">Murakami, Haruki</meta>
    
    <meta property="dcterms:modified">2011-01-01T12:00:00Z</meta>
    
</metadata>
```

下例显示metadata当局发布的一个标识符。  

```
<package version="3.0" 
         unique-identifier="pub-id"
         xmlns="http://www.idpf.org/2007/opf">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:identifier id="pub-id">urn:uuid:1234-5678</dc:identifier>
        <dc:identifier id="isbn-id">urn:isbn:9780101010101</dc:identifier>
        
        <meta refines="#isbn-id" property="meta-auth" id="meta-authority-01">Metadata Authority Inc.</meta>
        <link refines="#meta-authority-01" rel="xml-signature" href="../META-INF/Signatures.xml#MAI-Signature"/>
        …
    </metadata>
</package>

<!-- in Signatures.xml -->
<signatures>
    <Signature Id="MAI-Signature" xmlns="http://www.w3.org/2000/09/xmldsig#">
        …
    </Signature>
</signatures>

```

### OPF2的meta元素[已废弃]  

[OPF2](http://idpf.org/epub/301/spec/epub-publications.html#refOPF2)定义的meta元素已经废弃、被新的meta元素所取代，但可以加为metadata的备选、可重复子元素，用作向前兼容。 

EPUB3阅读系统必须忽略此元素。

### link元素  

link元素用于关联资源和出版物的给定rendition，比如元数据记录。

>    元素名称

>       link

>    用法

>       metadata的子元素，可重复。

>    属性   

>       href [要求]  

对资源的绝对或相对IRI引用[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)。

>       rel [要求]

>          空格隔开的属性值列表。

>       id[可选]

>    本元素的ID，必须全文唯一。  
 
>       refines [可选]  

识别本元素添加的表达或资源。本属性的值必须是指向它所描述的资源或元素的相对IRI（[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）。 

>       如果refines元素被省略了，表达式用于整个EPUB出版物。  

>       media-type [可选]  

媒体类型[RFC2046](http://idpf.org/epub/301/spec/epub-publications.html#refRFC2046)，指定本链接所引用的资源类型、格式。 

>       内容模式

>          空

metadata元素可以包含0或多个link元素。

link元素的href属性确定资源的位置——在容器文件里可选——rel属性定义资源的性质(即它与定义在refines属性的出版物或属性的关系)。不需要阅读系统获取这些资源的位置。要了解本规范承认的资源类型清单，请参看[Metadata link Properties](http://idpf.org/epub/301/spec/epub-publications.html#sec-link-rel-values)。 

不得把link元素的href属性所确定的资源列在[manifest](http://idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)里。

link元素引用metadata记录时，如果有冲突，优先采纳定义在包文件metadata元素里面的嵌入元数据。

当引用的资源应用到另一个metadata项，可以附上refines可选项（也就是把XML签名[XML DSIG Core](http://idpf.org/epub/301/spec/epub-publications.html#refXMLDSIGCORE)附加到一个metadata）。在没有这个属性的时候，资源应用到整个出版物。 

如果不认识rel属性所定义的资源关系，阅读系统应该忽略这个link元素。 

例子

下例说明link元素用于关联出版物的三个metadata资源：一个ONIX记录、一个XMP记录和一个到信息网页的link。注意，由于foaf不是[预先定义的前缀（predefined prefix）](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-reserved-vocabs)，使用了metadata扩展机制[metadata extensibility mechanism](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-package-prefix)来联系词汇表。   

```
<package … prefix="foaf: http://xmlns.com/foaf/spec/">
    <metadata>
        … 
        <link rel="onix-record" href="http://example.org/onix/12389347"/>
        <link rel="xmp-record" href="http://example.org/xmp/12389347"/>
        <link rel="foaf:homepage" href="http://example.org/book-info/12389347" />
        …
    </metadata> 
    …
</package>
```

### manifest元素 

manifest元素为构成给定Rendition的出版物资源提供一个详细清单，每个资源一个item元素。

>    元素名称

>      manifest

>    用法

>      package要求的二级子元素，位于metadata之后。 

>    属性

>      id[可选]  

本元素的ID（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），必须全文唯一。 

>     内容模式

>       一个或多个item元素[要求]

>    注意
>    本规范支持国际化的资源命名，所有引用出版物资源的元素和属性都接受IRI和它们的值。  
>   为了兼容旧的只接受URI的阅读系统，资源名称只限于ASCII字符组。


### item元素   

item元素表示出版物资源

>     元素名称

>        item

>     用法

>        manifest的子元素，可重复。

>     属性

>        id[要求]

本元素的ID[（XML）](http://idpf.org/epub/301/spec/epub-publications.html#refXML)，必须全文唯一。 

>        href [要求]  

指定本item所描述的出版物资源位置的IRI[（RFC3987）](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)。

>        media-type [要求]

指定本item所描述出版物资源的资源类型、格式[（RFC2046）](http://idpf.org/epub/301/spec/epub-publications.html#refRFC2046)。

>         fallback [有条件的要求]

为非核心媒体类型定义备选的IDREF[（XML）](http://idpf.org/epub/301/spec/epub-publications.html#refXML)。

更多信息请看[Manifest Fallbacks](http://idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow-manifest)。

>           properties [可选]

空格隔开的[property](http://idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)值列表。

本规范定义的一组属性请看：[Manifest item Properties](http://idpf.org/epub/301/spec/epub-publications.html#sec-item-property-values).

>         media-overlay [可选]

IDREF（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），指定本item所描述资源的媒体叠加文件[ (Media Overlay Document)](http://idpf.org/epub/301/spec/epub-publications.html#gloss-media-overlay-document)。

更多信息请看（[MEdiaOverlays301](http://www.idpf.org/epub/301/spec/epub-publications.html#refOverlays3)）之[Packaging](http://idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-package)。

>         内容模式

>            空

manifest里面的每个item元素通过自己的href属性提供的IRI指定一个出版物资源。IRI可以是绝对的，也可以是相当的。对相对IRI，阅读系统在把它们变成绝对IRI时，必须用包文件的IRI作为基础。因此产生的绝对IRI在整个manifest范围内必须是唯一的。

所有的出版物资源，不论是EPUB容器所含的，还是远程的，都必须引自manifest。关于具体媒体类型资源的位置要求，请参看[Publication Resource Locations](http://idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations)。

由item元素指定的出版物资源，必须符合由media-type属性提供的MIME媒体类型推定出来的适用规范。核心媒体类型（[Core Media Type Resources](http://idpf.org/epub/301/spec/epub-publications.html#gloss-publication-resource-cmt)）必须使用[EPUB Core Media Types](http://idpf.org/epub/301/spec/epub-publications.html#tbl-core-media-types)指定的媒体类型。

所有的外来资源[Foreign Resources](http://idpf.org/epub/301/spec/epub-publications.html#gloss-publication-resource-foreign)都必须按照[Restrictions and Fallbacks](http://idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)定义的提供fallback。

所有资源都必须按照[Manifest item Properties](http://idpf.org/epub/301/spec/epub-publications.html#sec-item-property-values)里面的定义，通过item元素[properties](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-item-properties)属性来声明适用的元数据。用nav属性声明正好一个item，作为出版物导航文件（[EPUB Navigation Document](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-nav)）。 

阅读系统必须忽略所有它们不认识的描述性元数据属性。

manifest不是自引用的：它不能够包含指向包文件自己的item。

>     注意
>     manifest里item的次序不重要。内容文件的表达顺序由spine提供。

例子

下例说明只含有核心媒体类型资源的manifest。

```
<manifest>
    <item id="nav" 
          href="nav.xhtml" 
          properties="nav"
          media-type="application/xhtml+xml"/>
    <item id="intro" 
          href="intro.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="c1" 
          href="chap1.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="c1-answerkey" 
          href="chap1-answerkey.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="c2" 
          href="chap2.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="c2-answerkey" 
          href="chap2-answerkey.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="c3" 
          href="chap3.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="c3-answerkey" 
          href="chap3-answerkey.xhtml" 
          media-type="application/xhtml+xml"/>    
    <item id="notes" 
          href="notes.xhtml" 
          media-type="application/xhtml+xml"/>
    <item id="cover" 
          href="./images/cover.svg" 
          properties="cover-image"
          media-type="image/svg+xml"/>
    <item id="f1" 
          href="./images/fig1.jpg" 
          media-type="image/jpeg"/>
    <item id="f2" 
          href="./images/fig2.jpg" 
          media-type="image/jpeg"/>
    <item id="css" 
          href="./style/book.css" 
          media-type="text/css"/>   
    <item id="pls" 
          href="./speech/dict.pls" 
          media-type="application/pls+xml"/>
</manifest>
```

下例说明含有两个外来资源的manifest，因此需要使用[fallback chain mechanism](http://idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow-manifest)来提供备选内容。fallback链以核心媒体类型结束。 

```
<manifest>
    <item id="item1" 
          href="chap1_docbook.xml" 
          media-type="application/docbook+xml" 
          fallback="fall1"/>
    <item id="fall1" 
          href="chap1.xml" 
          media-type="application/z3986-auth+xml" 
          fallback="fall2" />
    <item id="fall2" 
          href="chap1.xhtml" 
          media-type="application/xhtml+xml"/> 
    … 
</manifest>
```

>         注  

properties属性的使用也可以参考[Manifest item properties](http://idpf.org/epub/301/spec/epub-publications.html#examples-item-properties)的例子。

### spine元素  

通过定义（[manifest item references](http://idpf.org/epub/301/spec/epub-publications.html#sec-itemref-elem)）的序列化清单，spine元素定义出版物给定Rendition内容的默认阅读顺序。

>     元素名称

>       spine  

>     用法

>       package要求的三级子元素，在manifest后面。

>     属性

>       id[要求]

本元素的ID（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），必须全文唯一。  

>       toc [可选]

IDREF（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），为manifest定义取代NCX的item。
更多信息请参看[NCX Superseded](http://idpf.org/epub/301/spec/epub-publications.html#ncx-superseded NCX)。

>       page-progression-direction [可选]

>          出版物内容流动的全局方向。  
>          许可的值所ltr（从左到右）、rtl和default.
>          当指定值为default的时候，作者不说明优先级，阅读系统可以选择渲染方向。
>          当该属性没有确定的时候，要假定值为default。 

>       内容模式

一个或者多个[itemref](http://idpf.org/epub/301/spec/epub-publications.html#elemdef-spine-itemref)元素[要求]

spine表示manifest所列出版物资源的有序子集，为给定的rendition提供默认的阅读顺序。  

阅读系统必须提供手段按照spine定义的顺序渲染rendition，包括：1），将spine里面的第一个主要itemref作为默认阅读顺序的开始；2），按照spine所给的顺序渲染接下来的项目。 
彼此连接？组成？spine里面的？EPUB内容文件的全部EPUB内容文件，自身必须列在spine里【All EPUB Content Documents that are linked to from EPUB Content Documents in the spine MUSTthemselves be listed in the spine.】。  

连接的文件包括引用自a元素以及area元素的href属性，也包括脚本链接（比如使用DOM事件和/或表格元素（form elements）。彼此连接？组成？spine里面的？EPUB内容文件的全部EPUB导航文件，无论导航文件是否含在spine元素里，也必须列在spine里【All EPUB Content Documents linked to from the EPUB Navigation Document MUST be listed in the spine, as well, regardless of whether the Navigation Document has been included in the spine.】。列出连接文件的要求得递归应用（即，所有的连接？组成？spine里面的？内容文件的全部也得列出，如此等等）。 

尽管page-progression-direction属性设定了出版物的全局流动方向，单个内容文件或内容文件的部分可以覆盖这个设置(如通过CSS的direction和writing-mode属性)。阅读系统也可以提供覆盖默认方向的机制(例如，允许使用可选样式表的按钮和设置）。  

阅读系统必须忽略XHTML Content Documents里pre-paginated定义的页面进行方向。page-progression-direction属性定义从一个固定页面到下一个固定页面的方向。 

### NCX被取代

[OPF2](http://idpf.org/epub/301/spec/epub-publications.html#refOPF2 )里定义的NCX为（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)的）EPUB的导航文件（[EPUB Navigation Documeent](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav)）所取代了。为了向前兼容的目的，EPUB出版物可以包含NCX，但是EPUB3阅读系统必须忽略NCX。

>         注：
>         由于EPUB2的NCX和EPUB3的导航文件采用不同的机制确定包文件(分别是toc属性  
>         和manifest清单里item元素的nav属性)，它们可以在EPUB3出版物里不冲突地共存。

### itemref元素 

spine的itemref子元素表达出版物资源[（尤其）](http://www.idpf.org/epub/301/spec/epub-publications.html#confreq-spine-itemtypes)是EPUB内容文件）的顺序列表。itemref元素的次序定义出版物给定rendition的默认阅读顺序。

>          元素名称

>            itemref

>          用法

>            spine的子元素，可重复。

>          属性  

>            idref [要求]

对manifest的[item](http://www.idpf.org/epub/301/spec/epub-publications.html#elemdef-package-item) 
加以标示的IDREF（[XML](http://www.idpf.org/epub/301/spec/epub-publications.html#refXML)），。
 
>            linear [可选]

>                  确定引用的内容是否是主内容。
>                  本属性的值必须是yes或no。默认值是yes。 

>            id [可选]

>                  本元素的ID，必须在整个文件范围内部唯一。

>            properties [可选]

>                  空格隔开的property值列表。  

请参看规范定义的属性组：[Spine itemref Properties](http://idpf.org/epub/301/spec/epub-publications.html#sec-itemref-property-values)。

>            内容模式

>              空

每个itemref元素必须通过它的idref属性引用manifest里的一个item。  

每个被引用的manifest的item必须是
a)EPUB内容文件，或
b) 另一个类型的出版物资源，且不论它是核心媒体类型资源还是外来资源，
都必须在其fallback链里包含一个EPUB内容文件。 

>               注
>               虽然EPUB出版物里要求有EPUB导航文件，在spine则是可选的。

itemref元素的linear属性说明spine里面所引用的项目被设置为主(yes)还是辅助(no)。每个rendition至少需要有一个主itemref。本属性可用来使阅读系统把主体内容的表达从辅助内容区分开来。例如，辅助内容可以显示在弹出窗口，或者从有声渲染里省略掉。
阅读系统应该让用户能够控制是否把非线性内容以默认的阅读顺序进行渲染。

所有可应用的描述性元数据属性，比如那些定义在[Spine itemref Properties](http://idpf.org/epub/301/spec/epub-publications.html#sec-itemref-property-values)里的，都应该通过properties属性加以声明。 

阅读系统必须忽略所有在properties属性定义的、它们不认识的元数据。 

例子

下例说明spine元素和上面的manifest例子[（manifest example above）](http://idpf.org/epub/301/spec/epub-publications.html#example-manifest-cmt)。

```
<spine page-progression-direction="ltr">
    <itemref idref="intro"/>
    <itemref idref="c1"/>
    <itemref idref="c1-answerkey" linear="no"/>
    <itemref idref="c2"/>
    <itemref idref="c2-answerkey" linear="no"/>
    <itemref idref="c3"/>
    <itemref idref="c3-answerkey" linear="no"/>
    <itemref idref="notes" linear="no"/>
</spine>
```
### guide元素 [废弃了] 

OPF2的guide元素被废弃了，代之以EPUB导航文件的landmarks特性。更多信息请参看[The landmarks nav Element](http://idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-types-landmarks )。

为了向前兼容EPUB2阅读系统，作者可以在包文件里包括guide元素。如果EPUB导航文件含有landmarks特性，EPUB3阅读系统必须忽略EPUB3里面提供的guide元素。

### bindings元素 
对于本规范不支持的媒体类型，bindings元素为它们定义一组定制的操柄（a set of custom handlers)。

>     元素名称

>     bindings

>     用法

>         package的可选第四、第五子元素，在spine或guide后面。

>     属性

>         无 

>     内容模式

一个或多个[mediaType](http://idpf.org/epub/301/spec/epub-publications.html#elemdef-mediaType)元素（要求）。

package元素最多可以包含一个bindings元素。

bindings元素给作者提供包含fallbacks的手段，否则只有靠[HTML5](http://idpf.org/epub/301/spec/epub-publications.html#refHTML5)的object元素的内在fallback机制才能够实现。bindings实现的fallbacks更加复杂。有bindings元素的时候，阅读系统必须利用bindings元素来处理那些引用了不支持的媒体类型的object元素。

bindings元素的每个mediaType子元素为出版物的[XHTML Content Documents](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)里面引用的外来媒体类型之一定义一个专有操作。 

当在处理文件的过程中遇到不支持的媒体类型的时候，阅读系统为了找到相匹配的操作，必须在bindings元素里查找handler，检查每个mediaType元素的[media-type](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-mediaType-media-type)属性(在尝试进行任何fallback处理之前)。如果找到相配的，元素的[handler](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-mediaType-handler)属性所指向的XHTML内容文件必须被实例化以取代所指向的资源。如果找不到相配的，阅读系统应该继续正常的fallback处理(例如，为object寻找内在的fallback）。
阅读系统必须实例化指定的操作，就仿佛它是用下面的参数从object元素的data属性引用的：

src

其值必须是指向资源的IRI（[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）(就是object元素的data属性值)。  

type

    其值必须是资源媒体类型(就是object元素的media-type属性值)。 

元素的其它所有子param都必须类似地加为参数：把param的name属性用作新的参数名，其value属性作为新的value。 

例如，下面的object元素含有外来媒体类型：

```
<object data="horse.ogg" media-type="audio/ogg"/>
    <param name="autoplay" value="false">
</object>

```

将导致下面的查询字符串在处理后被发送给XHTML Content Document操柄：

src=horse.ogg&type=audio/ogg&autoplay=false

生成的查询字符串里面所有的IRI保留字符，包括\<，\>，”，空格，\{，\}，\|，\\，\^和\`都必须根据[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)来编码、解码。

引用交由bindings元素处理的媒体类型的object元素，只在spine引用的XHTML内容文件里对它们进行处理(也就是，在[container-constrained scripting contexts](http://idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-models)里忽略它们)。

例子

下面的部分例子表明怎样利用bindings来提供一个幻灯片。

考虑具有下面包文件的EPUB出版物的Rendition：  
```
<package …>
    …
    <manifest>
        <item id="pict1" 
            href="images/Pict1.jpg" 
            media-type="image/jpeg"/>
        …
        <item id="content" 
            href="content.xhtml" 
            media-type="application/xhtml+xml"/>
        <item id="impl" 
            href="impl.xhtml" 
            media-type="application/xhtml+xml" 
            properties="scripted"/>
        <item id="slideshow" 
            href="slideshow.xml" 
            media-type="application/x-demo-slideshow"/>
    </manifest>
    
    <bindings>
        <mediaType handler="impl"
            media-type="application/x-demo-slideshow"/>
    </bindings>
    …
</package>

```

以及content.xhtml文件里面下面的内容：  

```
<html …>
    …
    <body>
        …
        <object data="slideshow.xml" 
            type="application/x-demo-slideshow">
            <img src="images/Pict1.jpg"/>
            <img src="images/Pict2.jpg"/>
            <img src="images/Pict3.jpg"/>
            <img src="images/Pict4.jpg"/>
        </object>
        …
    </body>
</html>  


以及slideshow.xml文件里面下面的内容：   

```<slides>
    <slide src="images/Pict1.jpg" dur="3"/>
    <slide src="images/Pict2.jpg" dur="3"/>
    <slide src="images/Pict3.jpg" dur="3"/>
    <slide src="images/Pict4.jpg" dur="3"/>
</slides>  

```
取决于用户的阅读系统的能力，它们将能够看见幻灯片下面的渲染之一：  

* 如果阅读系统支持本地的幻灯片格式，它将按slideshow.xml滚动渲染一组图片。  
* 如果阅读系统不支持幻灯片媒体类型，但支持脚本，它能够检查包文件里面的bindings元素，来寻找脚本化备选处理。在那里它将引用含有handler的文件(impl.xhtml)。阅读系统现在可以加载这个文件来渲染幻灯片的JavaScript化的对等物（未显示源代码）。  
* 如果阅读系统不支持幻灯片媒体类型，也不支持脚本，它将使用object元素所指定的备选图片来显示所有图片的静态组。

### mediaType元素  

mediaType元素为[Foreign Resource](http://idpf.org/epub/301/spec/epub-publications.html#gloss-publication-resource-foreign)（外来资源）媒体类型赋予一个操柄（[XHTML Content Document](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)）。

>     元素名称

>        mediaType

>     用法

[bindings](http://idpf.org/epub/301/spec/epub-publications.html#elemdef-bindings)的子元素，可重复。


>     属性

>        media-type [要求]

媒体类型[（RFC2046）](http://idpf.org/epub/301/spec/epub-publications.html#refRFC2046)，指定待操作资源的类型、格式。

>        handler [要求]

IDREF（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），标识待调用的XHTML内容文件的manifest，以操作本元素所指定的类型的内容。 
 
>     内容模式

>        无

bindings元素的每个子mediaType必须在其media-type属性里定义一个唯一的内容类型。而且所指定的媒体类型不得为核心媒体类型。  

所要求的handler属性必须指向manifest里item的ID（[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)），manifest是此媒体类型的默认实施。引用的item必须是XHTML内容文件。

所有指定为handler的XHTML内容文件，在[manifest](http://idpf.org/epub/301/spec/epub-publications.html#gloss-manifest)的[item](http://idpf.org/epub/301/spec/epub-publications.html#sec-item-elem)的[properties](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-item-properties)属性里，都必须设置[scripted](http://idpf.org/epub/301/spec/epub-publications.html#scripted)属性。


### collection元素  

collection元素定义一组相关资源。

>     元素名称

>        collection

>     用法

Package元素的第六个子元素，可重复。

>     属性

>       xml:lang [可选]

指定使用内容的语言和运载元素以及子元素的属性值，见XML的2.12节所定义的Language Identification。

dir[可选]

     指定内容的基本文本方向和载体元素及其子元素的属性值。 
由Unicode确定的固有方向优先级高于本属性。
许可值是ltr（从左到右）和rtl（从右到左）
  id[可选]
本元素的ID（XML），必须全文唯一。  
Role[需要]  
指定collections的性质，定义见后。  

内容模式  
按照如下顺序：metadata[可选]，(collection[1或者多个]，或者(collection[0到1]，link[1或者多个]))  

Collection元素使得资源可以分成合乎逻辑的单位（group），作各样的用途：使得散布在多个EPUB内容文件上面的内容重新拼凑到一个有意义的单元（例如，散裂在多个文件里的索引）；确定用作专门目的的资源（例如预览内容）；或者是把关于特定rendition的额外信息搜集在一起。  
本节所定义的collection元素，表示一个框架类，得从其中做具体的实施（如借着IDPF的次级规范）。这样的实施必须定义collection在rendition里面的目的，还有让它能够合宜地生成并且使用的全部要求（尤其是有别于下面通用框架的一切具体要求）。  
每个实施都得定义一个role值，唯一地确定全部合规的collection元素。包文件里面每个collection元素的作用，必须得由其role属性确定，其值必须是一个或者多个NMTOKEN（[XSD-DATATYPES](http://www.idpf.org/epub/301/spec/epub-publications.html#refXSDDatatypes)），且/或是完整的IRI（[FRC3987](http://www.idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）。NMTOKEN值的使用，保留给为IDPF所定义的role。它们都注册在http://www.idpf.org/epub/vocab/package/roles。没有在这里注册的NMTOKEN值都是非法的。本节没有对role进行定义。  
第三方也许会为collection元素定义定制的role，这些role必须使用完整的IRI加以确定。定制的role，在确定IRI的时候，在主元素里不得含有“idpf.org”字符串。  

	  注  
	为了确保定制role在阅读系统上面的交互可操作性，强烈期望实施人员把对collection的使用建档在http://www.idpf.org/epub/extensions/roles。  

Collection的可选子元素metadata是对包文件metadata元素的改编，在语法和语义方面有下列不同：  
* 默认的情形，不需要metadata；  
* 包文件级别所限制的对metadata元素，可以在这里改写；  
* 所有的主要metadata表达式，都应用于collection；  

* Refines属性不得引用所在collection之外的元素；  
* 不得包含[OPF2的meta元素](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-opf-meta-elem)。  

Collection可以通过包含一到多个子级collection元素来定义子集合。  

Collection的可选link子元素是对metadata的link元素的改编，在语法和语义方面有下列不同：  

*属性href可以引用所有的资源，包括manifest所列的；

*属性href的IRI值可以有一个碎片组件，用以指明collection只包括资源的一部分或者一小块；  

*属性rel是可选的；  

*不得包含refines属性；  

每个link必须引用一个组成员。各link元素的顺序不重要。  
对collection元素的具体实施，可以剪裁上面所定义的要求，以更好地反映它们的需要（即，要求metadata，对元素和属性的使用添加更多的限制，或者让link元素的顺序成为要素。不过，由此产生的内容模式必须是合乎本节规定的良好子集（也就是说，具体的实施不能够引入新的元素或者属性，也不得重新引入上面明确禁止的）。具体的实施，定义collection的时候不得改写manifest和spine的要求。  
依本规范，阅读系统对collection的支持是可选的。阅读系统必须忽略那些定义了不可识别的role的collection。  
对Rendition的渲染不得依赖于对collection元素的识别。内容必须对用户是完全可消费的，不得有任何的信息丢失或者是显著的恶化。  

例子  
下例显示两个XHTML内容文件的组合，生成一个单个单元。  
```
<package …>
    …
    <collection role="http://example.org/roles/unit">
        <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
            <dc:title>Foo Bar</dc:title>
        </metadata>
        <link href="EPUB/xhtml/foo-1.xhtml"/>
        <link href="EPUB/xhtml/foo-2.xhtml"/>
    </collection>
    …
</package>


```

# Package Metadata 包元数据
## 出版物识别符  
### Unique Identifier 唯一识别符 

包文件出版物的作者有责任包含一个基本标识符，它对某个具体EPUB出版物是独特且唯一的。该唯一标识符，不管是选择的还是赋值的，必须存放在包元素据的[dc:identifier](http://idpf.org/epub/301/spec/epub-publications.html#sec-opf-dcidentifier)元素里，并且在package元素的package element属性里被引用为Unique Identifier。

虽然不是静态的，应该尽量不要改动出版物的唯一识别符。在为出版物更新元素据、修理勘误表或其它小更改的时候，不要发新的标识符。

### Release Identifier 发行识别符 

EPUB出版物的唯一标识符通常不应该因为每个包或其内容的轻微修订就改变，希望唯一标识符为了引用和发行的缘故都尽量能够持久。然而，出版物每次发行一般都要求新版本可以唯一识别，这就导致了矛盾的需求，即可靠又可变的唯一标识符。

为了解决这个问题，就是不改变唯一标识符，而又识别小的修改和发布，本规范定义了发行标识符的语义，也就是对具有相同唯一识别符的各出版物加以区分和按序排列的手段。发行标识符不是包中metadata段的实际属性，而是一个可以从元数据要求的两个数据得到的值：唯一标识符和Rendition的最后修改日期。
放在一起，合并后的值代表一个唯一的身份，可以用来区分某个EPUB布置的任一特定版本。为了确保发行标识符可以构建，出版物必须包含正好一个含有最后修改日期（见[meta](http://idpf.org/epub/301/spec/epub-publications.html#elemdef-meta)）的[DCTERMS](http://idpf.org/epub/301/spec/epub-publications.html#refDCTERMS)modified属性。这个属性的值必须是一个XML Schema [XSD-DATATYPES](http://idpf.org/epub/301/spec/epub-publications.html#refXSDDatatypes)
 dateTime，符合下面的日期格式：

CCYY-MM-DDThh:mm:ssZ

修改日期必须表示为UTC（Coordinated Universal Time，世界标准时间），必须以时区符号Z结尾。

虽然不是包元数据的一部分，为了引用和其它用途，本规范要求使用@作为分隔（即“id@date”），来构建标识符的所有字符串。连接字符串时不得包含空格。

''以下示例显示唯一标识符和修改日期如何结合起来，形成“发行标识符”。''

```
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="pub-id">urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809</dc:identifier>
    <meta property="dcterms:modified">2011-01-01T12:00:00Z</meta>
    …
</metadata>   

```
results in the Package ID:

urn:uuid:A1B0D67E-2E81-4DF5-9E67-A64CBE366809@2011-01-01T12:00:00Z

请注意，有可能分隔符出现在唯一标识符里，因为这些标识符可以是任何字符串值。因此，在把发行标识符分解成组件的时候，必须在它的最后一个@处进行分开。

发行标识符不取代唯一标识符，但它代表一个手段，通过它同一出版物的不同版本可以被区分，也可以为销售渠道和阅读系统所识别。所要求的时间戳以其固有的时间顺序，无需知道此前的确切标识符，即可把出版物按照顺序排列。

因此，发行标识符允许对一套出版物进行检查，以确定它们是相同出版物的同一版本、单一出版物的不同版本，抑或相异和类似出版物的组合。   

	注
	在EPUB容器（[EPUB Container](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)）包含EPUB出版物的一个或多个Rendition的时候，对每个默认渲染（[Default Rendition](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition-default)）更新最后修改日期——即便是没有更新——有助于保证EPUB出版物不会看起来还是上一个发行版本。原因在于阅读系统只需要处理默认渲染。
## 词汇关联机制  
### 概述 
本节为说明性文字。

property、properties、rel和scheme等属性使用属性数据类型]（[property data type](http://idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)）来代表元数据词汇里的术语。和[RDFa10](http://idpf.org/epub/301/spec/epub-publications.html#refRDFa)的CURIE相似，属性数据类型代表一个紧凑型的IRI[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)，简化从标准词汇里创作元数据。  

属性值是一个由前缀和引用组成的表达式，其中前缀——无论是字面的还是暗示的——是一个IRI的速记映射，此IRI通常落实到一个术语词汇。当前缀被转换为其IRI表达并且与引用结合的时候，所得到的IRI通常落实到该词汇内的一个片段，内含人机可读、有关该术语的信息。

为了帮助阅读系统在处理属性值，需要一个手段，把某个前缀映射的IRI建立起来，本规范定义了三个这样的机制：

* 默认的词汇表——当属性值没有前缀的时候定义映射;
* 一组保留的前缀——这些映射是预先定义的（即，所有的阅读系统都识别它们），不加声明即可使用;
* prefix属性——在根package元素上创建新前缀映射的一个声明手段。

### 默认词汇 
 
默认词汇是不需要加前缀就能够用其术语的词汇，而且其术语必须始终没有前缀。  

由于包文件之于metadata术语有多个用法，就没有定义一个单独的默认词汇。相反，定义了多个默认词汇，以供接受
[Property data type](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)的各属性之用。具体是:

	为meta property, meta scheme, item properties和itemrefproperties定义了[Package Metadata Vocabulary](http://idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-vocab)默认词汇。如果这些属性有任何一个的属性值不含前缀，则应该使用IRI（[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）柄http://idpf.org/epub/vocab/package/＃ 来生成IRI。  
	为link rel属性定义了默认词汇[Package Relationship Vocabulary](http://www.idpf.org/epub/vocab/package/link/)。如果这个属性的属性值不含前缀，则应该使用IRI（[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）柄http://idpf.org/epub/vocab/package/link/＃ 来生成IRI。

与Package Metadata Vocabulary和Package Relationship Vocabulary相关的IRI，不得使用[prefix](http://idpf.org/epub/301/spec/epub-publications.html#sec-prefix-attr)属性给它加前缀。

### 保留前缀 

本规范专门保留了一组前缀，作者可以用在包元数据里。这些前缀定义在规范文件里[EPUB Package Document Reserved Prefixes](http://www.idpf.org/epub/vocab/package/pfx)。  
这个文件里定义的这些前缀单独维护更新，有别于本规范，而且随时修改。  
借助于预定义的URI，阅读系统必须落实包文件里用到的所有保留前缀。在[prefix attribute](http://idpf.org/epub/301/spec/epub-publications.html#sec-prefix-attr)里不得改写保留前缀，但是阅读系统在遇到这些本地改写的时候则要使用它们。  

由于对阅读系统的保留前缀和更新所做的修改并不总是同步的，在遇到不识别（也就是说，非保留的、也没有借着prefix attrribute声明的）的前缀的时候，阅读系统不可以挂掉。  
 

### prefix属性 
prefix属性定义本规范未[保留词汇](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-reserved-vocabs) 保留其它前缀映射。 

prefix属性的值是由空格隔开的表，有一个或多个如下格式的prefix-IRI映射：
 

(EBNF作品 [ISO/IEC 14977](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=26153) )。所有的终止符号都位于Unicode的“Basic Latin”区块(U+0000 to U+007F)。

[Prefixes](http://www.idpf.org/epub/301/spec/epub-publications.html#prefix.ebnf.def) = [mapping](http://www.idpf.org/epub/301/spec/epub-publications.html#prefix.ebnf.mapping), { whitespace[](), { whitespace } , mapping } ; 
  
[mapping](http://www.idpf.org/epub/301/spec/epub-publications.html#prefix.ebnf.mapping) = prefix , ":" , space , { space } , ? xsd:anyURI ? ;   

[prefix](http://www.idpf.org/epub/301/spec/epub-publications.html#prefix.ebnf.prefix) = ? xsd:NCName ? ;   

[space](http://www.idpf.org/epub/301/spec/epub-publications.html#prefix.ebnf.space) = #x20 ;   

[whitespace](http://www.idpf.org/epub/301/spec/epub-publications.html#prefix.ebnf.whitespace) = (#x20 | #x9 | #xD | #xA) ;   


下例说明用prefix属性声明foaf（朋友的朋友）的前缀以及DBPedia(dbp)。  
```
<package … 

	prefix="foaf: http://xmlns.com/foaf/spec/

		 dbp: http://dbpedia.org/ontology/">

	…

</package>   
```

为了避免冲突，不得使用prefix属性定义映射到默认词汇（[default vocabulary](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-default-vocab)）的前缀。如果prefix含有对预定义前缀（[pre-defined prefix](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-reserved-vocabs)）的声明，阅读系统必须使用prefix attribute里定义的URI映射，不必管它是不是映射到和预定义前缀相同的URI。  

保留了'_'前缀用于将来和RDFa（[RDFa11](http://idpf.org/epub/301/spec/epub-publications.html#refRDFa)）处理兼容，因此不得被定义。

### property数据类型 

#### 句法   

property数据类型是表达IRI（[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）的紧凑手段，含一个可选的前缀，被冒号与所引用的地址分开。


(EBNF作品 [ISO/IEC 14977](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=26153))。所有的终止符号都位于Unicode的“Basic Latin”区块(U+0000 to U+007F)。  

property	=	[ prefix , ":" ] , reference;  

prefix	=	? xsd:NCName ? ;  

reference	=	? irelative-ref ? ;	/* as defined in [RFC3987] */

property数据类型，衍生自CURIE数据类型，是CURIE的子集。 CURIE定义在[RDFa10](http://idpf.org/epub/301/spec/epub-publications.html#refRDFa)。

下例显示由前缀dcterms和modified引用构成的属性值。  
```
<meta property="dcterms:modified">2011-01-01T12:00:00Z</meta>  
```

[处理](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-property-processing)之后，属性应该扩展到下面的IRI:

http://purl.org/dc/terms/modified

理由就在于dcterms:prefix是[保留前缀](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-reserved-vocabs)，映射到IRI http://purl.org/dc/terms/。

当一个前缀从属性值里被省略掉，所表达的引用表示来自默认词汇[default vocabulary](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-default-vocab)的术语。  

下例显示属性值从[default vocabulary](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-default-vocab)得到。   
```
<meta … property="role">aut</meta>   
```

当默认词汇的IRI和引用串接起来，该属性扩展到： 

http://idpf.org/epub/vocab/package/#role
  
空字符串即使是符合上面的定义，也不代表合适的属性值。

#### 处理 
阅读系统必须使用下面的规则从某个属性来生成IRI（[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)）：

* 如果属性只由一个引用构成，IRI的获得方法是把与默认词汇（[default vocabulary](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-default-vocab)）相关的IRI柄串接到引用。 
* 如果属性由引用和前缀构成，IRI的获得方法是把与prefix相关的IRI柄串接到引用。如果没有定义相配的prefix，这个属性将不合法。

由此产生的IRI必须符合[RFC3987](http://idpf.org/epub/301/spec/epub-publications.html#refRFC3987)。不过，不要求阅读系统落实本IRI。

## 包元数据词汇  
### 概述 
本节是说明 

下面各节既定义一组用于包元数据的属性，同时也构成可引用的词汇。这些词汇就是本规范保留的默认词汇（[default vocabulary](http://idpf.org/epub/301/spec/epub-publications.html#sec-metadata-default-vocab)），用于包元数据里无前缀的术语。

通过基础IRI http://idpf.org/epub/vocab/package/# 可以引用本词汇里定义的属性。

     注：下面各节的属性用法例子取自metadat和meta例子。更完整的上下文请参考那些例子。

### 元数据meta的属性 

meta元素的各属性，通过提供额外的细节来增强Rendition的元数据。

这些属性必须指向它们在[refines](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-meta-refines)（meta的子元素）属性里添加的表达式或资源。

下表详细列出可用的属性。  

#### 出版物  

	alternate-script   
	说明：	alternate-script属性提供一个备用表达式，用于xml:lang属性确定的语言和脚本里的相关的属性值。  
			此属性通常附加到creator和title属性，用于国际化目的。     
	许可值：	xsd:string      
	总数：	在元数据段：0或多个；附到其它元数据：0或多个。      
	延伸:		所有属性   
	例子:  
```<meta refines="#creator" property="alternate-script" xml:lang="ja">村上 春樹</meta>```

	Belongs-to-collection   
	说明：	Belongs-to-collection属性确定EPUB出版物所属集合（collection）的名称。一个EPUB出版物可以属于一个或者多个集合。  
			借助于refines属性，也可以指明某个集合自身是另一个集合的成员。  
	 	为了允许阅读系统组织集合并且避免撞名（即不相关的集合有近似的名字，或者方便发行一个集合的不同版本），应该提供一个标示符唯一地确认集合的实例。  
	 	集合可以通过附加一个collection-type属性来更加精确地定义自己的性质。  
	 	可以通过附加一个group-position属性来提供EPUB出版物在集合里的位置。   
	许可值：	xsd:string      
	总数：	在元数据段：0或多个；附到其它元数据：0或多个。      
	延伸:		适用于EPUB出版物，也可以精细化自己的实例   
	例子:  
```
<meta property="belongs-to-collection" id="c01">The New French Cuisine Masters</meta>
<meta refines="#c01" property="collection-type">series</meta>
<meta refines="#c01" property="dcterms:identifier">urn:uuid:11111111-2222-3333-4444-555555555555</meta>

<meta property="belongs-to-collection" id="c02">Harry Potter</meta>
<meta refines="#c02" property="collection-type">set</meta>
<meta refines="#c02" property="group-position">2</meta>
<meta refines="#c02" property="dcterms:identifier">urn:uuid:99999999-8888-7777-6666-555555555555</meta>   

```
	collection-type   
	说明：	collection-type指明集合的形式或者性质。  
	 	当collection-type值取自代码项或者其它正式的序列，应该附加scheme属性以确定其来源。  
	 	如果没有指定scheme，阅读系统应该认识下面的集合类型值：  
	 			Series  
	 				相关作品的序列，形式上作为一组来确定。典型的例子是不同时期单独发表的作品，末端开发。  
	 			Set  
	 				作品的有限集合，一起构成单个知识单元。尤其是一起发表可以作为单元出售。    
	许可值：	xsd:string      
	总数：	在元数据段：0或多个；附到其它元数据：0或1个。      
	延伸:		Belongs-to-collection   
	例子:  
```
<meta property="belongs-to-collection" id="c02">Harry Potter</meta>
<meta refines="#c02" property="collection-type">set</meta>  

```

	 display-seq  
	 	说明:	display-seq属性指示一个数字位置，在此位置把当前的属性相对于同样metadata属性显示出来（即，指明多个titles的渲染顺序）。    
	 	当一组成员不都附有display-seq属性时，只对标记有顺序的进行渲染。  
	 许可值:      xsd:unsignedInt  
	 总数:    在元数据段：0或多个；附到其它元数据：0或1个  
	 延伸：    所有属性  
	 例子:  
```
<meta refines="#t2" property="display-seq">1</meta>   
```
	file-as   
	说明: 	file-as属性提供相关属性的规范化格式，用于排序。   
	许可值：   xsd:string  
	总数：    在元数据段：0或多个；附到其它元数据：0或1个   
	 延伸：    所有属性  
	 例子：  
```
<meta refines="#creator" property="file-as">Murakami, Haruki</meta>  
```

	 group-position  
	 	说明： 	group-position属性指示出版物（无论是否都是EPUB）在同组作品中相对其它作品的数字位置。  
	 	group-position属性可以附到任何生成新组的元数据属性，但是最典型的还是和belongs-to-collection属性相关。  
	 	一个出版物可以属于不止一个group。  
	 许可值：单个xsd:unsignedInt，或一系列小数点分开的数字（如1，2.2.1）。  
	 总数：		在元数据段：0或多个；附到其它元数据：0或1个  
	 延伸：	所有属性  
	 例子：  
```
<meta refines="#t3" property="group-position">2</meta>  
```

	 identifier-type  
	 说明： identifier-type属性指示identifier的形式或性质。  
	 	当从代码清单或哈希提取identifier-type属性值的时候，应加上[scheme](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-meta-scheme)以确定其来源。  
	  许可值:   xsd:string  
	 总数:   在元数据段：0或多个；附到其它元数据：0或1个   
	 延伸：  identifier  
	 例子  
```
 <meta refines="#src-id" property="identifier-type" scheme="onix:codelist5">15</meta>  
```

	 meta-auth   
	 说明: meta-auth属性提供包元数据实例的作者名称。  
	 许可值: xsd:string  
	 总数: 在元数据段：0或多个；附到其它元数据：0或1个   
	 延伸：  identifier  
	 例子  
```
<meta refines="isbn-id" property="meta-auth" id="meta-authority-01">Metadata Authority Inc.</meta>  
```

	 Role 
	说明: role属性描述creator或contributor所进行的工作的性质(如，此人是作者还是编辑）。  
	 许可值: xsd:string  
	 总数: 在元数据段：0或多个；附到其它元数据：0或1个   
	 延伸：  contributor, creator  
	 例子           
 ```
<meta refines="#creator" property="role" scheme="marc:relators">aut</meta>  
```

	 Source-of  
	说明: EPUB出版物的给定[Rendition](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition)所保留的资源，其出自何处由source-of属性指明一个独特的方面。  
	 	本规范定义一个值pagination，用于指明所引用的[source](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-opf-dcsource)元素，乃是内容里面所定义的[pagebreak](http://www.idpf.org/epub/vocab/structure/epub30-vocab-structure.html#pagebreak)属性的来源。   
	 许可值: pagination  
	 总数: 在元数据段：0或多个；附到其它元数据：0或1个   
	 延伸：source    
	 例子           
 ```
<meta refines="#isbn" property="source-of">pagination</meta>   
```

	 title-type   
	   说明：  title-type属性指明title的性质或形式。当从代码清单或哈希提取title-type属性值的时候，应加上[scheme](http://idpf.org/epub/301/spec/epub-publications.html#attrdef-meta-scheme)以确定其来源。  
	 	在没有指定scheme的时候，阅读系统应该能识别下列title类型值：main、subtitle、short、collection、edition和expanded。    
	许可值  ：   xsd:string       
	总数    :   在元数据段：0或多个;附到其它元数据：0或1个   
	延伸    :	title      
	例子   
``` 
<meta refines="#title" property="title-type">main</meta>  
```

## 渲染（Rendering）  

	 Rendition:flow   
	   说明：指定作者所希望的阅读系统处理内容（的顺序）。   
	许可值  :paginated|scrooled-contious|scrolled-doc|auto。默认值是auto。  
	总数：0或1个   
	延伸：为给定的rendition设置全局值。不得使用refines属性在meta标签上进行设置。  
	例子   
``` 
<meta property="rendition:flow">scrolled-doc</meta>   
```

	 Rendition:flow   
	   说明：指定作者所希望的阅读系统处理内容（的顺序）。   
	许可值  :paginated|scrooled-contious|scrolled-doc|auto。默认值是auto。  
	总数：0或1个   
	延伸：为给定的rendition设置全局值。不得使用refines属性在meta标签上进行设置。  
	例子   
``` 
<meta property="rendition:flow">scrolled-doc</meta>   
```

	 Rendition:layout   
	   说明：指明所给定的rendition是流式的还是预分页的。   
	许可值  :pre-paginated|reflowable。默认值是reflowable。  
	总数：0或1个   
	延伸：为给定的rendition设置全局值。不得使用refines属性在meta标签上进行设置。  
	例子   
``` 

<meta property="rendition:layout">pre-paginated</meta>
   
```

	 Rendition:orientation   
	   说明：指定作者所希望的方向，给定的rendition渲染在这个方向。  
	许可值  :portrait|landscape|auto。默认值是auto。  
	总数：0或1个   
	延伸：为给定的rendition设置全局值。不得使用refines属性在meta标签上进行设置。  
	例子   
``` 
<meta property="rendition:flow">landscape</meta>   
```

	 Rendition:spread   
	   说明：指定希望阅读系统合成展开的行为，给定的rendition这样展开。  
	许可值：none|both|portrait|landscape|auto。默认值是auto。  
	总数：0或1个   
	延伸：为给定的rendition设置全局值。不得使用refines属性在meta标签上进行设置。  
	例子   
``` 
<meta property="rendition:spread">both</meta>   
```

	 Rendition:viewport   
	   说明：为预分页（[pre-paginated](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-layout)）的XHTML和SVG内容文件所在的显示框指定CSS。   
	需要的值  : width=x, height=y   
	总数：没有refines属性：0或1个（[全局设置](http://www.idpf.org/epub/301/spec/epub-publications.html#property-viewport-global)）；有refines属性：0或多个（[书脊改写](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-viewport-local)）   
	延伸：在没有refines属性时为给定的rendition设置全局值。否则用于从refines属性引来的itemref元素。   
	例子   
``` 
<meta property="rendition:viewport">width=1200, height=800</meta>  
```
 
### metadata的link的属性   

下表定义一些属性，以用于metadata的link元素的rel属性。 

用作metadata的[link](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem)元素[rel](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-link-rel)属性的各个属性，定义在[Link Relationships Vocabulary](http://www.idpf.org/epub/vocab/package/link/)规范里。  

### Manifest的item的属性   

下表定义一些属性，用于Manifest的item元素的properties属性。  
“应用于”域：给定属性能够指定的出版物资源类型；  
“基数”域：在包文件范围内该属性能够出现的次数；  
“用法”域： 使用的条件。  

› cover-image

说明    :	cover-image属性把所描述的资源识别为封面图像。  
应用于  :     所有raster and vector image 类型。  
[raster and vector image types](http://idpf.org/epub/301/spec/epub-publications.html#tbl-core-media-types)。  
基数    :	0个或1个。
用法    :	可选   

› mathml  

说明    :	mathml属性表示所描述的出版物资源有一个或多个MathML标记实例。  
应用于  :     EPUB内容文件（EPUB Content Documents）。  
[EPUB Content Documents](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub)  
基数    :	0个或1个。  
用法    :	当且仅当满足上面的“说明”时必须设定。  
   
› nav  

说明    :	nav属性表示所描述的出版物资源构成给定rendition的EPUB导航文件（EPUB Navigation Document）。  
[EPUB Navigation Document](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-nav)  


应用于  :     EPUB导航文件（EPUB Navigation Document）。  
[EPUB Navigation Document](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-nav)  
基数    :	1个。  
    用法    :	要求   

› remote-resources

说明    :	remote-resources属性表示所描述的出版物资源包含一个或多个对位于EPUB容器外的其它资源的内部引用。（详细情况请看Publication Resource Locations）。  
[Publication Resource Locations](http://idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations)  
应用于  :     所有具备内部引用能力的出版物资源（如HTML，SVG内容文件，EPUB样式表，媒体覆盖文件）。  
基数    :	0个或1个。  
用法    :	当且仅当满足上面的“说明”时必须设定。  

› scripted

说明    :     scripted属性表示所描述的出版物资源为Scripted Content Document 。
[Scripted Content Document](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-scripted) （脚本内容文件，即含有脚本文件和/或html5表单元素）。  
应用于  :     EPUB内容文件。  
基数    :	0个或1个。  
用法    :	当且仅当满足上面的“说明”时必须设定。  

› svg

说明    ：svg属性表示所描述的出版物资源有一个或多个SVG标记实例。  
如果SVG标记直接包含在资源里，则必须设置本属性。如果SVG标记是从资源引用而来（如引自HTML5的img对象，或者 是iframe元素），则可以设置本属性。  
应用于  ：XHTML Content Documents，其值用于SVG Content Documents。  
[XHTML Content Documents](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)；[SVG Content Documents](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-svg)。  
基数    :	0个或1个。  
用法    :	当且仅当满足上面的“说明”时必须设定。  

› switch

说明    :	switch属性表示所描述的出版物资源有一个或多个[epub:switch]元素的实例。  
[epub:switch](http://idpf.org/epub/301/spec/epub-contentdocs.html#elemdef-switch)  
应用于  :     [XHTML Content Documents](http://idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)。  
基数    :	0个或1个。  
用法    :	当且仅当满足上面的“说明”时必须设定。  
只要是由item引用的资源与它们各自的定义相符合，就必须指定mathml, remote-resources, scripted, svg和switch属性。这些属性并不传递到加进资源的内容(如：通过HTML5的iframe元素)。 例如，如果非脚本化的XHTML内容文件入嵌脚本化的内容文件，仅仅是嵌入（有脚本的）文件的manifest的item properties属性才拥有scripted值。  

例子：

下例显示一个代表EPUB导航文件的manifest的item元素。  
```
<item properties="nav" id="c1" href="c1.xhtml" media-type="application/xhtml+xml" />  
```

下例显示一个代表出版物封面图像的manifest的item元素。   
```
<item properties="cover-image" id="ci" href="cover.svg" media-type="image/svg+xml" />  
```

下例显示一个代表脚本化内容文件的manifest的item元素，内容文件也含有嵌入的MathML。  
```
<item properties="scripted mathml" id="c2" href="c2.xhtml" media-type="application/xhtml+xml" />  
``` 

### spine的itemref的属性   

下表定义一些属性，以用于itemref的property属性。   
“基数”指的是在包文件范围内必须出现的次数；“用法”指的是使用的条件。  

› rendition:align-x-center  

说明    :	指示给定的书脊（spine）应该在视口或者展开（spread）里水平居中。  
基数    :	0个或多个。  
用法    :	可选。  

› rendition:flow-auto  

说明    :	指示作者没有倾向于如何展开内容   
基数    :	0个或多个。  
用法    :	可选。如果itemref指定了rendition:flow-paginated,rendition:flow-scrolled-continuous，或者rendition:flow-scrolled-doc属性，就不能够把本属性指定给它。  

› rendition:flow-paginated  

说明    :	指明作者希望对内容流进行动态分页。  
基数    :	0个或多个。  
用法    :	可选。如果itemref指定了rendition:flow-auto,rendition:flow-scrolled-continuous，或者rendition:flow-scrolled属性，就不能够把本属性指定给它。  

› rendition:flow-scrolled-continuous  

说明    :	指明作者希望对内容流滚屏，并且连续滚屏本属性的后续spine项目。  
	滚屏的方向定义为相对于块流动的方向（CSS3WritingModes），这里的块指的是由itemref元素引用而来的XHTML内容文件的root元素。  
[CSS3WritingModes](http://www.idpf.org/epub/301/spec/epub-publications.html#refCSS3WritingModesModule)  
基数    :	0个或多个。  
用法    :	可选。如果itemref指定了rendition:flow-auto,rendition:flow-scrolled-paginated，或者rendition:flow-scrolled-doc属性，就不能够把本属性指定给它。  

› rendition:flow-scrolled-doc  

说明    :	指明作者希望对内容流滚屏，并且具有这个属性的每个书脊（spine）项目要作为分开的滚屏文件进行渲染。  
基数    :	0个或多个。  
用法    :	可选。如果itemref指定了rendition:flow-auto,rendition:flow-scrolled-continuous，或者rendition:flow-paginated属性，就不能够把本属性指定给它。  

› rendition:layout-pre-paginated  
说明    :	指明给定的书脊（spine）项是预分页的。  
基数    :	0个或多个。  
用法    :	可选。如果itemref指定了rendition: layout-reflowable属性，就不能够把本属性指定给它。  

› rendition:layout-reflowable  

说明    :	指明给定的spine项是流式的。  
基数    :	0个或多个。  
用法    :	可选。指定了rendition: layout-pre-paginated属性的itemref，就不能够把本属性指定给它。

› rendition:orientation-auto  

说明    :	指明阅读系统可以决定spine项目的朝向。  
基数    :	0个或多个。  
用法    :	可选。指定有rendition:orientation-landscape或者rendition:orientation-portrait属性的itemref，就不能够把本属性指定给它  

› rendition:orientation-landscape  
说明    :	指明给定的spine项目必须水平展现。  
基数    :	0个或多个。  
用法    :	可选。指定了rendition: layout-pre-paginated属性的itemref，就不能够把本属性指定给它。  

› rendition:orientation-portrait  
说明    :	指明给定的spine项目必须垂直展现。  
基数    :	0个或多个。  
用法    :	可选。指定有rendition:orientation-landscape，rendition:orientation-auto属性的itemref，就不能够把本属性指定给它。   
› rendition:page-spread-center  

说明    :	指明把合成展开里面的内容文件强制性放置。  
基数    :	0个或多个。  
用法    :	可选。指定了page-spread-right，page-spread-left属性的itemref，就不能够把本属性指定给它。  


› page-spread-left  

说明    :	page-spread-left属性指示与item相关的EPUB内容文件的第一页是两页的左边。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了page-spread-right或者是rendition:page-spread-center属性的itemref。 

› page-spread-right

说明    :	page-spread-right属性指示与item相关的EPUB内容文件的第一页是两页的右边。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了page-spread-left或者是rendition:page-spread-center属性的temref。  

› rendition:spread-auto  

说明    :	指明阅读系统可以决定何时对spine项目做合成展开。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了rendition:spread-portrait,rendition:spread-landscape,rendition:spread-both或者是rendition:spread-none属性的itemref。   

› rendition:spread-both  

说明    :	指明阅读系统对spine项目应该按照水平和垂直的朝向进行合成展开。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了rendition:spread-portrait,rendition:spread-landscape,rendition:spread-auto或者是rendition:spread-none属性的itemref。
› rendition:spread-landscape  
说明    :	指明阅读系统对spine项目的展开，只有在水平的时候进行合成展开。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了rendition:spread-portrait,rendition:spread-both,rendition:spread-auto或者是rendition:spread-none属性的itemref。  

› rendition:spread-none

说明    :	指明阅读系统对spine项目不得进行合成展开。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了rendition:spread-portrait,rendition:spread-both,rendition:spread-auto或者是rendition:spread-landscape属性的itemref。  

› rendition:spread-portrait  

说明    :	指明阅读系统对spine项目的展开，只有在垂直朝向的时候进行合成展开。  
基数    :	0个或多个。  
用法    :	可选。不能将本属性指定给已经指定了rendition:spread-landscape,rendition:spread-both,rendition:spread-auto或者是rendition:spread-none属性的itemref。  

例子：

下例说明一副两页的地图如何在spine里进行指明。  
```
<spine>
	<itemref idref="title"/>
	<itemref idref="ps-1-l" properties="page-spread-left"/>
	<itemref idref="ps-1-r" properties="page-spread-right"/>
	<itemref idref="toc"/>
	…
</spine>  
```

## 出版物渲染（Publication Rendering）  
### 通用属性  
#### 概要  
本节是说明性的。  
并不是所有的渲染信息都可以用EPUB的基本技术来表达。虽说XHTML和CSS提供了强大的布局能力，但就被渲染的文件而言，这些能力的范围还是有限的。  
本节定义一下通用属性，让作者可以表达包级别的渲染意图（即，惟有EPUB阅读系统才能够实施的）。如果某个阅读系统支持期待的渲染，这些属性使得用户可以看见内容以作者期待的方式展现出来。  

#### rendition:flow属性  
##### 用法  
当rendition:flow属性加在meta元素上面的时候，表明作者全局倾向于对内容流（作某个）处理（如，对所有的spine项目）。作者可以可以指定是偏向于动态分页还是滚屏。对滚屏内容，还可以指明连续的EPUB内容文件作为一个视点连续滚屏，还是每一个进行单独渲染（即，文件之间动态分页）。  
如果阅读系统支持指明的渲染（方式），它就应该使用这个方法来处理内容流。但是可以给用户一个改写渲染方式的选择。  
如果在metadata字段没有携带这个属性的meta元素，阅读系统必须默认auto是全局值。阅读系统只能支持这一个作为默认值。  
如果阅读系统支持rendition:layout属性，而且在spine项目上面rendition:layout的值已经被设置为pre-paginated，那么就应该忽略rendition:flow属性。  

##### 许可值  
定义了下列值供rendition:flow属性使用。  

	 Paginated  
	 	阅读系统应该动态分页所有的内容流。  
	 Scrolled-continuous  
	 	阅读系统渲染内容文件的方式是：内容流是滚屏的，给定rendition所代表的EPUB出版物则按照一个连续滚屏挨个展现spine项目。本地改写的情形例外。  
[Locally overridden](http://www.idpf.org/epub/301/spec/epub-publications.html#layout-property-flow-overrides)（本地改写）  
	 Scrolled-doc  
	 	阅读系统渲染内容文件的方式是：内容流是滚屏的，而每个spine项目则是单独作为一个滚屏文件。  
	 Auto  
	 作者对内容流（的方向）没有偏好。阅读系统渲染内容既可以按照自己的默认方法，也可以按照用户的偏好，只要可行就好。  

	 例子  

下面的例子演示作者的意图是，用分页渲染，目录滚屏。  

```
<metadata>
    <meta property="rendition:flow">paginated</meta>
</metadata>

<spine>
    <itemref idref="toc" properties="rendition:flow-scrolled-doc"/>
    <itemref idref="c01"/>
</spine>   
```

##### spine改写  

可以在spine的itemref元素上面本地指定rendition:flow-auto，rendition:flow-paginated，rendition:flow-scrolled-continuous，rendition:flow-scrolled-doc和属性。这样的话，给定spine的全局值就要被改写。  

#### rendition:align-x-center属性  

当spine项目设有[rendition:align-x-center](http://www.idpf.org/epub/301/spec/epub-publications.html#align-x-center)属性的时候，就表明渲染的内容应该在视口或者展开内水平居中。这个属性不影响spine项目的渲染，（影响的）只是在内容框架里面的放置（方式）。  
对于流式内容，支持该属性的阅读系统必须居中每个虚拟页面。  
当不支持本属性或者没有指定的时候，本规范的这个版本没有定义一个默认的渲染行为。阅读系统可以按照自己的设计来渲染spine项目。  

	 	注  
	 	开发本属性的初衷，主要是为了处理Naka-Tobira(中扉，下节标题页)，因为在内容渲染里面没有可靠的居中对齐控制。当然，随着CSS对分页媒体的演进，这个属性也许有一天被废除。建议作者可以的话尽量使用CSS解决问题。  

### Fixed-layout属性  
#### 概要  

本节是说明性质的  

和纸质书或者PDF文件不一样，EPUB文件的设计就是为了变化。文件内容为了适合屏幕尺寸或者用户的需要而流动。正如[Rendering and CSS](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-rendering)（渲染与CSS）里说的，“内容展现应该适用于用户，而不是反过来”  

遗憾的是这个原则不能够普适于所有的文件类型。时不时内容与设计交织到没法分开。对外观稍微一改就要改变意思的危险，甚至是完全失去了意义。在内容不适合流式的情况下，固定格式文件让作者对表达EPUB有更大的控制余地。  
本节定义了一组元数据属性，它们允许在EPUB3的环境下对固定格式文件做期待的渲染行为进行陈述性表达。  

	 	注  
	 	对于固定格式内容，EPUB3支持多重表达机制。当固定格式内容成为必要的时候，作者选择何种机制取决于许多因素，包括预期的精度、文件大小、可访问性等等。本节不尝试强行规定作者对机制的选择。   
#### rendition:layout属性  
##### 用法  
当rendition:layout属性指定给meta因素后，就表明对整个EPUB出版物（即所有的spine项目）实施分页或者流式布局风格（reflowable layout style）。  
如果在metadata字段没有携带这个属性的meta元素，阅读系统就必须假设reflowable是默认值。  
要是rendition:layout属性被设置为pre-paginated，阅读系统在渲染合成展开（[Synthetic Spreads](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-synthetic-spread)）的时候，就不得在相邻内容块之间不能够留空。  
当该属性把某个spine项目设置为pre-paginated，其内容尺寸必须按照固定格式文件（[Fixed-Layout Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fixed-layouts)）里面的规定加以设置。  

	 	注  
	  		为了让阅读系统优化渲染效果，需要另外在包元数据里给出尺寸。具体做法请见[rendition:viewport property](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-viewport)。  

##### 许可值  
定义了下面的一些值供rendition:layout属性使用：  

	 Reflowable  
	 给定rendition不是预分页的。渲染的时候阅读系统可以动态分页。  
	
	 Pre-paginated  
	 给定rendition是预分页的。渲染的时候阅读系统必须给每个spine的itemref生成一页。  

	 	注：  
	 	典型说，阅读系统要限制或者拒绝对预分页的文件使用用户/用户代理的样式表。原因在于，由于这些文件的内在属性，动态地改变样式极有可能产生意想不到的后果。作者在选择使用预分页而非流式内容的时候，应该考虑到这些限制带给可用性还有可访问性的负面影响。相关信息请参考W3C对用户代理访问指南（[Guideline 1.4 - Provide text configuration](http://www.w3.org/TR/UAAG20/#gl-text-config)）。  

栗子：  

下面的栗子演示纯固定格式内容，使用[MediaQueries](http://www.idpf.org/epub/301/spec/epub-publications.html#refMediaQueries)为三类不同的设备设不同的样式表。  

	 Package Document  
```
<meta property="rendition:layout">pre-paginated</meta>   
```

	 XHTML  
``` 
<head>
    <meta name="viewport" content="width=1200, height=900"/>
	
    <link rel="stylesheet" href="eink-style.css" media="(max-monochrome: 3)"/>
    <link rel="stylesheet" href="skinnytablet-style.css" media="((color) and
        (max-height:600px) and (orientation:landscape), (color) and (max-width:600px)
        and (orientation:portrait))"/>
    <link rel="stylesheet" href="fattablet-style.css" media="((color) and
        (min-height:601px) and (orientation:landscape), (color) and (min-width:601px)
        and (orientation:portrait)"/>	
</head>   
```
	 注：  
	注意Media Queries 只是作用于用于文件的样式表。Viewport的meta标签里面设置的内容尺寸是静态的。  

##### spine overrides改写  
可以把rendition:layout-pre-paginated 和 rendition:layout-reflowable属性本地指定到spine的itemref元素。在此情况下，给定spine的全局值被改写。  

#### rendition:orientation属性  
##### 用法  
在rendition:orientation属性指定给一个meta元素的时候，表明期待的朝向全局应用于给定的rendition（即所有的spine项目）。  
如果在metadata字段没有携带这个属性的meta元素，阅读系统必须默认auto是全局值。  
##### 许可值  
定义了下面的一些值供rendition: orientation属性使用：  
	 Landscape 
	 给定的rendition预期水平渲染；  
	 Portrait  
	 给定的rendition预期垂直渲染；  
	Auto  
	给定的rendition没有朝向约束。  

除非给定的值是auto，支持多朝向的阅读系统应该把期待的朝向转达给用户。达成目的的手段因实施而异。  

栗子  

下面的栗子演示不打算做合成展开的纯固定格式内容，并且锁定水平朝向。  
```
<metadata>
    <meta property="rendition:layout">pre-paginated</meta>
    <meta property="rendition:spread">none</meta>
    
    <meta property="rendition:orientation">landscape</meta>
</metadata>   
```

##### spine改写  
可以把rendition:orientation-landscape , rendition:orientation-portrait 和 rendition:orientation-auto属性本地指定到spine的itemref元素。在此情况下，给定spine的全局值被改写。    


#### rendition:spread属性  
##### 用法  
在rendition:spread属性指定给一个meta元素的时候，表明期待的合成展开全局地应用于给定的rendition（即所有的spine项目）。  
如果在metadata字段没有携带这个属性的meta元素，阅读系统必须默认auto是全局值。  
##### 许可值  
定义了下面的一些值供rendition: orientation属性使用：  
	 None  
	 阅读系统不得在合成展开里加入spine项目；  
	 Landscape 
	 只有设备处于水平朝向的时候，阅读系统才应该对spine项目做合成展开；  
	 Portrait  
	 只有设备处于垂直朝向的时候，阅读系统才应该对spine项目做合成展开；  
	 Both  
	不论设备处于何朝向，阅读系统应该做合成展开；
	 Auto  
	 没有明确定义合成展开行为。作为优化过程中利用显示面积的一部分，阅读系统可以在特定或者全部的设备朝向进行合成展开。  

	 注  
	 	在XHTML和CVG内容文件里使用合成展开的时候，通过[viewport meta element](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fxl-icb-xhtml)和[viewBox attribute](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fxl-icb-svg)给出的尺寸分别代表展开里一页的尺寸。  

	 注  
 	在关于怎么样用page-progress-direction 属性来告示全局流动方向，以及在内容文件里面的局部page-progress-direction，请参考[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem)。  

栗子  

下面的栗子演示打算在水平朝向做合成展开的纯固定格式内容，并且在垂直朝向没有展开。  
``` 
<metadata>
    <meta property="rendition:layout">pre-paginated</meta>
    <meta property="rendition:spread">landscape</meta>
</metadata>   
```
下面的栗子演示一个带单独固定布局标题页面的流式内容，如果设备可以进行合成展开，其中的固定布局页意在展开在右侧。  
```
<metadata>
    <meta property="rendition:layout">reflowable</meta>
    <meta property="rendition:spread">auto</meta>
</metadata>

<spine>
    <itemref idref="titlepage" properties="page-spread-right rendition:layout-pre-paginated"/>
</spine>   
```

##### spine改写  
可以把rendition:orientation-landscape , rendition:orientation-portrait 和 rendition:orientation-auto rendition:spread-landscape , rendition:spread-portrait , rendition:spread-both , rendition:spread-auto 和 rendition:spread-none属性本地指定到spine的itemref元素。在此情况下，给定spine的全局值被改写。  

#### rendition:page-spread-*属性  
阅读系统渲染合成展开的时候，填充展开的默认行为是：在下一个可用的空白视口里布置下一个EPUB内容文件。此处，“下一个可用视口”是由给定的页面行进方向（page progression direction）确定的，或者是内容文件内部的本地声明确定的。通过在书脊元素itemref上提供page-spread-left , page-spread-right 或者是rendition:page-spread-center属性，作者可以强制性在具体的视口放置文件，因此改写自动填充的行为。  

page-spread-left属性表明给定的spine项目应该渲染在展开的左手。page-spread-right应该是右手。rendition:page-spread-center表明应该改写合成展开，在单个视口做居中渲染。  

page-spread-left , page-spread-right 或者是rendition:page-spread-center属性属性既可以用于预分页也可以用于流式内容。而且只是在阅读系统可以生成合成展开的时候适用。  

不论（[CSS2.1](http://www.idpf.org/epub/301/spec/epub-publications.html#refCSS21)的）page-break-before属性给XHTML内容文件设置了啥值，都以page-spread*属性为准。  

	 注 
	 	rendition:page-spread-center属性的出现，并不改变视口的尺寸。尤其是，它并不表示应该按照整个展开的尺寸来生成一个视口。要保证常规展开和居中（单页）展开的缩放比例的一致性，这一点很重要。  

如果pre-paged项目之后跟一个reflowable（流式）spine，在缺乏page-spread-*属性值的时候，后者应该在下一页开始（依page-progression-direction的定义）。如果流式spine项目有一个page-spread-*规定，就得执行它（即插入一个空白页）。  

类似的，如果预分页的spine项目跟在流式项目后面，在缺乏page-spread-*属性值的时候，后者应该在下一页开始（依page-progression-direction的定义）。如果预分页spine项目有一个page-spread-*规定，就得执行它（即插入一个空白页）。  

	 栗子  
	 下面的栗子演示一个具有两页固定格式居中的流式内容，预期在任意设备上面使用合成展开加以渲染。  
```
<spine page-progression-direction="ltr">
    …
    <itemref idref="center-plate-left" properties="rendition:spread-both page-spread-left"/>
    <itemref idref="center-plate-right" properties="rendition:spread-both page-spread-right"/>
    …
</spine>  
```
注意，对于没有定义的rendition的其它（流式）部分，作者是左手展开行为。原因在于，rendition:spread的值默认初始化为auto。  
下面的栗子演示固定格式内容，此处如果使用合成展开，则必须禁用它，代之以居中版。  
```
<metadata>
    <meta property="rendition:layout">pre-paginated</meta>
    <meta property="rendition:spread">auto</meta>
</metadata>
<spine>
    <itemref idref="center-plate" properties="rendition:page-spread-center"/>
</spine>  
```
注意，rendition:spread声明的none表达式在居中项目上是不需要的，理由是，rendition:page-spread-center属性已经阐明了作废合成展开的语义。  

#### rendition:viewport属性   

对于rendition:layout属性被设置为pre-paginated的XHTML和SVG内容文件，rendition:viewport属性可以让作者为它们在ICB（初始包含块）（[CSS2.1](http://www.idpf.org/epub/301/spec/epub-publications.html#refCSS21)）里表达CSS。属性值必须是width=x, height=y格式。其中的x、y分别是CSS里面ICB的宽度和高度的像素（[CSS2.1](http://www.idpf.org/epub/301/spec/epub-publications.html#refCSS21)）。数值的表达顺序不重要。  
rendition:viewport属性并不取代固定格式文件（[Fixed-Layout Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fixed-layouts) ）里定义的ICB表达机制。本属性只是一个补充，让阅读系统可以优化渲染。内容里表达的尺寸和包元数据里表达的尺寸不得冲突。  

如果rendition:viewport属性不加refines属性就指定给meta元素，就是为EPUB出版物定义全局ICB（例如，所有的预分页XHMTL和SVG内容文件）。 
 
如果rendition:viewport属性附加refines属性指定给meta元素，就表示仅仅为引用的EPUB出版物定义ICB。如果设置有全局值，就要改写它。Refines属性不得直接引用manifest元素的item值，如果设置了引用XHTML和SVG内容文件的itemref书脊元素，那么refines属性必须引用这个itemref。  

如果所应用到的spine书脊项目的rendition:layout属性没有设置为pre-paginated，阅读系统就应该忽略这个属性。阅读系统也必须忽略非XHTML或者SVG内容文件书脊项目上面的本属性。  

	 栗子  
	  下面的栗子演示如何为所有的spine项目尺寸，仅仅是改写封面。  

```
<metadata>
    <meta property="rendition:layout">pre-paginated</meta>
    <meta property="rendition:viewport">width=1200, height=900</meta>
    <meta property="rendition:viewport" refines="#cover-ref">width=600, height=1200</meta>
</metadata>

<spine>
    <itemref id="cover-ref" idref="cover"/>
    <itemref idref="c01"/>
</spine>   
```

# Publication Resources 出版物资源  
## 核心媒体类型  
 
下表列出了EPUB的3核心媒体类型。当出版资源符合核心媒体类型规范，它就是核心媒体类型的资源，可以不提供备选就直接用于出版物（更多信息请看[Restrictions and Fallbacks(限制和备选)](http://idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)）。  

表中各列代表以下信息：  

媒体类型(Media Type)  

MIME媒体类型[RFC2046](http://idpf.org/epub/301/spec/epub-publications.html#refRFC2046)用来表示在manifest给定的出版物资源。  

内容类型定义(Content Type Definition)  

    给定核心媒体类型资源必须符合的规范。  

适用于(Applies to)  

    媒体类型(Media Type)、内容类型定义(Content Type Definition)应用到的出版物资源类型。  

EPUB核心媒体类型  

媒体类型(Media Type)===内容类型定义(Content Type Definition)======适用于(Applies to)

图像类型
 image/gif ===============[GIF] ======================	GIF 图像
 image/jpeg ==============[JPEG]=======================	JPEG 图像
 image/png ===============[PNG] =======================	PNG 图像
 image/svg+xml ===========SVG 内容文件=================== SVG文件

应用类型
 application/xhtml+xml ======XHTML内容文件=========XHTML内容文件和EPUB导航文件
 application/x-dtbncx+xml====[OPF2]===============被取代的NCX
 application/vnd.ms-opentype=[OpenType]===========OpenType字体
 application/font-woff=======[WOFF] ==============WOFF fonts
 application/smil+xml =======[MediaOverlays30]====EPUB 媒体覆盖文件
 application/pls+xml ========[PLS] ===============Text-to-Speech (TTS)发音词典

声频类型 
 audio/mpeg===================[MP3] ================MP3 audio
 audio/mp4====================[AAC LC], [MP4] ========使用MP4容器的AAC LC 声频文件

文本类型
 text/css======================EPUB样式表 ===========EPUB 样式表
 text/javascript===============[RFC4329]=============脚本  

![EPUB Core Media Types](http://imglf1.nosdn.127.net/img/RGwzN2lzcVJ2RGJRQU9rZWRGc0pPMjhBUDNJN1JURkxIMUY4OERRT05MNU1CS3NwSCtTdDBBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)  

     注：  

本规范没有将任何视频编解码器定义为核心媒体类型。请看上面的[note in EPUB Publications — Reading System Conformance](http://idpf.org/epub/301/spec/epub-publications.html#note-video-codecs)以获取关于EPUB出版对视频编解码器支持的推荐信息。  

假如这些出版物资源没有包含在spine里，也没有从EPUB内容文件引用，IDPF有可能新的核心媒体类型。  

## 限制与备选（restrictions and fallbacks）  
### 外来资源限制  
 
EPUB出版物的所有出版资源必须是核心媒体类型资源，或必须提供核心媒体类型备选。外来资源可以使用的情形、以及这些情形下提供核心媒体类型备选的要求和规则，详述如下。  

EPUB内容文件的内在备选  
    >外来资源可从EPUB内容文档中那些有明确内在备选机制的元素进行引用(如HTML5的object、canvas元素，以及audio和video元素的source元素)。  
     在这些情况下，一个核心媒体类型资源必须通过给定元素的内在备选机制加以提供。
    >对于[HTML5]的video元素和audio元素，元素内部嵌入的流内容并不代表核心媒体类型的备选，但是可以加进来给那些不认识这些元素的老阅读系统（如EPUB2阅读系统）做渲染。   
    >在这个版本，HTML5的track元素是个例外，不受核心媒体类型规则的限制：外来资源可以不提供核心媒体类型备选，直接通过track引用。  

EPUB样式表的内在备选   
    >使用@font-face机制嵌入内容文件或EPUB样式表的字体可能是国外资源。阅读系统在为不受支持的字体确定备选的时候，必须使用[字体样式匹配规则](http://www.w3.org/TR/css3-fonts/#font-style-matching )（[CSS3Fonts]）。  

没有内在备选时的manifest备选  

可以在没办法提供内在备选的上下文里引用外部资源（）。也就是直接从spine的itemref元素，从（HTML5）[XHTML 内容文件](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)的img、iframe和link元素，以及从EPUB样式表的@import规则。  

### Manifest备选  

Manifest的item代表出版物资源，在它上面使用fallback属性可以提供manifest的fallback属性（或：备选的提供用的是manifest里item元素的fallback属性，item元素代表出版物资源）。fallback属性的IDREF （[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)）值应该落实到manifest里的另一个item。这个备选item自身可能指定另一个备选项目，以此类推。  

从某个给定item的fallback属性开始的全部ID引用，它们按顺序排列的清单就是那个item的fallback链。备选链里面资源的顺序就是作者希望的备选顺序。  

阅读系统，如果不支持给定出版物资源的媒体类型，就应该通读fallback链，直到找到至少一个支持的资源，可以代替不受支持的资源。如果阅读系统支持fallback链里面的多个出版物资源，它可以根据那个资源的具体属性来选择，否则就应该执行作者希望的fallback顺序。  

备选链必须下面的要求之一：  
	 对于直接引自书脊itemref元素的外部资源，链内不得少于一个EPUB内容文件；
	 对于没法提供内部备选的外部资源，链内必须至少含有一个核心媒体类型。  

fallback链不得循环，即不得自引用链内的item元素。  

备选也可能提供给属于EPUB内容文件的顶级内容文件。阅读系统可以选择利用这些备选，以便找到一个内容文件的最佳版本，渲染在给定的上下文里面。何时可以利用此功能的一个例子，是为脚本内容[ContentDocs301](http://idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)提供备选的时候（[fallbacks for scripted content](http://idpf.org/epub/301/spec/epub-contentdocs.html#confreq-cd-scripted-flbk)）。

## 出版资源位置   

所有出版资源都必须位于EPUB容器，除了以下的例外：

     >音频资源可放在容器里面或远程。
     >视频资源可放在容器里面或远程。
     >引自ariadescribedat属性的描述可以放在容器里，也可以（放在）远端（remotely）。  
[ariadescribedat](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-aria-describedat)（[ContentDocs301](http://idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）
作者应该优先把音频和视频资源放在容器中，以允许用户没有网络也能够访问整个文稿。  

     注：
     不论给定资源是核心媒体类型资源还是外来资源，上面关于出版物位置的规则都适用。  

     注： 
     EPUB出版物加进远程资源，是通过manifest里面item元素的remote-resources属性。

## XML合规条件  

所有基于XML的媒体类型出版物都必须满足下列限制要求：   

*    它必须是符合[Conformance of Documents](http://www.w3.org/TR/REC-xml-names/#Conformance )（[XMLNS](http://idpf.org/epub/301/spec/epub-publications.html#refXMLNamespaces)）规定的XML1.0文件；
*    外部识别符[External identifiers](http://www.w3.org/TR/2008/PER-xml-20080205/#NT-ExternalID)不得出现在文件类型声明里面[XML](http://idpf.org/epub/301/spec/epub-publications.html#refXML)；
*    不得使用XInclude（[XInclude](http://idpf.org/epub/301/spec/epub-publications.html#refXInclude)）；
*    必须按照UTF-8或UTF-16（[Unicode](http://idpf.org/epub/301/spec/epub-publications.html#refUnicode5)）编码。  

不论所给的出版物资源是核心媒体类型资源，还是外来资源，都必须应用上面的限制。  

# A.  Package Document Schema 包文件架构（schema）  

包文件的架构可以在 http://www.idpf.org/epub/301/schema/package-30.nvdl 得到。  

使用该架构来进行验证，处理器需要支持[[NVDL](http://idpf.org/epub/301/spec/epub-publications.html#refNVDL)、[RelaxNG](http://idpf.org/epub/301/spec/epub-publications.html#refRelaxNG)、[ISOSchematron](http://idpf.org/epub/301/spec/epub-publications.html#refISOSchematron)和[XSD-DATATYPES](http://www.idpf.org/epub/301/spec/epub-publications.html#refXSDDatatypes)。  

    注：
    NVDL的架构层也可以用一个多关验证来代替，即使用嵌入的RELAX NG和单独的ISO Schematron schemas。  

# B. application/oebps-package+xml 媒体类型  

本附录是说明性质的。  

本附录为EPUB包文件注册application/oebps-package+xml媒体类型。包注册取代[FC4839](http://idpf.org/epub/301/spec/epub-publications.html#refRFC4839)。  

包文件是对EPUB出版物（[Publications301](http://www.idpf.org/epub/301/spec/epub-publications.html#refPublications3)）的rendition进行描述的XML文件，它指定出版物里面的资源，也提供元数据信息。包文件及其相关标准由IDPF维护和定义。

MIME media type name媒体类型名称:
    application

MIME subtype name子类名称:
    oebps-package+xml

Required parameters要求的参数:Open Packaging Format 2.0.1规范，后者在：
   无

Optional parameters可选参数:
   无

Encoding considerations编码考虑:
    包文件是UTF-8、UTF-1编码的XML。 

<b>Security considerations安全考虑:</b>

包文件包含符合XML1.0规范、构造良好的XML。 

显然，可以加塞恶意文件，比如包含异常数据。绝大部分XML解析器都通过强化规范来免受攻击。 

所有读取包文件的处理程序都应该严格检查提取数据的大小和合法性。 

EPUB出版物3.0标准目前没有在包文件格式里提供加密、签字或授权。

交互可操作性考虑:
    无

已出版的规范:
    本媒体类型注册是用于EPUB包文件，说明见[Publications 3.0 specification](http://www.idpf.org/epub/301/spec/epub-publications.html EPUB)（EPUB出版物3.0标准）。 
    EPUB出版物3.0规范取代[Open Packaging Format 2.0.1规范](http://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm)，它也使用application/oepbs-package+xml媒体类型。 
 
使用本媒体类型的应用程序：
    本媒体类型广泛应用于EPUB格式的电子书的发行。下面的应用清单未囊括所有的。 
        Adobe Digital Editions
        Aldiko
        Azardi
        Apple iBooks
        Barnes & Noble Nook
        Calibre
        Google Books
        Ibis Reader
        MobiPocket reader
        Sony Reader
        Stanza

其它信息:

    Magic number(s)魔术数字:
        无

    File extension(s)文件扩展名:
        .opf

    Macintosh文件类型码，Macintosh File Type Code(s):
        TEXT

碎片识别符，Fragment Identifiers:  

IDPF在http://idpf.org/epub/linking/对注册的连接方案进行维护。有些方案定义解决到application/oebps-package+xml文件的自定义碎片识别符。 

更多信息的联系人和电子信箱：

    William McCoy, bmccoy@idpf.org

用途：

    公用 

作者/变更控制人 

    International Digital Publishing Forum (http://www.idpf.org)

# C. 致谢与贡献者

本附录是说明性质的（略）。
