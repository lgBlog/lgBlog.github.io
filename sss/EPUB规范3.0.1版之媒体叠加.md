[原文](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html)、[旧版本](http://idpf.org/epub/30/spec/epub30-publications.html#refOverlays3)  

## Overview，概述  
### Purpose and Scope，目的与范围  
本节是说明。  

本规范，即EPUB媒体覆盖3.0.1，为了同步音频和EPUB内容文件的表达，对[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)（Synchronized Multimedia Integration Language，多媒体同步集成语言）、包文件（[Package Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-package-document)）、EPUB®样式表（[EPUB®Style Sheet]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-stylesheet)）和EPUB内容文件（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）加以规范。  

本规范是构成EPUB3的一组相关规范中的一个，是用于以XML和Web标准为基础的数字出版物进行交换和传递格式的第三次重大修订。对本规范的阅读、理解不能离开构成EPUB3的其它规格：   
*   EPUB3 Overview，EPUB3概述（[EPUB3Overview](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Overview)），提供关于EPUB的信息概述和到其它三个EPUB文件的路线图。应首先阅读EPUB3概述。  
*   EPUB Publications3.0.1，出版物301（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），为EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的每个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)定义语义和总体合规要求。   
*     EPUB内容文档3.0.1（[ContentDocs301](http://idpf.org/epub/30/spec/epub30-publications.html#refContentDocs3)，为用于EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）内容的XHTML，SVG和CSS加以定义。   
*     EPUB Open Container Format（OCF）3.0.1，开放容器格式3.0.1（[OCF301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refOCF3)），为封装一组相关的资源到一个单一文件（ZIP）的EPUB容器（[EPUB Container](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-container)）对格式和处理模型进行定义。  

### Relationship to Other Specifications，与其它规范的关系  

本节是说明。 

本规范依赖于[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)的一个子集，自其派生出EPUB媒体叠加的元素和属性，定义见[Media Overlay Document Definition](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-overlays-def)。  
 
### Terminology，术语  
#### EPUB Publication，EPUB出版物  
打包在[EPUB Container(EPUB容器)]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)里的含有一个或者多个[Rendition(渲染)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition)的集合，符合本规范及其[配套规范]( http://www.idpf.org/epub/301/spec/epub-publications.html#sibling-specs)。  

#### Rendition，渲染  
逻辑文件的一个实体，由一组相互关联的资源（[resources](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-publication-resource-cmt-or-foreign)）组成，表达对某个EPUB出版物的特定处理。  
  
#### Publication Resource，出版物资源  
包含内容或指令的资源，它对EPUB出版物的至少一个Rendition贡献逻辑和渲染方式。缺了这些资源，出版物的处理有可能不是[Author(作者)]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-author)所打算的。出版物资源的例子有包文件（[Package Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-package-document)、EPUB内容文件（[EPUB Content Documents]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub)）、EPUB 样式表（[Style Sheets]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-stylesheet)）、音频、视频、图像、嵌入字体和脚本。  
除了包文件本身，用作处理某个Rendition所需的出版物资源列在该Rendition的[manifest]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)，并且打包在[EPUB Container]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)文件里（除非在[Publication Resource Locations]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations)（[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）另有规定）。   
不是出版物资源的资源例子包括：Package Document [link](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem) （[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）元素所指定的，以及在向外打开的超链接里指定、在EPUB容器外面落实的资源
（例如，由[HTML5]( http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)元素的href属性引用的）。  

#### EPUB Content Document，EPUB内容文件   
符合EPUB内容文件（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）定义之一（[XHTML]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml) 或 [SVG]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-svg)）的出版物资源。  
EPUB内容文件是核心媒体类型（[Core Media Type]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-core-media-type)）类型资源，因此可以不加[fallbacks]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow) （[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）就放入EPUB出版物。  

#### XHTML Content Document，XHTML内容文件   
符合[HTML5]( http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)描述，定义在[XHTML Content Documents]( http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml)（[ContentDocs301]( http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的EPUB内容文件（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）。  
XHTML内容文件使用HTML5的[XHTML syntax]( http://www.w3.org/TR/html5/Overview.html#the-xhtml-syntax)语法。  

#### SVG Content Document，SVG内容文件   
符合[SVGContent Document]( http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg) （[ContentDocs301]( http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里所列明之限制的EPUB内容文件。   

#### EPUB Navigation Document，EPUB导航文件   
专门的XHTML内容文件，内含人、机可读的全球导航信息，符合[EPUB Navigation Documents] (http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav)（[ContentDocs301]( http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里面所写的限制。  
  
#### Core Media Type，核心媒体类型  
一组不需要fallback的出版物资源类型。更多信息请参[Publication Resources]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) （[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）。   

#### Package Document，包文件  
如[Package Documents]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-documents) （[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）所定义的出版物资源，带有关于EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的某个rendition的书目和结构的元数据。  
 
#### Manifest，仓单  
所有出版物资源的列表，它们构成某个EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的规定rendition。 
更多信息请参[Manifest]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem) （[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）。  

#### Spine，书脊  
出版物资源--EPUB内容文件（[Content Documents]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub)）就是典型例子--的有序列表，代表出版物的给定rendition的默认阅读顺序。  
更多信息请参[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem)（[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）。  

#### Media Overlay Document，媒体叠加文件  
属于XML文件，它把XHTML内容文件（[XHTML Content Document]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml)）与事先录制的旁白声频相关联，以便同步播放，如本节所定义。  

#### Text-to-Speech (TTS)，文本到语音   
使用合成声音对EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的文本内容进行处理。  

#### EPUB Style Sheet (or Style Sheet)，EPUB样式表   
是符合[EPUB Style Sheets]( http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css) （[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）定义的CSS样式表。  

#### Viewport，视口  
EPUB阅读系统（[EPUB Reading System]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-reading-system)）的一个区域，通过它EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）可视化地呈现给用户[User]( http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-user)。  

#### CSS Viewport，CSS视口  
能够显示CSS样式化内容的视口（[Viewport]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-viewport)）。  

#### EPUB Container (or Container)，EPUB容器   
用于EPUB出版（[Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）、基于ZIP的打包与发行格式，定义在[OCF3]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refOCF3)。  

#### Author，作者   
负责生成EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的人或组织，不一定是所含内容或资源的创作者。  

#### User，用户  
使用EPUB阅读系统消费EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的个体。   

#### EPUB Reading System (or Reading System)，EPUB阅读系统   
按照与EPUB3本规范及其[配套规范]( http://www.idpf.org/epub/301/spec/epub-publications.html#sibling-specs)相符的方式将EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）呈现给用户的系统。  

###Typographic Conventions，排字约定  
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
“术语”里定义的术语（[Terminology]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-terminology)）要大写。  
术语定义的链接，用蓝色下划线虚线。只链接每节的第一个实例。  
	  规范性元素、attributes和properties定义，放在蓝色文本框里。  

说明性的标记例子放在白色文本框。  

	 注  
	 说明性标注放在黄色文本框里，以“注”开头。  

	 小心  
	 说明性警示放在红色文本框里，以“小心”开头。   

### Conformance Statements，合规声明  
本文件的关键字"MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL"（“必须”，“不可”，“要求”，“应该”，“不要”，“应该”，“不应该”，“推荐”，“可能”，和“可选”）应该按照[RFC2119](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refRFC2119)的描述进行解读。

本规范的所有章节，除非标有“本节为说明性内容”的，都是规范性的。加给章节的说明状态适用于所有它们包含的内容和小节。

本规范的所有例子都是说明性的。

## Namespace prefix mappings，命名空间前缀映射  
为了方便，本规范全部使用下面的命名空间前缀映射（[XMLNS]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXMLNamespaces)）：  

前缀            |       命名空间URI  
***  
Epub            |     http://www.idpf.org/2007/ops  

## Media Overlay Document Definition，媒体叠加文件定义  

### Introduction，简介  

本节只是说明 

带有同步声频叙述特色的书见于为阅读阻碍人士（制作）的主流电子书、教育工具和电子书格式。在EPUB3，这些类型的书使用媒体叠加文件来制作，对预录制的声频叙述描述定位、以及如何与EPUB内容文件标记相关联。媒体叠加的文件格式被定义为[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)的子集，这是W3C推荐用于在XML里同步多媒体信息的。  

媒体叠加功能的设计，对不支持该功能的EPUB阅读系统是透明的。在EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的[rendition]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-rendition)里添加媒体叠加，并不影响那些不识别媒体叠加的阅读系统把该出版物作为“正常的”EPUB出版物进行渲染的能力。  

虽然本规范的将来版本有可能合并对视频媒体的支持（如，同步化的文本/手语书），本版本只支持EPUB内容文件和声频媒体的同步。  

### Content Conformance 内容合规  

一个媒体覆盖文件（[Media Overlays document](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-media-overlay-document)）必须满足以下所有指标： 

文件属性（Document Properties）  
    › 必须满足XML合规[XML Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-xml-constraints)（[Publications301]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）里面为XML文件定义的约束  
    › 对于附录[Appendix A, Media Overlays Schema](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#app-overlays-schema)里面定义的媒体叠加schema必须是有效的，并且符合（媒体叠加文件[Media Overlay Document Definition](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-overlays-def)）里面的所有内容合规约束。  
    › 它的成书必须体现，如[Structure](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-media-overlays-structure)所说的，与其关联的EPUB内容文件的结构。   
    › 作者（[author]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-author)）必须避免使用脚本来控制嵌入在EPUB内容文件里面的视频、声频，见[Embedded Audio and Video](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-audio-video)所述的。  
    › 它应该按照[Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)所描述的在合适的地方使用语义标记。  
    › 它必须按照[Packaging](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-package)所示意的和EPUB出版物（[EPUB Publication]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）打包在一起。  

文件属性（File Properties）  
    › 媒体叠加文件的文件扩展名应该使用.smil。  

### Reading System Conformance，阅读系统合规条件  
[EPUB阅读系统]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-reading-system)对媒体叠加的支持是可选性质的。支持媒体叠加的阅读系统模型满足下面所有的条件：  
    › 它处理媒体叠加文件，必须符合[Media Overlay Document Definition]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-overlays-def)里面所表达的全部阅读系统合规约束。  
    › 它必须支持[XHTML内容文件]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub-xhtml)，可以支持[SVG内容文件]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub-svg)。  
    › 必须按照Basic Playback所描述的渲染媒体叠加元素。  
    › 如[Navigation](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-rsconf-navigation)里讨论的，它必须允许用户在媒体叠加被播放的时候可以导航。  
    › 它必须，如[Embedded Audio and Video](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-embedded-media)所述的，遵守嵌入在[EPUB内容文件]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)里引用的视频、声频的相关规则（It must adhere to rules
      regarding referenced audio and video embedded in the EPUB Content Document, as stated in Embedded Audio and Video）。
    › 带[TTS]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-tts)功能的阅读系统必须符合[Reading System Text-to-Speech Conformance Requirements]( http://www.idpf.org/epub/301/spec/epub-publications.html#confreq-rs-epub3-tts)（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  
    › 它必须提供[Skippability and Escapability]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-behaviors-skip-escape)所描述的可跳过、退出功能。  

