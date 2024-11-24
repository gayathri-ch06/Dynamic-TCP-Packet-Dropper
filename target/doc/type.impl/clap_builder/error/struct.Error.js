(function() {
    var type_impls = Object.fromEntries([["clap_builder",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Error%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#818-822\">Source</a><a href=\"#impl-Debug-for-Error%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#819-821\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"clap_builder/error/type.Result.html\" title=\"type clap_builder::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","clap_builder::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Error%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#831-842\">Source</a><a href=\"#impl-Display-for-Error%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#832-841\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","clap_builder::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#79-804\">Source</a><a href=\"#impl-Error%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt; <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#88-90\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.raw\" class=\"fn\">raw</a>(kind: <a class=\"enum\" href=\"clap_builder/error/enum.ErrorKind.html\" title=\"enum clap_builder::error::ErrorKind\">ErrorKind</a>, message: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an unformatted error</p>\n<p>This is for you need to pass the error up to\na place that has access to the <code>Command</code> at which point you can call <a href=\"clap_builder/error/struct.Error.html#method.format\" title=\"method clap_builder::error::Error::format\"><code>Error::format</code></a>.</p>\n<p>Prefer <a href=\"clap_builder/builder/struct.Command.html#method.error\" title=\"method clap_builder::builder::Command::error\"><code>Command::error</code></a> for generating errors.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.format\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#94-101\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.format\" class=\"fn\">format</a>(self, cmd: &amp;mut <a class=\"struct\" href=\"clap_builder/builder/struct.Command.html\" title=\"struct clap_builder::builder::Command\">Command</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Format the existing message with the Command’s context</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#128-144\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.new\" class=\"fn\">new</a>(kind: <a class=\"enum\" href=\"clap_builder/error/enum.ErrorKind.html\" title=\"enum clap_builder::error::ErrorKind\">ErrorKind</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an error with a pre-defined message</p>\n<p>See also</p>\n<ul>\n<li><a href=\"clap_builder/error/struct.Error.html#method.insert\" title=\"method clap_builder::error::Error::insert\"><code>Error::insert</code></a></li>\n<li><a href=\"clap_builder/error/struct.Error.html#method.with_cmd\" title=\"method clap_builder::error::Error::with_cmd\"><code>Error::with_cmd</code></a></li>\n</ul>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code>\n<span class=\"kw\">let </span>cmd = clap::Command::new(<span class=\"string\">\"prog\"</span>);\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>err = clap::Error::new(ErrorKind::ValueValidation)\n    .with_cmd(<span class=\"kw-2\">&amp;</span>cmd);\nerr.insert(ContextKind::InvalidArg, ContextValue::String(<span class=\"string\">\"--foo\"</span>.to_owned()));\nerr.insert(ContextKind::InvalidValue, ContextValue::String(<span class=\"string\">\"bar\"</span>.to_owned()));\n\nerr.print();</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_cmd\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#149-154\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.with_cmd\" class=\"fn\">with_cmd</a>(self, cmd: &amp;<a class=\"struct\" href=\"clap_builder/builder/struct.Command.html\" title=\"struct clap_builder::builder::Command\">Command</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Apply <a href=\"clap_builder/builder/struct.Command.html\" title=\"struct clap_builder::builder::Command\"><code>Command</code></a>’s formatting to the error</p>\n<p>Generally, this is used with <a href=\"clap_builder/error/struct.Error.html#method.new\" title=\"associated function clap_builder::error::Error::new\"><code>Error::new</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#172-177\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.apply\" class=\"fn\">apply</a>&lt;EF: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt;(self) -&gt; <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;EF&gt;</h4></section></summary><div class=\"docblock\"><p>Apply an alternative formatter to the error</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>cmd = Command::new(<span class=\"string\">\"foo\"</span>)\n    .arg(Arg::new(<span class=\"string\">\"input\"</span>).required(<span class=\"bool-val\">true</span>));\n<span class=\"kw\">let </span>matches = cmd\n    .try_get_matches_from([<span class=\"string\">\"foo\"</span>, <span class=\"string\">\"input.txt\"</span>])\n    .map_err(|e| e.apply::&lt;KindFormatter&gt;())\n    .unwrap_or_else(|e| e.exit());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#180-182\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.kind\" class=\"fn\">kind</a>(&amp;self) -&gt; <a class=\"enum\" href=\"clap_builder/error/enum.ErrorKind.html\" title=\"enum clap_builder::error::ErrorKind\">ErrorKind</a></h4></section></summary><div class=\"docblock\"><p>Type of error for programmatic processing</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.context\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#186-188\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.context\" class=\"fn\">context</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = (<a class=\"enum\" href=\"clap_builder/error/enum.ContextKind.html\" title=\"enum clap_builder::error::ContextKind\">ContextKind</a>, &amp;<a class=\"enum\" href=\"clap_builder/error/enum.ContextValue.html\" title=\"enum clap_builder::error::ContextValue\">ContextValue</a>)&gt;</h4></section></summary><div class=\"docblock\"><p>Additional information to further qualify the error</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#193-195\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, kind: <a class=\"enum\" href=\"clap_builder/error/enum.ContextKind.html\" title=\"enum clap_builder::error::ContextKind\">ContextKind</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"clap_builder/error/enum.ContextValue.html\" title=\"enum clap_builder::error::ContextValue\">ContextValue</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Lookup a piece of context</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#200-202\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.insert\" class=\"fn\">insert</a>(\n    &amp;mut self,\n    kind: <a class=\"enum\" href=\"clap_builder/error/enum.ContextKind.html\" title=\"enum clap_builder::error::ContextKind\">ContextKind</a>,\n    value: <a class=\"enum\" href=\"clap_builder/error/enum.ContextValue.html\" title=\"enum clap_builder::error::ContextValue\">ContextValue</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"clap_builder/error/enum.ContextValue.html\" title=\"enum clap_builder::error::ContextValue\">ContextValue</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Insert a piece of context</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.use_stderr\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#206-208\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.use_stderr\" class=\"fn\">use_stderr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Should the message be written to <code>stdout</code> or not?</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exit_code\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#221-227\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.exit_code\" class=\"fn\">exit_code</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a></h4></section></summary><div class=\"docblock\"><p>Returns the exit code that <code>.exit</code> will exit the process with.</p>\n<p>When the error’s kind would print to <code>stderr</code> this returns <code>2</code>,\nelse it returns <code>0</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exit\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#233-237\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.exit\" class=\"fn\">exit</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.never.html\">!</a></h4></section></summary><div class=\"docblock\"><p>Prints the error and exits.</p>\n<p>Depending on the error kind, this either prints to <code>stderr</code> and exits with a status of <code>2</code>\nor prints to <code>stdout</code> and exits with a status of <code>0</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.print\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#256-268\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.print\" class=\"fn\">print</a>(&amp;self) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Prints formatted and colored error to <code>stdout</code> or <code>stderr</code> according to its error kind</p>\n<h5 id=\"example-2\"><a class=\"doc-anchor\" href=\"#example-2\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>clap::Command;\n\n<span class=\"kw\">match </span>Command::new(<span class=\"string\">\"Command\"</span>).try_get_matches() {\n    <span class=\"prelude-val\">Ok</span>(matches) =&gt; {\n        <span class=\"comment\">// do_something\n    </span>},\n    <span class=\"prelude-val\">Err</span>(err) =&gt; {\n        err.print().expect(<span class=\"string\">\"Error writing Error\"</span>);\n        <span class=\"comment\">// do_something\n    </span>},\n};</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.render\" class=\"method\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#288-290\">Source</a><h4 class=\"code-header\">pub fn <a href=\"clap_builder/error/struct.Error.html#tymethod.render\" class=\"fn\">render</a>(&amp;self) -&gt; <a class=\"struct\" href=\"clap_builder/builder/struct.StyledStr.html\" title=\"struct clap_builder::builder::StyledStr\">StyledStr</a></h4></section></summary><div class=\"docblock\"><p>Render the error message to a <a href=\"clap_builder/builder/struct.StyledStr.html\" title=\"struct clap_builder::builder::StyledStr\"><code>StyledStr</code></a>.</p>\n<h5 id=\"example-3\"><a class=\"doc-anchor\" href=\"#example-3\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>clap::Command;\n\n<span class=\"kw\">match </span>Command::new(<span class=\"string\">\"Command\"</span>).try_get_matches() {\n    <span class=\"prelude-val\">Ok</span>(matches) =&gt; {\n        <span class=\"comment\">// do_something\n    </span>},\n    <span class=\"prelude-val\">Err</span>(err) =&gt; {\n        <span class=\"kw\">let </span>err = err.render();\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{err}\"</span>);\n        <span class=\"comment\">// do_something\n    </span>},\n};</code></pre></div>\n</div></details></div></details>",0,"clap_builder::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-Error%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#824-829\">Source</a><a href=\"#impl-Error-for-Error%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#826-828\">Source</a><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>Returns the lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/error.rs.html#107\">Source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/error.rs.html#117\">Source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/error.rs.html#180\">Source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type-based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","clap_builder::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CError%3E-for-Error%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#806-810\">Source</a><a href=\"#impl-From%3CError%3E-for-Error%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#807-809\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Error>","clap_builder::Error"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CError%3E-for-Error%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#812-816\">Source</a><a href=\"#impl-From%3CError%3E-for-Error%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"clap_builder/error/trait.ErrorFormatter.html\" title=\"trait clap_builder::error::ErrorFormatter\">ErrorFormatter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt; for <a class=\"struct\" href=\"clap_builder/error/struct.Error.html\" title=\"struct clap_builder::error::Error\">Error</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/clap_builder/error/mod.rs.html#813-815\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Error>","clap_builder::Error"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[26289]}