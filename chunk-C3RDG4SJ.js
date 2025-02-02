import{p as w}from"./chunk-Z5QJVAFB.js";import{Jc as y,X as b,a as d,aa as f,b as m,p as u}from"./chunk-VECOZZOS.js";var h=[{category:"csharp",id:23,content:`<p>Normally, after JSON Serialization, the data is stored as a text file or in a database, but the\r
    enum values are stored in numeric form, which decreases readability when opening the JSON string. Therefore, it is\r
    common to store the enum type variable's value in a string format. In such cases, you can declare an attribute on a\r
    specific member variable as shown below.</p>\r
<pre id="code_1674099285182" class="csharp language-csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>    using Newtonsoft.Json;\r
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
        }</code></pre>\r
<p>If the member variable is in the form of an array or list, you can specify the attribute as\r
    shown below.</p>\r
<pre id="code_1674103182054" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>    using Newtonsoft.Json;\r
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
        }</code></pre>\r
`},{category:"csharp",id:24,content:`<p>\r
</p>\r
Often, when dealing with variable JSON structures in C# or when you only need to extract or modify specific data within\r
a JSON, it is much more efficient to parse the JSON using JObject and then use the SelectToken/SelectTokens functions to\r
find the desired token and retrieve or manipulate its value, rather than creating individual classes to map the JSON\r
data.\r
Original text: <a href="https://www.newtonsoft.com/json/help/html/SelectToken.htm">https://www.newtonsoft.com/json/help/html/SelectToken.htm</a>\r
<p>&nbsp;</p>\r
<h2><b>1. SelectToken</b></h2>\r
&nbsp;SelectToken is a method that returns a JToken and uses a string path for the child tokens. SelectToken either\r
returns\r
the child token or, if it cannot find the token at the path location, returns a null reference. The path consists of\r
property names separated by dots and array indexes. For example: Manufacturers[0].Name.\r
<pre id="code_1674611980743" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>JObject o = JObject.Parse(@"{\r
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
    // Elbow Grease</code></pre>\r
<p>&nbsp;</p>\r
<h2><b>2. <span style="color: #000000;">SelectToken with JSONPath</span></b></h2>\r
&nbsp;You can use JSONPath (<a href="https://goessner.net/articles/JsonPath/" target="_blank"\r
  rel="noopener">https://goessner.net/articles/JsonPath/</a>) expressions to retrieve tokens\r
</p>\r
<pre id="code_1674612703318" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>JObject o = JObject.Parse(@"{\r
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
    // manufacturer with the name 'Acme Co'\r
    JToken acme = o.SelectToken("$.Manufacturers[?(@.Name == 'Acme Co')]");\r
    \r
    Console.WriteLine(acme);\r
    // { "Name": "Acme Co", Products: [{ "Name": "Anvil", "Price": 50 }] }\r
    \r
    // name of all products priced 50 and above\r
    IEnumerable&lt;JToken&gt; pricyProducts = o.SelectTokens("$..Products[?(@.Price &gt;= 50)].Name");\r
    \r
    foreach (JToken item in pricyProducts)\r
    {\r
        Console.WriteLine(item);\r
    }\r
    // Anvil\r
    // Elbow Grease</code></pre>\r
<p>&nbsp;</p>\r
<h2><b>3. <span style="color: #000000;">SelectToken with LINQ</span></b></h2>\r
&nbsp;You can use the SelectToken function together with standard LINQ functions to retrieve tokens.\r
<pre id="code_1674612664768" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>IList&lt;string&gt; storeNames = o.SelectToken("Stores").Select(s =&gt; (string)s).ToList();\r
    // Lambton Quay\r
    // Willis Street\r
    \r
    IList&lt;string&gt; firstProductNames = o["Manufacturers"].Select(m =&gt; (string)m.SelectToken("Products[1].Name")).ToList();\r
    // null\r
    // Headlight Fluid\r
    \r
    decimal totalPrice = o["Manufacturers"].Sum(m =&gt; (decimal)m.SelectToken("Products[0].Price"));\r
    // 149.95</code></pre>`},{category:"csharp",id:32,content:`<h3><b>1. Classic Method</b></h3>\r
&nbsp;Declare an additional temporary variable, copy the value or reference of one of the two variables into it, and\r
then\r
perform the swap.\r
<pre id="code_1675746265918" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>var a = 10;\r
var b = 20;\r
var temp = a;\r
a = b;\r
b = temp;</code></pre>\r
<p>&nbsp;</p>\r
<h3><b>2. Modern Method (C# 7.0 or later)</b></h3>\r
<p>&nbsp;Using a tuple, you can achieve the swap in a single line.</p>\r
<pre id="code_1675746265918" class="csharp" data-ke-language="csharp"\r
    data-ke-type="codeblock"><code>(b, a) = (a, b)</code></pre>`},{category:"csharp",id:34,content:`<p>&nbsp;Generally, when using NLog to generate log messages within multiple class libraries or\r
    multiple classes, there are times when you need to process the message each time a log message occurs and display it\r
    on the GUI, or publish it to a Message Broker like GRPC, WebSocket, or Kafka.</p>\r
<p>&nbsp;In such cases, you can easily implement it using the MethodCallTarget class of NLog as\r
    shown below.</p>\r
<pre id="code_1675818915815" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>// Define the callback function.\r
var target = new MethodCallTarget("LogNotify", async (logEvent, parameters) =&gt;\r
{\r
    // Perform the desired processing here. If there are no asynchronous calls inside, remove the async above.\r
    if (logEvent.Level &gt; NLog.LogLevel.Debug)\r
    {\r
    ...\r
    }\r
});\r
\r
// Register the callback function to be called for all log message levels.\r
LogManager.Configuration.AddRuleForAllLevels(target);\r
\r
// Update the logger configuration.\r
LogManager.ReconfigExistingLoggers();</code></pre>\r
<p>The example from the official website's documentation (<a\r
        href="https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm" target="_blank"\r
        rel="noopener">https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm</a>) is as\r
    follows.</p>\r
<pre id="code_1675819002332" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using System;\r
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
}</code></pre>`},{category:"csharp",id:38,content:`<p>\r
  &nbsp;The main cause is that the file path is too long. Therefore, you can reduce the length of the path name by\r
  shortening the project folder name and placing it in a higher-level folder. However, if you inevitably need to place\r
  it in a folder with a long name and deep level, there is a way to change the Windows Registry.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq3elr%2FbtrYSOA57ZX%2FK2rhXcu806po17zVI4z8B0%2Fimg.png"\r
    alt="Registry Editor Image"\r
  />\r
</p>\r
<p>Go to the registry path below</p>\r
<pre\r
  id="code_1676171312093"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem</code></pre>\r
<p>Set LongPathsEnabled to 1 to solve the problem.</p>\r
<p>\r
  If the property does not exist, create a new DWORD type and set the value to 1. (No reboot required)\r
</p>\r
`},{category:"csharp",id:40,content:`<p>By using the HMACSHA256 class in C#, you can easily convert a user's password into an encrypted\r
    string with very simple code.</p>\r
<pre id="code_1676461079220" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>    public static class CredentialHelper\r
    {\r
        public static string GetHMACSHA256Hash(string username, string password)\r
        {\r
            var key = Encoding.ASCII.GetBytes(username);\r
            var data = Encoding.ASCII.GetBytes(password);\r
            return Convert.ToBase64String(new HMACSHA256(key).ComputeHash(data));\r
        }\r
    }</code></pre>\r
<p>As shown above, you can create a static class and use the function to generate a hash string\r
    from the username and password entered by the user. You can then store this hash string and compare it with the hash\r
    generated from the username/password combination entered by the user during login to verify.</p>`},{category:"csharp",id:45,content:`<p>&nbsp;Anyone who has used Python has probably used Jupyter Notebook. Using Jupyter Notebook is\r
    much more useful than simply storing or sharing commented source code, as it allows you to test various simple code\r
    blocks for playground purposes or create tutorial documents that you can directly modify and execute.</p>\r
<p>&nbsp;Now, you can create notebooks with C# code in Jupyter Notebook. Assuming that you already\r
    have Anaconda/Miniconda environment or Python, Jupyter Notebook, and .Net development environment installed on your\r
    PC, you can simply execute the following command line commands in order.</p>\r
<p>&nbsp;</p>\r
<h4><b>1. Install Microsoft.dotnet-interactive.</b></h4>\r
<pre id="code_1677478512568" class="shell" data-ke-language="shell"\r
    data-ke-type="codeblock"><code>dotnet tool install --global Microsoft.dotnet-interactive</code></pre>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6cSoU%2Fbtr0We4GUVN%2FdurNryODkXLtyvrXDWuaI0%2Fimg.png"\r
        alt="">\r
</p>\r
<p>&nbsp;</p>\r
<h4><b>2. Execute the command to install the .Net kernel for Jupyter notebook.</b></h4>\r
<pre id="code_1677478648471" class="shell" data-ke-language="shell"\r
    data-ke-type="codeblock"><code>dotnet-interactive jupyter install</code></pre>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fp26oC%2Fbtr0Oa9Fj6W%2FzF9EjmtUKzh5HlqddaKhc0%2Fimg.png"\r
        alt="">\r
</p>\r
<p>Now, if you run Jupyter notebook, you will see C# in the new notebook creation.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1Mu6r%2Fbtr01TMFQp7%2FtslKW80Fo5UHzzT3GjFYTk%2Fimg.png"\r
        alt="">\r
</p>\r
<p>Now you can create notebooks with C# code as shown below.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbur6GT%2Fbtr0Iv7UyE1%2F1iPw8NWGSFBcHy1G9EKFPk%2Fimg.png"\r
        alt="">\r
</p>`},{category:"csharp",id:47,content:`<p>&nbsp;.NET 6 supports C# language version 10. Among various improvements, there have been some\r
    enhancements to lambda expressions. Let's take a look.</p>\r
<p>Original link: <a\r
        href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#explicit-return-type"\r
        target="_blank"\r
        rel="noopener">https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#explicit-return-type</a>\r
</p>\r
<p>&nbsp;</p>\r
<p><h2>1. Natural type of a lambda expression</h2></p>\r
<p>&nbsp;In the past, assigning a lambda expression to a variable with a var type would result in\r
    an error, requiring explicit type declaration with Func&lt;string, int&gt;. Now, the compiler is smart enough to\r
    infer the return type from the lambda expression.</p>\r
<pre id="code_1677808725470" class="sql" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>var parse = (string s) =&gt; int.Parse(s);</code></pre>\r
<p>This should have been possible a long time ago... It seems like Microsoft is not working hard\r
    enough.</p>\r
<p>&nbsp;</p>\r
<p><h2>2. You can now specify the return type of a lambda expression.</h2></p>\r
<p>In the following lambda expression, the return type is ambiguous because it returns an int or a\r
    string based on the value of b, causing a compiler error. This often happens when multiple types need to be\r
    returned, and explicitly casting the return type can be cumbersome.</p>\r
<pre id="code_1677807045116" class="sql" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>var choose = (bool b) =&gt; b ? 1 : "two"; // ERROR: Can't infer return type</code></pre>\r
<p>Starting with C# 10, you can explicitly specify the return type in front of the lambda\r
    expression.</p>\r
<pre id="code_1677807053554" class="sql" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>var choose = object (bool b) =&gt; b ? 1 : "two"; // Func&lt;bool, object&gt;</code></pre>\r
<p>Personally, I wish the compiler would implicitly interpret such cases as object type without\r
    needing to explicitly write object. Sometimes C# feels a bit frustrating compared to other languages, but I hope\r
    many improvements will be made soon.</p>\r
<p>&nbsp;</p>\r
<p><h2>3. Attributes</h2></p>\r
<p>&nbsp;You can now specify attributes for lambda expressions or their parameters. Personally, I\r
    have never felt the need to specify attributes for lambda expressions, but it's always good to have more\r
    flexibility...</p>\r
<p>&nbsp;You can specify attributes for lambda expressions as shown below</p>\r
<pre id="code_1677809135308" class="angelscript" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>Func&lt;string?, int?&gt; parse = [ProvidesNullCheck] (s) =&gt; (s is not null) ? int.Parse(s) : null;</code></pre>\r
<p>&nbsp;You can also specify attributes for each parameter or for the return value as shown\r
    below.&nbsp;</p>\r
<pre id="code_1677809202818" class="sql" data-ke-language="sql" data-ke-type="codeblock"><code>var concat = ([DisallowNull] string a, [DisallowNull] string b) =&gt; a + b;\r
var inc = [return: NotNullifNotNull(nameof(s))] (int? s) =&gt; s.HasValue ? s++ : null;</code></pre>`},{category:"csharp",id:53,content:`<p>\r
  &nbsp;These days, when exchanging messages between different apps or services, complex structured data is mostly\r
  converted to JSON. Of course, there are still many places that use XML. Therefore, there are cases where the data\r
  received in XML needs to be serialized to JSON and stored or sent to another node.\r
</p>\r
<p>&nbsp;In such cases, you can easily serialize it with just a method call using Json.NET.</p>\r
<pre\r
  id="code_1679636243891"\r
  class="csharp"\r
  data-ke-language="csharp"\r
  data-ke-type="codeblock"\r
><code>string xml = @"&lt;?xml version='1.0' standalone='no'?&gt;\r
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
<p>\r
  Original text:\r
  <a href="https://www.newtonsoft.com/json/help/html/ConvertXmlToJson.htm" target="_blank" rel="noopener"\r
    >https://www.newtonsoft.com/json/help/html/ConvertXmlToJson.htm</a\r
  >\r
</p>\r
`},{category:"csharp",id:78,content:`<h2 data-ke-size="size26"><b>1. Introduction to WixSharp</b></h2>\r
<p>&nbsp;If you have ever created an installation file for deploying Windows Desktop applications,\r
    you might have used the Wix toolset at least once. It is a powerful tool provided for free as open-source, but it\r
    has the inconvenience of having to write XML tags one by one. Especially for customizing the installation dialog,\r
    you need to specify the coordinates of each control one by one, and to verify it, you have to create the msi file\r
    and run it, which is quite inconvenient.</p>\r
<p>&nbsp;WixSharp is a great tool that allows you to write these inconvenient XML tags in C# code.\r
    In particular, it is very convenient because you can implement the harvest of the installation target files simply\r
    using C# Linq without having to learn how to use the heat command and filter methods separately, and you can\r
    customize the WPF view directly on the designer screen.</p>\r
<p>Github: <a href="https://github.com/oleg-shilo/wixsharp" target="_blank"\r
        rel="noopener">https://github.com/oleg-shilo/wixsharp</a></p>\r
<p>&nbsp;</p>\r
<h2 data-ke-size="size26"><b>2. Installing WixSharp VS Extension</b></h2>\r
<p>&nbsp;To use WixSharp, open the Visual Studio 2022 - Extensions menu =&gt; Manage Extensions\r
    window, search for wixsharp, and install the WixSharp Project Templates.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPq8Y4%2Fbtsq0DYXMLn%2FQPDRoXQKpT4TF1VCG2jp4k%2Fimg.png"\r
        alt="">\r
</p>\r
<p>&nbsp;</p>\r
<h2 data-ke-size="size26"><b>3. Creating a WixSharp Project</b></h2>\r
<p>&nbsp;First, create a solution named WixSharpTest and a console application project named\r
    MyApp.</p>\r
<p>\r
    <img class="max-w-[800px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQIv6m%2FbtsqYZ9TS8N%2FE1MENWBebzwK7mtFqpIbPk%2Fimg.png"\r
        alt="">\r
\r
    <br>\r
    <img class="max-w-[800px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEMr9o%2FbtsqZDLBLzg%2FM4lv1ZrSjTZqWsgrq2lq9K%2Fimg.png"\r
        alt="">\r
</p>\r
<p>Right-click on the solution and add a new project. Search for WixSharp, and several project\r
    templates will appear. Select Custom WPF UI.</p>\r
<p>\r
    <img class="max-w-[600px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuULbX%2FbtsqYDF0Djb%2FNzkPGwuuv9CkXVgZMVWSqK%2Fimg.png"\r
        alt="">\r
</p>\r
<p>Name the project MyAppInstaller.</p>\r
<p>\r
    <img class="max-w-[600px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcV1L1T%2Fbtsq2h1UOtT%2FDiWprQFm6Jc5BBDkojMdak%2Fimg.png"\r
        alt="">\r
</p>\r
<p>Since the template references older versions of NuGet packages, update them to the latest\r
    versions.</p>\r
<p>\r
    <img class="max-w-[700px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdMInkm%2Fbtsq1ctgLCE%2FSthjrGu37RcoqSrZQhwRT1%2Fimg.png"\r
        alt="">\r
    <br>\r
    <img class="max-w-[900px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FR2v8F%2FbtsqYZB0y9e%2FV8gNF8clKvREYq7cA92q1k%2Fimg.png"\r
        alt="">\r
</p>\r
<p>&nbsp;</p>\r
<h2 data-ke-size="size26"><b>4. Building the Target Project and Installer Project</b></h2>\r
<p>&nbsp;Modify the Program.cs file of the MyAppInstaller project as follows.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfJY9k%2Fbtsq1bHMDoS%2FWBiipLpWbIttoqOEK13cIk%2Fimg.png"\r
        alt="">\r
</p>\r
<pre id="code_1691759011226" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using System;\r
    using System.Windows.Forms;\r
    using WixSharp;\r
    using WixSharp.UI.WPF;\r
    \r
    namespace MyAppInstaller\r
    {\r
        internal class Program\r
        {\r
            static void Main()\r
            {\r
                var productName = "MyApp";\r
                var companyName = "HiperzStudio";\r
    \r
                var project = new ManagedProject($"{productName}",\r
                                  new Dir($@"%ProgramFiles%\\{companyName}\\{productName}",\r
                                      new Files("*.*")));\r
    \r
                project.GUID = new Guid("6fe30b47-2577-43ad-9095-1861ba25889b");\r
    \r
                // project.ManagedUI = ManagedUI.DefaultWpf; // all stock UI dialogs\r
    \r
                //custom set of UI WPF dialogs\r
                project.ManagedUI = new ManagedUI();\r
    \r
                project.ManagedUI.InstallDialogs.Add&lt;MyAppInstaller.WelcomeDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.LicenceDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.FeaturesDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.InstallDirDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.ProgressDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.ExitDialog&gt;();\r
    \r
                project.ManagedUI.ModifyDialogs.Add&lt;MyAppInstaller.MaintenanceTypeDialog&gt;()\r
                                               .Add&lt;MyAppInstaller.FeaturesDialog&gt;()\r
                                               .Add&lt;MyAppInstaller.ProgressDialog&gt;()\r
                                               .Add&lt;MyAppInstaller.ExitDialog&gt;();\r
    \r
                // Location of the application's binary files to be deployed\r
                project.SourceBaseDir = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), @"..\\MyApp\\bin\\debug\\net6.0");\r
\r
                // Folder to create MSI\r
                project.OutDir = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), @"bin\\deployment");\r
    \r
                project.BuildMsi();\r
            }\r
        }\r
    }</code></pre>\r
<p>Now, if you build MyApp and then build MyAppInstaller, an msi file will be created in the\r
    bin\\deployment folder.</p>\r
<p>\r
    <img class="max-w-[800px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbllnZC%2Fbtsq1I6qRG6%2FmqPG5GdCCoANcJMLTSD350%2Fimg.png"\r
        alt="">\r
    <br>\r
    <img class="border" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtmSjq%2FbtsqZtWLWlG%2FPuCn4mBHVXrupxL187ysnk%2Fimg.png"\r
        alt="">\r
</p>\r
<p>When you run MyApp.msi, you will see the installation GUI as shown below. It's very simple,\r
    right?</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FT5ybc%2Fbtsq1aITxRS%2FxTkneKLzIjEOLkBHw5YTKK%2Fimg.png"\r
        alt="">\r
</p>\r
<p>Now, if you proceed with the installation, you can see that it is installed correctly under the\r
    Program Files folder as shown below.</p>\r
<p>\r
    <img class="border" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLGZe6%2Fbtsq2kYDXlK%2FK3raCASSVuXJqT1CxjoP10%2Fimg.png"\r
        alt="">\r
</p>\r
<p>You can also see that MyApp appears in the list in the Windows Add or Remove Programs console\r
    as shown below.</p>\r
<p>\r
    <img class="border" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdCfM0i%2FbtsqZbB4fYi%2Fkf5PeDtwjdD7qShdtk6R4k%2Fimg.png"\r
        alt="">\r
</p>\r
<p>In the next post, we will learn how to filter the target files for deployment and create\r
    shortcut icons on the desktop and start menu.</p>`},{category:"jsts",id:6,content:`<p>\r
  First, go to the PlanetScale (<a href="https://planetscale.com/" target="_blank" rel="noopener"\r
    >https://planetscale.com/</a\r
  >) website and complete the account creation process.\r
</p>\r
<p class="my-1">\r
  Next, to install the PlanetScale CLI, open a PowerShell terminal window and enter the following command to install\r
  scoop. <span style="letter-spacing: 0px">&nbsp;</span><span style="letter-spacing: 0px">(Reference:&nbsp;</span\r
  ><a style="letter-spacing: 0px" href="https://scoop.sh/)">https://scoop.sh/)</a>\r
</p>\r
<pre\r
  id="code_1672108904004"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time\r
irm get.scoop.sh | iex</code></pre>\r
<p class="my-1">\r
  After installing scoop, install pscale. <span>(Reference:<span>&nbsp;</span></span\r
  ><a href="https://github.com/planetscale/cli#installation)">https://github.com/planetscale/cli#installation)</a>\r
</p>\r
<pre\r
  id="code_1672109068281"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git\r
scoop install pscale mysql</code></pre>\r
<p class="my-1">Now that the PlanetScale CLI is installed, create a new NextJS project to test it.</p>\r
<pre class="autoit"><code>npx create-next-app@latest</code></pre>\r
<p class="my-1">Enter the project folder and install the prisma package.</p>\r
<pre id="code_1672107607906" class="coffeescript" data-ke-language="bash" data-ke-type="codeblock"><code>npm i prisma -D\r
npm i @prisma/client</code></pre>\r
<p class="my-1">\r
  <span style="background-color: #ffffff; color: #222222">Enter the prisma initialization command.</span>\r
</p>\r
<pre\r
  id="code_1672107790577"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>npx prisma init</code></pre>\r
<p class="my-1">After running the initialization command, the schema.prisma and .env files will be created.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5VEZE%2FbtrUL7iGXPE%2F98Gb1t9Df3w0d2MBoYjZl0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">Install the vscode extension to conveniently edit the schema.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq4w4Y%2FbtrUKYGkoVo%2Fz0t72UCIFAZtPYuG82UTFK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">\r
  Define the schema of the table to be used in the schema.prisma file as shown below. For detailed instructions on how\r
  to define the prisma schema, please refer to\r
  <a\r
    href="https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types"\r
    target="_blank"\r
    rel="noopener"\r
    >https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types</a\r
  >.\r
</p>\r
<p class="my-1">Change the db provider in the default schema from postgresql to mysql.</p>\r
<pre\r
  id="code_1672108346784"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>// This is your Prisma schema file,\r
// learn more about it in the docs: https://pris.ly/d/prisma-schema\r
\r
generator client {\r
    provider = "prisma-client-js"\r
}\r
\r
datasource db {\r
    provider = "mysql"\r
    url      = env("DATABASE_URL")\r
}\r
\r
model Test {\r
    id   Int    @id @default(autoincrement())\r
    name String\r
}</code></pre>\r
<p class="my-1">To connect to PlanetScale, enter the following command to log in to the PlanetScale site.</p>\r
<pre\r
  id="code_1672109997011"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>pscale auth login</code></pre>\r
<p class="my-1">After logging in, check the login completion message in the terminal window as shown below.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdnPv1c%2FbtrUHR824uY%2FUxQmz2OuzOJ3CiZsXrhInK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">\r
  Now, to connect to the database created in PlanetScale, enter the following command. (For example, if the DB name is\r
  mytestdb)\r
</p>\r
<pre\r
  id="code_1672110969739"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>pscale connect mytestdb</code></pre>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F86cvM%2FbtrUDiTSGFg%2FSi0F7Yk4iuRWjRCo0o92V1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">Change the DATABASE_URL in the .env file as follows.</p>\r
<pre\r
  id="code_1672111109023"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>DATABASE_URL="mysql://127.0.0.1:3306/mytestdb"</code></pre>\r
<p class="my-1">Enter the following command to create the table model defined in schema.prisma in the DB.</p>\r
<pre\r
  id="code_1672111260682"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>npx prisma db push</code></pre>\r
<p>\r
  <img class="max-w-[700px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4TIew%2FbtrUIgt2Vll%2FX9L7VOxG5n698KHKKwTUak%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">\r
  Once the push is successfully completed, you can check that a new table has been created on the PlanetScale website.\r
</p>\r
<p>\r
  <img class="border"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpUKVD%2FbtrUHStpLzH%2Fw62M9Pnb3277R1iOknKo4K%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">Click on Tables on the screen above to check the created table schema.</p>\r
<p>\r
  <img class="border"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDdYcG%2FbtrUBa9Edku%2FWpJNS8tcr9yuJ612fygP31%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-1">\r
  Once you have completed the above steps, you can now read and write to the DB created in PlanetScale from NextJS.\r
</p>\r
`},{category:"jsts",id:92,content:`<p class="my-2">\r
  &nbsp;While creating a personal blog (<a href="http://hiperz.github.io" target="_blank" rel="noopener"\r
    >https://hiperz.github.io</a\r
  >) using Angular and hosting it on Github, I encountered several issues due to my lack of knowledge in SEO (Search\r
  Engine Optimization). One of them was a case where a request for indexing a specific URL on Google Search Console was\r
  rejected due to a redirection error.\r
</p>\r
<p>\r
  <img\r
    width="60%"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNKnVF%2FbtsL3lLdYrZ%2FtUFgSGndzi0DJrGBBiTgOK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-3">\r
  &nbsp;At first, I didn't understand what this meant, so I left it alone. However, since the issue persisted, I clicked\r
  on the "Learn more" link and found the following guidance.\r
</p>\r
<p>\r
  <img\r
    width="60%"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcsoCJd%2FbtsL49h9WAD%2FL3pAJINZ1eKj9OwK33cRF0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-2">\r
  &nbsp;The message suggested using Lighthouse to investigate the redirection issue, so I clicked on Lighthouse.\r
</p>\r
<p>\r
  <img\r
    width="60%"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAzljd%2FbtsL3hWp37G%2FIwWofw9ER8TrdsNHjQkI9K%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p class="my-2">\r
  &nbsp;It turned out to be one of the developer tools in the Chrome browser that I had overlooked. By pressing F12 in\r
  the Chrome browser to open the developer tools panel, selecting the Lighthouse tab, and clicking the "Analyze page\r
  load" button, it automatically analyzes and provides results. Therefore, I will skip the detailed explanation of how\r
  to use the Lighthouse tool.\r
</p>\r
<p class="my-2">\r
  &nbsp;When I analyzed the actual page with the redirection error using Lighthouse in my Chrome browser, it pointed out\r
  the redirection issue. The main cause of this problem was that while hosting the Angular app on Github, the Github\r
  server always appended a slash (/) to the end of the URL when navigating to a specific URL. This caused the Angular\r
  router to redirect URLs with trailing slashes to URLs without slashes.\r
</p>\r
<p class="my-2">&nbsp;</p>\r
<h2 class="my-2">Solution (Based on Angular 19)</h2>\r
<h3>1. Create custom-url-serializer.ts file.</h3>\r
<p class="my-2">Create a custom-url-serializer.ts file anywhere with the following code.</p>\r
<pre id="code_1738345257050" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>\r
import { UrlTree, DefaultUrlSerializer } from '@angular/router';\r
\r
export class CustomUrlSerializer extends DefaultUrlSerializer {\r
    override serialize(urlTree: UrlTree): string {\r
        return this.appendTrailingSlash(super.serialize(urlTree));\r
    }\r
\r
    private appendTrailingSlash(url: string): string {\r
        const splitOn = url.indexOf('?') &gt; -1 ? '?' : '#';\r
        const pathArr = url.split(splitOn);\r
\r
        if (!pathArr[0].endsWith('/')) {\r
            let fileName: string = url.substring(url.lastIndexOf('/') + 1);\r
            if (fileName.indexOf('.') === -1) {\r
                pathArr[0] += '/';\r
            }\r
        }\r
\r
        return pathArr.join(splitOn);\r
    }\r
}</code></pre>\r
<p class="my-2">\r
  [Code Source]:\r
  <a\r
    href="https://github.com/angular/angular/issues/16051#issuecomment-575346573"\r
    target="_blank"\r
    rel="noopener&nbsp;noreferrer"\r
    >https://github.com/angular/angular/issues/16051#issuecomment-575346573</a\r
  >\r
</p>\r
<h3 class="mt-3">2. Modify app.config.ts</h3>\r
<pre id="code_1738345388792" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>...\r
import { CustomUrlSerializer } from './ts-libs/custom-url-serializer';\r
\r
export const appConfig: ApplicationConfig = {\r
    providers: [\r
        { provide: UrlSerializer, useClass: CustomUrlSerializer },\r
        ...\r
    ],\r
};</code></pre>\r
<p class="my-2">\r
  &nbsp;By applying CustomUrlSerializer, the URL will always end with a slash (/), and the issue of loading the same\r
  page twice due to redirection will be resolved.\r
</p>\r
<p class="my-2">&nbsp;Additionally, Angular provides a function to remove the trailing slash when processing URLs.</p>\r
<pre\r
  id="code_1738346433319"\r
  class="typescript"\r
  data-ke-language="typescript"\r
  data-ke-type="codeblock"\r
><code>import { Location } from '@angular/common';\r
\r
export class BlaBlaComponent implements OnInit {\r
    constructor(\r
        private router: Router,\r
    ) {\r
    \r
    ...\r
    const url = Location.stripTrailingSlash(this.router.url);\r
    ...\r
    \r
    }\r
}</code></pre>\r
<p class="my-2">\r
  &nbsp;I hope this helps those who are hosting web apps with Angular SPA on Github and experiencing redirection issues.\r
</p>\r
`},{category:"windows",id:33,content:`<h3>1. When Specific Rows Are Actually Hidden</h3>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHpNQE%2FbtrYpnKgLx0%2FJuNfJaIrSoNZVwojpicShK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>Select the rows you want to unhide by right-clicking and choosing Unhide.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FelFokW%2FbtrYmtw82a8%2FcicXH8KGk6SwVQ5K3gU6k1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p></p>\r
<h3>2. Rows Are Hidden Due to Small Height Settings</h3>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbYjK84%2FbtrYqyLvQS0%2F6kaDJubIUFKIIBTXtSykqk%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>Select the rows needing height adjustment and right-click to choose Row Height.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFn0J9%2FbtrYlzEwXBn%2F3tqPhMfdXtKGi4umdKcVEK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>After setting the height to 16.5 and confirming:</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcerYQh%2FbtrYlyMmSlt%2FuTxMpStISyrlaDz6CU1vFK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>Previously hidden rows become visible as shown below:</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclR3uS%2FbtrYqwfSS81%2FJXHar8LOmfh1YmZZEm82lk%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<h3>3. When Automatic Filters Are Applied (Even Without Column Filters)</h3>\r
<p>Note: Characteristic feature is marked by light blue row numbers.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPchWc%2FbtrYqSipslT%2FtOT7gEBsrPXigLjCVRRLf1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>Use Ctrl + Shift + L shortcut or go to the toolbar menu to clear filters:</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdF0KL%2FbtrYq439KDJ%2FynV0aAJqtpVJTlH2wCtLe0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
`},{category:"windows",id:60,content:`<p>\r
  &nbsp;I downloaded and installed the offline app with my office 365 subscription account, but when I tried to delete\r
  it, I couldn't see it in the app list in the control panel. If you can't delete it because it's not in the list of\r
  apps in the control panel, download the official support tool from the link below, install it, and run it to cleanly\r
  uninstall uninstall it.\r
</p>\r
<p>\r
  Microsoft Official website :\r
  <a\r
    href="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us"\r
    >https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us</a\r
  >&nbsp;\r
</p>\r
<figure\r
  id="og_1681348196641"\r
  contenteditable="false"\r
  data-ke-type="opengraph"\r
  data-ke-align="alignCenter"\r
  data-og-type="website"\r
  data-og-title="Uninstall Office from a PC - Microsoft Support"\r
  data-og-description="If you have a Click-to-Run or an MSI installation, uninstall Microsoft 365 using the Control Panel or download the uninstall support tool. Option 1 - Uninstall Microsoft 365&nbsp;from the Control Panel Open the Control Panel. Tip:&nbsp;If you installed the Microso"\r
  data-og-host="support.microsoft.com"\r
  data-og-source-url="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us"\r
  data-og-url="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ad=us&amp;rs=en-us&amp;ui=en-us"\r
  data-og-image=""\r
>\r
  <a\r
    href="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us"\r
    target="_blank"\r
    rel="noopener"\r
    data-source-url="https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8?ui=en-us&amp;rs=en-us&amp;ad=us"\r
  >\r
    <div class="og-image">&nbsp;</div>\r
    <div class="og-text">\r
      <p class="og-title">Uninstall Office from a PC - Microsoft Support</p>\r
      <p class="og-desc">\r
        If you have a Click-to-Run or an MSI installation, uninstall Microsoft 365 using the Control Panel or download\r
        the uninstall support tool. Option 1 - Uninstall Microsoft 365&nbsp;from the Control Panel Open the Control\r
        Panel. Tip:&nbsp;If you installed the Microso\r
      </p>\r
      <p class="og-host">support.microsoft.com</p>\r
    </div>\r
  </a>\r
</figure>\r
<p>Go to the above link and click the &nbsp;download button to download and install the tool.</p>\r
<p>\r
  <img\r
    class="border"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbotLAg%2Fbtr9RwWbtcu%2FLC8iWKjVmxpLsYHJMCDvU0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>After installation is complete, an icon will appear on your desktop.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpU2f3%2Fbtr9NgUFyH3%2FJohhb8pjp9a2dKIYpk9qek%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>When you run it, you'll see a list of installed offices, which you can select and uninstall.</p>\r
<p>\r
  <img\r
    class="max-w-[700px] border"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLHTUh%2Fbtr9NCiQQ7v%2FfOGNXUn7vk7gE8ZeUfMeA0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  Once the uninstallation is complete, press the Restart button to restart your system and Office will be completely\r
  uninstalled.\r
</p>\r
<p>\r
  <img\r
    class="max-w-[700px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIga6g%2Fbtr9MdYc2Wo%2FHSJClK917tnV3SPcO94qOk%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
`},{category:"wpf",id:35,content:`<p>\u203B. This screenshot is based on Visual Studio 2022.</p>\r
<h2><b>1. Open Visual Studio and create a new WPF project.</b></h2>\r
<p>Search for WPF and select the WPF Application project template.</p>\r
<p>\r
    <img class="max-w-[800px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVTvhj%2FbtrYqLYRGCK%2FCVGWVkD6S56zMm9m4EJKjK%2Fimg.png" alt="">\r
</p>\r
<p>Specify the project path, solution name, and project name.</p>\r
<p>\r
    <img class="max-w-[700px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDA6XA%2FbtrYrmYB9nD%2FKyJcVO6Svh70neIvwRTbE0%2Fimg.png" alt="">\r
</p>\r
<p>Since this explanation is based on .Net 6.0 or higher, select 6.0.</p>\r
<p>\r
    <img class="max-w-[700px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMt23t%2FbtrYtxLWmVB%2F43bmNdFQGQFcd6tVdjsUck%2Fimg.png" alt="">\r
</p>\r
<p>\r
    Once the project is created, check the solution and files in the project in Solution Explorer as shown below.\r
</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5Qj6D%2FbtrYrm5oBFJ%2FJNdqNQCWcTK83vptnCS9F1%2Fimg.png" alt="">\r
</p>\r
<p>&nbsp;</p>\r
<h2><b>2. Install NuGet Packages</b></h2>\r
<p>\r
    Install the following packages from the NuGet Package Manager or open the project file by double-clicking the project (MyTestApp) in Solution Explorer and add the following PackageReference tags directly and save.\r
</p>\r
<pre id="code_1675820933085" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>  &lt;ItemGroup&gt;\r
    &lt;PackageReference Include="CommunityToolkit.Mvvm" Version="8.1.0" /&gt;\r
    &lt;PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="7.0.0" /&gt;\r
    &lt;/ItemGroup&gt;</code></pre>\r
<p>\u203B. I personally do not use the Nullable option, so I removed it.</p>\r
<p>\r
    <img class="max-w-[800px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5phz4%2FbtrYrjnoWEc%2F2kDBKAX7T7glKmyHHyfxzk%2Fimg.png" alt="">\r
</p>\r
<p>&nbsp;</p>\r
<h2><b>3. Create Folders and MainWindowViewModel</b></h2>\r
<p>\r
    Create two folders named Views and ViewModels in the project, then move the MainWindow.xaml file to the Views folder. The folder names are personal preferences, so you can name them as you like.\r
</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvGIAt%2FbtrYrUOtYEf%2FwXrshuzzbIje5jKcAbB3c0%2Fimg.png" alt="">\r
</p>\r
<p></p>\r
    Since the MainWindow.xaml file has been moved to the Views folder, modify the StartupUri in App.xaml as follows.\r
</p>\r
<p>\r
    <img class="max-w-[800px]" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUTt3R%2FbtrYriIMzz7%2Fffs3KylhMNrhHharALeE20%2Fimg.png" alt="">\r
</p>\r
<p>Create a new class file named MainWindowViewModel.cs in the ViewModels folder.</p>\r
<p>\r
    To use the code generation feature of the MVVM toolkit, add the partial keyword and define the class as inheriting from ObservableObject as follows.\r
</p>\r
<pre\r
    id="code_1675821808551"\r
    class="csharp"\r
    data-ke-language="csharp"\r
    data-ke-type="codeblock"\r
><code>using CommunityToolkit.Mvvm.ComponentModel;\r
\r
namespace MyTestApp.ViewModels\r
{\r
        public partial class MainWindowViewModel : ObservableObject\r
        {\r
        }\r
}</code></pre>\r
<p></p>\r
    Since C# does not support multiple inheritance, if the ViewModel needs to inherit from a specific class, declare the INotifyPropertyChanged attribute instead of inheriting from ObservableObject as follows.\r
</p>\r
<pre\r
    id="code_1675822057724"\r
    class="csharp"\r
    data-ke-language="csharp"\r
    data-ke-type="codeblock"\r
><code>using CommunityToolkit.Mvvm.ComponentModel;\r
\r
namespace MyTestApp.ViewModels\r
{\r
        public class MyBaseClass\r
        {\r
        }\r
\r
        [INotifyPropertyChanged]\r
        public partial class MainWindowViewModel : MyBaseClass\r
        {\r
                public MainWindowViewModel()\r
                {\r
                }\r
        }\r
}</code></pre>\r
<p>&nbsp;</p>\r
<h2><b>4. Create ViewModel Locator Class</b></h2>\r
<p>Create a VmLocator.cs file in the project.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAwX2k%2FbtrYqvhQRG3%2FGYdgAh1N0I8KEgEnes5kq0%2Fimg.png" alt="">\r
</p>\r
<p>\r
    To use Dependency Injection in the ViewModel, define the dependencies in this file as follows.\r
</p>\r
<pre\r
    id="code_1675822475503"\r
    class="csharp"\r
    data-ke-language="csharp"\r
    data-ke-type="codeblock"\r
><code>using Microsoft.Extensions.DependencyInjection;\r
using MyTestApp.ViewModels;\r
using System;\r
\r
namespace MyTestApp\r
{\r
        public class VmLocator\r
        {\r
                public IServiceProvider Services { get; }\r
\r
                public VmLocator()\r
                {\r
                        var services = new ServiceCollection();\r
\r
                        services.AddTransient&lt;MainWindowViewModel&gt;();\r
\r
                        Services = services.BuildServiceProvider();\r
                }\r
\r
                public MainWindowViewModel MainWindowVM =&gt; Services.GetService&lt;MainWindowViewModel&gt;();\r
        }\r
}</code></pre>\r
<p>&nbsp;</p>\r
<p>\r
    Now, add a tag in App.xaml to create an instance of VmLocator when the app runs.\r
</p>\r
<pre\r
    id="code_1675822744263"\r
    class="html xml"\r
    data-ke-language="html"\r
    data-ke-type="codeblock"\r
><code>&lt;Application x:Class="MyTestApp.App"\r
                         xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
                         xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
                         xmlns:local="clr-namespace:MyTestApp"\r
                         StartupUri="Views/MainWindow.xaml"&gt;\r
        &lt;Application.Resources&gt;\r
                &lt;ResourceDictionary&gt;\r
                        &lt;local:VmLocator x:Key="VmLocator" /&gt;\r
                &lt;/ResourceDictionary&gt;\r
        &lt;/Application.Resources&gt;\r
&lt;/Application&gt;</code></pre>\r
<p>&nbsp;</p>\r
<h2><b>5. Bind ViewModel to View</b></h2>\r
<p>Bind the DataContext in the MainWindow.xaml file to MainWindowVM as follows.</p>\r
<pre\r
    id="code_1675822930992"\r
    class="html xml"\r
    data-ke-language="html"\r
    data-ke-type="codeblock"\r
><code>&lt;Window x:Class="MyTestApp.MainWindow"\r
                xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
                xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
                xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\r
                xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\r
                xmlns:local="clr-namespace:MyTestApp"\r
                mc:Ignorable="d"\r
                Title="MainWindow" Height="450" Width="800"\r
                DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;\r
        &lt;Grid&gt;\r
\r
        &lt;/Grid&gt;\r
&lt;/Window&gt;</code></pre>\r
<p></p>\r
    This is the boilerplate code for developing a WPF app using the MVVM pattern. Add new Views to the Views folder and the corresponding ViewModels to the ViewModels folder. Then, declare the ViewModel instance in the VmLocator to be created by the Dependency Injection service and bind it to the View's DataContext in the same way as MainWindowVM.\r
</p>\r
<p>&nbsp;</p>\r
`},{category:"wpf",id:44,content:`<p data-ke-size="size16">\r
  In the previous post, we explained how to create a MainWindowViewModel class that inherits from ObservableObject in\r
  the ViewModels folder and bind it to the DataContext of the MainWindow.xaml view.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNdLnZ%2Fbtr0JBk4UNZ%2FMmYZK5kjckFZYzn9uM3Ho1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  Now, let's declare member variables in the created ViewModel and bind them to the TextBox control in the View.\r
</p>\r
<p data-ke-size="size16">\r
  When coding with the traditional MVVM pattern, the most annoying part was declaring member variables and notifying the\r
  PropertyChange event for each variable as shown below.\r
</p>\r
<pre\r
  id="code_1677248181508"\r
  class="csharp"\r
  data-ke-language="csharp"\r
  data-ke-type="codeblock"\r
><code>namespace MyTestApp.ViewModels\r
{\r
    public class MainWindowViewModel : INotifyPropertyChanged\r
    {\r
        public event PropertyChangedEventHandler PropertyChanged;\r
\r
        public void OnPropertyChanged([CallerMemberName] string propertyName = null)\r
        {\r
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));\r
        }\r
\r
        private string title;\r
        public string Title\r
        {\r
            get\r
            {\r
                return title;\r
            }\r
            set\r
            {\r
                title = value;\r
                OnPropertyChanged();\r
            }\r
        }\r
     }\r
 }</code></pre>\r
<p data-ke-size="size16">\r
  Declaring a single variable is so verbose, and if you have to write 10 or 20 more, the amount of coding is\r
  considerable. It also makes the code feel cluttered. However, with CommunityToolkit.Mvvm in .Net 6 or higher, you can\r
  simply add an attribute, and the Code Generator will automatically generate the above code at compile time.\r
</p>\r
<p data-ke-size="size16">So the code becomes very simple as shown below. Excellent~!</p>\r
<pre\r
  id="code_1677247755753"\r
  class="csharp"\r
  data-ke-language="csharp"\r
  data-ke-type="codeblock"\r
><code>using CommunityToolkit.Mvvm.ComponentModel;\r
\r
namespace MyTestApp.ViewModels\r
{\r
    public partial class MainWindowViewModel : ObservableObject\r
    {\r
        [ObservableProperty]\r
        private string title;\r
\r
        public MainWindowViewModel() \r
        {\r
            Title = "Initial Value";\r
        }\r
    }\r
}</code></pre>\r
<p data-ke-size="size16">\r
  When declaring member variables, you must use private and start the variable name with a lowercase letter. This is\r
  because the Code Generator creates a public variable with the same name starting with an uppercase letter.\r
</p>\r
<p data-ke-size="size16">\r
  Do not use getter/setter when declaring variables like title above. If you sometimes mindlessly add { get; set; }, you\r
  might waste precious time wondering why VS throws an error...\r
</p>\r
<p data-ke-size="size16">\r
  To use the above attribute for Code Generation, you need to add the partial keyword to the class. This is because the\r
  Code Generator creates a partial class with the same name in another file.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Now, open MainWindowView.xaml and add a TextBox control to the View.</p>\r
<pre\r
  id="code_1677249234033"\r
  class="html xml"\r
  data-ke-language="html"\r
  data-ke-type="codeblock"\r
><code>&lt;Window x:Class="MyTestApp.MainWindow"\r
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\r
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\r
        xmlns:local="clr-namespace:MyTestApp"\r
        mc:Ignorable="d"\r
        Title="MainWindow" Height="450" Width="800"\r
        DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;\r
    &lt;Grid&gt;\r
        &lt;TextBox&gt;&lt;/TextBox&gt;\r
    &lt;/Grid&gt;\r
&lt;/Window&gt;</code></pre>\r
<p data-ke-size="size16">\r
  Now, bind the Text property of the TextBox control to the Title declared in the ViewModel as shown below.\r
</p>\r
<pre id="code_1677249303180" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>    &lt;Grid&gt;\r
        &lt;TextBox Text="{Binding Title}"&gt;&lt;/TextBox&gt;\r
    &lt;/Grid&gt;</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  Press F5 to run the program, and since the constructor of the ViewModel assigns "Initial Value" to Title, the value\r
  will be displayed in the TextBox as shown below.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWudcX%2Fbtr0KG0MZra%2FjZhgOVAh1PCUNR9bRJPbm0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  In this post, we learned how to declare variables in the ViewModel and bind those variables to controls in the View.\r
  In the next post, we will learn how to hook events in the ViewModel when the bound value changes due to user input.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
`},{category:"wpf",id:52,content:`<p>&nbsp;When developing with the MVVM pattern, there are many cases where you need to deliver events from one ViewModel to another or from a ViewModel to a View in a 1:1 or 1:N manner. In this case, you can create a static class to handle events accessible globally, or create a service class to handle event variables accessible from multiple ViewModels through dependency injection. However, using the WeakReferenceMessenger class provided by CommunityToolkit, you can easily implement a Pub/Sub style event queue.</p>\r
<p>&nbsp;Although it is simple and convenient to use, in practice, there are many cases where you need to apply debounce time to the event stream or use the event buffer as a ring buffer, which is not possible with WeakReferenceMessenger, so it is a bit disappointing.</p>\r
<p>&nbsp;To understand the simple usage, I will explain based on the code written in the previous article.</p>\r
<p>&nbsp;Goal: When a button is clicked in the View, use WeakReferenceMessenger to send a message from MainWindowViewModel to MainWindowView to display "Hello World" in the TextBox control.</p>\r
<p>&nbsp;It is easy to handle events from View to ViewModel through binding, but it is not easy to make the View perform a specific action by triggering an arbitrary event from the ViewModel, so we will implement this using WeakReferenceMessenger.</p>\r
<p>&nbsp;</p>\r
<h2><b>1. Create Message Class</b></h2>\r
<p>Create a Messages folder in the project and create a TestMessage class file.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdgUn1M%2Fbtr4vo30Yhg%2FZCvgshI0fiAXBdJVfHAya1%2Fimg.png" alt="">    \r
</p>\r
<pre id="code_1679055381567" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.Messaging.Messages;\r
\r
namespace MyTestApp.Messages\r
{\r
    public class TestMessage : ValueChangedMessage&lt;string&gt;\r
    {\r
        public TestMessage(string text) : base(text)\r
        {\r
        }\r
    }\r
}</code></pre>\r
<p>&nbsp;</p>\r
<h2><b>2. Register to Receive Messages in the View</b></h2>\r
<p>MainWindow.xaml.cs</p>\r
<pre id="code_1679055479924" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.Messaging;\r
using MyTestApp.Messages;\r
using System.Windows;\r
\r
namespace MyTestApp\r
{\r
    /// &lt;summary&gt;\r
    /// Interaction logic for MainWindow.xaml\r
    /// &lt;/summary&gt;\r
    public partial class MainWindow : Window\r
    {\r
        public MainWindow()\r
        {\r
            InitializeComponent();\r
\r
            WeakReferenceMessenger.Default.Register&lt;TestMessage&gt;(this, (r, m) =&gt;\r
            {\r
                ctlTextBox.Text = m.Value;\r
            });\r
        }\r
    }\r
}</code></pre>\r
<p>&nbsp;</p>\r
<h2><b>3. Add Button and TextBox Controls to the View, Bind to ViewModel Properties/Commands, and Write Code to Send Message on Button Click in ViewModel</b></h2>\r
<p>&nbsp;</p>\r
<p>MainWindowViewModel.cs</p>\r
<pre id="code_1679055912361" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.ComponentModel;\r
using CommunityToolkit.Mvvm.Input;\r
using CommunityToolkit.Mvvm.Messaging;\r
using MyTestApp.Messages;\r
\r
namespace MyTestApp.ViewModels\r
{\r
    public partial class MainWindowViewModel : ObservableObject\r
    {\r
        [ObservableProperty]\r
        private string title;\r
\r
        public MainWindowViewModel()\r
        {\r
            Title = "Initial Value";\r
        }\r
\r
        [RelayCommand]\r
        private void SendMessage()\r
        {\r
            WeakReferenceMessenger.Default.Send(new TestMessage("Hello World"));\r
        }\r
    }\r
}</code></pre>\r
<p>&nbsp;</p>\r
<p>MainWindow.xaml</p>\r
<pre id="code_1679055969536" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>&lt;Window x:Class="MyTestApp.MainWindow"\r
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\r
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\r
        xmlns:local="clr-namespace:MyTestApp"\r
        mc:Ignorable="d"\r
        Title="MainWindow"\r
        Height="450"\r
        Width="800"\r
        DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;\r
    &lt;Grid&gt;\r
        &lt;StackPanel Orientation="Vertical"&gt;\r
            &lt;TextBox Text="{Binding Title}" /&gt;\r
            &lt;Button Content="Click Here"\r
                    Command="{Binding SendMessageCommand}" /&gt;\r
            &lt;TextBox x:Name="ctlTextBox" /&gt;\r
        &lt;/StackPanel&gt;\r
    &lt;/Grid&gt;\r
&lt;/Window&gt;</code></pre>\r
<p>&nbsp;</p>\r
<p>Now, after compiling and running, you can see "Hello World" displayed in the TextBox when you click the button.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2QMz6%2Fbtr4tPg6juO%2FYZY2tvpje02rUvzORnLHs0%2Fimg.png" alt="">\r
</p>\r
<p>&nbsp;</p>`},{category:"wpf",id:90,content:`<p>\r
  &nbsp;In the previous post, we confirmed that binding the Text Property of the TextBox control to the Title member\r
  variable with the ObservableProperty Attribute in the MainWindowViewModel class and changing the value of the Title\r
  variable in the ViewModel reflects the value in the View.\r
</p>\r
<p>\r
  &nbsp;This time, we will look at the change event callbacks of the Title variable bound by the user entering text in\r
  the TextBox from the UI.\r
</p>\r
<p>\r
  <img\r
    class="max-w-[200px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F55i8l%2FbtsLFA8Xyn5%2F77lXKMF6fghnYGk5sir1W1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  When the ObservableProperty attribute is declared, the following callback functions are automatically generated by the\r
  code generator in addition to the getter and setter code that calls the PropertyChanged event.\r
</p>\r
<p>\r
  <img\r
    class="max-w-[500px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6jvcd%2FbtsLFeE3B7j%2FkaDZWuAHKmrYRG329UYh6k%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  In Visual Studio, when you type partial and press the spacebar or tab key, intellisense automatically lists the\r
  available callback functions in the suggestion list.\r
</p>\r
<p>\r
  <img\r
    class="max-w-[900px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcn3eBQ%2FbtsLDZa4Vvc%2FwBKA5p8k70MaSdpN3wpi80%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  &nbsp;The naming convention of the function is automatically generated in the form of\r
  On[MemberVariableName]Changing/Changed for the member variable with the ObservableProperty attribute. In the case of\r
  Changing, it is a callback function that is called before the setter of the Title variable is called, with the changed\r
  value passed as the value argument from the control bound to the view. In the case of Changed, it is called after the\r
  value of Title has changed.\r
</p>\r
<p>\r
  &nbsp;To check the order in which each callback function is called, set breakpoints (F9) on all callback functions.\r
</p>\r
<p>\r
  <img\r
    class="max-w-[600px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZVbnX%2FbtsLFfDZbzb%2F2iukCy7fH48KDCCszksqh1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  &nbsp;After building and running by pressing the F5 key, you can see that it stops at each callback function where the\r
  breakpoint is set in order. Leave the breakpoints as they are and press F5 to continue running the program, then\r
  change the value in the TextBox of the window.\r
</p>\r
<p>\r
  <img\r
    class="max-w-[300px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAlrgu%2FbtsLGcM41C8%2FwsUAPCjqk4m3k1ed4Hogqk%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  &nbsp;However, for some reason, you will find that no matter how much you enter a value in the TextBox, it does not\r
  hit the breakpoints of the change callback.\r
</p>\r
<p>\r
  &nbsp;The reason is that when binding the Title variable of the ViewModel in the previous post, the Update Trigger\r
  method was not specified separately, so it operated in the default mode and the callback functions of the ViewModel\r
  were not called.\r
</p>\r
<p>\r
  <img\r
  class="max-w-[400px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbepZv0%2FbtsLFB7SofO%2FzaAluxkdBoaNhXjHcOcr40%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  &nbsp;Since the callback functions of the ViewModel are triggered only by the PropertyChanged event, change the Update\r
  Trigger mode in the TextBox binding options of the MainWindow View to PropertyChanged as follows.\r
</p>\r
<p>\r
  <img class="max-w-[700px]"\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFkMiR%2FbtsLFCMs6JY%2FLMgVLSid31xMaWyeIOQ5qK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p>\r
  &nbsp;After modifying and saving the View file, press any key to enter text in the TextBox, and you will see that it\r
  immediately hits the breakpoints set in the change callbacks.\r
</p>\r
`}],k=[{label:"C#",icon:"pi pi-folder",routerLink:"/article-category-list/csharp",category:"csharp"},{label:"WPF",icon:"pi pi-folder",routerLink:"/article-category-list/wpf",category:"wpf"},{label:"JavaScript/TypeScript",icon:"pi pi-folder",routerLink:"/article-category-list/jsts",category:"jsts"},{label:"Windows",icon:"pi pi-folder",routerLink:"/article-category-list/windows",category:"windows"}],F=[{label:"[C#] Convert enum type to string during JSON Serialization",routerLink:"/articles/csharp/23",keywords:"C#, ENUM, enumToString, JSON, Serialization, \uC5F4\uAC70\uD615\uC744 \uBB38\uC790\uC5F4\uB85C \uC9C1\uB82C\uD654, \uC9C1\uB82C\uD654",category:"csharp",timestamp:"2025-01-25T14:57:50.369Z"},{label:"[C#][Json.Net] Using SelectToken/SelectTokens",routerLink:"/articles/csharp/24",keywords:".NET, C#, Json.NET, jsonpath, LINQ, SelectToken, SelectTokens",category:"csharp",timestamp:"2025-01-25T16:26:11.340Z"},{label:"[C#] Swapping the Values of Two Variables",routerLink:"/articles/csharp/32",keywords:"C#, C# 7.0, SWAP, tuple",category:"csharp",timestamp:"2025-01-25T17:29:59.870Z"},{label:"[C#][NLog] Creating a Callback Function That is Called Every Time a Log Message is Generated",routerLink:"/articles/csharp/34",keywords:"C#, Callback, MethodCallTarget, nlog, nlog message hook",category:"csharp",timestamp:"2025-01-25T18:40:39.985Z"},{label:"[C#] 'Could not find a part of the path...' Error When Publishing a Project",routerLink:"/articles/csharp/38",keywords:"C#, could not find a part of the path, publish error, Visual Studio, windows long filename",category:"csharp",timestamp:"2025-01-25T18:52:43.567Z"},{label:"[C#] Encrypting User Passwords Using the HMACSHA256 Class",routerLink:"/articles/csharp/40",keywords:"C#, HAMCSHA256, hashing, SHA256, \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654, \uC554\uD638\uD654",category:"csharp",timestamp:"2025-01-25T18:58:23.428Z"},{label:"[C#] Using C# in Jupyter Notebook",routerLink:"/articles/csharp/45",keywords:"C#, C# \uB178\uD2B8\uBD81\uB9CC\uB4E4\uAE30, C#\uC744 \uC8FC\uD53C\uD130 \uB178\uD2B8\uBD81\uC5D0\uC11C, dotnet-interactive, Jupyter Notebook, jupyter\uB178\uD2B8\uBD81, Microsoft.dotnet-interactive, \uC8FC\uD53C\uD130\uB178\uD2B8\uBD81",category:"csharp",timestamp:"2025-01-25T19:00:45.693Z"},{label:"[C#] Improvements to Lambda Expressions in C# 10",routerLink:"/articles/csharp/47",keywords:".net6, C#, C# lambda expression, C# \uB78C\uB2E4\uC2DD, C# \uB78C\uB2E4\uD45C\uD604\uC2DD, c#10, lambda, Lambda Expression, \uB78C\uB2E4\uC2DD, \uB78C\uB2E4\uD45C\uD604\uC2DD",category:"csharp",timestamp:"2025-01-25T19:07:37.032Z"},{label:"[C#] How to Serialize XML to JSON Using Json.NET",routerLink:"/articles/csharp/53",keywords:"C#, JSON, Json.NET, Serialization, XML, XMLtoJSON",category:"csharp",timestamp:"2025-01-25T19:11:33.216Z"},{label:"[C#][.NET] Creating an MSI Installer with WixSharp",routerLink:"/articles/csharp/78",keywords:".NET, Installer GUI, WixSharp, WixToolset, wpf",category:"csharp",timestamp:"2025-01-25T19:20:46.464Z"},{label:"[WPF/CommunityToolkit.Mvvm] 1. Write boilerplate code after creating the project",routerLink:"/articles/wpf/35",keywords:".net6, Boilerplate, CommunityToolkit.Mvvm, DependencyInjection, INotifyPropertyChanged, mvvm, MVVM Boilerplate, ObservableObject, ViewModel View\uC5D0 \uBC14\uC778\uB529, wpf",category:"wpf",timestamp:"2025-01-29T13:48:47.803Z"},{label:"[WPF/CommunityToolkit.Mvvm] 2. Create a ViewModel and bind its member variables to the View",routerLink:"/articles/wpf/44",keywords:".net6, CommunityToolkit.Mvvm, mvvm, ObservableObject, ObservableProperty, Partial Class, wpf, \uB2F7\uB1376",category:"wpf",timestamp:"2025-01-29T14:21:12.869Z"},{label:"[WPF/CommunityToolkit.Mvvm] 3. ObservableProperty\uC758 Change event callbacks",routerLink:"/articles/wpf/90",keywords:".net8, CommunityToolkit.Mvvm, mvvm, ObservableObject, ObservableProperty, Partial Class, propertychanged #changeeventcallbacks, wpf",category:"wpf",timestamp:"2025-01-29T16:22:25.138Z"},{label:"[WPF/CommunityToolkit.Mvvm] 4. WeakReferenceMessenger",routerLink:"/articles/wpf/52",keywords:"C#, CommunityToolkit, mvvm, WeakReferenceMessenge, wpf",category:"wpf",timestamp:"2025-01-29T16:23:48.988Z"},{label:"How to use NextJS + Prisma + PlanetScale",routerLink:"/articles/jsts/6",keywords:"nextjs, PlanetScale, Prisma, pscale, reactjs, SCOOP, serverless, ServerlessDB, ServerlessFunctions",category:"jsts",timestamp:"2025-01-31T12:08:02.943Z"},{label:"[Angular][Google Search Console] Redirect issue",routerLink:"/articles/jsts/92",keywords:"angular, customurlserializer, defaulturlserializer, gihub, google serach console, redirect issue, SEO, SPA",category:"jsts",timestamp:"2025-01-31T18:02:37.117Z"},{label:"[Office365] MS-provided Office 365 app removal support tools",routerLink:"/articles/windows/60",keywords:"clean uninstall office365, office365, uninstall office, uninstall office365, remove office",category:"windows",timestamp:"2025-02-02T02:15:05.812Z"},{label:"[Excel] How to solve if certain rows are not visible in an excel file",routerLink:"/articles/windows/33",keywords:"Excel, hidden rows, unhide, hidden rows, rowheight, rowfilter, rowfilters",category:"windows",timestamp:"2025-02-02T13:35:57.550Z"}];var T="JunaPapa's Blog is a comprehensive website where you can find a variety of games I developed for casual play on the web, useful developer tools, and posts with development tips and troubleshooting advice.",M=(n=>(n[n.format=0]="format",n[n.string2Json=1]="string2Json",n[n.json2String=2]="json2String",n[n.json2CSharp=3]="json2CSharp",n[n.base64Encode=4]="base64Encode",n[n.base64Decode=5]="base64Decode",n))(M||{}),i=[{label:"\u{1F680} Speed Typing A to Z \u{1F680}",routerLink:"/games/speedatoz",data:{title:"\u{1F680} Speed Typing A to Z \u{1F680}",subTitle:"Try typing alphabet A to Z as quick as you can!"}}],g={label:"Blog Posts",icon:"pi pi-list",items:[],routerLink:"/article-list"},l=[{label:"JSON to C# Class",icon:"pi pi-wrench",routerLink:"/json-tools/json-to-csclass",data:{title:"JSON to C# Class",subTitle:"Convert JSON to C# Class",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Generate C# Code",mode:3}},{label:"JSON Formatter",icon:"pi pi-wrench",routerLink:"/json-tools/formatter",data:{title:"JSON Formatter",subTitle:"Automatically format JSON string with indentations",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Format JSON",mode:0}},{label:"Quote JSON text",icon:"pi pi-wrench",routerLink:"/json-tools/json-to-string",data:{title:"Quote JSON text",subTitle:"Convert a JSON object to a string with quotes.",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Quote JSON",mode:2}},{label:"Unquote JSON text",icon:"pi pi-wrench",routerLink:"/json-tools/string-to-json",data:{title:"Unquote JSON text",subTitle:"Removes quotes from a quoted JSON string.",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Unquote JSON",mode:1}}],s=[{label:"UUID Generator",icon:"pi pi-wrench",routerLink:"/other-tools/uuid-generator",data:{title:"UUID Generator",subTitle:"Generate UUID"}},{label:"Base64 Encoding",icon:"pi pi-wrench",routerLink:"/other-tools/base64-encode",data:{title:"Base64 Encoding",subTitle:"Encoding image or text to base64 text",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Encode Base64",mode:4}},{label:"Base64 Decoding",icon:"pi pi-wrench",routerLink:"/other-tools/base64-decode",data:{title:"Base64 Decoding",subTitle:"Decoding base64 text to image or text",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Decode Base64",mode:5}},{label:"Bank Interest Calculator",icon:"pi pi-calculator",routerLink:"/other-tools/toss-interest-calc",data:{title:"Toss Bank Interest Calculator",subTitle:"A simple tool to calculate interest for Toss Bank."}}],c=[{label:"Bitcoin Market Prices",icon:"pi pi-bitcoin",routerLink:"/trading/bitcoin-prices",data:{title:"Bitcoin Market Prices",subTitle:"It compares the real-time Bitcoin market prices of Upbit and Binance, and calculates the Kimchi Premium."}}],v={label:"Home",icon:"pi pi-home",routerLink:"/"};var x=class p{constructor(e){this.router=e}history$=new u([]);get currentMenu(){return this.history$.value.at(-1)}home=m(d({},v),{command:e=>this.navigateTo(e)});flatList=[];items=[];showSideMenu=!1;isLoadingPage=!1;games=[];tools=[];otherTools=[];initialized=!1;initMenu(){if(!this.initialized){this.items=[{label:"Games",items:[...i]},{label:"JSON Tools",items:[...l]},{label:"Other Tools",items:[...s]}];let e=[...F].reverse(),t=k.map(r=>m(d({},r),{count:e.filter(n=>n.category===r.category).length}));this.flatList.push(g),this.flatList.push(...e,...i,...l,...s,...t,...c);let a={label:"Trading",items:[...c]};this.items.push(a);let o={label:"Blog",items:[g,...t]};this.items.push(o),this.flatList.forEach(r=>r.command=n=>this.navigateTo(n)),this.games=[...i],this.tools=[...l,...s.filter(r=>r.routerLink!=="/other-tools/toss-interest-calc")],this.otherTools=[s.find(r=>r.routerLink==="/other-tools/toss-interest-calc"),...c],this.initialized=!0}}getUrl(e){return e.routerLink}navigateTo(e){this.showSideMenu=!1;let t=y.stripTrailingSlash(this.router.url).split("?")[0];if(t=t===""?"/":t,e.item.routerLink!==t){this.isLoadingPage=!0;let a=e.item;this.router.navigateByUrl(a.routerLink)}}navigateToArticle(e){this.navigateTo({item:e})}getRelevantArticles(e){let t=[];if(e){let a=this.flatList.filter(r=>!r.count&&r.category===e.category),o=a.indexOf(e);[-2,-1,1,2].forEach(r=>{let n=o+r;n>=0&&n<a.length&&t.push(a[n])})}return t}getMenuByUrl(e){return this.flatList.find(t=>t.routerLink===e)}getBlogContentByUrl(e){let t=e.split("/"),a=t.at(-2)??"",o=t.at(-1)??"";return h.find(r=>r.category===a&&r.id===+o)}getBlogContent(e,t){return h.find(a=>a.category===e&&a.id===t)}static \u0275fac=function(t){return new(t||p)(f(w))};static \u0275prov=b({token:p,factory:p.\u0275fac,providedIn:"root"})};export{h as a,k as b,F as c,T as d,M as e,x as f};