不支持媒体叠加的阅读系统模型满足下面所有的条件：  
    › manifest里面item元素的media-overlay属性，以及manifest里面media-type属性值等于application/smil+xml的item元素，它都必须忽略。  

### Media Overlay Document Definition，媒体叠加文件定义  
除了专门说明外，本节所有的元素（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)）都在命名空间（[XMLNS](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXMLNamespaces)）：http://www.w3.org/ns/SMIL  

#### smil，元素  
元素smil必须是所有媒体叠加文件的根元素。  
>  元素名称  
>          smil      

>  用法   
>          smil是媒体叠加文件的根元素。      

>  属性  
>          version[要求]  
>          指定媒体叠加所属[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)规范的版本号  
>          这个属性必须有“3.0”的值，表明与本规范相符。  
>          id[可选]  
>          本元素的ID（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)），在文件内部必须唯一。   
>          epub:prefix[可选]  
>          声明更多的元数据词汇前缀。  
更多信息请参考[Semantic Inflection]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)。  

>  内容模式   
>        按照这个顺序：[head]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-head)[可选]，[body]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)[要求]  

#### head，元素  
Head元素是媒体叠加文件里面对元数据的容器，并且含有含有0或者一个metadata子元素。  

>  元素名称  
>       head      

>  用法   
>        元素head是[smil]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil)元素的第一级子元素，可选  

>  属性  
>         无  

>  内容模式   
>        [metadata]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-metadata) [0，或者1]  

