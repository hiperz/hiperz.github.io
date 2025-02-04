import{n as y}from"./chunk-VYEGLGHD.js";import{Hc as f,X as b,a as d,aa as w,b as h,p as u}from"./chunk-KZVD5HA2.js";var m=[{category:"csharp",id:23,content:`<article class="prose max-w-none">\r
    <h2>Table of Contents</h2>\r
    <ul>\r
        <li><a href="/#json-enum-string">Serializing Enums as Strings in JSON</a></li>\r
        <li><a href="#json-enum-list">Serializing Enum Lists in JSON</a></li>\r
    </ul>\r
\r
    <h2 id="json-enum-string">Serializing Enums as Strings in JSON</h2>\r
    <p>\r
        When serializing JSON, data is typically stored as a text file or in a database. However, enum values are often stored as numbers, which reduces readability when inspecting JSON strings.\r
        To improve readability, it's common to store enum values as strings. This can be achieved by applying a specific attribute to the enum variable, as shown below:\r
    </p>\r
    <pre class="csharp language-csharp"><code>\r
using Newtonsoft.Json;\r
using Newtonsoft.Json.Converters;\r
\r
public enum CompanyType {\r
    Apple,\r
    Samsung,\r
}\r
\r
public class Company\r
{\r
    [JsonConverter(typeof(StringEnumConverter))]\r
    public CompanyType CompanyType { get; set; }\r
}</code>\r
</pre>\r
<br>\r
    <h2 id="json-enum-list">Serializing Enum Lists in JSON</h2>\r
    <p>\r
        If the member variable is an array or list, you can specify the attribute differently, as demonstrated in the following example:\r
    </p>\r
    <pre class="csharp language-csharp"><code>\r
using Newtonsoft.Json;\r
using Newtonsoft.Json.Converters;\r
\r
public enum CompanyType {\r
    Apple,\r
    Samsung,\r
}\r
\r
public class Company\r
{\r
    [JsonConverter(typeof(StringEnumConverter))]\r
    public CompanyType CompanyType { get; set; }\r
    \r
    [JsonProperty(ItemConverterType = typeof(StringEnumConverter))]\r
    public List&lt;CompanyType&gt; CompanyTypes { get; set; }\r
}</code>\r
</pre>\r
</article>\r
`},{category:"csharp",id:24,content:`<meta\r
  name="keywords"\r
  content="C#, JSON, JObject, SelectToken, SelectTokens, JSONPath, LINQ, Newtonsoft.Json, JSON Parsing, JSON Manipulation"\r
/>\r
\r
<article class="prose max-w-none">\r
  <h2>Table of Contents</h2>\r
  <ul>\r
    <li><a href="#json-parsing">Parsing JSON with JObject</a></li>\r
    <li><a href="#selecttoken">Using SelectToken</a></li>\r
    <li><a href="#jsonpath">Using JSONPath with SelectToken</a></li>\r
    <li><a href="#linq">Using SelectToken with LINQ</a></li>\r
  </ul>\r
  <h2 id="json-parsing">Parsing JSON with JObject</h2>\r
  <p>\r
    When working with variable JSON structures in C#, or when you need to extract or modify specific data, it is often\r
    more efficient to use <code>JObject</code> along with the <code>SelectToken</code> and <code>SelectTokens</code>\r
    methods. These methods allow you to retrieve or manipulate specific JSON values without needing to define\r
    full-fledged C# classes for mapping.\r
  </p>\r
  <p>\r
    Original reference:\r
    <a href="https://www.newtonsoft.com/json/help/html/SelectToken.htm">Newtonsoft JSON SelectToken Documentation</a>\r
  </p>\r
  <br />\r
\r
  <h2 id="selecttoken">Using SelectToken</h2>\r
  <p>\r
    The <code>SelectToken</code> method returns a <code>JToken</code> using a string path to access child tokens. If the\r
    specified token is found, it returns the token; otherwise, it returns <code>null</code>. The path uses dot notation\r
    for properties and array indexes. For example: <code>Manufacturers[0].Name</code>.\r
  </p>\r
  <pre class="csharp language-csharp"><code>\r
JObject o = JObject.Parse(@"{\r
  'Stores': [\r
      'Lambton Quay',\r
      'Willis Street'\r
  ],\r
  'Manufacturers': [\r
      {\r
          'Name': 'Acme Co',\r
          'Products': [\r
              {\r
                  'Name': 'Anvil',\r
                  'Price': 50\r
              }\r
          ]\r
      },\r
      {\r
          'Name': 'Contoso',\r
          'Products': [\r
              {\r
                  'Name': 'Elbow Grease',\r
                  'Price': 99.95\r
              },\r
              {\r
                  'Name': 'Headlight Fluid',\r
                  'Price': 4\r
              }\r
          ]\r
      }\r
  ]\r
}");\r
\r
string name = (string)o.SelectToken("Manufacturers[0].Name");\r
// Acme Co\r
\r
decimal productPrice = (decimal)o.SelectToken("Manufacturers[0].Products[0].Price");\r
// 50\r
\r
string productName = (string)o.SelectToken("Manufacturers[1].Products[0].Name");\r
// Elbow Grease</code>\r
</pre>\r
<br>\r
  <h2 id="jsonpath">Using JSONPath with SelectToken</h2>\r
  <p>\r
    You can leverage <a href="https://goessner.net/articles/JsonPath/" target="_blank" rel="noopener">JSONPath</a>\r
    expressions to query tokens dynamically.\r
  </p>\r
  <pre class="csharp language-csharp"><code>\r
JToken acme = o.SelectToken("$.Manufacturers[?(@.Name == 'Acme Co')]");\r
Console.WriteLine(acme);\r
// { "Name": "Acme Co", Products: [{ "Name": "Anvil", "Price": 50 }] }\r
\r
IEnumerable&lt;JToken&gt; pricyProducts = o.SelectTokens("$..Products[?(@.Price &gt;= 50)].Name");\r
\r
foreach (JToken item in pricyProducts)\r
{\r
  Console.WriteLine(item);\r
}\r
// Anvil\r
// Elbow Grease</code>\r
</pre>\r
<br>\r
  <h2 id="linq">Using SelectToken with LINQ</h2>\r
  <p>The <code>SelectToken</code> method can be combined with LINQ to filter and retrieve JSON data efficiently.</p>\r
  <pre class="csharp language-csharp"><code>\r
IList&lt;string&gt; storeNames = o.SelectToken("Stores").Select(s =&gt; (string)s).ToList();\r
// Lambton Quay\r
// Willis Street\r
\r
IList&lt;string&gt; firstProductNames = o["Manufacturers"].Select(m =&gt; (string)m.SelectToken("Products[1].Name")).ToList();\r
// null\r
// Headlight Fluid\r
\r
decimal totalPrice = o["Manufacturers"].Sum(m =&gt; (decimal)m.SelectToken("Products[0].Price"));\r
// 149.95</code>\r
</pre>\r
</article>\r
`},{category:"csharp",id:32,content:`<meta name="keywords" content="C#, variable swap, Classic Method, Modern Method, tuple" />\r
\r
<h2>1. Classic Method</h2>\r
<p>\r
  &nbsp;Declare an additional temporary variable, copy the value or reference of one of the two variables into it, and\r
  then perform the swap.\r
</p>\r
<pre class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>var a = 10;\r
var b = 20;\r
var temp = a;\r
a = b;\r
b = temp;</code>\r
    </pre>\r
<h2>2. Modern Method (C# 7.0 or later)</h2>\r
<p>&nbsp;Using a tuple, you can achieve the swap in a single line.</p>\r
<pre class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>(b, a) = (a, b)</code>\r
    </pre>\r
`},{category:"csharp",id:34,content:`<meta name="keywords" content="NLog, logging, MethodCallTarget, GRPC, WebSocket, Kafka" />\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
  <li><a href="#introduction">Introduction</a></li>\r
  <li><a href="#implementation">Implementation with MethodCallTarget</a></li>\r
  <li><a href="#example">Example</a></li>\r
  <li><a href="#references">References</a></li>\r
</ul>\r
\r
<h2 id="introduction">Introduction</h2>\r
<p>\r
  Generally, when using NLog to generate log messages within multiple class libraries or multiple classes, there are\r
  times when you need to process the message each time a log message occurs and display it on the GUI, or publish it to\r
  a Message Broker like GRPC, WebSocket, or Kafka.\r
</p>\r
\r
<h2 id="implementation">Implementation with MethodCallTarget</h2>\r
<p>In such cases, you can easily implement it using the MethodCallTarget class of NLog as shown below.</p>\r
<pre class="csharp" data-ke-language="csharp" data-ke-type="codeblock">\r
        <code>// Define the callback function.\r
var target = new MethodCallTarget("LogNotify", async (logEvent, parameters) =>\r
{\r
    // Perform the desired processing here. If there are no asynchronous calls inside, remove the async above.\r
    if (logEvent.Level > NLog.LogLevel.Debug)\r
    {\r
    ...\r
    }\r
});\r
\r
// Register the callback function to be called for all log message levels.\r
LogManager.Configuration.AddRuleForAllLevels(target);\r
\r
// Update the logger configuration.\r
LogManager.ReconfigExistingLoggers();\r
        </code>\r
    </pre>\r
\r
<h2 id="example">Example</h2>\r
<p>\r
  The example from the official website's documentation (<a\r
    href="https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm"\r
    target="_blank"\r
    rel="noopener"\r
    >https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm</a\r
  >) is as follows.\r
</p>\r
<pre class="csharp" data-ke-language="csharp" data-ke-type="codeblock">\r
        <code>using System;\r
using NLog;\r
using NLog.Targets;\r
using System.Diagnostics;\r
\r
public class Example\r
{\r
    public static void LogMethod(string level, string message)\r
    {\r
        Console.WriteLine("l: {0} m: {1}", level, message);\r
    }\r
    static void Main(string[] args)\r
    {\r
        MethodCallTarget target = new MethodCallTarget();\r
        target.ClassName = typeof(Example).AssemblyQualifiedName;\r
        target.MethodName = "LogMethod";\r
        target.Parameters.Add(new MethodCallParameter("\${level}"));\r
        target.Parameters.Add(new MethodCallParameter("\${message}"));\r
\r
        NLog.Config.SimpleConfigurator.ConfigureForTargetLogging(target, LogLevel.Debug);\r
\r
        Logger logger = LogManager.GetLogger("Example");\r
        logger.Debug("log message");\r
        logger.Error("error message");\r
    }\r
}\r
        </code>\r
    </pre>\r
\r
<h2 id="references">References</h2>\r
<p>\r
  For more information, please visit the\r
  <a\r
    href="https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm"\r
    target="_blank"\r
    rel="noopener"\r
    >NLog MethodCallTarget Documentation</a\r
  >.\r
</p>\r
`},{category:"csharp",id:38,content:`<html><head><meta name="keywords" content="file path, Windows Registry, LongPathsEnabled">

</head><body><p>
  The main cause is that the file path is too long. Therefore, you can reduce the length of the path name by shortening
  the project folder name and placing it in a higher-level folder. However, if you inevitably need to place it in a
  folder with a long name and deep level, there is a way to change the Windows Registry.
</p>
<p>
  <img class="border" src="./assets/images/articles/csharp/38/q3elr_btrYSOA57ZX_K2rhXcu806po17zVI4z8B0_img.png" alt="Registry Editor Image">
</p>
<p>Go to the registry path below</p>
<pre class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem</code></pre>
<p>Set LongPathsEnabled to 1 to solve the problem.</p>
<p>If the property does not exist, create a new DWORD type and set the value to 1. (No reboot required)</p>
</body></html>`},{category:"csharp",id:40,content:`<meta name="keywords" content="HMACSHA256, C#, password encryption, hashing, credential helper">\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
    <li><a href="#introduction">Introduction</a></li>\r
    <li><a href="#code-example">Code Example</a></li>\r
    <li><a href="#usage">Usage</a></li>\r
</ul>\r
<h3 id="introduction">Introduction</h3>\r
<p>By using the HMACSHA256 class in C#, you can easily convert a user's password into an encrypted string with very simple code.</p>\r
<h3 id="code-example">Code Example</h3>\r
<pre id="code_1676461079220" class="csharp" data-ke-language="csharp" data-ke-type="codeblock">\r
<code>\r
    public static class CredentialHelper\r
    {\r
        public static string GetHMACSHA256Hash(string username, string password)\r
        {\r
            var key = Encoding.ASCII.GetBytes(username);\r
            var data = Encoding.ASCII.GetBytes(password);\r
            return Convert.ToBase64String(new HMACSHA256(key).ComputeHash(data));\r
        }\r
    }\r
</code>\r
</pre>\r
<h3 id="usage">Usage</h3>\r
<p>As shown above, you can create a static class and use the function to generate a hash string from the username and password entered by the user. You can then store this hash string and compare it with the hash generated from the username/password combination entered by the user during login to verify.</p>\r
`},{category:"csharp",id:45,content:`<html><head><meta name="keywords" content="Python, Jupyter Notebook, C#, Anaconda, Miniconda, .Net, development environment">

</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
</ul>
<h3 id="introduction">Introduction</h3>
<p>&nbsp;Anyone who has used Python has probably used Jupyter Notebook. Using Jupyter Notebook is much more useful than simply storing or sharing commented source code, as it allows you to test various simple code blocks for playground purposes or create tutorial documents that you can directly modify and execute.</p>
<p>&nbsp;Now, you can create notebooks with C# code in Jupyter Notebook. Assuming that you already have Anaconda/Miniconda environment or Python, Jupyter Notebook, and .Net development environment installed on your PC, you can simply execute the following command line commands in order.</p>
<br>
<h3 id="installation">Installation</h3>
<p>
</p><h4><b>1. Install Microsoft.dotnet-interactive.</b></h4>
<div class="m-2 mb-8">
<pre id="code_1677478512568" class="shell" data-ke-language="shell" data-ke-type="codeblock"><code>dotnet tool install --global Microsoft.dotnet-interactive</code></pre>
<p>
    <img src="./assets/images/articles/csharp/45/6cSoU_btr0We4GUVN_durNryODkXLtyvrXDWuaI0_img.png" alt="">
</p>
</div>
<p></p>
<p>
</p><h4><b>2. Execute the command to install the .Net kernel for Jupyter notebook.</b></h4>
<div class="m-2">
<pre id="code_1677478648471" class="shell" data-ke-language="shell" data-ke-type="codeblock"><code>dotnet-interactive jupyter install</code></pre>
<p>
    <img src="./assets/images/articles/csharp/45/p26oC_btr0Oa9Fj6W_zF9EjmtUKzh5HlqddaKhc0_img.png" alt="">
</p>
</div>
<p></p>
<br>
<h3 id="usage">Usage</h3>
<p>Now, if you run Jupyter notebook, you will see C# in the new notebook creation.</p>
<p>
    <img src="./assets/images/articles/csharp/45/1Mu6r_btr01TMFQp7_tslKW80Fo5UHzzT3GjFYTk_img.png" alt="">
</p>
<p>Now you can create notebooks with C# code as shown below.</p>
<p>
    <img src="./assets/images/articles/csharp/45/bur6GT_btr0Iv7UyE1_1iPw8NWGSFBcHy1G9EKFPk_img.png" alt="">
</p>
</body></html>Fbtr0Iv7UyE1%2F1iPw8NWGSFBcHy1G9EKFPk%2Fimg.png" alt="">
</p>
</body></html>Fbtr0Iv7UyE1%2F1iPw8NWGSFBcHy1G9EKFPk%2Fimg.png" alt="">
</p>
</body></html>Fbtr0Iv7UyE1%2F1iPw8NWGSFBcHy1G9EKFPk%2Fimg.png" alt="">
</p>
</body></html>`},{category:"csharp",id:47,content:`<meta name="keywords" content=".NET 6, C# 10, lambda expressions, compiler, attributes">\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
    <li><a href="#introduction">Introduction</a></li>\r
    <li><a href="#natural-type">Natural Type of a Lambda Expression</a></li>\r
    <li><a href="#explicit-return-type">Explicit Return Type of a Lambda Expression</a></li>\r
    <li><a href="#attributes">Attributes</a></li>\r
</ul>\r
<h3 id="introduction">Introduction</h3>\r
<p>&nbsp;.NET 6 supports C# language version 10. Among various improvements, there have been some enhancements to lambda expressions. Let's take a look.</p>\r
<p>Original link: <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#explicit-return-type" target="_blank" rel="noopener">https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#explicit-return-type</a></p>\r
<br>\r
<h3 id="natural-type">1. Natural Type of a Lambda Expression</h3>\r
<p>&nbsp;In the past, assigning a lambda expression to a variable with a var type would result in an error, requiring explicit type declaration with Func&lt;string, int&gt;. Now, the compiler is smart enough to infer the return type from the lambda expression.</p>\r
<pre id="code_1677808725470" class="sql" data-ke-language="sql" data-ke-type="codeblock"><code>var parse = (string s) =&gt; int.Parse(s);</code></pre>\r
<p>This should have been possible a long time ago... It seems like Microsoft is not working hard enough.</p>\r
<br>\r
<h3 id="explicit-return-type">2. Explicit Return Type of a Lambda Expression</h3>\r
<p>In the following lambda expression, the return type is ambiguous because it returns an int or a string based on the value of b, causing a compiler error. This often happens when multiple types need to be returned, and explicitly casting the return type can be cumbersome.</p>\r
<pre id="code_1677807045116" class="sql" data-ke-language="sql" data-ke-type="codeblock"><code>var choose = (bool b) =&gt; b ? 1 : "two"; // ERROR: Can't infer return type</code></pre>\r
<p>Starting with C# 10, you can explicitly specify the return type in front of the lambda expression.</p>\r
<pre id="code_1677807053554" class="sql" data-ke-language="sql" data-ke-type="codeblock"><code>var choose = object (bool b) =&gt; b ? 1 : "two"; // Func&lt;bool, object&gt;</code></pre>\r
<p>Personally, I wish the compiler would implicitly interpret such cases as object type without needing to explicitly write object. Sometimes C# feels a bit frustrating compared to other languages, but I hope many improvements will be made soon.</p>\r
<br>\r
<h3 id="attributes">3. Attributes</h3>\r
<p>&nbsp;You can now specify attributes for lambda expressions or their parameters. Personally, I have never felt the need to specify attributes for lambda expressions, but it's always good to have more flexibility...</p>\r
<p>&nbsp;You can specify attributes for lambda expressions as shown below:</p>\r
<pre id="code_1677809135308" class="angelscript" data-ke-language="sql" data-ke-type="codeblock"><code>Func&lt;string?, int?&gt; parse = [ProvidesNullCheck] (s) =&gt; (s is not null) ? int.Parse(s) : null;</code></pre>\r
<p>&nbsp;You can also specify attributes for each parameter or for the return value as shown below:&nbsp;</p>\r
<pre id="code_1677809202818" class="sql" data-ke-language="sql" data-ke-type="codeblock"><code>var concat = ([DisallowNull] string a, [DisallowNull] string b) =&gt; a + b;\r
var inc = [return: NotNullifNotNull(nameof(s))] (int? s) =&gt; s.HasValue ? s++ : null;</code></pre>\r
<br>`},{category:"csharp",id:53,content:`<meta name="keywords" content="JSON, XML, serialization, Json.NET, data exchange, structured data">\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
    <li><a href="#introduction">Introduction</a></li>\r
    <li><a href="#serialization">Serialization</a></li>\r
</ul>\r
<h3 id="introduction">Introduction</h3>\r
<p>&nbsp;These days, when exchanging messages between different apps or services, complex structured data is mostly converted to JSON. Of course, there are still many places that use XML. Therefore, there are cases where the data received in XML needs to be serialized to JSON and stored or sent to another node.</p>\r
<p>&nbsp;In such cases, you can easily serialize it with just a method call using Json.NET.</p>\r
<br>\r
<h3 id="serialization">Serialization</h3>\r
<pre id="code_1679636243891" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>string xml = @"&lt;?xml version='1.0' standalone='no'?&gt;\r
&lt;root&gt;\r
    &lt;person id='1'&gt;\r
    &lt;name&gt;Alan&lt;/name&gt;\r
    &lt;url&gt;http://www.google.com&lt;/url&gt;\r
    &lt;/person&gt;\r
    &lt;person id='2'&gt;\r
    &lt;name&gt;Louis&lt;/name&gt;\r
    &lt;url&gt;http://www.yahoo.com&lt;/url&gt;\r
    &lt;/person&gt;\r
&lt;/root&gt;";\r
\r
XmlDocument doc = new XmlDocument();\r
doc.LoadXml(xml);\r
\r
string json = JsonConvert.SerializeXmlNode(doc);\r
\r
Console.WriteLine(json);\r
// {\r
//   "?xml": {\r
//     "@version": "1.0",\r
//     "@standalone": "no"\r
//   },\r
//   "root": {\r
//     "person": [\r
//       {\r
//         "@id": "1",\r
//         "name": "Alan",\r
//         "url": "http://www.google.com"\r
//       },\r
//       {\r
//         "@id": "2",\r
//         "name": "Louis",\r
//         "url": "http://www.yahoo.com"\r
//       }\r
//     ]\r
//   }\r
// }</code></pre>\r
<p>Original text: <a href="https://www.newtonsoft.com/json/help/html/ConvertXmlToJson.htm" target="_blank" rel="noopener">https://www.newtonsoft.com/json/help/html/ConvertXmlToJson.htm</a></p>\r
<br>`},{category:"csharp",id:78,content:`<html><head><meta name="keywords" content="WixSharp, Wix toolset, Windows Desktop applications, installation file, Visual Studio, project template, NuGet packages, WPF view, C#, tutorial">

</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">1. Introduction to WixSharp</a></li>
    <li><a href="#section2">2. Installing WixSharp VS Extension</a></li>
    <li><a href="#section3">3. Creating a WixSharp Project</a></li>
    <li><a href="#section4">4. Building the Target Project and Installer Project</a></li>
</ul>

<h2 id="section1"><b>1. Introduction to WixSharp</b></h2>
<p>If you have ever created an installation file for deploying Windows Desktop applications, you might have used the Wix toolset at least once. It is a powerful tool provided for free as open-source, but it has the inconvenience of having to write XML tags one by one. Especially for customizing the installation dialog, you need to specify the coordinates of each control one by one, and to verify it, you have to create the msi file and run it, which is quite inconvenient.</p>
<p>WixSharp is a great tool that allows you to write these inconvenient XML tags in C# code. In particular, it is very convenient because you can implement the harvest of the installation target files simply using C# Linq without having to learn how to use the heat command and filter methods separately, and you can customize the WPF view directly on the designer screen.</p>
<p>Github: <a href="https://github.com/oleg-shilo/wixsharp" target="_blank" rel="noopener">https://github.com/oleg-shilo/wixsharp</a></p>
<br>
<h2 id="section2"><b>2. Installing WixSharp VS Extension</b></h2>
<p>To use WixSharp, open the Visual Studio 2022 - Extensions menu =&gt; Manage Extensions window, search for wixsharp, and install the WixSharp Project Templates.</p>
<p><img src="./assets/images/articles/csharp/78/Pq8Y4_btsq0DYXMLn_QPDRoXQKpT4TF1VCG2jp4k_img.png" alt=""></p>
<br>
<h2 id="section3"><b>3. Creating a WixSharp Project</b></h2>
<p>First, create a solution named WixSharpTest and a console application project named MyApp.</p>
<p><img class="w-[800px]" src="./assets/images/articles/csharp/78/QIv6m_btsqYZ9TS8N_E1MENWBebzwK7mtFqpIbPk_img.png" alt=""></p>
<p><img class="w-[800px]" src="./assets/images/articles/csharp/78/EMr9o_btsqZDLBLzg_M4lv1ZrSjTZqWsgrq2lq9K_img.png" alt=""></p>
<p>Right-click on the solution and add a new project. Search for WixSharp, and several project templates will appear. Select Custom WPF UI.</p>
<p><img class="w-[600px]" src="./assets/images/articles/csharp/78/buULbX_btsqYDF0Djb_NzkPGwuuv9CkXVgZMVWSqK_img.png" alt=""></p>
<p>Name the project MyAppInstaller.</p>
<p><img class="w-[600px]" src="./assets/images/articles/csharp/78/cV1L1T_btsq2h1UOtT_DiWprQFm6Jc5BBDkojMdak_img.png" alt=""></p>
<p>Since the template references older versions of NuGet packages, update them to the latest versions.</p>
<p><img class="w-[700px]" src="./assets/images/articles/csharp/78/dMInkm_btsq1ctgLCE_SthjrGu37RcoqSrZQhwRT1_img.png" alt=""></p>
<p><img class="w-[900px]" src="./assets/images/articles/csharp/78/R2v8F_btsqYZB0y9e_V8gNF8clKvREYq7cA92q1k_img.png" alt="">
<br>
</p><h2 id="section4"><b>4. Building the Target Project and Installer Project</b></h2>
<p>&nbsp;Modify the Program.cs file of the MyAppInstaller project as follows.</p>
<p>
    <img src="./assets/images/articles/csharp/78/dfJY9k_btsq1bHMDoS_WBiipLpWbIttoqOEK13cIk_img.png" alt="">
</p>
<pre id="code_1691759011226" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using System;
    using System.Windows.Forms;
    using WixSharp;
    using WixSharp.UI.WPF;
    
    namespace MyAppInstaller
    {
        internal class Program
        {
            static void Main()
            {
                var productName = "MyApp";
                var companyName = "HiperzStudio";
    
                var project = new ManagedProject($"{productName}",
                                  new Dir($@"%ProgramFiles%\\{companyName}\\{productName}",
                                      new Files("*.*")));
    
                project.GUID = new Guid("6fe30b47-2577-43ad-9095-1861ba25889b");
    
                // project.ManagedUI = ManagedUI.DefaultWpf; // all stock UI dialogs
    
                //custom set of UI WPF dialogs
                project.ManagedUI = new ManagedUI();
    
                project.ManagedUI.InstallDialogs.Add&lt;MyAppInstaller.WelcomeDialog&gt;()
                                                .Add&lt;MyAppInstaller.LicenceDialog&gt;()
                                                .Add&lt;MyAppInstaller.FeaturesDialog&gt;()
                                                .Add&lt;MyAppInstaller.InstallDirDialog&gt;()
                                                .Add&lt;MyAppInstaller.ProgressDialog&gt;()
                                                .Add&lt;MyAppInstaller.ExitDialog&gt;();
    
                project.ManagedUI.ModifyDialogs.Add&lt;MyAppInstaller.MaintenanceTypeDialog&gt;()
                                               .Add&lt;MyAppInstaller.FeaturesDialog&gt;()
                                               .Add&lt;MyAppInstaller.ProgressDialog&gt;()
                                               .Add&lt;MyAppInstaller.ExitDialog&gt;();
    
                // Location of the application's binary files to be deployed
                project.SourceBaseDir = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), @"..\\MyApp\\bin\\debug\\net6.0");

                // Folder to create MSI
                project.OutDir = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), @"bin\\deployment");
    
                project.BuildMsi();
            }
        }
    }</code></pre>
<p>Now, if you build MyApp and then build MyAppInstaller, an msi file will be created in the
    bin\\deployment folder.</p>
<p>
    <img class="w-[800px]" src="./assets/images/articles/csharp/78/bllnZC_btsq1I6qRG6_mqPG5GdCCoANcJMLTSD350_img.png" alt="">
    <br>
    <img class="border" src="./assets/images/articles/csharp/78/tmSjq_btsqZtWLWlG_PuCn4mBHVXrupxL187ysnk_img.png" alt="">
</p>
<p>When you run MyApp.msi, you will see the installation GUI as shown below. It's very simple,
    right?</p>
<p>
    <img src="./assets/images/articles/csharp/78/T5ybc_btsq1aITxRS_xTkneKLzIjEOLkBHw5YTKK_img.png" alt="">
</p>
<p>Now, if you proceed with the installation, you can see that it is installed correctly under the
    Program Files folder as shown below.</p>
<p>
    <img class="border" src="./assets/images/articles/csharp/78/bLGZe6_btsq2kYDXlK_K3raCASSVuXJqT1CxjoP10_img.png" alt="">
</p>
<p>You can also see that MyApp appears in the list in the Windows Add or Remove Programs console
    as shown below.</p>
<p>
    <img class="border" src="./assets/images/articles/csharp/78/dCfM0i_btsqZbB4fYi_kf5PeDtwjdD7qShdtk6R4k_img.png" alt="">
</p>
<p>In the next post, we will learn how to filter the target files for deployment and create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>d create
    shortcut icons on the desktop and start menu.</p></body></html>`},{category:"jsts",id:31,content:`<meta name="keywords" content="Variable Swapping, JavaScript, Traditional Method, Modern Method">\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
  <li><a href="#traditional-method">1. Traditional Method</a></li>\r
  <li><a href="#modern-method">2. Modern Method</a></li>\r
</ul>\r
\r
<h3 id="traditional-method">1. Traditional Method</h3>\r
<p>Declare a temporary variable, copy the value, and then swap.</p>\r
<pre><code>let a = 10;\r
let b = 20;\r
const temp = a;\r
a = b;\r
b = temp;\r
</code></pre><br>\r
\r
<h3 id="modern-method">2. Modern Method</h3>\r
<p>By using arrays and destructuring assignment, swapping can be done in a single line.</p>\r
<pre><code>[b, a] = [a, b];\r
</code></pre><br>\r
`},{category:"jsts",id:39,content:`<meta name="keywords" content="JavaScript, Double Exclamation Mark, Boolean Conversion">\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
  <li><a href="#traditional-method">1. Traditional Method</a></li>\r
  <li><a href="#modern-method">2. Modern Method</a></li>\r
  <li><a href="#double-exclamation-mark">3. Double Exclamation Mark (!!) in JavaScript</a></li>\r
</ul>\r
\r
<h3 id="traditional-method">1. Traditional Method</h3>\r
<p>Declare a temporary variable, copy the value, and then swap.</p>\r
<pre><code>\r
let a = 10;\r
let b = 20;\r
const temp = a;\r
a = b;\r
b = temp;\r
</code></pre><br>\r
\r
<h3 id="modern-method">2. Modern Method</h3>\r
<p>By using arrays and destructuring assignment, swapping can be done in a single line.</p>\r
<pre><code>\r
[b, a] = [a, b];\r
</code></pre><br>\r
\r
<h3 id="double-exclamation-mark">3. Double Exclamation Mark (!!) in JavaScript</h3>\r
<p>In JavaScript, the double exclamation mark (!!) operator is used to convert a value to a boolean.</p>\r
<pre><code>\r
const a = [1, 2, 3];\r
const is_a_truthy = !!a; // true\r
\r
const b = null;\r
const is_b_truthy = !!b; // false\r
\r
const c = 0;\r
const is_c_truthy = !!c; // false\r
\r
const d = "0";\r
const is_d_truthy = !!d; // true\r
</code></pre><br>\r
`},{category:"jsts",id:55,content:`<meta name="keywords" content="JavaScript, Array Methods, Performance Comparison, Access Last Element, Slice Method, Pop Method">\r
\r
<h1>JavaScript Array Methods for Accessing the Last Element</h1>\r
<h2>Table of Contents</h2>\r
<ul>\r
  <li><a href="#length-method">1. Access Last Element Using Array Length</a></li>\r
  <li><a href="#slice-method">2. Retrieve Last Element Using Slice Method</a></li>\r
  <li><a href="#pop-method">3. Retrieve Last Element Using Pop Method</a></li>\r
  <li><a href="#performance-comparison">4. Performance Comparison (Chrome)</a></li>\r
</ul>\r
\r
<h3 id="length-method">1. Access Last Element Using Array Length</h3>\r
<p>Retrieve the last element by specifying the index using the array length.</p>\r
<pre><code>\r
const arr = [1, 2, 3, 4, 5];\r
\r
// last element by length\r
console.log(arr[arr.length - 1]);\r
</code></pre><br>\r
\r
<h3 id="slice-method">2. Retrieve Last Element Using Slice Method</h3>\r
<p>Use the <code>slice</code> method to get the last element.</p>\r
<pre><code>\r
const arr = [1, 2, 3, 4, 5];\r
\r
// last element by slice\r
console.log(...arr.slice(-1));\r
</code></pre><br>\r
\r
<h3 id="pop-method">3. Retrieve Last Element Using Pop Method</h3>\r
<p>The <code>pop</code> method removes and returns the last element of an array.</p>\r
<pre><code>\r
const arr = [1, 2, 3, 4, 5];\r
\r
// last element by pop\r
console.log(arr.pop());\r
</code></pre><br>\r
\r
<h3 id="performance-comparison">4. Performance Comparison (Chrome)</h3>\r
<p>Comparing the performance of the three methods.</p>\r
<pre><code>\r
const arr = [1, 2, 3, 4, 5];\r
\r
// last element by length\r
console.time('lastindex');\r
console.log(arr[arr.length - 1]);\r
console.timeEnd('lastindex');\r
\r
// last element by slice\r
console.time('slice');\r
console.log(...arr.slice(-1));\r
console.timeEnd('slice');\r
\r
// last element by pop\r
console.time('pop');\r
console.log(arr.pop());\r
console.timeEnd('pop');\r
</code></pre>\r
<p><strong>Result:</strong> The <code>pop()</code> method performs the fastest.</p>\r
<p>Although using <code>arr.length - 1</code> is common, the performance difference suggests that using <code>pop()</code> is the better choice.</p><br>\r
`},{category:"jsts",id:58,content:`<meta name="keywords" content="JavaScript, TypeScript, VSCode, Unused Imports, Shortcuts">\r
\r
<h2>Table of Contents</h2>\r
<ul>\r
  <li><a href="#removing-unused-imports">Automatically Removing Unused Imports in VSCode</a></li>\r
  <li><a href="#example">Example</a></li>\r
</ul>\r
\r
<h3 id="removing-unused-imports">Automatically Removing Unused Imports in VSCode</h3>\r
<p>\r
  When developing in JavaScript/TypeScript, if you import an object and later remove all related code, it\u2019s best to\r
  remove the import statement as well. Instead of manually searching for and deleting unused imports, you can use a\r
  VSCode shortcut to do it automatically.\r
</p><br>\r
\r
<h3 id="example">Example</h3>\r
<p>In the example below, <code>HostListener</code> is no longer referenced:</p>\r
<p><strong>VSCode Default Shortcut (Windows)</strong></p>\r
<p><code>Alt + Shift + O</code></p>\r
<p>Pressing this shortcut will make VSCode automatically remove the unused import.</p><br>\r
`},{category:"jsts",id:6,content:`<html><head><meta name="keywords" content="PlanetScale, NextJS, Prisma, Installation Guide, Database Connection">

</head><body><h2>Table of Contents</h2>
<ul>
  <li><a href="#account-creation">PlanetScale Account Creation</a></li>
  <li><a href="#cli-installation">PlanetScale CLI Installation</a></li>
  <li><a href="#project-setup">NextJS Project Setup</a></li>
  <li><a href="#prisma-setup">Prisma Setup</a></li>
  <li><a href="#schema-definition">Prisma Schema Definition</a></li>
  <li><a href="#database-connection">PlanetScale Database Connection</a></li>
</ul>

<h2 id="account-creation">PlanetScale Account Creation</h2>
<p>First, go to the PlanetScale (<a href="https://planetscale.com/" target="_blank" rel="noopener">https://planetscale.com/</a>) website and complete the account creation process.</p>
<br>
<h2 id="cli-installation">PlanetScale CLI Installation</h2>
<p>Next, to install the PlanetScale CLI, open a PowerShell terminal window and enter the following command to install scoop. (Reference: <a href="https://scoop.sh/">https://scoop.sh/</a>)</p>
<pre><code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
irm get.scoop.sh | iex</code></pre>
<p>After installing scoop, install pscale. (Reference: <a href="https://github.com/planetscale/cli#installation">https://github.com/planetscale/cli#installation</a>)</p>
<pre><code>scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale mysql</code></pre>
<br>
<h2 id="project-setup">NextJS Project Setup</h2>
<p>Now that the PlanetScale CLI is installed, create a new NextJS project to test it.</p>
<pre><code>npx create-next-app@latest</code></pre>
<p>Enter the project folder and install the prisma package.</p>
<pre><code>npm i prisma -D
npm i @prisma/client</code></pre>
<p>Enter the prisma initialization command.</p>
<pre><code>npx prisma init</code></pre>
<p>After running the initialization command, the schema.prisma and .env files will be created.</p>
<img class="w-[400px]" src="./assets/images/articles/jsts/6/5VEZE_btrUL7iGXPE_98Gb1t9Df3w0d2MBoYjZl0_img.png" alt="Schema and .env files">
<br>
<h2 id="prisma-setup">Prisma Setup</h2>
<p>Install the vscode extension to conveniently edit the schema.</p>
<img class="w-[400px]" src="./assets/images/articles/jsts/6/q4w4Y_btrUKYGkoVo_z0t72UCIFAZtPYuG82UTFK_img.png" alt="VSCode extension">
<p>Define the schema of the table to be used in the schema.prisma file as shown below. For detailed instructions on how to define the prisma schema, please refer to <a href="https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types" target="_blank" rel="noopener">https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types</a>.</p>
<p>Change the db provider in the default schema from postgresql to mysql.</p>
<pre><code>// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Test {
  id   Int    @id @default(autoincrement())
  name String
}</code></pre>
<br>
<h2 id="database-connection">PlanetScale Database Connection</h2>
<p>To connect to PlanetScale, enter the following command to log in to the PlanetScale site.</p>
<pre><code>pscale auth login</code>
</pre>
<p>After logging in, check the login completion message in the terminal window as shown below.</p>
<img src="./assets/images/articles/jsts/6/dnPv1c_btrUHR824uY_UxQmz2OuzOJ3CiZsXrhInK_img.png" alt="Login success message">
<p>Now, to connect to the database created in PlanetScale, enter the following command. (For example, if the DB name is mytestdb)</p>
<pre><code>pscale connect mytestdb</code>
</pre>
<img class="w-[600px]" src="./assets/images/articles/jsts/6/86cvM_btrUDiTSGFg_Si0F7Yk4iuRWjRCo0o92V1_img.png" alt="DB connection command">
<p>Change the DATABASE_URL in the .env file as follows.</p>
<pre><code>DATABASE_URL="mysql://127.0.0.1:3306/mytestdb"</code>
</pre>
<p>Enter the following command to create the table model defined in schema.prisma in the DB.</p>
<pre><code>npx prisma db push</code>
</pre>
<img class="w-[700px]" src="./assets/images/articles/jsts/6/4TIew_btrUIgt2Vll_X9L7VOxG5n698KHKKwTUak_img.png" alt="DB push command">
<p>Once the push is successfully completed, you can check that a new table has been created on the PlanetScale website.</p>
<img class="border w-[500px]" src="./assets/images/articles/jsts/6/bpUKVD_btrUHStpLzH_w62M9Pnb3277R1iOknKo4K_img.png" alt="New table created">
<p>Click on Tables on the screen above to check the created table schema.</p>
<img class="border w-[500px]" src="./assets/images/articles/jsts/6/DdYcG_btrUBa9Edku_WpJNS8tcr9yuJ612fygP31_img.png" alt="Table schema">
<p>Once you have completed the above steps, you can now read and write to the DB created in PlanetScale from NextJS.</p>
<br></body></html>`},{category:"jsts",id:92,content:`<html><head><meta name="keywords" content="SEO, Angular, GitHub, Redirection Error, Lighthouse, Custom URL Serializer">

</head><body><h2>Table of Contents</h2>
<ul>
  <li><a href="#seo-issues">SEO Issues with Angular and GitHub Hosting</a></li>
  <li><a href="#solution">Solution (Based on Angular 19)</a></li>
</ul>

<h3 id="seo-issues">SEO Issues with Angular and GitHub Hosting</h3>
<p class="my-2">
  &nbsp;While creating a personal blog (<a href="http://hiperz.github.io" target="_blank" rel="noopener">https://hiperz.github.io</a>) using Angular and hosting it on Github, I encountered several issues due to my lack of knowledge in SEO (Search Engine Optimization). One of them was a case where a request for indexing a specific URL on Google Search Console was rejected due to a redirection error.
</p>
<p>
  <img width="60%" src="./assets/images/articles/jsts/92/NKnVF_btsL3lLdYrZ_tUFgSGndzi0DJrGBBiTgOK_img.png" alt="">
</p>
<p class="my-3">
  &nbsp;At first, I didn't understand what this meant, so I left it alone. However, since the issue persisted, I clicked on the "Learn more" link and found the following guidance.
</p>
<p>
  <img width="60%" src="./assets/images/articles/jsts/92/csoCJd_btsL49h9WAD_L3pAJINZ1eKj9OwK33cRF0_img.png" alt="">
</p>
<p class="my-2">
  &nbsp;The message suggested using Lighthouse to investigate the redirection issue, so I clicked on Lighthouse.
</p>
<p>
  <img width="60%" src="./assets/images/articles/jsts/92/Azljd_btsL3hWp37G_IwWofw9ER8TrdsNHjQkI9K_img.png" alt="">
</p>
<p class="my-2">
  &nbsp;It turned out to be one of the developer tools in the Chrome browser that I had overlooked. By pressing F12 in the Chrome browser to open the developer tools panel, selecting the Lighthouse tab, and clicking the "Analyze page load" button, it automatically analyzes and provides results. Therefore, I will skip the detailed explanation of how to use the Lighthouse tool.
</p>
<p class="my-2">
  &nbsp;When I analyzed the actual page with the redirection error using Lighthouse in my Chrome browser, it pointed out the redirection issue. The main cause of this problem was that while hosting the Angular app on Github, the Github server always appended a slash (/) to the end of the URL when navigating to a specific URL. This caused the Angular router to redirect URLs with trailing slashes to URLs without slashes.
</p><br>

<h2 id="solution">Solution (Based on Angular 19)</h2>
<h3>1. Create custom-url-serializer.ts file.</h3>
<p class="my-2">Create a custom-url-serializer.ts file anywhere with the following code.</p>
<pre id="code_1738345257050" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>
import { UrlTree, DefaultUrlSerializer } from '@angular/router';

export class CustomUrlSerializer extends DefaultUrlSerializer {
    override serialize(urlTree: UrlTree): string {
        return this.appendTrailingSlash(super.serialize(urlTree));
    }

    private appendTrailingSlash(url: string): string {
        const splitOn = url.indexOf('?') &gt; -1 ? '?' : '#';
        const pathArr = url.split(splitOn);

        if (!pathArr[0].endsWith('/')) {
            let fileName: string = url.substring(url.lastIndexOf('/') + 1);
            if (fileName.indexOf('.') === -1) {
                pathArr[0] += '/';
            }
        }

        return pathArr.join(splitOn);
    }
}</code></pre>
<p class="my-2">
  [Code Source]:
  <a href="https://github.com/angular/angular/issues/16051#issuecomment-575346573" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/angular/angular/issues/16051#issuecomment-575346573</a>
</p><br>

<h3 class="mt-3">2. Modify app.config.ts</h3>
<pre id="code_1738345388792" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>...
import { CustomUrlSerializer } from './ts-libs/custom-url-serializer';

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: UrlSerializer, useClass: CustomUrlSerializer },
        ...
    ],
};</code></pre>
<p class="my-2">
  &nbsp;By applying CustomUrlSerializer, the URL will always end with a slash (/), and the issue of loading the same page twice due to redirection will be resolved.
</p>
<p class="my-2">&nbsp;Additionally, Angular provides a function to remove the trailing slash when processing URLs.</p>
<pre id="code_1738346433319" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>import { Location } from '@angular/common';

export class BlaBlaComponent implements OnInit {
    constructor(
        private router: Router,
    ) {
    
    ...
    const url = Location.stripTrailingSlash(this.router.url);
    ...
    
    }
}</code></pre>
<p class="my-2">
  &nbsp;I hope this helps those who are hosting web apps with Angular SPA on Github and experiencing redirection issues.
</p><br>
</body></html>lar SPA on Github and experiencing redirection issues.
</p><br>
</body></html>lar SPA on Github and experiencing redirection issues.
</p><br>
</body></html>`},{category:"windows",id:18,content:`<html><head><meta name="keywords" content="IIS Management Console, FTP Service, FTP Site, Firewall Configuration, FTP User Account, FTP Folder Permissions, FTP Connection Test">
</head><body><h2>Table of Contents</h2>
<ul>
  <li><a href="#section1">Installing IIS Management Console and FTP Service</a></li>
  <li><a href="#section2">Creating a New FTP Site</a></li>
  <li><a href="#section3">Configuring the Firewall</a></li>
  <li><a href="#section4">Adding a User Account for FTP Access</a></li>
  <li><a href="#section5">Granting User Permissions to the FTP Folder</a></li>
  <li><a href="#section6">Testing the FTP Connection</a></li>
</ul>
<h2 id="section1">1. Installing IIS Management Console and FTP Service</h2>
<p>Go to the Control Panel, navigate to "Apps &amp; Features," and click "Programs and Features."</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/xQs9N_btrWv64Scf4_GhVklb64oThHxQBXgatoe0_img.png" alt=""></p>
<p>Click "Turn Windows features on or off."</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/ck5l49_btrWuO4rOvp_rZw8bK31xqBaV0QHnfck00_img.png" alt=""></p>
<p>Select "FTP Service" and "IIS Management Console" and install them.</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/EU0wl_btrWuOwD8tt_uynnFPhKLoiShPx15enH10_img.png" alt=""></p>
<br>

<h2 id="section2">2. Creating a New FTP Site</h2>
<p>Open the IIS Manager app.</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/dNrFgj_btrWxrGWStA_kpZtHRKNbwFgxthcR3rx8K_img.png" alt=""></p>
<p>Right-click "Sites" and select "Add FTP Site..."</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/cg0vdq_btrWyLrnGtY_rkPhWhH0iO6YnKvRqGLX7K_img.png" alt=""></p>
<p>Set an FTP site name and specify the directory path for the FTP server.</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/tDACM_btrWwH4yMc6_wKlvikoZrF2UuVK6iN9UYK_img.png" alt=""></p>
<p>Select "No SSL."</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/MjyMr_btrWw8ARGux_HKQqVm1rLiNBK1KANU1Lq1_img.png" alt=""></p>
<p>Check "Basic Authentication," allow access to a specific user account (e.g., ftptest), enable read/write permissions, and click "Finish."</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/bAt1Wr_btrWwpC6yRY_MMrKLqQxjkTmBpg9CVZupK_img.png" alt=""></p>
<br>

<h2 id="section3">3. Configuring the Firewall</h2>
<p>Open the Windows Firewall advanced settings console.</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/GnQlG_btrWxsFSvIL_laKqLZUbVYWKESVuFGYk60_img.png" alt=""></p>
<p>Enable all three predefined FTP-related inbound rules.</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/sTosa_btrWyOBENxc_xXMlHmAUvICyRXjHDueGsK_img.png" alt=""></p>
<br>

<h2 id="section4">4. Adding a User Account for FTP Access</h2>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/AC7OT_btrWx6P7QI7_5GS1qSq2EAOwaJ7A9ak3d0_img.png" alt=""></p>
<p>Right-click the Windows Start button and select "Computer Management."</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/cFqO2A_btrWxqH4jfT_nH7vwcXQDAkZk8bDu0Opx0_img.png" alt=""></p>
<p>Right-click "Users" and select "New User..." to create a new user account.</p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/viPvr_btrWx72x6Sp_qV6NDQYPOGi3cZqBKJNTKK_img.png" alt=""></p>
<p><img class="w-[800px] border" src="./assets/images/articles/windows/18/rMreG_btrWw7BZjG8_BQH3qcCekrogMQZXeFAbMk_img.png" alt=""></p>
<br>

<h2 id="section5">5. Granting User Permissions to the FTP Folder</h2>
<p>In IIS Manager, right-click the FTP site and select "Edit Permissions."</p>
<p>Go to the "Security" tab, click "Edit," then "Add" the new user (e.g., ftptest), and grant full control.</p>
<img class="w-[800px] border" src="./assets/images/articles/windows/18/bdlTHc_btrWteJaGFD_hkJre2RkDhfnKF9lLsXOck_img.png" alt="">
<img class="w-[800px] border" src="./assets/images/articles/windows/18/cT1fBm_btrWsjjF5zz_Fn4facOf3Oe1vhVk7tj2Y0_img.png" alt="">

<h2 id="section6">6. Testing the FTP Connection</h2>
<p>To verify the setup, use an FTP client like FileZilla or WinSCP.</p>
<p>Alternatively, open a terminal and run <code>ftp localhost</code>, then enter the user credentials.</p>
<p>Use the <code>dir</code> command to check directory access.</p>
<img class="w-[500px] border" src="./assets/images/articles/windows/18/bYVxka_btrWsUKGnwT_NqZNg8VnKU5hEeWElhC9S0_img.png" alt=""></body></html>`},{category:"windows",id:33,content:`<html><head><meta name="keywords" content="unhide rows, Excel tips, row height adjustment, automatic filters, Excel troubleshooting">
</head><body><h2>Table of Contents</h2>
<ul>
  <li><a href="#section1">When Specific Rows Are Actually Hidden</a></li>
  <li><a href="#section2">Rows Are Hidden Due to Small Height Settings</a></li>
  <li><a href="#section3">When Automatic Filters Are Applied</a></li>
</ul>

<h3 id="section1">1. When Specific Rows Are Actually Hidden</h3>
<p><img src="./assets/images/articles/windows/33/bHpNQE_btrYpnKgLx0_JuNfJaIrSoNZVwojpicShK_img.png" alt=""></p>
<p>Select the rows you want to unhide by right-clicking and choosing Unhide.</p>
<p><img src="./assets/images/articles/windows/33/elFokW_btrYmtw82a8_cicXH8KGk6SwVQ5K3gU6k1_img.png" alt=""></p>
<br>

<h3 id="section2">2. Rows Are Hidden Due to Small Height Settings</h3>
<p><img src="./assets/images/articles/windows/33/bYjK84_btrYqyLvQS0_6kaDJubIUFKIIBTXtSykqk_img.png" alt=""></p>
<p>Select the rows needing height adjustment and right-click to choose Row Height.</p>
<p><img src="./assets/images/articles/windows/33/Fn0J9_btrYlzEwXBn_3tqPhMfdXtKGi4umdKcVEK_img.png" alt=""></p>
<p>After setting the height to 16.5 and confirming:</p>
<p><img src="./assets/images/articles/windows/33/cerYQh_btrYlyMmSlt_uTxMpStISyrlaDz6CU1vFK_img.png" alt=""></p>
<p>Previously hidden rows become visible as shown below:</p>
<p><img src="./assets/images/articles/windows/33/clR3uS_btrYqwfSS81_JXHar8LOmfh1YmZZEm82lk_img.png" alt=""></p>
<br>

<h3 id="section3">3. When Automatic Filters Are Applied</h3>
<p>Note: Characteristic feature is marked by light blue row numbers.</p>
<p><img src="./assets/images/articles/windows/33/PchWc_btrYqSipslT_tOT7gEBsrPXigLjCVRRLf1_img.png" alt=""></p>
<p>Use Ctrl + Shift + L shortcut or go to the toolbar menu to clear filters:</p>
<p><img src="./assets/images/articles/windows/33/bdF0KL_btrYq439KDJ_ynV0aAJqtpVJTlH2wCtLe0_img.png" alt=""></p>
<br></body></html>_btrYq439KDJ_ynV0aAJqtpVJTlH2wCtLe0_img.png" alt=""></p>
<br></body></html>`},{category:"windows",id:60,content:`<html><head><meta charset="UTF-8">
<meta name="keywords" content="unhide rows, Excel tips, row height adjustment, automatic filters, Excel troubleshooting">
</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">How to Uninstall Office When It's Not Listed in Control Panel</a></li>
</ul>

<h3 id="section1">How to Uninstall Office When It's Not Listed in Control Panel</h3>
<p>&nbsp;I downloaded and installed the offline app with my Office 365 subscription account, but when I tried to delete it, I couldn't see it in the app list in the control panel. If you can't delete it because it's not in the list of apps in the control panel, download the official support tool from the link below, install it, and run it to cleanly uninstall it.</p>
<p>Microsoft Official website: <a href="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us">https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us</a>&nbsp;</p>
<figure id="og_1681348196641" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="Uninstall Office from a PC - Microsoft Support" data-og-description="If you have a Click-to-Run or an MSI installation, uninstall Microsoft 365 using the Control Panel or download the uninstall support tool. Option 1 - Uninstall Microsoft 365&nbsp;from the Control Panel Open the Control Panel. Tip:&nbsp;If you installed the Microso" data-og-host="support.microsoft.com" data-og-source-url="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us" data-og-url="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ad=us&amp;rs=en-us&amp;ui=en-us" data-og-image="">
  <a href="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us" target="_blank" rel="noopener" data-source-url="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us">
    <div class="og-image">&nbsp;</div>
    <div class="og-text">
      <p class="og-title">Uninstall Office from a PC - Microsoft Support</p>
      <p class="og-desc">If you have a Click-to-Run or an MSI installation, uninstall Microsoft 365 using the Control Panel or download the uninstall support tool. Option 1 - Uninstall Microsoft 365&nbsp;from the Control Panel Open the Control Panel. Tip:&nbsp;If you installed the Microso</p>
      <p class="og-host">support.microsoft.com</p>
    </div>
  </a>
</figure>
<p>Go to the above link and click the &nbsp;download button to download and install the tool.</p>
<p><img class="border" src="./assets/images/articles/windows/60/botLAg_btr9RwWbtcu_LC8iWKjVmxpLsYHJMCDvU0_img.png" alt=""></p>
<p>After installation is complete, an icon will appear on your desktop.</p>
<p><img src="./assets/images/articles/windows/60/pU2f3_btr9NgUFyH3_Johhb8pjp9a2dKIYpk9qek_img.png" alt=""></p>
<p>When you run it, you'll see a list of installed offices, which you can select and uninstall.</p>
<p><img class="w-[700px] border" src="./assets/images/articles/windows/60/LHTUh_btr9NCiQQ7v_fOGNXUn7vk7gE8ZeUfMeA0_img.png" alt=""></p>
<p>Once the uninstallation is complete, press the Restart button to restart your system and Office will be completely uninstalled.</p>
<p><img class="w-[700px]" src="./assets/images/articles/windows/60/Iga6g_btr9MdYc2Wo_HSJClK917tnV3SPcO94qOk_img.png" alt=""></p>
</body></html>ga6g_btr9MdYc2Wo_HSJClK917tnV3SPcO94qOk_img.png" alt=""></p>
</body></html>`},{category:"wpf",id:35,content:`<html><head><meta name="keywords" content="Visual Studio, WPF project, NuGet Packages, MVVM pattern, Dependency Injection, ViewModel, ViewModel Locator, DataContext binding">

</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">Open Visual Studio and create a new WPF project</a></li>
    <li><a href="#section2">Install NuGet Packages</a></li>
    <li><a href="#section3">Create Folders and MainWindowViewModel</a></li>
    <li><a href="#section4">Create ViewModel Locator Class</a></li>
    <li><a href="#section5">Bind ViewModel to View</a></li>
</ul>

<h2 id="section1"><b>1. Open Visual Studio and create a new WPF project</b></h2>
<p>\u203B. This screenshot is based on Visual Studio 2022.</p>
<p>Search for WPF and select the WPF Application project template.</p>
<p>
    <img class="w-[800px]" src="./assets/images/articles/wpf/35/VTvhj_btrYqLYRGCK_CVGWVkD6S56zMm9m4EJKjK_img.png" alt="">
</p>
<p>Specify the project path, solution name, and project name.</p>
<p>
    <img class="w-[700px]" src="./assets/images/articles/wpf/35/DA6XA_btrYrmYB9nD_KyJcVO6Svh70neIvwRTbE0_img.png" alt="">
</p>
<p>Since this explanation is based on .Net 6.0 or higher, select 6.0.</p>
<p>
    <img class="w-[700px]" src="./assets/images/articles/wpf/35/Mt23t_btrYtxLWmVB_43bmNdFQGQFcd6tVdjsUck_img.png" alt="">
</p>
<p>Once the project is created, check the solution and files in the project in Solution Explorer as shown below.</p>
<p>
    <img src="./assets/images/articles/wpf/35/5Qj6D_btrYrm5oBFJ_JNdqNQCWcTK83vptnCS9F1_img.png" alt="">
</p>
<br>

<h2 id="section2"><b>2. Install NuGet Packages</b></h2>
<p>Install the following packages from the NuGet Package Manager or open the project file by double-clicking the project (MyTestApp) in Solution Explorer and add the following PackageReference tags directly and save.</p>
<pre id="code_1675820933085" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>  &lt;ItemGroup&gt;
    &lt;PackageReference Include="CommunityToolkit.Mvvm" Version="8.1.0" /&gt;
    &lt;PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="7.0.0" /&gt;
    &lt;/ItemGroup&gt;</code></pre>
<p>\u203B. I personally do not use the Nullable option, so I removed it.</p>
<p>
    <img class="w-[800px]" src="./assets/images/articles/wpf/35/5phz4_btrYrjnoWEc_2kDBKAX7T7glKmyHHyfxzk_img.png" alt="">
</p>
<br>

<h2 id="section3"><b>3. Create Folders and MainWindowViewModel</b></h2>
<p>Create two folders named Views and ViewModels in the project, then move the MainWindow.xaml file to the Views folder. The folder names are personal preferences, so you can name them as you like.</p>
<p>
    <img src="./assets/images/articles/wpf/35/bvGIAt_btrYrUOtYEf_wXrshuzzbIje5jKcAbB3c0_img.png" alt="">
</p>
<p>Since the MainWindow.xaml file has been moved to the Views folder, modify the StartupUri in App.xaml as follows.</p>
<p>
    <img class="w-[800px]" src="./assets/images/articles/wpf/35/UTt3R_btrYriIMzz7_ffs3KylhMNrhHharALeE20_img.png" alt="">
</p>
<p>Create a new class file named MainWindowViewModel.cs in the ViewModels folder.</p>
<p>To use the code generation feature of the MVVM toolkit, add the partial keyword and define the class as inheriting from ObservableObject as follows.</p>
<pre id="code_1675821808551" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.ComponentModel;

namespace MyTestApp.ViewModels
{
        public partial class MainWindowViewModel : ObservableObject
        {
        }
}</code></pre>
<p>Since C# does not support multiple inheritance, if the ViewModel needs to inherit from a specific class, declare the INotifyPropertyChanged attribute instead of inheriting from ObservableObject as follows.</p>
<pre id="code_1675822057724" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.ComponentModel;

namespace MyTestApp.ViewModels
{
        public class MyBaseClass
        {
        }

        [INotifyPropertyChanged]
        public partial class MainWindowViewModel : MyBaseClass
        {
                public MainWindowViewModel()
                {
                }
        }
}</code></pre>
<br>

<h2 id="section1"><b>4. Create ViewModel Locator Class</b></h2>
<p>Create a VmLocator.cs file in the project.</p>
<p>
    <img src="./assets/images/articles/wpf/35/AwX2k_btrYqvhQRG3_GYdgAh1N0I8KEgEnes5kq0_img.png" alt="">
</p>
<p>To use Dependency Injection in the ViewModel, define the dependencies in this file as follows.</p>
<pre id="code_1675822475503" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using Microsoft.Extensions.DependencyInjection;
using MyTestApp.ViewModels;
using System;

namespace MyTestApp
{
        public class VmLocator
        {
                public IServiceProvider Services { get; }

                public VmLocator()
                {
                        var services = new ServiceCollection();

                        services.AddTransient&lt;MainWindowViewModel&gt;();

                        Services = services.BuildServiceProvider();
                }

                public MainWindowViewModel MainWindowVM =&gt; Services.GetService&lt;MainWindowViewModel&gt;();
        }
}</code></pre>
<p>&nbsp;</p>
<p>Now, add a tag in App.xaml to create an instance of VmLocator when the app runs.</p>
<pre id="code_1675822744263" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>&lt;Application x:Class="MyTestApp.App"
                         xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                         xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                         xmlns:local="clr-namespace:MyTestApp"
                         StartupUri="Views/MainWindow.xaml"&gt;
        &lt;Application.Resources&gt;
                &lt;ResourceDictionary&gt;
                        &lt;local:VmLocator x:Key="VmLocator" /&gt;
                &lt;/ResourceDictionary&gt;
        &lt;/Application.Resources&gt;
&lt;/Application&gt;</code></pre>
<br>

<h2 id="section2"><b>5. Bind ViewModel to View</b></h2>
<p>Bind the DataContext in the MainWindow.xaml file to MainWindowVM as follows.</p>
<pre id="code_1675822930992" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>&lt;Window x:Class="MyTestApp.MainWindow"
                xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
                xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
                xmlns:local="clr-namespace:MyTestApp"
                mc:Ignorable="d"
                Title="MainWindow" Height="450" Width="800"
                DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;
        &lt;Grid&gt;

        &lt;/Grid&gt;
&lt;/Window&gt;</code></pre>
<p>This is the boilerplate code for developing a WPF app using the MVVM pattern. Add new Views to the Views folder and the corresponding ViewModels to the ViewModels folder. Then, declare the ViewModel instance in the VmLocator to be created by the Dependency Injection service and bind it to the View's DataContext in the same way as MainWindowVM.</p>
<p>&nbsp;</p>
</body></html>ator to be created by the Dependency Injection service and bind it to the View's DataContext in the same way as MainWindowVM.</p>
<p>&nbsp;</p>
</body></html>s DataContext in the same way as MainWindowVM.</p>
<p>&nbsp;</p>
</body></html>s DataContext in the same way as MainWindowVM.</p>
<p>&nbsp;</p>
</body></html>s DataContext in the same way as MainWindowVM.</p>
<p>&nbsp;</p>
</body></html>`},{category:"wpf",id:44,content:`<html><head><meta name="keywords" content="MVVM pattern, ViewModel, Data Binding, CommunityToolkit.Mvvm, WPF, Visual Studio">
</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">Introduction</a></li>
    <li><a href="#section2">Declare Member Variables in ViewModel</a></li>
    <li><a href="#section3">Simplifying Code with CommunityToolkit.Mvvm</a></li>
    <li><a href="#section4">Bind ViewModel Variables to Controls in View</a></li>
</ul>

<p id="section1">
  In the previous post, we explained how to create a MainWindowViewModel class that inherits from ObservableObject in
  the ViewModels folder and bind it to the DataContext of the MainWindow.xaml view.
</p>
<p>
  <img class="w-[300px]" src="./assets/images/articles/wpf/44/bNdLnZ_btr0JBk4UNZ_MmYZK5kjckFZYzn9uM3Ho1_img.png" alt="">
</p>
<p id="section2">
  Now, let's declare member variables in the created ViewModel and bind them to the TextBox control in the View.
</p>
<p>
  When coding with the traditional MVVM pattern, the most annoying part was declaring member variables and notifying the
  PropertyChange event for each variable as shown below.
</p>
<pre id="code_1677248181508" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>namespace MyTestApp.ViewModels
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;

        public void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private string title;
        public string Title
        {
            get
            {
                return title;
            }
            set
            {
                title = value;
                OnPropertyChanged();
            }
        }
     }
 }</code></pre>

<p id="section3">
  Declaring a single variable is so verbose, and if you have to write 10 or 20 more, the amount of coding is
  considerable. It also makes the code feel cluttered. However, with CommunityToolkit.Mvvm in .Net 6 or higher, you can
  simply add an attribute, and the Code Generator will automatically generate the above code at compile time.
</p>
<p>So the code becomes very simple as shown below. Excellent~!</p>
<pre id="code_1677247755753" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.ComponentModel;

namespace MyTestApp.ViewModels
{
    public partial class MainWindowViewModel : ObservableObject
    {
        [ObservableProperty]
        private string title;

        public MainWindowViewModel() 
        {
            Title = "Initial Value";
        }
    }
}</code></pre>
<p>
  When declaring member variables, you must use private and start the variable name with a lowercase letter. This is
  because the Code Generator creates a public variable with the same name starting with an uppercase letter.
</p>
<p>
  Do not use getter/setter when declaring variables like title above. If you sometimes mindlessly add { get; set; }, you
  might waste precious time wondering why VS throws an error...
</p>
<p>
  To use the above attribute for Code Generation, you need to add the partial keyword to the class. This is because the
  Code Generator creates a partial class with the same name in another file.
</p>
<p id="section4">Now, open MainWindowView.xaml and add a TextBox control to the View.</p>
<pre id="code_1677249234033" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>&lt;Window x:Class="MyTestApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:MyTestApp"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800"
        DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;
    &lt;Grid&gt;
        &lt;TextBox&gt;&lt;/TextBox&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;</code></pre>
<p>
  Now, bind the Text property of the TextBox control to the Title declared in the ViewModel as shown below.
</p>
<pre id="code_1677249303180" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>    &lt;Grid&gt;
        &lt;TextBox Text="{Binding Title}"&gt;&lt;/TextBox&gt;
    &lt;/Grid&gt;</code></pre>
<p>
  Press F5 to run the program, and since the constructor of the ViewModel assigns "Initial Value" to Title, the value
  will be displayed in the TextBox as shown below.
</p>
<p>
  <img class="w-[500px]" src="./assets/images/articles/wpf/44/WudcX_btr0KG0MZra_jZhgOVAh1PCUNR9bRJPbm0_img.png" alt="">
</p>
<p>
  In this post, we learned how to declare variables in the ViewModel and bind those variables to controls in the View.
  In the next post, we will learn how to hook events in the ViewModel when the bound value changes due to user input.
</p>
<p>&nbsp;</p>
</body></html>en the bound value changes due to user input.
</p>
<p>&nbsp;</p>
</body></html>`},{category:"wpf",id:52,content:`<html><head><meta name="keywords" content="MVVM pattern, ViewModel, Data Binding, CommunityToolkit.Mvvm, WeakReferenceMessenger, WPF, Visual Studio">
</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">1. Create Message Class</a></li>
    <li><a href="#section2">2. Register to Receive Messages in the View</a></li>
    <li><a href="#section3">3. Add Button and TextBox Controls to the View</a></li>
</ul>

<p id="section1">&nbsp;When developing with the MVVM pattern, there are many cases where you need to deliver events from one ViewModel to another or from a ViewModel to a View in a 1:1 or 1:N manner. In this case, you can create a static class to handle events accessible globally, or create a service class to handle event variables accessible from multiple ViewModels through dependency injection. However, using the WeakReferenceMessenger class provided by CommunityToolkit, you can easily implement a Pub/Sub style event queue.</p>
<p>&nbsp;Although it is simple and convenient to use, in practice, there are many cases where you need to apply debounce time to the event stream or use the event buffer as a ring buffer, which is not possible with WeakReferenceMessenger, so it is a bit disappointing.</p>
<p>&nbsp;To understand the simple usage, I will explain based on the code written in the previous article.</p>
<p>&nbsp;Goal: When a button is clicked in the View, use WeakReferenceMessenger to send a message from MainWindowViewModel to MainWindowView to display "Hello World" in the TextBox control.</p>
<p>&nbsp;It is easy to handle events from View to ViewModel through binding, but it is not easy to make the View perform a specific action by triggering an arbitrary event from the ViewModel, so we will implement this using WeakReferenceMessenger.</p>
<br>

<h2 id="section2"><b>1. Create Message Class</b></h2>
<p>Create a Messages folder in the project and create a TestMessage class file.</p>
<p>
    <img class="w-[300px]" src="./assets/images/articles/wpf/52/dgUn1M_btr4vo30Yhg_ZCvgshI0fiAXBdJVfHAya1_img.png" alt="">    
</p>
<pre id="code_1679055381567" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.Messaging.Messages;

namespace MyTestApp.Messages
{
    public class TestMessage : ValueChangedMessage&lt;string&gt;
    {
        public TestMessage(string text) : base(text)
        {
        }
    }
}</code></pre>
<br>

<h2 id="section3"><b>2. Register to Receive Messages in the View</b></h2>
<p>MainWindow.xaml.cs</p>
<pre id="code_1679055479924" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.Messaging;
using MyTestApp.Messages;
using System.Windows;

namespace MyTestApp
{
    /// &lt;summary&gt;
    /// Interaction logic for MainWindow.xaml
    /// &lt;/summary&gt;
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            WeakReferenceMessenger.Default.Register&lt;TestMessage&gt;(this, (r, m) =&gt;
            {
                ctlTextBox.Text = m.Value;
            });
        }
    }
}</code></pre>
<br>

<!-- Section 4 -->
<h2 id="section4"><b>3. Add Button and TextBox Controls to the View</b></h2>
<p>MainWindowViewModel.cs</p>
<pre id="code_1679055912361" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using CommunityToolkit.Mvvm.Messaging;
using MyTestApp.Messages;

namespace MyTestApp.ViewModels
{
    public partial class MainWindowViewModel : ObservableObject
    {
        [ObservableProperty]
        private string title;

        public MainWindowViewModel()
        {
            Title = "Initial Value";
        }

        [RelayCommand]
        private void SendMessage()
        {
            WeakReferenceMessenger.Default.Send(new TestMessage("Hello World"));
        }
    }
}</code></pre>
<p>MainWindow.xaml</p>
<pre id="code_1679055969536" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>&lt;Window x:Class="MyTestApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:MyTestApp"
        mc:Ignorable="d"
        Title="MainWindow"
        Height="450"
        Width="800"
        DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;
    &lt;Grid&gt;
        &lt;StackPanel Orientation="Vertical"&gt;
            &lt;TextBox Text="{Binding Title}" /&gt;
            &lt;Button Content="Click Here"
                    Command="{Binding SendMessageCommand}" /&gt;
            &lt;TextBox x:Name="ctlTextBox" /&gt;
        &lt;/StackPanel&gt;
    &lt;/Grid&gt;
&lt;/Window&gt;</code></pre>
<p>Now, after compiling and running, you can see "Hello World" displayed in the TextBox when you click the button.</p>
<p>
    <img class="w-[600px] border" src="./assets/images/articles/wpf/52/2QMz6_btr4tPg6juO_YZY2tvpje02rUvzORnLHs0_img.png" alt="">
</p>
<p>&nbsp;</p>
</body></html>g6juO_YZY2tvpje02rUvzORnLHs0_img.png" alt="">
</p>
<p>&nbsp;</p>
</body></html>`},{category:"wpf",id:90,content:`<html><head><meta name="keywords" content="MVVM pattern, ViewModel, Data Binding, ObservableProperty, Callbacks, WPF, Visual Studio">
</head><body><h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">Introduction</a></li>
    <li><a href="#section2">Change Event Callbacks for Bound Variables</a></li>
    <li><a href="#section3">Triggering Callbacks on PropertyChanged</a></li>
</ul>

<h2 id="section1">Introduction</h2>
<p>
  &nbsp;In the previous post, we confirmed that binding the Text Property of the TextBox control to the Title member
  variable with the ObservableProperty Attribute in the MainWindowViewModel class and changing the value of the Title
  variable in the ViewModel reflects the value in the View.
</p>
<p>
  &nbsp;This time, we will look at the change event callbacks of the Title variable bound by the user entering text in
  the TextBox from the UI.
</p>
<p>
  <img class="w-[200px]" src="./assets/images/articles/wpf/90/55i8l_btsLFA8Xyn5_77lXKMF6fghnYGk5sir1W1_img.png" alt="">
</p>
<p>
  When the ObservableProperty attribute is declared, the following callback functions are automatically generated by the
  code generator in addition to the getter and setter code that calls the PropertyChanged event.
</p>
<p>
  <img class="w-[500px]" src="./assets/images/articles/wpf/90/b6jvcd_btsLFeE3B7j_kaDZWuAHKmrYRG329UYh6k_img.png" alt="">
</p>
<p>
  In Visual Studio, when you type partial and press the spacebar or tab key, intellisense automatically lists the
  available callback functions in the suggestion list.
</p>
<p>
  <img class="w-[900px]" src="./assets/images/articles/wpf/90/cn3eBQ_btsLDZa4Vvc_wBKA5p8k70MaSdpN3wpi80_img.png" alt="">
</p>
<br>

<h2 id="section2">Change Event Callbacks for Bound Variables</h2>
<p>
  &nbsp;The naming convention of the function is automatically generated in the form of
  On[MemberVariableName]Changing/Changed for the member variable with the ObservableProperty attribute. In the case of
  Changing, it is a callback function that is called before the setter of the Title variable is called, with the changed
  value passed as the value argument from the control bound to the view. In the case of Changed, it is called after the
  value of Title has changed.
</p>
<p>
  &nbsp;To check the order in which each callback function is called, set breakpoints (F9) on all callback functions.
</p>
<p>
  <img class="w-[600px]" src="./assets/images/articles/wpf/90/ZVbnX_btsLFfDZbzb_2iukCy7fH48KDCCszksqh1_img.png" alt="">
</p>
<p>
  &nbsp;After building and running by pressing the F5 key, you can see that it stops at each callback function where the
  breakpoint is set in order. Leave the breakpoints as they are and press F5 to continue running the program, then
  change the value in the TextBox of the window.
</p>
<p>
  <img class="w-[300px]" src="./assets/images/articles/wpf/90/Alrgu_btsLGcM41C8_wsUAPCjqk4m3k1ed4Hogqk_img.png" alt="">
</p>
<br>

<!-- Section 3 -->
<h2 id="section3">Triggering Callbacks on PropertyChanged</h2>
<p>
  &nbsp;However, for some reason, you will find that no matter how much you enter a value in the TextBox, it does not
  hit the breakpoints of the change callback.
</p>
<p>
  &nbsp;The reason is that when binding the Title variable of the ViewModel in the previous post, the Update Trigger
  method was not specified separately, so it operated in the default mode and the callback functions of the ViewModel
  were not called.
</p>
<p>
  <img class="w-[400px]" src="./assets/images/articles/wpf/90/bepZv0_btsLFB7SofO_zaAluxkdBoaNhXjHcOcr40_img.png" alt="">
</p>
<p>
  &nbsp;Since the callback functions of the ViewModel are triggered only by the PropertyChanged event, change the Update
  Trigger mode in the TextBox binding options of the MainWindow View to PropertyChanged as follows.
</p>
<p>
  <img class="w-[700px]" src="./assets/images/articles/wpf/90/cFkMiR_btsLFCMs6JY_LMgVLSid31xMaWyeIOQ5qK_img.png" alt="">
</p>
<p>
  &nbsp;After modifying and saving the View file, press any key to enter text in the TextBox, and you will see that it
  immediately hits the breakpoints set in the change callbacks.
</p>
<br></body></html>ately hits the breakpoints set in the change callbacks.
</p>
<br></body></html>`}],k=[{label:"C#",icon:"pi pi-folder",routerLink:"/article-category-list/csharp",category:"csharp"},{label:"WPF",icon:"pi pi-folder",routerLink:"/article-category-list/wpf",category:"wpf"},{label:"JavaScript/TypeScript",icon:"pi pi-folder",routerLink:"/article-category-list/jsts",category:"jsts"},{label:"Windows",icon:"pi pi-folder",routerLink:"/article-category-list/windows",category:"windows"}],v=[{label:"[C#] Convert enum type to string during JSON Serialization",routerLink:"/articles/csharp/23",keywords:"C#, ENUM, enumToString, JSON, Serialization, \uC5F4\uAC70\uD615\uC744 \uBB38\uC790\uC5F4\uB85C \uC9C1\uB82C\uD654, \uC9C1\uB82C\uD654",category:"csharp",timestamp:"2025-01-25T14:57:50.369Z"},{label:"[C#][Json.Net] Using SelectToken/SelectTokens",routerLink:"/articles/csharp/24",keywords:".NET, C#, Json.NET, jsonpath, LINQ, SelectToken, SelectTokens",category:"csharp",timestamp:"2025-01-25T16:26:11.340Z"},{label:"[C#] Swapping the Values of Two Variables",routerLink:"/articles/csharp/32",keywords:"C#, C# 7.0, SWAP, tuple",category:"csharp",timestamp:"2025-01-25T17:29:59.870Z"},{label:"[C#][NLog] Creating a Callback Function That is Called Every Time a Log Message is Generated",routerLink:"/articles/csharp/34",keywords:"C#, Callback, MethodCallTarget, nlog, nlog message hook",category:"csharp",timestamp:"2025-01-25T18:40:39.985Z"},{label:"[C#] 'Could not find a part of the path...' Error When Publishing a Project",routerLink:"/articles/csharp/38",keywords:"C#, could not find a part of the path, publish error, Visual Studio, windows long filename",category:"csharp",timestamp:"2025-02-04T12:27:35.488Z"},{label:"[C#] Encrypting User Passwords Using the HMACSHA256 Class",routerLink:"/articles/csharp/40",keywords:"C#, HAMCSHA256, hashing, SHA256, \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654, \uC554\uD638\uD654",category:"csharp",timestamp:"2025-01-25T18:58:23.428Z"},{label:"[C#] Using C# in Jupyter Notebook",routerLink:"/articles/csharp/45",keywords:"C#, C# \uB178\uD2B8\uBD81\uB9CC\uB4E4\uAE30, C#\uC744 \uC8FC\uD53C\uD130 \uB178\uD2B8\uBD81\uC5D0\uC11C, dotnet-interactive, Jupyter Notebook, jupyter\uB178\uD2B8\uBD81, Microsoft.dotnet-interactive, \uC8FC\uD53C\uD130\uB178\uD2B8\uBD81",category:"csharp",timestamp:"2025-02-04T12:27:35.489Z"},{label:"[C#] Improvements to Lambda Expressions in C# 10",routerLink:"/articles/csharp/47",keywords:".net6, C#, C# lambda expression, C# \uB78C\uB2E4\uC2DD, C# \uB78C\uB2E4\uD45C\uD604\uC2DD, c#10, lambda, Lambda Expression, \uB78C\uB2E4\uC2DD, \uB78C\uB2E4\uD45C\uD604\uC2DD",category:"csharp",timestamp:"2025-01-25T19:07:37.032Z"},{label:"[C#] How to Serialize XML to JSON Using Json.NET",routerLink:"/articles/csharp/53",keywords:"C#, JSON, Json.NET, Serialization, XML, XMLtoJSON",category:"csharp",timestamp:"2025-01-25T19:11:33.216Z"},{label:"[C#][.NET] Creating an MSI Installer with WixSharp",routerLink:"/articles/csharp/78",keywords:".NET, Installer GUI, WixSharp, WixToolset, wpf",category:"csharp",timestamp:"2025-02-04T12:27:35.489Z"},{label:"[WPF/CommunityToolkit.Mvvm] 1. Write boilerplate code after creating the project",routerLink:"/articles/wpf/35",keywords:".net6, Boilerplate, CommunityToolkit.Mvvm, DependencyInjection, INotifyPropertyChanged, mvvm, MVVM Boilerplate, ObservableObject, ViewModel View\uC5D0 \uBC14\uC778\uB529, wpf",category:"wpf",timestamp:"2025-02-04T12:27:35.492Z"},{label:"[WPF/CommunityToolkit.Mvvm] 2. Create a ViewModel and bind its member variables to the View",routerLink:"/articles/wpf/44",keywords:".net6, CommunityToolkit.Mvvm, mvvm, ObservableObject, ObservableProperty, Partial Class, wpf, \uB2F7\uB1376",category:"wpf",timestamp:"2025-02-04T12:27:35.492Z"},{label:"[WPF/CommunityToolkit.Mvvm] 3. ObservableProperty\uC758 Change event callbacks",routerLink:"/articles/wpf/90",keywords:".net8, CommunityToolkit.Mvvm, mvvm, ObservableObject, ObservableProperty, Partial Class, propertychanged #changeeventcallbacks, wpf",category:"wpf",timestamp:"2025-02-04T12:27:35.493Z"},{label:"[WPF/CommunityToolkit.Mvvm] 4. WeakReferenceMessenger",routerLink:"/articles/wpf/52",keywords:"C#, CommunityToolkit, mvvm, WeakReferenceMessenge, wpf",category:"wpf",timestamp:"2025-02-04T12:27:35.492Z"},{label:"How to use NextJS + Prisma + PlanetScale",routerLink:"/articles/jsts/6",keywords:"nextjs, PlanetScale, Prisma, pscale, reactjs, SCOOP, serverless, ServerlessDB, ServerlessFunctions",category:"jsts",timestamp:"2025-02-04T12:27:35.490Z"},{label:"[Angular][Google Search Console] Redirect issue",routerLink:"/articles/jsts/92",keywords:"angular, customurlserializer, defaulturlserializer, gihub, google serach console, redirect issue, SEO, SPA",category:"jsts",timestamp:"2025-02-04T12:27:35.490Z"},{label:"[Javascript] Swapping the values of two variables",routerLink:"/articles/jsts/31",keywords:"array, destructing assignment, javascript, SWAP, typescript, \uAD6C\uC870\uBD84\uD574\uD560\uB2F9, \uBC30\uC5F4, \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8, \uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8",category:"jsts",timestamp:"2025-02-03T11:22:11.966Z"},{label:"[Javascript] Double Exclamation Operator",routerLink:"/articles/jsts/39",keywords:"double exclamation operator, falsy, javascript, truthy, \uC774\uC911 \uB290\uB08C\uD45C \uC5F0\uC0B0\uC790",category:"jsts",timestamp:"2025-02-03T11:26:15.647Z"},{label:"[JavaScript] Three ways to get the last element of an array",routerLink:"/articles/jsts/55",keywords:"array, indexing, javascript, last array element, POP, slice, \uB9C8\uC9C0\uB9C9\uC694\uC18C, \uBC30\uC5F4",category:"jsts",timestamp:"2025-02-03T11:28:00.999Z"},{label:"[VSCODE] Shortcuts to automatically remove unused imports",routerLink:"/articles/jsts/58",keywords:"remove unused import, Shortcut, vscode, \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uB294 import \uC815\uB9AC",category:"jsts",timestamp:"2025-02-03T11:30:15.625Z"},{label:"[Office365] MS-provided Office 365 app removal support tools",routerLink:"/articles/windows/60",keywords:"clean uninstall office365, office365, uninstall office, uninstall office365, remove office",category:"windows",timestamp:"2025-02-04T12:27:35.491Z"},{label:"[Excel] How to solve if certain rows are not visible in an excel file",routerLink:"/articles/windows/33",keywords:"Excel, hidden rows, unhide, hidden rows, rowheight, rowfilter, rowfilters",category:"windows",timestamp:"2025-02-04T12:27:35.491Z"},{label:"[Windows 10] How to Install and Set Up FTP Server",routerLink:"/articles/windows/18",keywords:"ftp, IIS, WINDOWS10, \uBB34\uB8CCFTP\uC11C\uBC84, \uC708\uB3C4\uC6B0 10 \uB0B4\uC7A5 FTP \uC11C\uBC84, \uC708\uB3C4\uC6B0 FTP \uC11C\uBC84, \uC708\uB3C4\uC6B010FTP",category:"windows",timestamp:"2025-02-04T12:27:35.491Z"}];var x="JunaPapa's Blog is a comprehensive website where you can find a variety of games I developed for casual play on the web, useful developer tools, and posts with development tips and troubleshooting advice.",C=(t=>(t[t.format=0]="format",t[t.string2Json=1]="string2Json",t[t.json2String=2]="json2String",t[t.json2CSharp=3]="json2CSharp",t[t.base64Encode=4]="base64Encode",t[t.base64Decode=5]="base64Decode",t))(C||{}),i=[{label:"\u{1F680} Speed Typing A to Z \u{1F680}",routerLink:"/games/speedatoz",data:{title:"\u{1F680} Speed Typing A to Z \u{1F680}",subTitle:"Try typing alphabet A to Z as quick as you can!"}}],g={label:"Blog Posts",icon:"pi pi-list",items:[],routerLink:"/article-list"},l=[{label:"JSON to C# Class",icon:"pi pi-wrench",routerLink:"/json-tools/json-to-csclass",data:{title:"JSON to C# Class",subTitle:"Convert JSON to C# Class",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Generate C# Code",mode:3}},{label:"JSON Formatter",icon:"pi pi-wrench",routerLink:"/json-tools/formatter",data:{title:"JSON Formatter",subTitle:"Automatically format JSON string with indentations",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Format JSON",mode:0}},{label:"Quote JSON text",icon:"pi pi-wrench",routerLink:"/json-tools/json-to-string",data:{title:"Quote JSON text",subTitle:"Convert a JSON object to a string with quotes.",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Quote JSON",mode:2}},{label:"Unquote JSON text",icon:"pi pi-wrench",routerLink:"/json-tools/string-to-json",data:{title:"Unquote JSON text",subTitle:"Removes quotes from a quoted JSON string.",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Unquote JSON",mode:1}}],s=[{label:"UUID Generator",icon:"pi pi-wrench",routerLink:"/other-tools/uuid-generator",data:{title:"UUID Generator",subTitle:"Generate UUID"}},{label:"Base64 Encoding",icon:"pi pi-wrench",routerLink:"/other-tools/base64-encode",data:{title:"Base64 Encoding",subTitle:"Encoding image or text to base64 text",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Encode Base64",mode:4}},{label:"Base64 Decoding",icon:"pi pi-wrench",routerLink:"/other-tools/base64-decode",data:{title:"Base64 Decoding",subTitle:"Decoding base64 text to image or text",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Decode Base64",mode:5}},{label:"Bank Interest Calculator",icon:"pi pi-calculator",routerLink:"/other-tools/toss-interest-calc",data:{title:"Toss Bank Interest Calculator",subTitle:"A simple tool to calculate interest for Toss Bank."}}],c=[{label:"Bitcoin Market Prices",icon:"pi pi-bitcoin",routerLink:"/trading/bitcoin-prices",data:{title:"Bitcoin Market Prices",subTitle:"It compares the real-time Bitcoin market prices of Upbit and Binance, and calculates the Kimchi Premium."}}],M={label:"Home",icon:"pi pi-home",routerLink:"/"};var S=class p{constructor(e){this.router=e}history$=new u([]);get currentMenu(){return this.history$.value.at(-1)}home=h(d({},M),{command:e=>this.navigateTo(e)});flatList=[];items=[];showSideMenu=!1;isLoadingPage=!1;games=[];tools=[];otherTools=[];initialized=!1;initMenu(){if(!this.initialized){this.items=[{label:"Games",items:[...i]},{label:"JSON Tools",items:[...l]},{label:"Other Tools",items:[...s]}];let e=[...v].reverse(),n=k.map(a=>h(d({},a),{count:e.filter(t=>t.category===a.category).length}));this.flatList.push(g),this.flatList.push(...e,...i,...l,...s,...n,...c);let o={label:"Trading",items:[...c]};this.items.push(o);let r={label:"Blog",items:[g,...n]};this.items.push(r),this.flatList.forEach(a=>a.command=t=>this.navigateTo(t)),this.games=[...i],this.tools=[...l,...s.filter(a=>a.routerLink!=="/other-tools/toss-interest-calc")],this.otherTools=[s.find(a=>a.routerLink==="/other-tools/toss-interest-calc"),...c],this.initialized=!0}}getUrl(e){return e.routerLink}navigateTo(e){this.showSideMenu=!1;let n=f.stripTrailingSlash(this.router.url).split("?")[0];if(n=n===""?"/":n,e.item.routerLink!==n){this.isLoadingPage=!0;let o=e.item;this.router.navigateByUrl(o.routerLink)}}navigateToArticle(e){this.navigateTo({item:e})}getRelevantArticles(e){let n=[];if(e){let o=this.flatList.filter(a=>!a.count&&a.category===e.category),r=o.indexOf(e);[-2,-1,1,2].forEach(a=>{let t=r+a;t>=0&&t<o.length&&n.push(o[t])})}return n}getMenuByUrl(e){return this.flatList.find(n=>n.routerLink===e)}getBlogContentByUrl(e){let n=e.split("/"),o=n.at(-2)??"",r=n.at(-1)??"";return m.find(a=>a.category===o&&a.id===+r)}getBlogContent(e,n){return m.find(o=>o.category===e&&o.id===n)}static \u0275fac=function(n){return new(n||p)(w(y))};static \u0275prov=b({token:p,factory:p.\u0275fac,providedIn:"root"})};export{m as a,k as b,v as c,x as d,C as e,S as f};
