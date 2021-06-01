* [老版本3.0](http://www.idpf.org/epub/30/spec/epub30-overview.html)，
* [原文3.0.1](http://www.idpf.org/epub/301/spec/epub-overview.html)、
* [安风德wiki，3.0 overview](http://wiki.anfengde.com/index.php?title=EPUB_3.0_%E6%A6%82%E8%BF%B0#Overview_.E6.A6.82.E8.BF.B0)  

## Introduction，引言  
### Overview，概述  
EPUB®规范是用于数字出版物、文件的发行及其交换格式的一套标准。EPUB定义一套方法，用于表达、包裹和编码包括结构化且语义增强的Web内容——包括HTML5、CSS、SVG、图像和其它资源——以发行在单一文件里（或译：EPUB为在单一文件里发行结构化且语义增强的Web内容——包括HTML5，CSS，SVG，图像和其它资源——定义表达、包裹和编码的方法）。  
EPUB 3，即本标准的第三个重要修订版，由4个规范组成，其中每个都是EPUB出版总标准的重要组成部分。  
* EPUB Publications3.0.1，出版物301（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），为EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）的每个[rendition](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-rendition)定义语义和总体合规要求。   
* EPUB内容文档3.0.1（[ContentDocs301](http://idpf.org/epub/30/spec/epub30-publications.html#refContentDocs3)，为用于EPUB出版物（[EPUB Publication](http://www.idpf.org/epub/301/spec/epub-mediaoverlays.html#gloss-epub-publication)）内容的XHTML，SVG和CSS加以定义。   
* [EPUB 3.0.1 开放容器格式（OCF）](http://www.idpf.org/epub/301/spec/epub-publications.html#refOCF3)，为了封装一组相关的资源到一个单一文件（ZIP）的[EPUB容器](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)，对格式和处理模型进行定义。  
* [EPUB 3.0.1 媒体叠加](http://www.idpf.org/epub/301/spec/epub-ocf.html#refOverlays3)，为同步文本和音频定义格式和处理模型。  
 
EPUB是被广泛采用的电子图书(eBooks)格式，这些新的规范明显增强了EPUB格式的功能，以更好地支持更多样的出版物的要求，包括复杂的布局，富媒体和互动，全局排版功能。可以预料的是EPUB3将应用于更广泛的内容：图书、杂志、教育、专业和科学出版物。
本文档为希望了解这些规范的内容作者和软件开发人员提供一个起点。它包含有非规范性质的综述材料，包括组成EPUB3的四个规范文件的[路线图](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-intro-roadmap)。  

另一非规范性文件EPUB3 Changes from EPUB 2.0.1 （[EPUB3Changes](http://www.idpf.org/epub/301/spec/epub-overview.html#refEPUB3Changes)）描述EPUB3与以前版本的变化，但主要是供那些从EPUB 2.0.1迁移到EPUB3的[作者](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-author)和[EPUB阅读系统](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-epub-reading-system)供应商参考，也是给那些准备支持两个版本的人作参考。  

### Roadmap，路线图   

本节通过简要介绍一个[EPUB出版物](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-epub-publication)的组件来为EPUB3规范提供一个综述。本文档里其它信息的链接和规范的链接，都有给出。  

一个EPUB出版物，在其最基本的层面上，是一束捆绑资源的集合，它能够经由[EPUB阅读系统](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-epub-reading-system)可靠且可预见地提取，以将其内容呈现给[用户](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-user)。每个EPUB出版物由其内容的一或多个呈现染构成，称之为rendition（渲染）。  
这些资源有些是用于寻找和处理EPUB出版物，而其它则构成出版物源的内容。出版物内容文档的描述见[Content Documents](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-content-docs)，完整规范见[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)。  

出版物的资源通常捆绑为ZIP存档来发布，文件扩展名为.EPUB。作为合规的ZIP存档文件，出版物可以被许多程序解压，它们的生产和消费得以简化。[Container](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-container)是容器格式介绍，定义在[OCF301](http://www.idpf.org/epub/301/spec/epub-overview.html#refOCF3)。  

容器格式作用有二：一是提供了手段，可以确定压缩的内容代表的是EPUB出版物（mimetype文件）； 二是提供了统一命名的资源目录（/ META-INF）。这些的关键是container.xml文件，它是将阅读系统引导到EPUB出版物的可用rendition的根文件（[the Package Document](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-package-document)）。  

包文件本身就是出版物信息仓库，储存着关于出版物所含具体工作的元数据，也提供一份详尽的资源清单，并定义了默认的阅读顺序。包文件介绍见[Package Document](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-package-file)，定义见[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)。  
 
前面的EPUB出版物组件并不是EPUB3才有。当然，它们在这个版本有所改变、并且得到了提高，（尽管如此）会很快为用过以前的出版物的人所熟悉。不过，媒体叠加文件（[Media Overlay Document](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-media-overlay-document)）是EPUB3新有的，它定义了一个将文字和音频播放同步的工具。叠加文件介绍在[Multimedia](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-multimedia)，定义在[MediaOverlays301](http://www.idpf.org/epub/301/spec/epub-overview.html#refOverlays3)。  

下面的例子显示最小的“Hello World”出版物可能包含的资源：  
```
mimetype
META-INF/container.xml
Content/HelloWorld.opf
Content/HelloWorld.xhtml
```
虽然概念上很简单，但是EPUB出版物不只是一系列HTML页面和本例所示的放在ZIP包中的依赖资产。本文下面的章节进一步说明EPUB出版物为了改进阅读而提供的主要特点和功能。

## Features，功能  

本节讨论EPUB的主要特点，包括用在[EPUB Publications](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-epub-publication)创作过程中的重要组件和主题。  

### Package Document，包文件  

EPUB出版物的每个[rendtiotion](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-rendition)都有一个单一的包文件[Package Document](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-package-document)，它指定构成出版物的所有内容文件及其所需的资源、为线性消费定义读取次序，并且为那个rendition关联元数据以及导航信息。
包文件对典型的Web网站有显著的改善。举例来说，Web网站把对其资源的引用嵌入在内容里（embeds references to its resources within its content）。虽然这不失为简单灵活的资源识别手段，但它使人们难以枚举渲染所需的全部资源（makes it difficult to enumerate all the resources required to render it）。此外，Web网站没有一个标准的方式可以定义一串页面（怎么样）组成较大出版物，这正是EPUB的[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem)元素（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）的作用（即，它提供了一个外部声明的方式来明确指定一组文件的导航过程）。最后，包文件定义了一个标准的方式，将元数据全局地应用到一组网页。  
包文件还包含有一个
[collection](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-collection-elem)元素（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)），它也许把本地有关系的[出版物资源]()分组。这个元素的存在，使得有可能开发出专门的内容标识、处理和渲染功能如定义嵌入的预览内容，或者从XHTMl内容文件的组成部分做个索引亦或字典。  

在[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)里规定了包文件和其它出版物级别的构造。  

### Navigation，导航 
#### Reading Order，阅读顺序 
EPUB的一个关键概念是，人或者程序可按''某种特定的顺序''对构成出版物的多个资源进行完全导航和加以使用。  

许多出版物都有明显的阅读顺序，或遍历内容的逻辑进程。一本小说是高度顺序化文件的例子——它通常有开始，中间和结尾——但不是所有的出版物都这样有序：一本烹饪书或影集可能被认为是更像数据库。然而，所有文件在顶级内容项都至少有一个逻辑顺序，不论是按照日期、主题、地点或一些其它指标（例如，烹饪书通常是按照菜谱类型排列）。  

每个EPUB出版物的rendition为所有顶级内容（[spine](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem)，[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）定义至少一个这样的逻辑，以及一个声明性质的内容表（[EPUB Navigation Document](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-content-document-epub-nav)，[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。出版物在内容外面以机器可读的方式布置这些数据结构，以简化对它们的寻找和使用。  

EPUB出版物不限于其内容的线性布置，也不排除按照任意方式进行连接——和Web一样，EPUB出版物是超文本构造——但是基本使用和导航可以按照某种可靠的方式完成，这一方式对一组HTML页面是行不通的。  

#### Navigation Document，导航文件   
每个EPUB出版物都包含一个名为“EPUB导航文件（[EPUB Navigation Document](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-content-document-epub-nav)）”的特殊XHTML内容文件，它使用HTML5的nav元素来定义人机可读的导航信息。
导航文件取代NCX文件 [OPS2](http://www.idpf.org/epub/301/spec/epub-overview.html#refOPS2)，建议只在考虑向上兼容旧阅读系统的时候才包括NCX 文件。在保留NCX的无障碍访问底线、导航支持等功能的同时，导航文件为改善所有用户的导航而引入了新功能和渲染手段。主要有，对国际化的更好支持（本身作为一个XHTML5文件，导航文件本地支持旁注，即ruby annotations），以及对嵌入语法的支持（MathML和SVG可以在导航链接里面）。  

作为XHTML内容文件，导航文件还利用CSS和隐藏属性[hidden attribute](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-hidden)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）为定制导航显示提供了灵活手段， 同时还不影响阅读系统的信息访问。  

导航文档的结构和语义定义见[EPUB导航文件](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

### Linking，链接   
新[EPUBCFI](http://www.idpf.org/epub/301/spec/epub-overview.html#refEPUBCFI)规范，即EPUB正则化片段标识符（epubcfi），定义用于连接到出版物的标准化方法。  

要求阅读系统对这个方案进行支持意味着EPUB现在有一个交互可操作的连接机制，比如，可以实现跨设备共享书签和阅读位置的机制。  

### Metadata，元数据  
EPUB出版规范提供了用于添加出版物元数据的丰富选项。包文件含有一专用的元数据段[metadata section](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-metadata-elem) （[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)），用于出版物的一般信息，使得对书名、作者、标识符和其它信息的访问很容易。它还提供了手段，通过link元素[link element](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem)把完整的书目记录附加到出版物。  

包文件也允许利用[unique-identifier attribute](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-package-unique-identifier)属性（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）为出版物建立唯一标识符[Unique Identifier](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-unique-identifier)。包的元数据段所需的last-modified date可以加到这个标识符来定义一个发行标识符[Release Identifier](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-release-identifier)，它为区分同一个EPUB出版物（见[Publication Identifiers](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-identifiers)）（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）的不同版本提供了手段。包标识符（译注：原文笔误，应该是Release Identifier，发行标识符）解决了这样的问题：如何在不改变其唯一标识符的情况下发表出版物，同时还把它识别为一个新的版本。  

XHTML内容文件还引入注释手段，用丰富的元数据对文件标记加以注释，使它们在语义上更有意义，并且有利于处理和读取（[Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-semantic-inflection)）。  

### Content Documents，内容文件  
每个EPUB出版物都有一个或多个EPUB内容文件[ EPUB Content Documents](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-content-document-epub) [ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)，定义见[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)。这些是XHTML或SVG文件，它们描述出版物的可读内容以及关联媒体资源（如图像、音频和视频剪辑）的引用。  

XHTML内容文件[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-content-document-epub-xhtml)由要求使用序列化XML（[HTML5](http://www.idpf.org/epub/301/spec/epub-overview.html#refHTML5)）的HTML5配置文件来定义，以确保能够可靠地操纵和呈现内容。此配置文件还增加了两个EPUB独有的语言结构：用于元素级元数据的[epub：type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-epub-type)属性[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)，以及用于声明有关多媒体元素控制的[epub:trigger](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-epub-trigger)元素[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)。  

这些增加不影响[HTML5](http://www.idpf.org/epub/301/spec/epub-overview.html#refHTML5)用户代理渲染EPUB XHTML内容文件的能力，但视各用户代理的支持不同，出版物的渲染可能不尽相同。  

### Fixed Layouts，固定布局  
虽然EPUB的历史就是要使得内容可以流动，但是总有出版商对此不感冒。儿童图书、漫画、杂志，还有其它的内容形式，都要求精确的页面布局，才可以做有意义的表现。  
除了已有的处理固定布局的SVG，EPUB3含有元数据，它们允许生成固定布局的XHTML内容文件（[fixed-layout XHTML Content Documets](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-metadata-fxl) （[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)），这个元数据可以控制[dimensions of the page，页面尺寸](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-fxl-xhtml-svg-dimensions)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)），生成画布供绝对点位元素。  
这个元数据不只是简单标记内容是否固定还是流动，也允许作者指定想要的[orientation of pages，页面朝向](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-orientation) （[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)），何时[create systhetic spreads，生成合成展开](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-property-spread)、以及在这些展开里面[how to position pages，如何定位页面](http://www.idpf.org/epub/301/spec/epub-publications.html#fxl-properties-page-spread) （[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）），故而对EPUB出版物对展现提供广泛的控制手段。  

### Rendering and CSS，渲染与CSS  
EPUB的一个关键概念，是内容表述应该适应使用者，而不是使用者适应具体的内容表述。HTML的设计初衷，是为了支持结构化内容的动态渲染，但一段时间下来，Web浏览器支持的HTML已变成专注于Web应用程序的需求，结果绝大多数流行的Web网站现在是固定格式的布局。  

然而，EPUB出版的设计是为了最大限度地保障视障人士的可访问性，阅读系统通常执行文本行布局，并且在空白处（on the fly）分页，对显示区尺寸、用户首选字体大小和其它的环境因素做出适应。这种行为在EPUB并非总是得到保证；图像、矢量图形、视频和其它非回流的内容可以包含在内，有些阅读系统可能不在空白处分页、甚至根本不分页。无论如何，支持动态自适应布局和无障碍可访问性一直是整个EPUB标准演变过程的主要设计考量。  

EPUB内容文件可以选择引用EPUB的样式表[EPUB Style Sheets](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-stylesheet)，允许作者来定义所想要的渲染属性。为此目的，EPUB3基于[CSS2.1](http://www.idpf.org/epub/301/spec/epub-overview.html#refCSS21)，外加各CSS3模块所定义的功能和另外几个EPUB独有的属性制定了CSS规则。  
以前选择CSS3属性是依据它们在Web浏览器的支持级别，但对它们的支持在阅读系统和用户代理那里得不到保证（EPUB定义的属性可以类似地忽略掉）。  

EPUB3还支持那些允许横向和纵向的布局、以及从左到右和从右到左书写的CSS样式，但阅读系统可能不支持所有这些功能。阅读系统也可能支持与作者所打算的不同的渲染选项。更多的信息请参考全球语言支持一节的[CSS](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-gls-css)。  

EPUB3还支持引入多个样式表的能力，它们让用户，例如，在日/夜阅读模式之间选择或更改文本的处理方向。更多信息请参阅可选样式标签[Alternate Style Tags](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-alternate-style-tags)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

### Multimedia，多媒体 
借助于[HTML5](http://www.idpf.org/epub/301/spec/epub-overview.html#refHTML5)新的audio、video元素，EPUB3支持嵌入在[XHTML内容文件](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-content-document-epub-xhtml)里面的音频、视频，并且继承这些元素提供的所有功能和特性（请点击核心媒体类型[Core Media Types ](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-core-media-types)[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)获得关于所支持的音频格式方面的信息。关于嵌入视频方面的建议，请看阅读系统合规条件[Reading System Conformance](http://www.idpf.org/epub/301/spec/epub-publications.html#note-video-codecs)（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)））。  

EPUB3的另一个新的重要多媒体功能是添加了媒体叠加文件[Media Overlay Documents](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-media-overlay-document)，[MediaOverlays301](http://www.idpf.org/epub/301/spec/epub-overview.html#refOverlays3)。如果出版物有预先录制的旁白，媒体叠加提供了把那个音频与内容文件的文本同步的功能（亦参配音和媒体叠加[Aural Renditions and Media Overlays](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-access-overlays)）。  

### Fonts，字体 
EPUB3支持两个密切相关的字体格式 ——OpenType（[OpenType](http://www.idpf.org/epub/301/spec/epub-overview.html#refOpenType)）和WOFF（[WOFF](http://www.idpf.org/epub/301/spec/epub-overview.html#refWOFF)）——来实现传统的出版工作流程，以及新兴的、基于Web的工作流程。比如，用于创建出版物的文字处理程序可能只能够访问一组安装好的OpenType字体，而Web档案的EPUB生成程序（Web-archival EPUB generators ）有可能只能够访问WOFF资源。这些资源若不剔除WOFF元数据（可不希望发生这样的事情，而且可能侵权）是不能够转换到OpenType的。  

对于OpenType和WOFF字体格式，EPUB3还支持变形的和常规字体的资源。为了能够应付许多市售字体的许可限制，对变形字体资源的支持是必需的。  

### Scripting，脚本 
EPUB努力按照声明的方式处理内容 ——作为可以操纵的数据，而不是必须执行的程序 ——但的确如[HTML5](http://www.idpf.org/epub/301/spec/epub-overview.html#refHTML5)和[SVG](http://www.idpf.org/epub/301/spec/epub-overview.html#refSVG)里所定义的支持脚本（更多信息请参阅[Scripted Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-content-reqs)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

然而，需要重点注意的是，支持脚本对阅读系统是可选的，并可能出于安全原因被禁用。  

作者们还应该注意，EPUB出版物的脚本会产生与Web浏览器的脚本不同的安全顾虑。例如，通常的同源政策不适用于已被下载到用户本地系统的内容。因此，强烈鼓励只在容器约束的文本中使用脚本，进一步的说明见''带脚本的内容文件——内容合规''[Scripted Content Documents — Content Conformance](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content-content-reqs)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）  
 
换句话说，要考虑把脚本限制在用户体验必不可少的情形，因为它大大增加了内容在各个阅读系统上面不可移植的可能性，并为无障碍访问以及内容的重复使用造成障碍。  

### Text-to-speech，语音合成  
EPUB3提供下面几个语音合成（TTS）功能，用于控制语音合成的发音、声调和声音特点等方面：  

Pronunciation Lexicons（发音辞典）  

引入采用W3C PLS格式[PLS](http://www.idpf.org/epub/301/spec/epub-overview.html#refPLS)的通用发音词典使作者能够提供适用于整个EPUB出版物的发音规则。更多信息请参阅PLS文件[PLS Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-pls)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

Inline SSML Phonemes（內链SSML音素）  

将SSML音素功能[SSML](http://www.idpf.org/epub/301/spec/epub-overview.html#refSSML)直接加到EPUB内容文件[EPUB Content Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#gloss-content-document-epub)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)），可以实现对语音的精细控制，优先级高于默认的发音规则和/或参考发音词典（如上面提到的PLS格式所提供的）。更多信息请参考[SSML Attributes](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-ssml-attrib )（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

CSS Speech Features（CSS语音特征）  

从CSS3语音模块[CSS3Speech](http://www.idpf.org/epub/301/spec/epub-overview.html#refCSS3Speech)（以前称为CSS 2.1的语音样式表[CSS2.1](http://www.idpf.org/epub/301/spec/epub-overview.html#refCSS21)）选择出来的一套特性的引入，使作者能够控制更多的语音合成特点。更多信息，请参阅CSS3.0语音[CSS3.0 Speech](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css-voice-characteristics)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

### Container，容器   

EPUB出版物是作为一个单独文件（“便携式文件”）来传递和交换的。它包含包文件，所有内容文件以及所有用于处理出版物的其它资源。用于EPUB单独文件的容器格式，基于的是广泛采用的ZIP格式。在包文件的ZIP档案中指定位置的XML仓单（manifest），必须在档案内某个定义明确的位置上能够被找到。  

这一做法为EPUB出版物作者以及使用这些出版物的系统提供了一个清楚的合同，也提供了一个独立于网络传输或文件系统的可靠表达方式。  

具体如何把EPUB出版物作为容器文件来进行表达，见[OCF301](http://www.idpf.org/epub/301/spec/epub-overview.html#refOCF3)。  

## Global Language Support，全球语言支持  
 
### Metadata，元数据 
EPUB3支持对位于包元数据字段里的文本元数据各项进行可选择性表达，以提高出版物的全球发行。可以把alternate-script属性可以与xml：lang属性结合起来以包括和确定对语言相关的元数据的可选脚本处理。  

使用此属性，一个日本出版物，举例来说，可以包括对作者名字的可选罗马脚本表达，和/或对书名的一个或多个罗曼语系表达。更多信息，请参阅可选择脚本属性[alternate-script property](http://www.idpf.org/epub/301/spec/epub-publications.html#alternate-script) （[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）。  

page-progression-direction(页面进行方向)属性也允许为所有内容文件指定全局内容流动（方向）以实现渲染（见[page-progression-direction](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-spine-page-progression-direction)（页面行进方向）（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）。  

### Content Documents 内容文件 
XHTML内容文件利用HTML5新的方向特性来改善对双向内容渲染的支持。bdi元素允许将某个具有方向性的文本实例从周围的内容孤立开来，bdo元素允许改写其子内容的方向性，而dir属性允许对任何元素的方向性进行明确的设置。   
XHTML内容文件也支持对旁注的发音支持（这也使得它们为导航文件链接所支持）。  

SVG内容文件支持对双向文本的渲染，但不包括对旁注的支持。  

### CSS  
EPUB3对CSS3新模块的支持,使得对许多不同的语言和文化进行排版成为可能。具体的改进有：  

*   支持垂直书写，这也为阅读系统提供了允许用户切换方向的能力;  

*   更好地处理强调，如对bōten的包括（better handling of emphasis, such as the inclusion of bōten）;

*   更好地控制断行，对那些不使用空格分隔新词的语言进行换行的时候，让断行出现在字符级别；且  

*   更好地控制连字符，进一步促进换行。  

### Fonts，字体 
EPUB3不需要阅读系统自带任何具体的内置系统字体集。与发生在Web上下文的情形一样，某个特定地点的用户可能已安装了字体，而省略掉了其它地区所需要的字符；阅读系统可能利用内置字体或字体引擎，而不利用操作系统安装的字体。结果是，出版物的文本内容在本地的渲染可能并非原定在所有阅读系统上的渲染方式。  

为了解决这个问题，EPUB3支持嵌入字体，以实现对文本内容的处理。推荐这种做法，以确保内容的渲染是按照希望的方式进行。  

对嵌入字体的支持，也确保了出版物的专有字符、字形能被嵌入和妥善显示。  

### Text-to-speech，语音合成  
EPUB3对PLS文件的支持和SSML属性增加了作者的发音控制，在启用TTS的阅读系统里面对任一自然语言进行渲染。有关这些功能的更多信息，请参阅Features一节的[Text-to-speech](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-tts)。  

CSS语音与內链（inline）SSML音素的组合还允许对旁注进行精细控制。  

### Container，容器  
 
OCF容器格式支持UTF-8，允许对内容资源的文件和目录进行国际化的命名。  

# Accessibility，无障碍访问  

EPUB的一个主要目标是使内容访问无障碍，EPUB3有好些功能支持这一需求。本节总结这些特性，对一些成熟的最佳做法做详细介绍，确保在可行的地方EPUB出版物能够被访问。  

值得注意的是，虽然访问无障碍本身是重要的，能够被访问的内容也是更有价值的内容：一个无访问障碍的出版物，不管是全部或部分，也不管是通过人工还是自动化工作流程，要适应更多的设备和更易于重复使用。EPUB工作组强烈建议作者们使用生成无障碍访问内容的EPUB工具。  
### Navigation，导航  
EPUB3增加[EPUB Navigation Documents](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-content-document-epub-nav)（EPUB导航文件）对NCX文件进行改进。如前面[Navigation Documents](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-nav-nav-doc)（导航文件）所指出的，由这些提供的新功能，代表的是一个更通用、更灵活的导航系统。  

按照内容目录导航不只是一个无障碍访问的问题，完整的内容目录可以保证所有的用户都能够容易地、完全地访问EPUB出版物的内容。要提供这样的功能，基本[toc nav Element](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav-def-types-toc)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）必须得充分反映出版物的结构，否则对有些用户来说，导航就打折扣了。  

也可以通过放在spine里面的方式，在EPUB出版物的body里面重复使用导航文件。
对于高度结构化的文件，可能不希望在body里面给用户显示完整的内容目录，为了避免这样的情况，可以使用[HTML5](http://www.idpf.org/epub/301/spec/epub-overview.html#refHTML5)的hidden属性修改显示级别。当阅读系统在spine之外渲染内容目录的时候，这个属性被忽略。   

如果出版物包含非结构化的兴趣点，如数字、表格等，也鼓励作者提供额外的nav元素，以进一步提高对内容的访问。  

### Semantic Markup，语义标记  

HTML5支持一些旨在使标记的语义更清晰（如section, nav, aside）的新元素，又为几个HTML4的元素增加了定义更明确的语义。这些元素，加上创作具有良好结构的Web内容的最佳做法，应在创建EPUB的XHTML内容文件时加以使用。这些新增功能允许将内容更好地分组和定义，既为展示文件的结构，也方便它们的逻辑导航。XHTML内容文件也本地支持对ARIA角色、状态属性和事件的引入，提高了辅助技术与内容交互的能力。  

EPUB3进一步引入[epub：type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#attrdef-epub-type)属性（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)），以在功能上等同于W3C的[Role Attribute](http://www.idpf.org/epub/301/spec/epub-overview.html#refPFRoleAttribute)（角色属性）。此属性允许XHTML内容文档中的任何元素都可以使用受控词汇、术语来添加关于其目的、意义的额外信息。更多信息请参考[Semantic Inflection](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-semantic-inflection )（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）。  

### Dynamic Layouts，动态布局  
EPUB的设计中心是动态布局：总希望在空白处（on the fly ）对内容布局，而不是以事先分页的方式排版（即预期某个具体尺寸的“页”）。这一核心能力是非常有用的，例如，用于在不同大小的设备屏幕或窗口尺寸上做最佳渲染，它也方便和简化了内容的访问。  

虽然加入格式化程度更高的EPUB内容是可行的—— 例如通过bmp图像或SVG图形，甚至是使用CSS明确定位，和/或表格元素以实现特定的视觉布局——但还是要极力劝阻作者使用这种技术。它们在EPUB是不可靠的，原因是许多阅读系统是按照分页的方式来渲染内容，而不是建立一个滚动的[Viewport](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-viewport)（视口），也是因为每个阅读系统的分页算法可能是自定义的。如果传递出版物的内容（例如，图形小说）需要使用这些技术，则应该总是包括[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)（备选方案）（[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）。  

一般而言，最好是使用[EPUB Style Sheets](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-stylesheet)（EPUB样式表）来实现视觉的丰富，避免绝对尺寸或定位。  

### Content Descriptions，内容描述  
虽然描述通常是和图像为主的内容相联系的，为了让内容更容易访问，需要能够在文件里描述复杂的结构。例如，对复杂表格数据加以描述，对所有的用户都是有好处的。  
EPUB3引入两个机制，用于描述XHTML内容文件里面的结构。[WAI-ARIA](http://www.idpf.org/epub/301/spec/epub-overview.html#refARIA)的aria-describedby属性允许链接同一页里面的描述。可以使用[WAI-ARIA-1.1](http://www.idpf.org/epub/301/spec/epub-overview.html#refARIA11)的aria-describedat属性来引用位于其它文件的描述（可以在EPUB容器的内外）。  

### Aural Renditions and Media Overlays，有声播报和媒体叠加  
内容的有声播报对访问无障碍是重要的，对许多其他用户也是个合意的功能。提供有声播报的底线是利用为动态布局设计的语义化HTML。关于如何使用EPUB XHTML文档内本地设施的详细信息，请参阅[Text-to-speech](http://www.idpf.org/epub/301/spec/epub-overview.html#sec-tts)（语音合成）。  

媒体叠加提供了将出版物的文本和音频内容同步的功能。DAISY数字有声读物的读者已经熟悉这个功能。媒体叠加的功用超出了辅助领域：比如，作为练习阅读能力的工具，文字和音频的同步在许多情况下是有用的。  

### Fallbacks，备选方案 
并非所有的格式在其本地格式下都是可访问的，也并不是所有的用户都喜欢按照所提供的默认格式来阅读。EPUB定义了提供备选方案的各种手段，使出版物在这些情况下可以进行选择性渲染。  

出版物和内容级的备选方案定义在[Restrictions and Fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow)（限制和备选）[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)。这些备选机制使得能够在EPUB出版物里加入外来资源，并且保证EPUB3内容在不同能力的阅读系统上的兼容性（例如，它们允许加入不同格式的视频，为了EPUB2阅读系统的缘故，给SVG内容文件加XHTML备选）。  

类似地，[switch element](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-epub-switch)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）为标记级别内容的功能提供备选，它在有的阅读系统可能是不被支持的（例如，在EPUB3阅读系统里允许加ChemML，或者是为EPUB2阅读系统提供可选的MathML）。  

此外，一个完整工作的多个实例可以发表在单个出版物，其方法是在OCF容器文件里面定义多个rootfile元素（详见[Container - META-INF/container.xml](http://www.idpf.org/epub/301/spec/epub-ocf.html#sec-container-metainf-container.xml )（[OCF301](http://www.idpf.org/epub/301/spec/epub-overview.html#refOCF3)））。这样的备选方案可以用来，例如，使得由一系列SVG页面组成的连环画小说，能够附带一个按照XHTML定义、可访问的文本版。  

### Scripting，脚本   
EPUB3对脚本内容进行逐渐改进的处理，并且不得影响脚本文件的完整性（即在脚本不可用时，不得导致信息丢失）。因此，虽然使用了脚本的文件可能会提供[fallbacks](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-scripted-content)（备选方案）（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）以利于对其内容的访问，但是，没有这些，文件也必须能够被访问。  

好几个EPUB机制可以进一步最大程度降低和限制出版物里面的脚本，以改善可访问性：  

* EPUB HTML5新增加的声明性[trigger element](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-epub-trigger)（触发元素）（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)），使图像或文本元素能够作为音频和视频的控制（例如，开始，停止和暂停播放）。此元素让为实现类似功能而屡屡使用的脚本可以寿终正寝了。  

* [mediaType element](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-mediaType-elem)（mediaType元素，[Publications301](http://www.idpf.org/epub/301/spec/epub-overview.html#refPublications3)）对以脚本为基础的支持提供了封装手段，用于渲染常用的XML词汇或其它常用的内容类型、也是用于生成不过时的出版物，以备将来的阅读系统在本地支持这些类型的内容。  

* 由[type](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-content-type-attribute)（type属性, [ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）提供的语义变化（semantic inflection）功能使作者能够给阅读系统提供关于内容属性的提示。一个实用例子是定义图像、视频等元素拥有可缩放的属性值，在这种情况下阅读系统可为用户提供访问放大画面的手段，而在正常布局情况下则会超界。这种翻转效果通常是借助Web上下文的脚本来实现的，但阅读系统产生的布局何其多，实施脚本谈何容易。  

* [switch element ]( http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-epub-switch)元素（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）提供了声明性质的手段，作者用它为用户剪裁显示内容，而无需诉诸脚本化的解决方案。  

应经常借鉴Web文档的那些用于脚本访问的最佳做法，如[WAI-ARIA](http://www.idpf.org/epub/301/spec/epub-overview.html#refARIA)里面提供的。应把脚本的使用保留给那些交互式用户体验必不可少的情形。   

# Appendix A. Glossary 附录A 词汇表   
本附录不属于规范内容  

##### EPUB Publication(or Publication)，EPUB出版物   

打包在[EPUB Container(EPUB容器)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)里的含有一个或者多个[Rendition(渲染)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-rendition)的集合。  
典型的EPUB出版物是单个的知识产权或者艺术作品，不过[EPUB3规范]( http://www.idpf.org/epub/301/spec/epub-overview.html#sibling-specs)对内容的性质并不限制。  

##### Rendition，渲染 
逻辑文件的一个实体，由一组相互关联的[资源](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-publication-resource-cmt-or-foreign)组成，表达对某个[EPUB出版物](http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-epub-publication)的特定处理。  

##### Publication Resource，出版物资源   
包含内容或指令的资源，它对EPUB出版物的至少一个Rendition贡献逻辑和渲染方式。缺了这些资源，出版物的处理有可能不是[Author(作者)](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-author)所打算的。出版物资源的例子有[包文件（Package Document）](Package Document)、[EPUB内容文件（Content Documents）](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub)、 [EPUB 样式表（Style Sheets）](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-stylesheet)、音频、视频、图像、嵌入字体和脚本 。 

除了包文件本身，用作处理某个Rendition所需的出版物资源列在该Rendition的[manifest](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-manifest-elem) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)），并且打包在[EPUB Container](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-container)文件里（除非在[Publication Resource Locations](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-resource-locations) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）另有规定）。   

不是出版物资源的资源例子包括：Package Document [link](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-link-elem)元素（[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）所指定的，以及在向外打开的超链接里指定、在[EPUB容器]( http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-container)外面落实的资源
(例如，由[HTML5](http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)的[a](http://www.w3.org/TR/html5/Overview.html#the-a-element)元素的href属性引用的)。
 
##### EPUB Content Document，EPUB内容文件   

符合EPUB内容文件定义之一（[XHTML](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-xhtml) 或 [SVG](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-content-document-epub-svg)）的[出版物资源]( http://www.idpf.org/epub/301/spec/epub-overview.html#gloss-publication-resource-cmt-or-foreign)。  
EPUB内容文件是核心媒体[Core Media Type](http://www.idpf.org/epub/301/spec/epub-publications.html#gloss-core-media-type)类型资源，因此可以不加[fallbacks](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-fallback-processing-flow) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）就放入EPUB出版物。  

##### XHTML Content Document，XHTML内容文件  
符合[HTML5](http://www.idpf.org/epub/301/spec/epub-publications.html#refHTML5)描述，定义在[XHTML Content Documents](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）的EPUB内容文件。

XHTML内容文件使用HTML5的[XHTML syntax](http://www.w3.org/TR/html5/Overview.html#the-xhtml-syntax)语法。   

##### SVG Content Document，SVG内容文件   

符合[SVGContent Document](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-svg) （[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里所列明之限制的EPUB内容文件。 

##### EPUB Navigation Document，EPUB导航文件   

专门的XHTML内容文件，内含人、机可读的全球导航信息，符合[EPUB Navigation Documents] (http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-nav)（[ContentDocs301](http://www.idpf.org/epub/301/spec/epub-publications.html#refContentDocs3)）里面所写的限制。   

##### Core Media Type，核心媒体类型   
一组不需要fallback的出版物资源类型。更多信息请参[Publication Resources](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-publication-resources) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  

##### Package Document，包文件   

如[Package Documents](http://www.idpf.org/epub/301/spec/epub-publications.html#sec-package-documents) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）所定义的[出版物资源]()，带有关于EPUB出版物的某个rendition的书目和结构的元数据。  

##### Unique Identifier，唯一识别符   
唯一识别符是EPUB出版物的主要识别符，由[unique-identifier](http://www.idpf.org/epub/301/spec/epub-publications.html#attrdef-package-unique-identifier)属性所定义. 唯一识别符可以为同一个作品的一个或多个Renditions所共有。它们符合EPUB标准、且体现同样的内容。  

唯一识别符比ISBN粗线条。然而，对内容的显著修改、删节等等需要新的唯一识别符。  

##### Release Identifier，发行识别符   

发行识别符允许EPUB出版物的任何实例能够和其它发行相对比，以确定它们是完全相同，是不同版本，抑或不相干。  
 
更多信息请参[Release Identifier]( http://www.idpf.org/epub/301/spec/epub-publications.html#sec-opf-metadata-identifiers-pid) （[Publications301](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#refPublications3)）。  

##### Media Overlay Document，媒体叠加文件  

属于XML文件，它把XHTML内容文件与事先录制的旁白音频相关联，以便同步播放，定义在[MediaOverlays301]( http://www.idpf.org/epub/301/spec/epub-overview.html#refOverlays3)。  

##### EPUB Style Sheet (or Style Sheet)，EPUB样式表（或样式表）   

是符合[EPUB Style Sheets]( http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-css)（[ContentDocs301]( http://www.idpf.org/epub/301/spec/epub-overview.html#refContentDocs3)）所定义的CSS样式表。  

##### Viewport，视口  

EPUB阅读系统的一个区域，通过它将EPUB出版物可视化地呈现给用户。  

##### EPUB Container (or Container)，EPUB容器（或容器）  

用于EPUB出版物、基于ZIP的打包与发行格式，定义在[OCF301](http://www.idpf.org/epub/301/spec/epub-overview.html#refOCF3).   

##### Author，作者  

负责生成EPUB出版物的人或组织，不一定是所含内容或资源的创作者。  

##### User，用户  
使用EPUB阅读系统消费EPUB出版物的个体。   

##### EPUB Reading System (or Reading System)，EPUB阅读系统（或阅读系统） 
按照与EPUB3规范相符的方式将EPUB出版物呈现给用户的系统。  

# Appendix B. Acknowledgements and Contributors 附录B 致谢和贡献人  
本节不属于规范内容。  
翻译省略，[原文在此]( http://www.idpf.org/epub/301/spec/epub-overview.html#acknowledgements)  

# References 参考文献  
省略翻译，[原文在此]( http://www.idpf.org/epub/301/spec/epub-overview.html#references)  
category:EPUB   
category:电子阅读  