由于本规范没要求媒体叠加文件里面必须出现metadata属性，所以这个head元素是可选的。  
#### metadata，元素  
元素metadata代表对媒体叠加文件的元数据。元素metadata上一个扩展点，借此可以接入来自结构化语音meta信息的任何元数据。  

>  元素名称  
>        metadata     

>  用法   
>       作为[head]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-head)[可选]元素的子元素      

>   属性  
>   无   

>   内容模式   
>         [0，或者多个]个来自任何命名空间的元素   

本规范没要求媒体叠加文件里面必须出现metadata属性；提供这个metadata元素用于（满足）定制metadata之需。  

#### body，元素  
元素body是媒体叠加文件里面（内容）的表达起始点。它含有par元素和seq元素的主要顺序。  

>  元素名称  
>        body     

>  用法   
>        是[smil]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil)元素的第二級子元素，必须有。     

>  属性  
>        epub:type[可选]  
>        EPUB 内容文件（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）里对应元素的结构化语义表达。  
>        其值是由空格隔开的属性（[property]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）类型列表。更多信息请参考[Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)。   
>         ID[可选]  
>         本元素的ID（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)），在文件内部必须唯一。 
>        epub:textref[可选]  
>          对应EPUB内容文件的相对IRI引用（[RFC3987]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refRFC3987)），包括碎片标示符，就是按照[XPTRSH]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXPTRSH)引用具体元素的。  

>  内容模式   
>         任意顺序：[seq]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)[0或者多个]，[par]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)[0或者多个]。至少需要有一个par或者seq。  

#### seq，元素  
元素seq含有有待顺序播放的媒体对象。  
>  元素名称  
>       seq      

>  用法   
>       可以有1或者多个seq作为[body]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)元素和[seq]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)元素的子元素出现。      

>  属性  
>        epub:type[可选]  
>        EPUB 内容文件（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）里对应元素的结构化语义表达。  
>        其值是由空格隔开的属性（[property]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）类型列表。更多信息请参考[Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)。   
>         ID[可选]  
>         本元素的ID（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)），在文件内部必须唯一。  
>        epub:textref[要求]  
>          对应EPUB内容文件的相对IRI引用（[RFC3987]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refRFC3987)），包括碎片标示符，就是按照[XPTRSH]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXPTRSH)引用具体元素的。  

>  内容模式   
>         任意顺序：[seq]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)[0或者多个]，[par]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)[0或者多个]。  
至少需要有一个par或者seq。  

#### par，元素   
元素par含有有待并列渲染的媒体对象。  
>  元素名称  
>       par      

>  用法   
>       可以有1或者多个par作为[body]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)元素和[seq]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)元素的子元素出现。      

>  属性  
>        epub:type[可选]  
>        一个结构化语义表达，对应于（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）里的结构化元素。  
>        值乃由空格隔开的属性（[property]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-property-datatype)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）类型列表。更多信息请参考[Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)。   
>         ID[可选]  
>         本元素的ID（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)），在文件内部必须唯一   

>  内容模式   
>         任意顺序：[text]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)[要求]和[audio]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-audio)[可选]。  
只有在[text]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素指向音频或者视频的时候（见[Embedded Audio and Video](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-audio-video)），或者是指向有待[TTS]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-tts)朗读的文本内容的时候，元素 [audio]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-audio)才是可选的。  
 
#### text，元素   
元素text引用EPUB内容文件（[EPUB Content Document]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）里面的一个元素。通常text元素都是引用文本元素，不过也可以引用EPUB内容文件的其它媒体元素（见[Embedded Audio and Video](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-audio-video)）。  
>  元素名称  
>       text      

>  用法   
>       作为[par]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)元素要求的一个子元素。      

>  属性  
>        src [要求]  
>          对应EPUB内容文件的相对IRI引用（[RFC3987]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refRFC3987)），包括碎片标示符，就是按照[XPTRSH]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXPTRSH)引用具体元素的。  
>         ID[可选]  
>         本元素的ID（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)），在文件内部必须唯一  

>  内容模式   
>         无  

#### audio，元素      
元素audio代表一个音频剪辑。  

>  元素名称  
>       audio      

>  用法    
元素[par]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)的必须的子元素，除非配套的[text]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素指向音频或者视频（这时候是可选的，见[Embedded Audio and Video](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-audio-video)）。   
>  属性  
>         ID[可选]  
>         本元素的ID（[XML]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)），在文件内部必须唯一  
>        src [要求]  
>          对应EPUB内容文件的相对IRI引用（[RFC3987]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refRFC3987)），包括碎片标示符，就是按照[XPTRSH]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXPTRSH)引用具体元素的。  

