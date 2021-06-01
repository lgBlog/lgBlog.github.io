[原文](http://www.idpf.org/epub/301/spec/epub-ocf.html)、[旧版本](http://www.idpf.org/epub/30/spec/epub30-ocf.html)

# Overview，综述  

## Purpose and Scope，目的与范围  
本节是说明。  

本EPUB开放容器格式(OCF)3.0规范定义文件格式和处理模式，以封装一组相关资源到单一文件容器。这组资源由一到多个[EPUB®出版物](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-epub-publication)组成。   

本规范是构成EPUB3的一组相关规范中的一个，是用于以XML和Web标准为基础的数字出版物进行交换和传递格式的第三次重大修订。对本规范的阅读、理解不能离开构成EPUB3的其它规范：   
* EPUB3 Overview，EPUB3概述（[EPUB3Overview](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refEPUB3Overview)），提供关于EPUB的信息概述和到其它三个EPUB文件的路线图。应首先阅读EPUB3概述。  
* EPUB Publications3.0.1，出版物301（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），为EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的每个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)定义语义和总体合规要求。   
* EPUB内容文档3.0.1（[ContentDocs301](http://idpf.org/epub/30/spec/epub30-publications.html#refContentDocs3)，为用于EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）内容的XHTML，SVG和CSS加以定义。   
* [EPUB 3.0.1 媒体叠加](http://www.idpf.org/epub/301/spec/epub-ocf.html#refOverlays3)，为同步文本和音频定义格式和处理模型。  

OCF是EPUB出版物要求的封装技术。OCF可能在下面的流程里起一定作用：  
* 在制作电子出版物的准备阶段，当不同的个人和/或组织在交换进程中的出版物的时候，OCF可以用作容器格式。  
* 当从出版商或conversion house向销售渠道提供电子出版物的时候，推荐使用OCF做传输格式。  
* 在向EPUB阅读系统或用户提供终稿的时候，保存构成出版物全部资源的包所要求的格式是OCF。  

OCF规范为构造“抽象容器”里面的文件集合定义规则。它也为在ZIP存档：“物理容器”里表达这个抽象容器定义规则。ZIP物理容器的规则建立在[ODF](http://www.idpf.org/epub/301/spec/epub-ocf.html#refODF)使用的ZIP技术。OCF也为有需要的EPUB出版物定义了一套标准方法，来模糊嵌入的字体。  

本规范取代开放包格式（OCF）3.0（[OCF30](http://www.idpf.org/epub/301/spec/epub-ocf.html#refOCF30)）。请参阅[EPUB3Changes](http://www.idpf.org/epub/301/spec/epub-ocf.html#refEPUB3Changes)了解本规范及其前身之间的差异。  

##Terminology，术语  
#### EPUB Publication，EPUB出版物  
打包在[EPUB Container(EPUB容器)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)里的含有一个或者多个[Rendition(渲染)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition)的集合，符合本规范及其[配套规范](http://www.idpf.org/epub/301/spec/epub-publications.html#sibling-specs)。  
EPUB出版物通常是单个的知识作品或者艺术作品，但是本规范及其[相关规范](http://www.idpf.org/epub/301/spec/epub-publications.html#sibling-specs)对内容的性质并不加以限制。  
#### Rendition，渲染  
逻辑文件的一个实体，由一组相互关联的资源（[resources](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-publication-resource-cmt-or-foreign)）组成，表达对某个EPUB出版物的特定处理。  
#### Default Rendition，默认渲染  
[container.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf-container.xml)文件里第一个rootfile元素所列的[rendition](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-rendition)。  
#### Publication Resource，出版物资源  
包含内容或指令的资源，它对EPUB出版物的至少一个[Rendition](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition)贡献逻辑和渲染方式。缺了这些资源，出版物的处理有可能不是[Author(作者)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-author)所打算的。出版物资源的例子有包文件（[Package Document](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-package-document)、EPUB内容文件（[EPUB Content Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub)）、EPUB 样式表（[Style Sheets](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-stylesheet)）、音频、视频、图像、嵌入字体和脚本。  
除了包文件本身，用作处理某个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)所需的出版物资源列在该[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)的[manifest](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem)，并且打包在[EPUB Container](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)文件里（除非在[Publication Resource Locations](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations)（[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）另有规定）。   
不是出版物资源的资源例子包括：Package Document [link](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem) （[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）元素所指定的，以及在向外打开的超链接里指定、在EPUB容器外面落实的资源
（例如，由[HTML5](http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)元素的href属性引用的）。  

#### EPUB Content Document，EPUB内容文件   
符合EPUB内容文件（[EPUB Content Document](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）定义之一（[XHTML](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml) 或 [SVG](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-svg)）的出版物资源。  
EPUB内容文件是核心媒体类型（[Core Media Type](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-core-media-type)）类型资源，因此可以不加[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow) （[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）就放入EPUB出版物。  

#### XHTML Content Document，XHTML内容文件   
符合[HTML5](http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)描述，定义在[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的EPUB内容文件（[EPUB Content Document](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-content-document-epub)）。  
XHTML内容文件使用HTML5的[XHTML syntax](http://www.w3.org/TR/html5/Overview.html#the-xhtml-syntax)语法。  

#### SVG Content Document，SVG内容文件   
符合[SVGContent Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里所列明之限制的EPUB内容文件。   

#### EPUB Navigation Document，EPUB导航文件   
专门的XHTML内容文件，内含人、机可读的全球导航信息，符合[EPUB Navigation Documents] (http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里面所写的限制。  
  
#### Core Media Type，核心媒体类型  
一组不需要fallback的出版物资源类型。更多信息请参[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) （[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）。   

#### Package Document，包文件  
如[Package Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-documents) （[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）所定义的出版物资源，带有关于EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的某给定[rendition](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-rendition)的书目和结构的元数据。  

#### Unique Identifier，唯一标示符   
唯一识别符是EPUB出版物的主要识别符，由[unique-identifier](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-package-unique-identifier)属性所定义. 唯一识别符可以为同一个作品的一个或多个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)s所共有。它们符合EPUB标准、且体现同样的内容。  

唯一识别符比ISBN粗线条。然而，对内容的显著修改、删节等等需要新的唯一识别符。   

#### EPUB Style Sheet (or Style Sheet)，EPUB样式表   
是符合[EPUB Style Sheets](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css) （[Publications301](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#refPublications3)）定义的CSS样式表。  

#### Viewport，视口  
EPUB阅读系统（[EPUB Reading System](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-reading-system)）的一个区域，通过它EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）可视化地呈现给用户[User](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-user)。  

#### EPUB Container (or Container)，EPUB容器   
用于EPUB出版（[Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）、基于ZIP的打包与发行格式，定义在[OCF ZIP Container](http://www.idpf.org/epub/301/spec/epub-ocf.html#physical-container-zip)。  

####OCF Processor  
按照本规范处理EPUB容器的应用软件。  

####Root Directory，根目录  
[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)指的是抽象容器文件系统的基础。这个目录在本质上是虚拟的：阅读系统在解压内容的时候，可以为抽象容器生成也可以不生成物理[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)。  

#### Author，作者   
负责生成EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的人或组织，不一定是所含内容或资源的创作者。  

#### User，用户  
使用EPUB阅读系统消费EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的个体。   

#### EPUB Reading System (or Reading System)，EPUB阅读系统   
按照与EPUB3本规范及其[配套规范](http://www.idpf.org/epub/301/spec/epub-publications.html#sibling-specs)相符的方式将EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）呈现给用户的系统。  

### Typographic Conventions，排字约定  
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
“术语”里定义的术语（[Terminology](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#sec-terminology)）要大写。  
术语定义的链接，用蓝色下划线虚线。只链接每节的第一个实例。  
	  规范性元素、attributes和properties定义，放在蓝色文本框里。  

说明性的标记例子放在白色文本框。  

	 注  
	 说明性标注放在黄色文本框里，以“注”开头。  

	 小心  
	 说明性警示放在红色文本框里，以“小心”开头。   

### Conformance Statements，合规声明  

本文件的关键字"MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL"（“必须”，“不可”，“要求”，“应该”，“不要”，“应该”，“不应该”，“推荐”，“可能”，和“可选”）应该按照[RFC2119](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refRFC2119)的描述进行解读。  

本规范的所有章节，除非标有“本节为说明性内容”的，都是规范性的。加给章节和附录的说明状态适用于它们包含的全部子内容和小节。  

本规范的所有例子都是说明性的。  

## Content Conformance，内容合规  

› OCF抽象容器必须满足定义在[OCF Abstract Container](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-abstract)的约束。
	
› OCF ZIP容器(也称之为EPUB容器)必须满足定义在[OCF ZIP Container](http://www.idpf.org/epub/301/spec/epub-ocf.html#physical-container-zip)的约束。

## Reading System Conformance，阅读系统合规   

EPUB阅读系统必须满足所有下面的条件：

› 它处理OCF ZIP容器，必须符合[OCF ZIP Container](http://www.idpf.org/epub/301/spec/epub-ocf.html#physical-container-zip)关于阅读系统合规约束的定义。  
 
› 它如果有[Viewport](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-viewport), 它必须支持[Font Obfuscation](http://www.idpf.org/epub/301/spec/epub-ocf.html#resource-obfuscation)定义的消除字体混淆。

# OCF Abstract Container OCF，抽象容器  

## Overview，概述  

本节是说明性质的  

OCF抽象容器为容器的内容定义一个文件系统模式。该文件系统模式为容器的所有内容使用单个共同的[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)。嵌入[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)的所有（非远程）资源都放在以容器[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)打头的目录树下。当然，并没有为此要求具体的文件系统结构。文件系统模式也要求包含一个名为META-INF的目录，它是容器[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)的一级子目录，用于保存下列特殊文件：  

container.xml [要求]  

标明文件，作每个出版物的镶嵌[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)的入口。  

signatures.xml [可选]   

    内含各种资源的数字签名。 

encryption.xml [可选]  

内含关于出版物资源加密的信息（如果使用了字体模糊[Font Obfuscation](http://www.idpf.org/epub/301/spec/epub-ocf.html#resource-obfuscation)，本文件是必须提供的）。   

metadata.xml [可选]  

    用于保存关于容器的元数据。  

rights.xml [可选]  

    用于保存关于数字版权的信息。  
manifest.xml [允许]  

开放文件格式[ODF](http://www.idpf.org/epub/301/spec/epub-ocf.html#refODF)允许之容器内容的manifest。  

对META-INF目录下各种文件的合规要求，见[META-INF](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf)。  

## File and Directory Structure，文件与目录结构   
 
OCF抽象容器的虚拟文件系统必须有一个共同的[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)，用于容器的所有内容。  

OCF抽象容器必须包括名为META-INF的目录，这是容器[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)的直接子目录。对这个目录内容的要求描述在[META-INF](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf)。  

在[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)的文件名mimetype是保留给OCF ZIP Containers使用的，解释见[OCF ZIP Container](http://www.idpf.org/epub/301/spec/epub-ocf.html#physical-container-zip)。  
 
OCF抽象容器里面的所有其它文件，除了不能够放在META-INF目录外，可以放在容器[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)下的任意目录。  

建议把每个出版物的内容保存在容器根下面它自己的专门目录里。  

## Relative IRIs for Referencing Other Components，用于引用其它组件的相对IRI  

OCF抽象容器里的文件相互引用，应该通过相对IRI（[RFC3987](http://www.idpf.org/epub/301/spec/epub-ocf.html#refRFC3987)和[RFC3986](http://www.idpf.org/epub/301/spec/epub-ocf.html#refRFC3986)。例如，如果名为chapter1.html的文件引用同一个目录里面名为image1.jpg的文件，那么chapter1.html 有可能把下面的作为自己的一部分内容：   

```
<img src="image1.jpg" alt="…" />
```
                
对于相对IRI引用，基础IRI（[RFC3986](http://www.idpf.org/epub/301/spec/epub-ocf.html#refRFC3986)的确定，是依据给定文件格式的相关语言规范（或译：基础IRI是由给定文件格式的相关语言规范确定的）。  

例如，在CSS样式表的上下文和属性声明里相对IRI引用应该怎么样工作，是由CSS规范定义的。注意，有些语言规范引用早于[RFC3987](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-OCF.HTML#REFRFC3987)的RFC，在此情况下，应用早期的RFC到那个具体的语言。  

和绝大多数语言规范不一样，META-INF目录里所有文件的基础IRI使用抽象容器的[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)作为默认的基础IRI。例如，假如META-INF/container.xml有下面的内容：  

```
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/Great Expectations.opf"
            media-type="application/oebps-package+xml" />	
    </rootfiles>
</container>
```            

那么，OEBPS/Great Expectations.opf路径是相对于OCF抽象容器的[根目录](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-root-directory)，不是相对于META-INF目录。  

## File Names，文件名   

File Name（文件名）这个术语指任何类型文件的名称，可以是目录，或者是OCF抽象容器里的目录下的普通文件。  

对于OCF抽象容器里的一个给定目录，Path Name是一个字符串，含有由全部File Name目录串接而成的完整路径，每个File Name目录由字符"/“（U +002F）分隔。对于抽象容器里的一个给定文件，Path Name是一个字符串，含有由“/”串接的全部File Name目录，后接”/“，然后是文件的File Name。  

如下所述的File Name限制，其设计是为了使Path Name和File Name不加修改就能够在绝大多数常用操作系统里。对于无法处理OCF文件和路径名的OCF处理器（[OCF Processor](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-processor)），本规范没有规定它应该怎么样补救这种不兼容。  

在OCF抽象容器的上下文，文件和路径名必须满足以下所有指标：  
› 
文件名必须是 UTF-8（[Unicode](http://www.idpf.org/epub/301/spec/epub-ocf.html#refUnicode5)）编码。  

    › 文件名不得超过255字节。  

    › 抽象容器里任一目录或文件的Path Name不得超过65535字节。  
› 
文件名不得使用下面的[Unicode](http://www.idpf.org/epub/301/spec/epub-ocf.html#refUnicode5)字符。理由是，这些字符可能不为常用的操作系统始终如一地支持：  
```
      斜线  SOLIDUS: / (U+002F)
      引号  QUOTATION MARK: " (U+0022)
      星号  ASTERISK: * (U+002A)
      句号作最后一个字符  FULL STOP as the last character: . (U+002E)
      冒号  COLON: : (U+003A)
      <  LESS-THAN SIGN: < (U+003C)
      >  GREATER-THAN SIGN: > (U+003E)
      ?  QUESTION MARK: ? (U+003F)
      \  REVERSE SOLIDUS: \ (U+005C)
        DEL (U+007F)
        C0 range (U+0000 … U+001F)
        C1 range (U+0080 … U+009F)
        Private Use Area (U+E000 … U+F8FF)
        Non characters in Arabic Presentation Forms-A (U+FDDO … U+FDEF)
        Specials (U+FFF0 … U+FFFF)
        Tags and Variation Selectors Supplement (U+E0000 … U+E0FFF)
        Supplementary Private Use Area-A (U+F0000 … U+FFFFF)
        Supplementary Private Use Area-B (U+100000 … U+10FFFF)  
```
    › 文件名大小写敏感。  
› 
按[Unicode](http://www.idpf.org/epub/301/spec/epub-ocf.html#refUnicode5)第3.13节所述的大小写正常化之后，同一目录中的所有文件名必须是唯一的。  

› 
按NFC或NFD的正常化[TR15](http://www.idpf.org/epub/301/spec/epub-ocf.html#refTR15)正常化之后，同一目录中的所有文件名必须是唯一的。  

    注  
一些商业ZIP工具不支持完整的Unicode范围，可能只支持部分ASCII范围用作文件名。使用有这些限制的ZIP工具的内容制作者，可能会发现最好还是把文件名限制在ASCII范围。如果文件的名称在解压过程中不能被保留，当文件在内容里被URI引用的时候发生改动，有必要对名称的任何改动进行补偿。  

## META-INF    

所有的OCF抽象容器都必须包含一个叫做META-INF的目录。该目录含有下面的文件。下面定义之外的文件也可以包含在META-INF目录；[OCF处理器](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-processor)在遇到这样的文件的时候不得挂机。  

### Container – META-INF/container.xml  

所有的OCF容器在META-INF目录里都必须包括一个名为container.xml的文件。容器内EPUB出版物的媒体类型、路径和根文件等等，container.xml文件必须加以确定。  

container.xml文件不得加密。  

container.xml文件的架构见[Schema for container.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#app-schema-container)，在去掉来自其它命名空间的所有元素和属性之后（包括所有这些元素的属性和内容），container.xml文件对上面的架构必须是有效的。   

rootfiles元素必须包含一个或多个rootfile元素，每个必须唯一地引用一个代表单个出版物[rendition](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-rendition)的包文件。如果在OCF里存有不止一个Rendition，即使是同一个EPUB出版物，每个渲染都应该不同。   

OCF处理器必须视rootfiles元素里面的第一个RootFile元素为出版物的默认描述。除了默认渲染，不要求阅读系统使用任何其它的。  

''下面的例子显示用于EPUB出版物的container.xml样本，根文件是EPUB/My Crazy Life.opf (包文件)''  
``` 
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/My Crazy Life.opf"
            media-type="application/oebps-package+xml" />
    </rootfiles>
</container>
```                          
 
''下面的例子说明捆绑在同一个容器里的The Sandman文件的SVG和XHTML渲染：''
```      
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="SVG/Sandman.opf"
            media-type="application/oebps-package+xml" />
        <rootfile full-path="XHTML/Sandman.opf"
            media-type="application/oebps-package+xml" />
    </rootfiles>
</container>
```                   

包文件里的manifest元素指定用于EPUB处理的唯一manifest。在ZIP存档或可选文件里的附属manifest不能够用作EPUB处理的目的。ZIP存档里的任何额外文件不得用于rendition的处理(即，ZIP文档里那些没有列明在包文件的manifest元素里的文件，比如META-INF文件或专属于出版物其它渲染的资源）。  

文件container.xml有可能在rootfiles元素之后含有一个links元素。Rootfiles出现，必须含有1或者多个link元素。每个link元素必须含有一个href属性，它的值指定资源的位置，用于EPUB容器进行处理。每个link元素也还得含有一个rel属性，其值指定和资源的关系，而且可以含有一个media-type属性，其值必须是一个指定资源类型和格式的媒体类型（[RFC2046](http://www.idpf.org/epub/301/spec/epub-ocf.html#refRFC2046)），就是link所引用的资源的格式和类型。   

Rootfile元素full-path属性的值，以及link元素href属性的值，都必须包含一个路径组件（由[RFC3986](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-OCF.HTML#REFRFC3986)定义），它只能够是“路径-无根”的形式（即，不带根目录）（也是由[RFC3986](HTTP://WWW.IDPF.ORG/EPUB/301/SPEC/EPUB-OCF.HTML#REFRFC3986)定义）。路径组件是相对于所在容器的根目录。  

OCF处理器必须忽略container.xml文件里的外来元素和属性。  

### Encryption – META-INF/encryption.xml   
  
容器文件系统根级别的META-INF目录里面的可选encryption.xml文件，保存关于容器内容的所有加密信息。如果容器内的任何资源是加密的，encryption.xml就必须存在，表明资源是加密的，并提供它如何加密的信息。  
这个文件是一个XML文档，其根元素是encryption。encryption元素包含EncryptedKey和EncryptedData类型的子元素，定义在[XML ENC Core](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLENCCORE)。一个EncryptedKey元素描述容器里使用的每个密钥，而EncryptedData元素而EncryptedData元素描述每个加
密的文件。每个EncryptedData元素如XML Encryption所述的指向一个EncryptedKey元素。   

encryption.xml文件的schema见于[ Schema for encryption.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#app-schema-encryption); encryption.xml文件对此schema必须是有效的。  

OCF独立地对单个文件进行加密，为了提高性能牺牲了一些安全，使容器中的内容逐步解密。这样的加密方式暴露整个包的目录结构和文件命名。  

OCF使用XML Encryption（[XML ENC Core](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLENCCORE)）为加密提供一个框架，允许使用多种算法。XML Encryption指定加密任意数据的过程，并把处理的结果表达在XML里。即使OCF抽象容器可能包含非XML数据，XML Encryption还是可以用来加密OCF抽象容器中的所有数据。OCF加密只支持整个容器内的文件，而不是部分文件。encryption.xml文件，如果有的话，不得被加密。   

加密数据替换OCF抽象容器里面的未加密数据。例如，如果名为photo.jpeg的图像是加密的，photo.jpeg资源的内容应替换成其加密内容。当数据流储存在ZIP容器中时，必须先压缩再加密，而且必须使用Deflate压缩。在ZIP目录内部，加密的文件应该是存放的，而非Deflate压缩。  

请注意，由[rendition](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-rendition)引用的嵌入资源，在某些情况下需要混淆对它们的存储，把它们和“父”出版物联系起来，增加提取它们不受限制地使用（如字体）的难度。虽然混淆不是加密，但是encryption.xml（译注：文件名意思是“加密”）文件还是和[IDPF resource obfuscation algorithm](http://www.idpf.org/epub/301/spec/epub-ocf.html#resource-obfuscation)一起使用，以确定资源，在能够被使用之前，需要去模糊。  

下列文件永远不得加密，不管请求的是默认的还是特定的加密：  
```
 mimetype
 META-INF/container.xml
 META-INF/encryption.xml
 META-INF/manifest.xml
 META-INF/metadata.xml
 META-INF/rights.xml
 META-INF/signatures.xml
 EPUB rootfile (包文件)
```
使用[XML SIG Decrypt](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLSIGDecrypt)（XML签名解密变换）对签名资源进行加密。此功能允许OCF理这样的应用程序把签名前加密的数据和签名后加密的数据区分开来。惟有签名后加密的数据才必须解密，然后计算用于签名验证的digest。  

''下面的例子，由[XML ENC Core](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLENCCORE)的[第2.2.1节](http://www.w3.org/TR/2002/REC-xmlenc-core-20021210/#sec-eg-Symmetric-Key)改编而来，image.jpeg资源的加密采用对称密钥算法（AES），对称密钥再按照非对称密钥算法（RSA）进一步加密，密钥是John Smith。''

``` 
<encryption
    xmlns ="urn:oasis:names:tc:opendocument:xmlns:container"
    xmlns:enc="http://www.w3.org/2001/04/xmlenc#"
    xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <enc:EncryptedKey Id="EK">
        <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5"/>
        <ds:KeyInfo>
            <ds:KeyName>John Smith</ds:KeyName>
        </ds:KeyInfo>
        <enc:CipherData>
            <enc:CipherValue>xyzabc</enc:CipherValue>
        </enc:CipherData>
    </enc:EncryptedKey>
    <enc:EncryptedData Id="ED1">
        <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#kw-aes128"/>
        <ds:KeyInfo>
            <ds:RetrievalMethod URI="#EK"
                Type="http://www.w3.org/2001/04/xmlenc#EncryptedKey"/>
        </ds:KeyInfo>
        <enc:CipherData>
            <enc:CipherReference URI="image.jpeg"/>
        </enc:CipherData>
    </enc:EncryptedData>
</encryption>
```

### Manifest – META-INF/manifest.xml   

具有manifest.xml保留名称的可选文件，可以放在容器文件系统根级别的META-INF目录内。

如果存在manifest.xml文件，不能加密它。

### Metadata – META-INF/metadata.xml  

具有metadata.xml保留名称的可选文件，可以放在容器文件系统根级别的META-INF目录内。如果有这个文件，必须把它用作容器级别的元数据。  
如果有META-INF/metadata.xml文件，其内容应该都是合格的命名空间元素。这个文件在命名空间http://www.idpf.org/2013/metadata应该含有metadata根元素。当然，为了向前  兼容，也允许其它的根元素。阅读系统应该忽略含有无法识别的根元素的metadata.xml文件。  [XMLNS](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLNamespaces)   
本版本的OCF规范未定义用于metadata.xml文件的元数据。容器级别的元数据可以在本规范的将来版本里予以定义，也可以在IDPF定义的EPUB扩展规范里定义。  
metadata.xml文件，如果存在，不能被加密。  

### Rights Management – META-INF/rights.xml    

具有rights.xml保留名称的可选文件，可以放在容器文件系统根级别的META-INF目录内。这个文件是为数字版权管理（DRM）而保留的，用于出版物在权益人、中介人和用户之间的受信交换。这个版本的OCF规范未指定DRM信息的必须格式，但未来的版本中，可能为DRM信息指定一个特定格式。  

如果有META-INF/rights.xml文件，其内容应该是唯一合格的命名空间元素[XMLNS](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLNamespaces)，以避免和将来为此文件指定具体格式的OCF版本相冲突。   

rights.xml文件不得加密。  

如果没有rights.xml文件，OCF容器不提供信息，指示容器是否有任何部分受版权限制。  

### Digital Signatures – META-INF/signatures.xml  

位于容器文件系统根级别META-INF目录内的保留名称为signatures.xml的可选文件保存容器及其内容的数字签名。这个文件是XML文档，它的根元素是signatures。signatures元素含有Signature型的多个子元素，定义在[XML DSIG Core](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLDSIGCORE)。Signature可以整体应用到出版物以及任意描述，或应用到出版物以及描述的一部分。XML Signature可以指定任何种类数据的签字，而不仅仅是XML。  

signatures.xml文件不得被加密。  

如果没有signatures.xml文件，OCF容器不提供信息来表明容器中的任何部分在容器级别是否有数字签名。当然，有可能数字签名存在于某个可选的备用渲染里面。  
 
signatures.xml文件的schema见于[Schema for signatures.xml](http://www.idpf.org/epub/30/spec/epub30-ocf.html#app-schema-signatures); encryption.xml文件对此schema必须是有效的。  

当OCF代理给容器中的数据创建一个签名，它应该把这个新的signature作为最后的子Signature元素，加在signatures.xml文件里的signatures元素。   

   注   
   signatures.xml文件里面的每个Signature通过IRI确定signature作用的数据，用到的是XML Signature的Manifest元素及其子元素Reference。所含的单个文件可以分开签名或一起签名。分别为各文件签名给资源生成一个摘要（digest）值，这样的资源可以独立验证。这种解决办法可能
   使得Signature元素更大。如果文件一起签名，签名文件组可以列在单个XML Signature的Manifest元素里，并可以由一到多个Signature元素引用。
 
容器中的某个或所有文件，signatures.xml文件除外，可以全部签名，因为signatures.xml文件将包含计算后的签名信息。signatures.xml文件是否签名、以及怎样签名，取决于签名人的目的。

签名人者如果要允许在不作废自己签名的情况下就可以添加或从容器里删除签名，signatures.xml文件就不应该被签名。

如果签名人希望任何增加或删除签名的行为都使签名人的签名失效，可以用（[XML DSIG Core](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLDSIGCORE)的[6.6.4](http://www.w3.org/TR/2008/REC-xmldsig-core-20080610/#sec-EnvelopedSignature)节中定义的）封口签名变换（Enveloped Signature transform）对整个已经存在的签名文件进行签名——不包括正在创建的Signature。此变换将签署所有以前的签名，随后再有签名添加到包中的话，它就会失效。   

如果签名人希望删除已有签名的行为使签名人的签名失效，同时又希望允许增加签名，就可以使用XPath变换来单独签署现有的签名(这只是建议。具体的XPath变换并非OCF规范的一部分）。  

XML-Signature并不把任何语义关联给signature，代理（程序）可以包括语义信息。例如，通过添加信息到描述signature的Signature元素。 XML签名介绍了如何把更多的信息添加到一个signature（例如，通过使用SignatureProperties元素）。   

''下面的XML表达式显示一个signatures.xml文件样本的内容，它基于[XML DSIG Core](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLDSIGCORE)第二节里[section 2](http://www.w3.org/TR/2008/REC-xmldsig-core-20080610/#sec-Overview)的例子。它含有一个signature，这signature作用到容器里的两个资源：OEBFPS/book.html和OEBFPS/images/cover.jpeg。''  

```   
<signatures xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <Signature Id="sig" xmlns="http://www.w3.org/2000/09/xmldsig#">
        <SignedInfo>
            <CanonicalizationMethod 
                Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
            <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#dsa-sha1"/>
            <Reference URI="#Manifest1">
                <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <DigestValue>j6lwx3rvEPO0vKtMup4NbeVu8nk=</DigestValue>
            </Reference>
        </SignedInfo>
        <SignatureValue>…</SignatureValue>
        <KeyInfo>
            <KeyValue>
                <DSAKeyValue>
                    <P>…</P><Q>…</Q><G>…</G><Y>…</Y> 
                </DSAKeyValue>
            </KeyValue>
        </KeyInfo>
        <Object>
            <Manifest Id="Manifest1">
                <Reference URI="OEBFPS/book.xml">                    
                    <Transforms>                                                
                        <Transform
                            Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>                        
                    </Transforms>
                    <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                    <DigestValue></DigestValue>
                </Reference>
                <Reference URI="OEBFPS/images/cover.jpeg">
                    <Transforms>                                                
                        <Transform
                            Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>                        
                    </Transforms>
                    <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                    <DigestValue></DigestValue>
                </Reference>
            </Manifest>
        </Object>
    </Signature> 
</signatures>
```

# OCF ZIP Container，OCF ZIP容器  

## Overview 概述  
 
本节是说明。 

一个OCF ZIP容器是一个抽象容器（[abstract container](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-abstract)）的单个文件物理形态。

## ZIP File Requirements，ZIP文件要求  

OCF ZIP容器使用[ZIP APPNOTE](http://www.idpf.org/epub/301/spec/epub-ocf.html#refZIP)定义的ZIP格式，但是加了下面的限制和澄清声明：  
    › OCF ZIP容器的内容必须是合规的抽象容器（[abstract container](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-abstract)）。  
    › OCF的ZIP容器不能使用ZIP application note里的功能，该功能允许ZIP文件分散在多种存储介质上。任何OCF文件，  
      如果指定ZIP文件分存在多个存储介质上，[OCF处理器](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-ocf-processor)必须把这样的OCF文件当作错误对待。  
    › OCF ZIP容器只能够在ZIP存档里包含未压缩或Deflate-compressed的文件。OCF处理器必须把使用Deflate以外压缩技术的OCF容器当作错误对待。  
    › OCF ZIP容器可以使用ZIP64扩展名，它在[ZIP APPNOTE](http://www.idpf.org/epub/301/spec/epub-ocf.html#refZIP)的G段application note第V节定义为"Version 1"，而且只当内容要求的时候才使用这些扩展名。  
      OCF必须支持定义为"Version 1"的ZIP64扩展名。   
    › OCF的ZIP容器不得使用ZIP格式定义的加密特性，而是必须使用[Encryption – META-INF/encryption.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf-encryption.xml)所描述的方式加密。  
      OCF处理器必须把使用ZIP加密特性的OCF ZIP容器当作错误对待。   
    › 对OCF处理器不作这样的要求：借助于OCF抽象容器内没有定义的load和save命令来保留从OCF ZIP容器而来的信息。尤其是，OCF处理器没有必要保留对应于具体操作系统的CRC值、注释字段或记录文件系统信息的字段（例如，External file属性和Extra field）。  
    › OCF的ZIP容器必须使用UTF-8（[Unicode](http://www.idpf.org/epub/301/spec/epub-ocf.html#refUnicode5)）来编码文件系统名称。  
  
下列限制适用于OCF ZIP容器归档的特定领域：  
    › 在本地file header表里，OCF的ZIP容器必须设置version needed to extract字段值为10，20或45，以匹配给定文件所需的最大版本级别  
     （例如，需要Deflate的话，设置20；需要ZIP64的话，设置45）。 OCF处理器必须把所有其它的值当作错误对待。  
    › 在本地file header表里，OCF ZIP容器必须把compression方法字段值设置为0或8。OCF处理器必须把所有其它的值当作错误对待。  
    › OCF处理器必须把带有Archive decryption header或Archive extra data record的OCF ZIP容器当作错误对待。  

## OCF ZIP Container Media Type Identification，OCF ZIP容器媒体类型标识   

OCF ZIP容器必须把mimetype文件作为容器中的第一个文件，这个文件的内容必须是MIME类型字符串application/epub+zip，以[US-ASCII](http://www.idpf.org/epub/301/spec/epub-ocf.html#refUSASCII)编码。  

mimetype文件的内容必须不包含任何句首填充或空白，不能以Unicode签名（或Byte Order Mark）开始，而且MIME类型字符串的大小写必须严格按照上面给出的。  

此外mimetype文件既不得压缩也不可加密，而且在其ZIP header里不能出现额外的字段。  

   注
   关于application/epub+zip媒体类型的更多信息，请参看[附录C：application/epub+zip Media Type](http://www.idpf.org/epub/301/spec/epub-ocf.html#app-media-type)。  

# Resource Obfuscation，资源模糊  

## Introduction 简介  

本节只是说明  

由于OCF ZIP容器本质上是一个ZIP文件，可以用普通ZIP工具从包里提取所有未加密的内容流。另外，ZIP文件的本性意味着，它们的内容在某些系统上，看起来像其它本地容器一样（如文件夹）。  

虽然ZIP文件的这个简洁性很有用，但是当很方便地提取资源并非不加密的预期副作用的时候，它也可能构成麻烦。例如，一个想要加第三方字体的[作者]()，很可能不希望别人把这个字体提取使用。更关键的是，很多商业字体允许嵌入，但是，嵌入字体意味着字体成为了和EPUB出版物融为一体，而非只是随内容提供一个原始字体文件。  

由于现代操作系统普及了对ZIP的集成支持，简单地把字体放在ZIP档案中不足以表明该字体没打算在其它内容里重复使用。这种不确定性有可能损害EPUB出版物本来非常有用的字体嵌入能力。   

为了防止字体的重复使用，有些字体供应商允许使用他们的字体，可能会附加限制，以某种方式使那些字体仅限于出版物。也就是说，如果字体文件不能用计算设备的内置工具直接安装以供操作系统使用的话，它就不能被其它EPUB出版物直接使用。  

为这些资源提供数字版权管理或者实施系统超出了本文的讨论范围。本节只是定义了一个混淆的方法，使得OCF的最终接受人需要做些额外的工作才能够访问模糊过的资源。  
请注意本规范或IDPF没有说这种做法构成加密，也不保证资源不会被侵犯版权。不过，IDPF希望这个算法能够满足那些供应商的绝大多数。这些供应商要求某种程度的保证，不至于解压容器包就把他们的资源提走了。  
在字体的情形下，主要的使用场景是模糊。设计的机制只是给没有意识到字体授权细节的人设一个障碍，没办法阻止死心塌地的用户取得字体的完全访问。对于给定的OCF容器，有可能用定义的算法提取原始字体文件。这种做法是否满足具体字体授权的要求，留给签约双方解决。  

## Obfuscation Key，模糊密钥  

模糊算法中使用的密钥取自[默认rendition](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-rendition-default)的[唯一标示符](http://www.idpf.org/epub/301/spec/epub-ocf.html#gloss-unique-identifier)。  
必须从这个标识符里删除所有根据[XML](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXML)规范1.0第2.3节定义的空白字符。尤其是Unicode代码的U+0020，U+0009，U+000D和U+000A。  
由此得到的字符串，应该按照Secure Hash Standard（[SHA-1](http://www.idpf.org/epub/301/spec/epub-ocf.html#refSHA1)）的规定生成一个UTF-8的SHA-1摘要。这个摘要直接用作算法的密钥。  

## Obfuscation Key，模糊算法  

用来模糊资源的算法，包括修改字体文件中的前1040字节（~1KB）。万一该文件是小于1040字节，那么整个文件将被修改。  
为了模糊原始数据，对原始文件的第一个字节和[模糊密钥](http://www.idpf.org/epub/301/spec/epub-ocf.html#obfus-keygen)的第一个字节执行逻辑异（即XOR）运算，得到的结果存储为嵌入资源的第一个字节。  
对源和密钥的下一个字节重复这一过程，直到密钥中的所有字节用完为止。在此，从密钥的第一个字节和源文件的21字节起继续这个过程。一旦1040个字节都按照这种方式编码（或到达eof），在源文件中剩余的数据直接复制到目标文件。  
资源的模糊必须在它们被压缩放到OCF容器之前。请注意，由于模糊不是加密，这个要求并不违反[Encryption – META-INF/encryption.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf-encryption.xml)里面的那个加密之前要压缩它们的要求。  
	  下面的伪代码示例模糊算法：   
```
set ocf to OCF container file
set source to file
set destination to obfuscated file
set keyData to key for file
set outer to 0
while outer < 52 and not (source at EOF)
    set inner to 0
    while inner < 20 and not (source at EOF)
        read 1 byte from source     //Assumes read advances file position
        set sourceByte to result of read
        set keyByte to byte inner of keyData
        set obfuscatedByte to (sourceByte XOR keyByte)
        write obfuscatedByte to destination
        increment inner
    end while
    increment outer
end while
if not (source at EOF) then
    read source to EOF
    write result of read to destination
end if
Deflate destination
store destination as source in ocf
```            

为了取回原始字体数据，只需要把过程倒过来。即，源文件变成了模糊后的数据，目标文件将包含原字体数据。  
	 注意   
	 在EPUB3.0.1之前，字体模糊就被许可，但是没有规定模糊和压缩的顺序。结果就是，解压去模糊之后有可能遇到不合适的字体。在此情况下，在解开之前就去模糊有可能返回合适的字体。对这样的回收法的支持，不做硬性要求。原因在于，一方面它和本规范不相符，可是当需要总体支持EPUB3的时候，又不得不考虑。  

## Specifying Obfuscated Resources，指定模糊资源   

虽然不是技术性加密的数据，所有加密过的资源，必须在伴随EPUB出版物的encryption.xml文件里有一个条目（见[Encryption – META-INF/encryption.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf-encryption.xml)）。  
每个模糊后的资源必须含有一个EncryptionMethod元素。每个（啥？）必须含有一个EncryptionData子元素，其Algorithm属性的属性值设置为http://www.idpf.org/2008/embedding。这个属性的出现表明使用了本规范中所描述的算法。到模糊后的资源的路径必须列在CipherData元素的CipherReference子元素里。  

''下面的例子展示encryption.xml文件里的一个模糊字体''   

```
<encryption 
    xmlns="urn:oasis:names:tc:opendocument:xmlns:container" 
    xmlns:enc="http://www.w3.org/2001/04/xmlenc#">
    <enc:EncryptedData> 
        <enc:EncryptionMethod Algorithm="http://www.idpf.org/2008/embedding"/> 
        <enc:CipherData> 
            <enc:CipherReference URI="EPUB/Fonts/BKANT.TTF"/>  
        </enc:CipherData> 
    </enc:EncryptedData>  
</encryption>   
```

为了防止把嵌入资源不小心复制到其它EPUB出版物，不能在encryption.xml文件直接提供模糊密钥（[obfuscation key](http://www.idpf.org/epub/301/spec/epub-ocf.html#obfus-keygen)）。   

# 附录A. Schemas  
 
## A.1. container.xml架构  
container.xml文件的Schema见：http://www.idpf.org/epub/301/schema/ocf-container-30.rnc  

## A.2. encryption.xml架构  
encryption.xml文件的Schema在[XML Sec RNG Schemas](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLSecRngSchemas)里面。  

## A.3. signatures.xml架构  
signatures.xml文件的Schema在[XML Sec RNG Schemas](http://www.idpf.org/epub/301/spec/epub-ocf.html#refXMLSecRngSchemas)里面。  

# 附录B. Example  
下面的例子说明使用本OCF格式来在ZIP容器里包含签名且加密的EPUB出版物。  

›例子B.1. ZIP容器里文件的顺序排列  
```
 mimetype
 META-INF/container.xml
 META-INF/signatures.xml
 META-INF/encryption.xml
 OEBPS/As You Like It.opf
 OEBPS/book.html
 OEBPS/nav.html
 OEBPS/toc.ncx
 OEBPS/images/cover.png
```

›例子B.2. mimetype文件的内容   
``` application/epub+zip```

›例子B.3. META-INF/container.xml文件的内容  
```
<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <rootfiles>
        <rootfile full-path="OEBPS/As You Like It.opf"
            media-type="application/oebps-package+xml" />
    </rootfiles>
</container>
```

›例子B.4. META-INF/signatures.xml文件的内容  
```
<signatures xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
    <Signature Id="AsYouLikeItSignature" xmlns="http://www.w3.org/2000/09/xmldsig#">
        
        <!-- SignedInfo is the information that is actually signed. In this case -->
        <!-- the SHA1 algorithm is used to sign the canonical form of the XML    -->
        <!-- documents enumerated in the Object element below                    -->
        <SignedInfo>
            <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
            <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#dsa-sha1"/>
            <Reference URI="#AsYouLikeIt">
                <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <DigestValue>…</DigestValue>
            </Reference>
        </SignedInfo>
        
        <!-- The signed value of the digest above using the DSA algorithm -->
        <SignatureValue>…</SignatureValue>
        
        <!-- The key to use to validate the signature -->
        <KeyInfo>
            <KeyValue>
                <DSAKeyValue>
                    <P>…</P>
                    <Q>…</Q>
                    <G>…</G>
                    <Y>…</Y>
                </DSAKeyValue>
            </KeyValue>
        </KeyInfo>
        
        <!-- The list documents to sign. Note that the canonical form of XML   -->
        <!-- documents is signed while the binary form of the other documents -->
        <!-- is used -->
        <Object>
            <Manifest Id="AsYouLikeIt">
                <Reference URI="EPUB/As You Like It.opf">
                    <Transforms>
                        <Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
                    </Transforms>
                    <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                    <DigestValue></DigestValue>
                </Reference>
                <Reference URI="EPUB/book.html">
                    <Transforms>
                        <Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
                    </Transforms>
                    <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                    <DigestValue></DigestValue>
                </Reference>
                <Reference URI="EPUB/images/cover.png">
                    <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                    <DigestValue></DigestValue>
                </Reference>
            </Manifest>
        </Object>        
    </Signature>
</signatures>
```

例子B.5. META-INF/encryption.xml文件的内容  
```
<?xml version="1.0"?>
<encryption xmlns="urn:oasis:names:tc:opendocument:xmlns:container"
    xmlns:enc="http://www.w3.org/2001/04/xmlenc#" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">

    <!-- The RSA encrypted AES-128 symmetric key used to encrypt the data -->
    <enc:EncryptedKey Id="EK">
        <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5"/>
        <ds:KeyInfo>
            <ds:KeyName>John Smith</ds:KeyName>
        </ds:KeyInfo>
        <enc:CipherData>
            <enc:CipherValue>xyzabc…</enc:CipherValue>
        </enc:CipherData>
    </enc:EncryptedKey>

    <!-- Each EncryptedData block identifies a single document that has been    -->
    <!-- encrypted using the AES-128 algorithm. The data remains stored in it’s -->
    <!-- encrypted form in the original file within the container.              -->
    <enc:EncryptedData Id="ED1">
        <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#kw-aes128"/>
        <ds:KeyInfo>
            <ds:RetrievalMethod URI="#EK" Type="http://www.w3.org/2001/04/xmlenc#EncryptedKey"/>
        </ds:KeyInfo>
        <enc:CipherData>
            <enc:CipherReference URI="EPUB/book.html"/>
        </enc:CipherData>
    </enc:EncryptedData>

    <enc:EncryptedData Id="ED2">
        <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#kw-aes128"/>
        <ds:KeyInfo>
            <ds:RetrievalMethod URI="#EK" Type="http://www.w3.org/2001/04/xmlenc#EncryptedKey"/>
        </ds:KeyInfo>
        <enc:CipherData>
            <enc:CipherReference URI="EPUB/images/cover.png"/>
        </enc:CipherData>
    </enc:EncryptedData>

</encryption>
```

›例子B.6. EPUB/As You Like It.opf文件的内容  
```
<?xml version="1.0"?>
<package version="3.0" 
         xml:lang="en"
         xmlns="http://www.idpf.org/2007/opf" 
         unique-identifier="pub-id">
    
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:identifier 
              id="pub-id">urn:uuid:B9B412F2-CAAD-4A44-B91F-A375068478A0</dc:identifier>
        <meta refines="#pub-id" 
              property="identifier-type" 
              scheme="xsd:string">uuid</meta>
        
        <dc:language>en</dc:language>
        
        <dc:title>As You Like It</dc:title>
        
        <dc:creator id="creator">William Shakespeare</dc:creator>
        <meta refines="#creator" 
              property="role" 
              scheme="marc:relators">aut</meta>
        
        <meta property="dcterms:modified">2000-03-24T00:00:00Z</meta>
        
        <dc:publisher>Project Gutenberg</dc:publisher>
        
        <dc:date>2000-03-24</dc:date>
        
        <meta property="dcterms:dateCopyrighted">9999-01-01</meta>
        
        <dc:identifier 
              id="isbn13">urn:isbn:9780741014559</dc:identifier>
        <meta refines="#isbn13" 
              property="identifier-type" 
              scheme="onix:codelist5">15</meta>
        
        <dc:identifier id="isbn10">0-7410-1455-6</dc:identifier>
        <meta refines="#isbn10" 
              property="identifier-type" 
              scheme="onix:codelist5">2</meta>
        
        <link rel="xml-signature" 
              href="../META-INF/signatures.xml#AsYouLikeItSignature"/>
    </metadata>
    
    <manifest>
        <item id="r4915" 
              href="book.html" 
              media-type="application/xhtml+xml"/>
        <item id="r7184" 
              href="images/cover.png" 
              media-type="image/png"/>
        <item id="nav" 
              href="nav.html" 
              media-type="application/xhtml+xml" 
              properties="nav"/>
        <item id="ncx" 
              href="toc.ncx" 
              media-type="application/x-dtbncx+xml"/>
    </manifest>
    
    <spine toc="ncx">
        <itemref idref="r4915"/>
    </spine>
</package>
```

# 附录C. The application/epub+zip Media Type  

本附录为EPUB开放容器格式（OCF）注册application/epub+zip媒体类型。  

OCF文件是基于ZIP存档格式的容器技术。它是用来封装EPUB出版物以及其中的可选备用描述。OCF及其相关标准由IDPF定义和维护。  

'''MIME media type name 媒体类型名称:'''  
    Application  
'''MIME subtype name 子类型名称:'''  
    epub+zip
'''Required parameters 要求的参数:'''  
      无
'''Optional parameters 可选参数:'''  
      无
'''Encoding considerations 编码考虑:'''  

OCF文件是ZIP(http://www.iana.org/assignments/media-types/application/zip)格式的二进制文件。  

'''Security considerations 安全考虑:'''  

读取OCF文件的所有处理器都应严格检查所提取数据的大小和有效性。  

此外，由于能够嵌入OCF文件的内容类型的多样性，有可能application/epub+zip描述的内容已超出这里所描述的安全隐患。然而，只有在处理器识别和   
处理这些额外内容，或那些内容被分派到其它处理器做进一步处理的情况下，才有可能出现潜在的安全问题。在这种情况下，它们将超出本注册文件的范畴。  
适用于[application/zip](http://www.iana.org/assignments/media-types/application/zip)的安全考虑也适用于OCF文件。  

'''Interoperability considerations 交互操作性考虑:'''  
      无

'''Published specification 已出版的规范:'''   

本媒体类型注册用于开放容器格式（OCF），如EPUB Open Container Format（OCF）3.0所描述的，位于http://www.idpf.org/epub/30/spec/epub30-ocf.html。  
EPUB OCF 规范3.0版取代2.0.1版规范，后者在：http://www.idpf.org/doc_library/epub/OCF_2.0.1_draft.doc，它也使用application/epub+zip媒体类型。  

'''Applications which use this media type使用本媒体类型的应用:'''  
```
    本媒体类型广泛应用于EPUB格式发行的电子书。下面是部分清单：  
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
```
'''Additional information 其它信息:'''  

    Magic number(s) 魔术数字:  
        0: ''PK 0x03 0x04'', 30: ''mimetype'', 38: ''application/epub+zip''  

    File extension(s) 文件扩展名:  
        OCF文件的最常用扩展名为.epub.  

    Macintosh File Type Code(s): Macintosh文件类型代码：  
        ZIP  

Fragment Identifiers，碎片标识符:  

IDPF在http://idpf.org/epub/linking/ 维护有链接方案（linking schemes）注册表。部分方案定义   
落实到application/epub+zip 和 application/oebps-package+xml文件的常用片段标识符。  

更多信息的联系人、电子信箱：  

    William McCoy, bmccoy@idpf.org  

Intended usage，拟用于:  

    COMMON，通用

Author/Change controller，作者/变更控制人:  

    International Digital Publishing Forum (http://www.idpf.org)