>  clipBegin [可选]  
一个时钟值，指定从音频剪辑的开始位置进入的偏移量。   
时钟值是[SMIL clock values]( http://www.w3.org/TR/SMIL/smil-timing.html#q22)的子集。见[附录B.时钟值例子]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#app-clock-examples)。  
>  clipEnd [可选]   
一个时钟值，指定从音频剪辑的结束位置进入的偏移量。   
时钟值是[SMIL clock values]( http://www.w3.org/TR/SMIL/smil-timing.html#q22)的子集。见[附录B.时钟值例子]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#app-clock-examples)。  
结束位置的偏移量必须在clipBegin指定的开始偏移量之后。  
>  内容模式   
>         无  
 
# Creating Media Overlays，生成媒体叠加  
## Overview，概述  

本节是说明信息  

预先录制的出版物旁白可以表达为一个音频剪辑系列，每一个对应[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的一部分。例如，一个单一的音频剪辑，通常表示一个单一的短语或段落，但不提示相对于其它剪辑或文本文件的次序。借助[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)标记，将结构化的音频解说联系到[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里的对应文本（或其它媒体），媒体叠加解决了这一同步问题。媒体叠加其实是SMIL3.0的简化子集，允许对这些片段的播放顺序加以定义。  
 
主要用于媒体叠加结构的SMIL元素有[body](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)（用于主序列），[seq](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)（序列）和[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)（平行）（关于这些元素和其它元素的详细信息，请参阅[Media Overlay Document Definition](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-overlays-def)）。  

[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)元素是叠加的基础构件，并且和[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)中的一个短语相对应。元素为内容同步提供了两个关键信息：1）含有对短语进行叙述的音频剪辑；以及2）指向[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)关联片段的指针。[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)元素使用两个媒体子元素来代表这样的信息：[audio](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-audio)元素和[text](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素的子元素。由于各个[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)元素对其子元素平行渲染，音频剪辑和[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)片段同时播放，产生同步演示。  
  
text元素的src属性引用关联的短语、句子，或EPUB内容文件的其它IRI引用片段。类似的，audio元素的src属性引用对应音频剪辑的位置，并增加了可选的[clipBegin](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#attrdef-smil-clipBegin)和[clipEnd](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#attrdef-smil-clipEnd)属性在剪辑里指定具体的位置。  

**以下例子显示对一个短语或句子的媒体叠加标记。**   
```
<par>                        
    <text src="chapter1.xhtml#sentence1"/>
    <audio src="chapter1_audio.mp3" clipBegin="23s" clipEnd="30s"/>
</par>
```
 
各个[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)元素按照顺序放在一起，形成短语或句子的一个系列。并不是[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的每个元素在媒体叠加里都有对应的[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)元素，只是那些和音频旁白相关的元素才有。  

**下面的例子显示含有短语系列的一个基本媒体叠加文件。[body](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)元素起整个文件主次序的作用。**   
```
<smil xmlns="http://www.w3.org/ns/SMIL" 
      version="3.0">
    <body>
        <par id="par1">
            <text src="chapter1.xhtml#sentence1"/>
            <audio src="chapter1_audio.mp3" clipBegin="0s" clipEnd="10s"/>
        </par>
        <par id="par2">
            <text src="chapter1.xhtml#sentence2"/>
            <audio src="chapter1_audio.mp3" clipBegin="10s" clipEnd="20s"/>
        </par>
        <par id="par3">
            <text src="chapter1.xhtml#sentence3"/>
            <audio src="chapter1_audio.mp3" clipBegin="20s" clipEnd="30s"/>
        </par>
    </body>
</smil>
```
par元素也可以添加到seq元素，用于定义章节这样的复杂结构(见[Structure](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-media-overlays-structure))。  

## Relationship to the EPUB Content Document，和EPUB EPUB内容文件的关系  
     
    注  
本节假设[EPUB Content Document](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)是[XHTML内容文件](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub-xhtml)。虽然媒体叠加可以和[SVG内容文件](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub-svg)一起使用，但是播放行为有可能不连续，因此不能够保证相互操作性。  

### Structure，结构  

媒体叠加元素的排序必须和[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的默认阅读顺序相一致。par元素表达短语，[seq](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)元素（序列）表达嵌套的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)容器，如小节、旁白、标题和脚注。
seq的子元素必须是其它的seq或par元素。每个seq元素必须包含一个[epub:textref](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#attrdef-body-textref)属性，它通过IRI引用[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的对应元素。  

**下面的例子说明嵌套seq元素的媒体叠加文件，表达既有标题也有侧栏的一章。侧栏本身有嵌套图。**  
```
<smil xmlns="http://www.w3.org/ns/SMIL" 
      xmlns:epub="http://www.idpf.org/2007/ops"
      version="3.0">
    <body>

        <!-- a chapter -->
        <seq id="id1" epub:textref="chapter1.xhtml#sectionstart" epub:type="chapter">

            <!-- the section title -->
            <par id="id2">
                <text src="chapter1.xhtml#section1_title"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:23:23.84" clipEnd="0:23:34.221"/>
            </par>

            <!-- some sentences in the chapter -->
            <par id="id3">
                <text src="chapter1.xhtml#text1"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:23:34.221" clipEnd="0:23:59.003"/>
            </par>
            <par id="id4">
                <text src="chapter1.xhtml#text2"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:23:59.003" clipEnd="0:24:15.000"/>
            </par>

            <!-- an informational sidebar -->
            <seq id="id5" epub:textref="chapter1.xhtml#sidebar" epub:type="sidebar">
                <par id="id6">
                    <text src="chapter1.xhtml#sidebartitle"/>
                    <audio src="chapter1_audio.mp3" clipBegin="0:24:15.000" clipEnd="0:24:18.123"/>
                </par>

                <!-- a figure within the sidebar -->
                <seq id="id7" epub:textref="chapter1.xhtml#figure">
                    <par id="id8">
                        <text src="chapter1.xhtml#photo"/>
                        <audio src="chapter1_audio.mp3" clipBegin="0:24:18.123" clipEnd="0:24:28.764"/>
                    </par>
                    <par id="id9">
                        <text src="chapter1.xhtml#caption"/>
                        <audio src="chapter1_audio.mp3" clipBegin="0:24:28.764" clipEnd="0:24:50.010"/>
                    </par>
                </seq>

                <!-- some sentences in the sidebar -->
                <par id="id10">
                    <text src="chapter1.xhtml#sidebartext1"/>
                    <audio src="chapter1_audio.mp3" clipBegin="0:24:50.010" clipEnd="0:25:28.530"/>
                </par>
                <par id="id11">
                    <text src="chapter1.xhtml#sidebartext2"/>
                    <audio src="chapter1_audio.mp3" clipBegin="0:25:28.530" clipEnd="0:25:45.515"/>
                </par>
            </seq>

            <!-- more sentences in the chapter (outside the sidebar) -->
            <par id="id12">
                <text src="chapter1.xhtml#text3"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:25:45.515" clipEnd="0:26:30.203"/>
            </par>
            <par id="id13">
                <text src="chapter1.xhtml#text4"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:26:30.203" clipEnd="0:27:15.000"/>
            </par>

        </seq>
    </body>
</smil>
```

	 注  
	 	把侧栏、小节标题、图、表和脚注这样的结构归类在[seq](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)元素里面的理由，是为了使它们的起止位置能够在播放过程中得以识别。然后阅读系统可以为出版物剪裁出播放选项，比如跳过一个长侧栏，关闭对分页声明的渲染（见[Skippability and Escapability](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-behaviors-skip-escape)），或为适应表格这样的结构定制阅读模式。    

**下面的例子显示对应于[前面媒体叠加例子](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#example-mo-nesting)的EPUB出版物文件。**  
```
<html xmlns="http://www.w3.org/1999/xhtml" 
      xmlns:epub="http://www.idpf.org/2007/ops" 
      xml:lang="en" 
      lang="en">
    <head>
        <title>Media Overlays Example of EPUB Content Document</title>
    </head>
    <body id="sec1">
        <section id="sectionstart" epub:type="chapter">
            <h1 id="section1_title">The Section Title</h1>
            <p id="text1">The first phrase of the main text body.</p>
            <p id="text2">The second phrase of the main text body.</p>
            <aside id="sidebar" epub:type="sidebar">
                <h2 id="sidebartitle">The Sidebar Title</h2>
                <figure id="figure">
                    <img id="photo" 
                         src="photo.png" 
                         alt="a photograph for which there is a caption" />
                    <figcaption id="caption">The photo caption</figcaption>
                </figure>
                <p id="sidebartext1">A phrase in the sidebar.</p>
                <p id="sidebartext2">Another phrase in the sidebar</p>
            </aside>
            <p id="text3">The third phrase of the main text body.</p>
            <p id="text4">The fourth phrase of the main text body.</p>
        </section>
    </body>
</html>
```

### Granularity，精细度  

本节只是说明  

媒体叠加的[text](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素的src属性通过它们的ID（[XML](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)）指向[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的元素。因此媒体叠加的精细程度取决于EPUB是怎么样标记的。如果标记的最小级别是段落，那么，这就是媒体叠加同步能够作成的最细级别。同样的，如果有分段标记，如[HTML5](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refHTML5)里表达短语或句子的[span](http://www.w3.org/TR/html5/Overview.html#the-span-element)元素，则在媒体叠加里可以实现更小的精细度。当用户按照字、词进行导航，以及搜索文本的时候，教小的精细度给用户更精确的结果用于同步播放。当然，这也增加了媒体叠加文件的大小。  

### Embedded Audio and Video，嵌入的音频、视频  

任何媒体叠加相关联的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)都可以包含嵌入的媒体，如视频、音频和图像。媒体叠加的text元素，通过其ID（[XML](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)）值，可在这种情况下用于对嵌入媒体的引用。   

当[text](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素引用包含音频的嵌入媒体的时候，不需要audio姊妹元素。  

对于引用的嵌入式[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)媒体，作者应避免使用脚本来控制其播放，因为这样做有可能与媒体叠加的播放行为相冲突。  

### Text-to-Speech，语音合成  

除了预录制的音频剪辑，本规范还允许使用语音合成(TTS)。当不带audio姊妹元素的text媒体叠加元素在目标[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里引用某个元素的时候，被引用的元素的内容必须适合于TTS渲染。例如，它可以是文本的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素，或含有文本备选。

## Semantic Inflection，语义变化  

为了表达语义的变化，可以把[epub:type属性](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-epub-type)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refContentDocs3)）加到媒体叠加的[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)、[seq](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)和[body](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)元素。

对媒体叠加epub:type属性值的限制，与[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的epub:type属性完全一样。有关详细信息请参看[XHTML Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refContentDocs3)，[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refContentDocs3)。  

epub:type属性为阅读系统提供了行为，适用于指定的语义类型。这些行为的例子是"可跳过"、“可退出”[Skippability and Escapability](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-behaviors-skip-escape)和[Table Reading Mode](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#note-table-reading-mode)（表格阅读模式）。  

**下面的例子显示用于含有侧栏的媒体叠加的语义标记**
```
<smil xmlns="http://www.w3.org/ns/SMIL" 
      xmlns:epub="http://www.idpf.org/2007/ops"
      version="3.0">
    <body>
        <seq id="id1" epub:textref="chapter1.xhtml#sidebar" epub:type="sidebar">
            <par id="id2">
                <text src="chapter1.xhtml#sidebartitle"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:24:15.000" clipEnd="0:24:18.123"/>
            </par>
            <par id="id3">
                <text src="chapter1.xhtml#sidebartext1"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:24:18.123" clipEnd="0:24:38.530"/>
            </par>
            <par id="id4">
                <text src="chapter1.xhtml#sidebartext2"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:24:38.530" clipEnd="0:25:00.515"/>
            </par>
        </seq>
    </body>
</smil>
```

本规范不加修改地采纳[Vocabulary Association](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-vocab-association)里面定义的词汇关联机制。[默认词汇](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-contentdocs-default-vocab) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refContentDocs3)）里面的术语在媒体叠加里使用，不得加前缀。  

## Associating Style Information，关联样式信息  

当前播放的[EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素的视觉渲染信息，可以使用作者定义的类在[EPUB Style Sheets](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css)里加以表达。作者定义的这个类的名称应在包文件的元数据里，使用元数据的[active-class](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#active-class)和[playback-active-class](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#playback-active-class)属性进行声明。这样，类名就能够被阅读系统发现。  

本例演示作者可以可把样式信息与当前播放的[EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素相关联。  

   注意  
   虽然这个例子中使用-epub-media-overlay-active -epub-media-overlay-playing和类名，任何类名都是可以的。所选取的类名可以和所有被支持的CSS功能一起使用。  

**作者定义的CSS类名，使用元数据的[active-class](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#active-class)和[playback-active-class](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#playback-active-class)属性在包文件里进行声明。**   

<meta property="media:active-class">-epub-media-overlay-active</meta>  

**EPUB样式表，含有作者定义的类名：**  
```
.-epub-media-overlay-active
{
    background-color: yellow;
}
```

**相关EPUB内容文件节选：**
```
<span id="txt1">This is the first phrase.</span>
<span id="txt2">This is the second phrase.</span>
<span id="txt3">This is the third phrase.</span>
```

在本例，阅读系统把作者定义的类-epub-media-overlay-active，当其在播放过程中变成活动状态的时候，应用到[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的每个文本元素。反过来，当它不再是活动状态的时候,类名称就会被移去。用户会看到每个[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素在其整个播放过程中成黄色背景样式。  
当媒体叠加开始播放的时候，阅读系统应该把作者定义的-epub-media-overlay-playing类用到EPUB内容文件的文件元素。播放停止的时候，类名也就移去。在XHTML内容文件的情况下，类名会应用到html元素。在SVG内容文件的情况下，类名会应用到svg元素。媒体叠加播放的时候，用户会看到非活动状态的文本元素变成灰色。播放停止的时候，元素的颜色会回到默认色。  

## Packaging，打包  
### Including Media Overlays，添加媒体叠加  
[包文件](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-package-document)里Manifest的[item元素](http://www.idpf.org/epub/301/spec/epub-publications.html#elemdef-package-item)（[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）可以通过[media-overlay](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-item-media-overlay)属性指定媒体叠加。媒体叠加本身就是manifest的项目，必须通过它们的ID（[XML](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)）对它们进行引用。  

**下面的例子说明如何在包文件的manifest里包含媒体叠加。**  
```
<manifest>
    <item id="ch1" 
          href="chapter1.xhtml" 
          media-type="application/xhtml+xml" 
          media-overlay="ch1_audio"/>
    <item id="ch1_audio" 
          href="chapter1_audio.smil" 
          media-type="application/smil+xml"/>
</manifest>
```

引用媒体叠加的Manifest项目必须如[Core Media Types](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-core-media-types)（[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）规定的具有application/smil+xml媒体类型。  

media-overlay属性必须附加到只引用[EPUB Content Document](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)的manifest项目。  

单个媒体叠加文件可以引用不止一个[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)，但是一个[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)不得被多个媒体叠加文件所引用。  
 
并非每个[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)manifest的item都需要一个媒体叠加与之相关联。如果一个EUB内容文件全部或部分地被媒体叠加所引用，那么其manifest的item条目必须通过media-overlay属性来加以指明。  

本特性向前兼容：2.0版本的阅读系统可以安全地忽略media-overlay属性，并且按照自己的正常方式处理文件。  

### Media Overlays Metadata Vocabulary，媒体叠加元数据词汇  
 
以下两个表都定义一组属性，用于包文件元数据，并且构成可引用的词汇。  

引用这个词汇的基础IRI是：http://www.idpf.org/epub/vocab/overlays/#  

   注意  
   “[media:](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-reserved-vocabs)”前缀（[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）被保留，用于在包元数据中包含这些属性。  

›**active-class**
 说明:	作者定义的CSS类名称，用于当前播放的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素。  
 许可值:	xsd:string  
 基数:	0或1个
 例子:	<meta property="media:active-class">-epub-media-overlay-active</meta>

›**duration**  
 说明:	整个演示或特定媒体叠加的时长。指定的时长针对著作时已知的声频剪辑，因此不包括来自外部资源和语音合成的实况流。
 许可值:	时钟值是[SMIL clock values](http://www.w3.org/TR/SMIL/smil-timing.html#q22)的子集，定义在[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)。见附录[B, Examples of Clock Values](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#app-clock-examples)。  
 基数:	对出版物和每个媒体叠加，正好1个（Exactly one for the Publication and for each Media Overlay）。  
 例子:	<meta property="media:duration">1:36:20</meta>

›**narrator**  
 说明:	旁白人。  
 许可值:	xsd:string  
 基数:	0或1个  
 例子:	<meta property="media:narrator">Joe Speaker</meta>  

包文件必须包含每个媒体叠加以及整个出版物的时长。包文件也可以包含旁白人的信息，尤其是当每个媒体叠加都有各自的旁白人或为整个出版物指定了一个旁白人的时候。包文件也可以包含作者自定义的CSS类名称，它用于当前播放的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素。  

包文件必须包括各媒体叠加以及整个出版物的期限。包文件可能包括叙述者在特定的信息，以及时，每个媒体叠加有其自己的旁白，或有一个叙述者为整个出版物指定。包文件可能还包括一个作家定义的CSS类名被应用到当前播放的[EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素。  

当一个meta元素专属单一媒体叠加文件的时候，about属性被用来引用具体哪一个。没有about属性的meta元素被视为整个出版物的。active-class属性不得与about属性一起使用，因为它总是被认为用于整个出版物。  

**下面的例子说明带有关于媒体叠加元数据的包文件**  

```
<package>
    <metadata>
        …        
        <meta property="media:duration" refines="#ch1_audio">0:32:29</meta>
        <meta property="media:duration" refines="#ch2_audio">0:34:02</meta>
        <meta property="media:duration" refines="#ch3_audio">0:29:49</meta>
        <meta property="media:duration">1:36:20</meta>
        <meta property="media:narrator">Joe Speaker</meta>
        <meta property="media:active-class">-epub-media-overlay-active</meta>
        …
    </metadata> 
    …
</package>
```

## Playback Behaviors，播放行为  

### Loading the Media Overlay，加载媒体叠加  
EPUB阅读系统加载包文件时，它必须参考manifest里面各个[item](http://www.idpf.org/epub/301/spec/epub-publications.html#elemdef-package-item)元素的media-overlay属性来发现用于[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的相应媒体叠加。媒体叠加元素开始播放（的位置），必须对应于期待播放的[EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的起始点。请注意，[EPUB EPUB内容文件](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)的开始点，可以对应于媒体叠加的开始或中间。当媒体叠加文件播放完毕，阅读系统应该载入下一个[EPUB EPUB内容文件](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)（由包文件[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem)指定的），并载入其相应的媒体叠加文件，假如提供有的话。  

### Basic Playback，基本播放  

#### Timing and Synchronization，定时与同步  

阅读系统必须按顺序渲染[body](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)元素的直接子元素。[seq](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-seq)元素的子元素必须按顺序渲染，在最后一个子元素播放完毕的时候，播放结束。par元素的子元素必须并列渲染（大家同一时间开始），在所有的子元素播放完毕的时候，播放结束。当[body](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-body)元素的最后一个子元素播放完毕时，媒体覆盖文件的播放结束。  

#### Rendering Audio，渲染音频  

遇到媒体叠加[audio]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-audio)元素时，阅读系统必须播放src属性所引用的音频资源，由[clipBegin]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#attrdef-smil-clipBegin)属性给出的剪辑偏移时间开始、并在由[clipEnd]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#attrdef-smil-clipEnd)属性给出的剪辑偏移时间结束。必须遵守以下规则：  

* 如果clipBegin未指定，其值为0。  
* 如果clipEnd未指定，它的值是物理介质的总长时间。  
* 如果clipEnd超过物理介质的总长时间，那么它的值被认为是物理介质的总长时间。  

用户可控的音频播放选项应包括时间比例修改，其中改变播放速率不得扭曲音调。建议的范围是半速到倍速。  

#### Rendering EPUB Content Document Elements，渲染EPUB内容文件元素  

当遇到媒体叠加text元素，阅读系统应确保src属性所引用的[EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)元素在[视口]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-viewport)中可见。带有[CSS Viewport](CSS Viewport])的阅读系统应该把[active-class](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#active-class)元数据属性给出的类名添加到正在播放的[EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)。反过来，当播放状态改变时，类名应该被删除，见[Associating Style Information](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-assoc-style)。  

active-class和playback-active-class元数据属性是可选的，如果省略，阅读系统的行为则取决于实施。  

### Interacting with the EPUB Content Document，与EPUB内容文件交互  
#### Navigation，导航  

由于媒体叠加和[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)密切相关，根据媒体叠加播放当前的所在位置，阅读系统很容易在[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里定位。如果用户暂停同步播放，导航到出版物的另一个部分，同步播放必须在这一点上恢复。例如，如果[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的具体某页是所需的位置，那么在媒体叠加里找到这个相同点，并且从这里开始播放。  

这个同样的方法允许把用户在EPUB导航文件里选择的导航点和媒体叠加播放同步起来。阅读系统为那个文件加载媒体叠加，并基于导航点目标的ID（[XML](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXML)）找到开始播放的正确点。  
   注  
   媒体叠加文件也可以直接与导航文件关联，以提供其内容的同步播放，甚至不需要在spine里包含它所处的XHTML内容文件。阅读系统应保持导航文件的媒体叠加与用户在[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里面的当前位置同步。   

   注  
   媒体叠加文件元素可以和[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)的表格等结构相关联。阅读系统应保持媒体叠加播放与用户导航里面的表格行和单元格同步。阅读系统也可播放单元格内容之前的对应表头。  

#### Embedded Audio and Video，嵌入的音频和视频   
关联有媒体叠加的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)本身可能包含嵌入式视频和音频媒体，可以用媒体叠加元素指向它们。与文本和图像不同，视频和音频媒体有内在的时长。因此，当阅读系统渲染由媒体叠加所描述的同步时，必须作废嵌在EPUB内容文件的音频和视频媒体的默认播放行为。   

注意下面的规则只适用于关联在EPUB内容文件里引用的（[HTML5](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refHTML5)的）[video](http://www.w3.org/TR/html5/Overview.html#video)或[audio](http://www.w3.org/TR/html5/Overview.html#audio)元素引用。也就是说，规则只适用于在媒体叠加里由[text](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素指向的那些元素（即，通过src属性）。不是由媒体叠加元素引用的嵌入媒体不受这些规则的限制。  

* 所有的嵌入在[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)内的音频和视频媒体引用，都必须有共同的停播界面（通常为：播放/暂停控制，时间滑块，音量等）。要求这种行为是为了避免在媒体叠加里定义的播放顺序，和由于用户互动或执行脚本而产生的任意播放行为发生冲突。因此，当阅读系统在播放模式下，它应该：  

 * 从页面隐藏单个视频/声频的UI控制，它重写[controls](http://www.w3.org/TR/html5/Overview.html#attr-media-controls)属性定义的默认行为。 
 * 禁止嵌入在[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里的脚本调用播放视频/声频的JavaScript API(如，被制作成出版物行为的一部分）。建议内容制作者应该避免出版旨在
      对嵌入的视频/声频媒体进行控制的脚本。这样，出版的媒体叠加能够完全掌控同步演示，而不必冒来自脚本使动的用户行为风险。  

* 所有的嵌入在[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)内的音频和视频媒体引用，都必须初始化到“停播”状态，并且能够从内容流零位置开始播放(有可能显示用[HTML5 poster](http://www.w3.org/TR/html5/Overview.html#attr-video-poster)属性指定的图像)。本要求重写[HTML5 autoplay](http://www.w3.org/TR/html5/Overview.html#attr-media-autoplay)属性定义的默认行为。   

* 当一个EPUB内容文件元素变成活动的，不论那个元素的src属性指向的是何种内容类型，EPUB样式表的可视化高亮规则都起作用(例如，由[active-class](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#active-class)元数据属性定义的CSS类名，应该应用到主[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里的可见音视频播放控制)。  

* 除了为文本片段和图像设置的媒体叠加激活的默认行为，音视频播放还必须根据媒体叠加同步制作者所意味的时长开始和停止（根据标准的[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)定时模式）。有两种可能的情形：  

 * 当媒体叠加text元素在其父容器[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)里没有姊妹元素的时候，引用的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)音频或视频媒体必须播放到结束，在此位置text元素的寿命终止。在这种情况下，  
      text元素的时长（以及通过推论得到父容器[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)的）是引用的音频或视频剪辑的时长。  
 * 当媒体叠加text元素在其父容器[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)里有audio姊妹元素的时候，引用的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)音频或视频媒体的播放时长必须受audio姊妹元素的约束。在这种情况下，父容器[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)的时长  
      是子audio剪辑的时长，而与text元素指向的音频或视频媒体的长度无关。这样的行为有可能导致嵌入的音频或视频媒体提前停止播放（在达到全部时长之前），或在并行媒体
      叠加audio播放完成之前停止(在此情况下，最后播放的媒体画面要保持可见，直到父容器[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)最后结束）。本行为等价于携带（[SMIL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refSMIL)）[endsync](http://www.w3.org/TR/SMIL/smil-timing.html#adef-endsync)属性的媒体叠加audio元素。  
 * 此外，阅读系统应该为用户暴露每个独立音轨的音量控制（即，从媒体叠加的audio元素，从[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里面的嵌入音频或视频媒体），以便于声频输出可以调节到  
      听众的需要。注意，拥有重叠的音轨（overlapping audio tracks）通常是制作时候的考虑：内容制作者为了说明的目的通常为视频音轨添加一层声频信息。  
      建议仔细检查叠加声频的情形，并且在制作阶段予以解决，因为不要求阅读系统以何种特殊方式同时处理多个音量级别。  

*  当一个text元素在媒体叠加里变成不活动，并且它指向嵌入的视频或声频时，被引用的媒体必须设置到初始“停播”状态，并且能够从内容流零位置开始播放（有可能显示经由HTML5标记指定的图像）。  
#### Text-to-Speech，语音合成   
当不带[audio](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-audio)姊妹元素的媒体叠加[text](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-text)元素在目标[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里引用文本的时候，具有语音合成（[TTS]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-tts)）功能的阅读系统应该使用TTS来渲染被引用的文本。  
按照阅读系统合规要求，在目标[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)里提供的和语音有关的信息，应该作为媒体叠加渲染的一部分用来播放音频流。见[Reading System Text-to-Speech Conformance Requirements](http://www.idpf.org/epub/301/spec/epub-publications.html#confreq-rs-epub3-tts)（[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）。  

媒体叠加text元素的寿命对应于相关语音合成的渲染时间。text元素的时长（以及籍推断得到的[par](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#elemdef-smil-par)父元素时长）取决于TTS引擎的执行，并且在创作时间是未知的（语速、暂停和其它韵律参数等因素影响音频输出）。  

### Skippability and Escapability，快进和逸出  
#### Skippability，跳过   

阅读时，[用户]( http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-user)可能需要打开或关闭出版物的某些功能，如侧栏、脚注、页码、或其他类型的次要内容。此功能称为跳过。阅读系统应使用的媒体叠加元素的[epub:type](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)属性所提供的语义信息来确定何时给用户提供跳过的功能选项。在下面的例子中，阅读系统应给用户提供打开和关闭分页/页号的选项。通常听这些东西很烦人。  

**下面的例子显示了有分页的媒体叠加文件**  
```
<smil xmlns="http://www.w3.org/ns/SMIL" 
      xmlns:epub="http://www.idpf.org/2007/ops"
      version="3.0">
    <body>
        <!-- a paragraph -->
        <par id="id1">
            <text src="chapter1.xhtml#para1"/>
            <audio src="chapter1_audio.mp3" clipBegin="0:23:22.000" clipEnd="0:24:15.000"/>
        </par>

        <!-- a page number -->
        <par id="id2" epub:type="pagebreak">
            <text src="chapter1.xhtml#pgbreak1"/>
            <audio src="chapter1_audio.mp3" clipBegin="0:24:15.000" clipEnd="0:24:18.123"/>
        </par>

        <!-- another paragraph -->
        <par id="id3">
            <text src="chapter1.xhtml#para2"/>
            <audio src="chapter1_audio.mp3" clipBegin="0:24:18.123" clipEnd="0:25:28.530"/>
        </par>
    </body>
</smil>
``` 

**下面的例子显示了有分页的[EPUB EPUB内容文件](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-MEDIAOVERLAYS.HTML#GLOSS-CONTENT-DOCUMENT-EPUB)**  
``` 
<html … >
    …
    <body>
        <p id="para1">This is the paragraph before the pagebreak … </p>
        
        <br id="pgbreak1" epub:type="pagebreak" title="234"/>
        
        <p id="para2">This is the paragraph after the pagebreak …</p>
    </body>
</html>
``` 

下面从[StructureVocab](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refEPUBStructureVocab)选出一组术语供参考，阅读系统应该为用户通过它们的跳过选项：  

	     Sidebar  
	     Practice  
	     Marginalia  
	     Annotation  
	     Help  
	     Note  
	     Footnote  
	     Rearnote  
	     Pagebreak  

媒体叠加可以使用另外的词汇，方法是把它们定义在smil根元素的[epub:prefix](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#attrdef-smil-prefix)里。基于epub:type值的阅读系统,并不都支持跳过功能。  

#### Escapability，逸出  

可逸出的项目是诸如表格、列表、侧栏之类的嵌套结构，听众有可能希望跳过，从嵌套结构后继续阅读。退出功能与跳过功能的不同之处在于，它不启用或禁用整个项目的类型，而是提供一个出口（例如，用户可以收听部分内容，然后选择退出）。阅读系统必须通过[epub:type](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-docs-semantic-inflection)属性的值（如：glossary）确定嵌套结构的开始。并应给用户提供选项，以跳过该结构的播放，并继续其后的任何内容。  

**下面的例子显示用于EPUB文件的媒体叠加文件。前者含有一个paragraph、一个glossary和另一paragraph。支持可退出的阅读系统会给用户中断播放glossary的选择，并继续发挥文档中的段落。**  
```
<smil xmlns="http://www.w3.org/ns/SMIL" 
      xmlns:epub="http://www.idpf.org/2007/ops"
      version="3.0">
    <body>
        <!-- a paragraph, part of the regular document text -->
        <par id="id1">
            <text src="chapter1.xhtml#para1"/>
            <audio src="chapter1_audio.mp3" clipBegin="0:23:22.000" clipEnd="0:24:15.000"/>
        </par>

        <!-- a glossary, which is a nested structure -->
        <seq id="id2" epub:textref="chapter1.xhtml#g0" epub:type="glossary">
            <par id="id3" epub:type="glossterm">
                <text src="chapter1.xhtml#g1"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:24:15.000" clipEnd="0:24:18.123"/>
            </par>
            <par id="id4" epub:type="glossdef">
                <text src="chapter1.xhtml#g2"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:24:18.123" clipEnd="0:25:28.530"/>
            </par>
            <par id="id5" epub:type="glossterm">
                <text src="chapter1.xhtml#g3"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:25:28.530" clipEnd="0:25:45.515"/>
            </par>
            <par id="id6" epub:type="glossdef">
                <text src="chapter1.xhtml#g4"/>
                <audio src="chapter1_audio.mp3" clipBegin="0:25:45.515" clipEnd="0:27:04.123"/>
            </par>
        </seq>

        <!-- another paragraph, part of the document text that comes after the glossary -->
        <par id="id7">
            <text src="chapter1.xhtml#para2"/>
            <audio src="chapter1_audio.mp3" clipBegin="0:27:04.123" clipEnd="0:27:59.000"/>
        </par>
    </body>
</smil>
```

## 附录A. Media Overlays Schema，媒体叠加构架  
媒体叠加的schema见http://www.idpf.org/epub/301/schema/media-overlay-30.nvdl。  
使用本架构进行验证，处理器需要支持[NVDL](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refNVDL)、[RelaxNG](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refRelaxNG)和[ISO Schematron](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refISOSchematron)和[XSD-DATATYPES](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refXSDDatatypes)。  

	  注  
	    NVDL schema可以用多关验证来代替，即使用嵌入的RELAX NG和独立ISO Schematron schemas。  

## 附录B. Examples of Clock Values 时钟值例子  
本附录只是说明  

下面的例子是允许的时钟值：  
	     5:34:31.396 = 5 hours, 34 minutes, 31 seconds and 396 milliseconds  
	     124:59:36 = 124 hours, 59 minutes and 36 seconds  
	     0:05:01.2 = 5 minutes, 1 second and 200 milliseconds  
	     0:00:04 = 4 minutes  
	     09:58 = 9 minutes and 58 seconds  
	     00:56.78 = 56 seconds and 780 milliseconds  
	     76.2s = 76.2 seconds = 76 seconds and 200 milliseconds  
	     7.75h = 7.75 hours = 7 hours and 45 minutes  
	     13min = 13 minutes  
	     2345ms = 2345 milliseconds  
	     12.345 = 12 seconds and 345 milliseconds  

# C. Acknowledgements and Contributor，附录C. 致谢与贡献人  

本附录不是规范内容（翻译省略，[原文点此](http://idpf.org/epub/30/spec/epub30-mediaoverlays.html#app-contributors)）

