searchState.loadedDescShard("bindgen", 0, "Generate Rust bindings for C and C++ libraries.\nThe “aapcs” ABI.\nA valid rust ABI.\nEnum for how aliases should be translated.\nError type for rust-bindgen.\nWrap members in a type generated by <code>bindgen</code>.\nGenerated Rust bindings.\nConfigure and generate Rust bindings for a C/C++ header.\nThe default C ABI.\nWhether to generate constructors\nThe “C-unwind” ABI.\nA ParseCallbacks implementation that will act on file …\nCreate a new <code>CargoCallbacks</code> value with …\nClang diagnosed an error.\nExtracted Clang version data\nCode generation reported an error.\nA type used to indicate which kind of items we have to …\nThe code for this enum will use consts\nDefault prefix for the anon fields.\nWhether to generate destructors.\nThe “efiapi” ABI.\nA helper type that represents different enum variations.\nWhether to generate functions.\nThe “fastcall” ABI.\nWhat kind of visibility modifier should be used for a …\nThe header was a folder.\nFormatting tools that can be used to format the bindings\nPermissions to read the header is insufficient.\nLatest stable release of Rust\nWhether to generate methods.\nEnum for the default type of macro constants.\nWrap members in <code>::core::mem::ManuallyDrop</code>.\nThe code for this enum will use a module containing consts\nThe code for this enum will use a newtype\nCreate a new type by wrapping the old type in a struct and …\nSame as NewStruct but also impl Deref to be able to use …\nRust Nightly\nEnum for how non-<code>Copy</code> <code>union</code>s should be translated.\nDo not format the bindings.\nThe header does not exist.\nUse <code>prettyplease</code> to format the bindings.\nFields are marked as private, i.e., struct Foo {bar: bool}\nFields are marked as public, i.e., struct Foo {pub bar: …\nFields are marked as crate public, i.e., struct Foo …\nA dynamic set of regular expressions.\nThe code for this enum will use a Rust enum. Note that …\nRepresents the version of the Rust language to target.\nUse <code>rustfmt</code> to format the bindings.\nUse i32 or i64\nRust 1.0\nRust 1.17\nRust 1.19\nRust 1.20\nRust 1.21\nRust 1.25\nRust 1.26\nRust 1.27\nRust 1.28\nRust 1.30\nRust 1.33\nRust 1.36\nRust 1.40\nRust 1.43\nRust 1.47\nRust 1.59\nRust 1.64\nRust 1.68\nRust 1.71\nRust 1.73\nRust 1.77\nThe “stdcall” ABI.\nThe “system” ABI.\nWhether to generate types.\nThe “thiscall” ABI.\nConvert to regular Rust alias\nUse u32 or u64\nWhether to generate constants.\nThe “vectorcall” ABI.\nThe “win64” ABI.\nGet a flags value with all known bits set.\nGenerate bindings for the content of the given file.\nGenerate bindings for the given function.\nGenerate bindings for the given item, regardless of …\nSet whether to recursively allowlist items.\nGenerate bindings for the given type.\nGenerate bindings for the given variable.\nUse the given prefix for the anonymous fields.\nTranslate arrays <code>T arr[size]</code> into array pointers …\nMark the given <code>union</code> to use a <code>bindgen</code>-generated wrapper …\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nMark the given <code>enum</code> as being bitfield-like.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nEmit <code>#[macro_use] extern crate block;</code> instead of <code>use block;</code>…\nDo not generate any bindings for the contents of the given …\nDo not generate any bindings for the given function.\nDo not generate any bindings for the given item, …\nDo not generate any bindings for the given type.\nDo not generate any bindings for the given variable.\nConstruct a RegexSet from the set of entries we’ve …\nConstruct a new <code>Builder</code>.\nSet whether to generate types with C style naming.\nA public API for more fine-grained customization of …\nAdd an argument to be passed straight through to Clang.\nAdd several arguments to be passed straight through to …\nUse Clang as a fallback for macros that fail to parse …\nSet a path to a directory to which <code>.c</code> and <code>.h.pch</code> files …\nGet the major and the minor semver numbers of Clang’s …\nGenerates the command line flags used to create this …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nTreat inline namespaces conservatively.\nMark the given <code>enum</code> as a set of integer constants.\nMark the given <code>enum</code> as a module with a set of integer …\nReturns true if constructors should be generated.\nWhether all set bits in a source flags value are also set …\nUse the given prefix for the C platform-specific types …\nSet the default style of code generation for <code>typedef</code>s.\nSet the default style for generated <code>enum</code>s.\nSet the default type signedness to be used for macro …\nSet the default style of code to generate for <code>union</code>s with …\nSet the default visibility of fields, including bitfields …\nAdd a depfile output which will be written alongside the …\nSet whether the <code>Copy</code> trait should be derived when possible.\nSet whether the <code>Debug</code> trait should be derived when …\nSet whether the <code>Default</code> trait should be derived when …\nSet whether the <code>Eq</code> trait should be derived when possible.\nSet whether the <code>Hash</code> trait should be derived when possible.\nSet whether the <code>Ord</code> trait should be derived when possible.\nSet whether the <code>PartialEq</code> trait should be derived when …\nSet whether the <code>PartialOrd</code> trait should be derived when …\nReturns true if destructors should be generated.\nSet whether to detect include paths using <code>clang_sys</code>.\nThe intersection of a source flags value with the …\nDo not insert the <code>bindgen</code> version identifier into the …\nDisable name auto-namespacing.\nDisable nested <code>struct</code> naming.\nDisable support for native Rust unions, if supported.\nPreprocess and dump the input header files to disk.\nGenerate bindings for a shared library with the given name.\nSet whether to require successful linkage for all routines …\nGenerate Rust bindings for built-in definitions (for …\nEmit the Clang AST to <code>stdout</code> for debugging purposes.\nEmit the <code>bindgen</code> internal representation to <code>stdout</code> for …\nSet the path for the file where the<code>bindgen</code> internal …\nGet a flags value with all bits unset.\nEmulate C++ namespaces using Rust modules in the generated …\nEnable detecting function attributes on C functions.\nSet whether to always emit explicit padding fields.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nSet whether <code>bindgen</code> should try to fit macro constants into …\nUse DSTs to represent structures with flexible array …\nSet which tool should be used to format the generated …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nCreate a <code>EnumVariation</code> from a string.\nCreate a <code>MacroTypeVariation</code> from a string.\nCreate an <code>AliasVariation</code> from a string.\nfull version string\nReturns true if functions should be generated.\nGenerate the Rust bindings using the options built up thus …\nGenerate proper block signatures instead of <code>void</code> pointers.\nSet whether the generated bindings should contain …\nSet whether string constants should be generated as <code>&amp;CStr</code> …\nSet whether to generate inline functions.\nReturns slice of String from its field ‘items’\nAdd an input C/C++ header to generate bindings for.\nAdd <code>contents</code> as an input C/C++ header named <code>name</code>.\nAdd input C/C++ header(s) to generate bindings for.\nDo not generate any functions.\nDo not generate any methods.\nSet whether <code>Debug</code> should be implemented for types that …\nSet whether <code>PartialEq</code> should be implemented for types that …\nInsert a new regex into this set.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nIs this set empty?\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nSet whether layout tests should be generated.\nMark the given <code>union</code> to use <code>::core::mem::ManuallyDrop</code> for …\nDoes the given <code>string</code> match any of the regexes in this set?\nMerge all extern blocks under the same module into a …\nReturns true if methods should be generated.\nAdd a given line to the beginning of a given module.\nAnnotate the given type with the <code>#[must_use]</code> attribute.\nCreate a new RegexSet\nCreate a new <code>CargoCallbacks</code> value.\nMark the given <code>typedef</code> as a Rust newtype by having the …\nMark the given <code>typedef</code> to be generated as a newtype that …\nMark the given <code>enum</code> as a newtype.\nMark the given <code>enum</code> as a global newtype.\nAvoid converting C float types to <code>f32</code> and <code>f64</code>.\nDo not derive <code>Copy</code> and <code>Clone</code> for a given type.\nDo not derive <code>Debug</code> for a given type.\nDo not derive or implement <code>Default</code> for a given type.\nDo not derive <code>Hash</code> for a given type.\nDo not derive <code>PartialEq</code> for a given type.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nEmit <code>#[macro_use] extern crate objc;</code> instead of <code>use objc;</code> …\nTreat the given type as opaque in the generated bindings.\nOverride the ABI of a given function.\nAdd a new <code>ParseCallbacks</code> instance to configure types in …\nMajor and minor semver, if parsing was successful\nSet whether to prepend the <code>enum</code> name to constant or …\nAdd a line of Rust code at the beginning of the generated …\nSet whether we should record which items in our regex sets …\nThe intersection of a source flags value with the …\nWhether Cargo should re-run the build script if any of the …\nSet whether to respect the C++ access specifications.\nSpecify the Rust target version.\nSet whether <code>rustfmt</code> should be used to format the generated …\nSet the absolute path to the <code>rustfmt</code> configuration file.\nMark the given <code>enum</code> as a Rust <code>enum</code>.\nMark the given <code>enum</code> as a non-exhaustive Rust <code>enum</code>.\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nSet whether <code>size_t</code> should be translated to <code>usize</code>.\nSet whether to sort the generated Rust items in a …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nSet whether to measure the elapsed time for each one of …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nSet whether to always translate <code>enum</code> integer types to …\nSet whether to use the clang-provided name mangling. This …\nMark the given <code>typedef</code> as a regular Rust <code>type</code> alias.\nReturns true if types should be generated.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nReturns an iterator over regexes in the set which didn’t …\nUse <code>core</code> instead of <code>std</code> in the generated bindings.\nReturns true if constants should be generated.\nSet whether to enable experimental support to generate …\nAdds the <code>#[link(wasm_import_module = import_name)]</code> …\nChoose what to generate using a <code>CodegenConfig</code>.\nSet an explicit path to the <code>rustfmt</code> binary.\nWrap all unsafe operations in unsafe blocks.\nWrite these bindings as source text to the given <code>Write</code>able.\nWrite these bindings as source text to a file.\nIndicates whether the newtype will have bitwise operators\nIndicates whether the variants will be represented as …\nIndicates whether the generated struct should be …\nA <code>bool</code>.\nA boolean constant.\nA platform-dependent <code>char</code> type, with the signedness …\nThis variant will be constified, that is, forced to …\nThe <code>Copy</code> trait.\nA custom integer type, used to allow custom macro types …\nThe <code>Debug</code> trait.\nThe default behavior bindgen would have otherwise.\nThe <code>Default</code> trait.\nRelevant information about a type to which new derive …\nWhich trait to consider when doing the <code>CannotDerive</code> …\nThe type is a Rust <code>enum</code>.\nAn enum representing custom handling that can be given to …\nA constant value assigned to an enumeration variant.\nRelevant information about a field for which visibility …\nA Function\nThe <code>Hash</code> trait.\nThis variant will be hidden entirely from the resulting …\nAn <code>int128_t</code>\nA 16-bit signed integer.\nA 32-bit signed integer.\nA 64-bit signed integer.\nA 8-bit signed integer.\nIgnore the macro, generating no code for it, or anything …\nWhether it is possible or not to automatically derive …\nAn <code>int</code>.\nWhich integral type are we dealing with?\nA struct providing information about the item being passed …\nAn enum indicating the kind of item for an ItemInfo.\nA <code>long</code>.\nA <code>long long</code>.\nAn enum to allow ignoring parsing of macros.\nThe only thing that stops us from automatically deriving …\nThis variant will be a module containing constants.\nNo, we cannot.\nA trait to allow configuring different kinds of types in …\nThe <code>PartialEq</code> and <code>PartialOrd</code> traits.\nA <code>signed char</code>.\nA <code>short</code>.\nA signed constant.\nThe type is a Rust <code>struct</code>.\nThe kind of the current type.\nA <code>uint128_t</code>.\nEither a <code>char16_t</code> or a <code>wchar_t</code>.\nA 32-bit unsigned integer.\nA 64-bit unsigned integer.\nA 8-bit unsigned integer.\nAn <code>unsigned char</code>.\nAn <code>unsigned int</code>.\nAn <code>unsigned long</code>.\nAn <code>unsigned long long</code>.\nAn <code>unsigned short</code>.\nThe type is a Rust <code>union</code>.\nAn unsigned constant.\nA Variable\nA <code>wchar_t</code>.\nYes, we can derive automatically.\nProvide a list of custom derive attributes.\nThis will be called to determine whether a particular …\nThis function should return whether, given an enum variant …\nAllows to rename an enum variant, replacing …\nThe name of the field.\nPotentially override the visibility of a composite type …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThis will be run on every function-like macro. The …\nThis function will run for every extern variable and …\nThis function will run for every extern variable and …\nThis will be called on every header filename passed to (…\nThis will be called on every file inclusion, with the full …\nThe integer kind an integer macro should have, given a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAllows to rename an item, replacing <code>_original_item_name</code>.\nThe kind of item\nThe kind of the type.\nThe name of the item\nThe name of the type.\nProcess a source code comment.\nThis will be called every time <code>bindgen</code> reads an …\nThis will be run on every string macro. The callback …\nThe name of the type.\nThis function will be run on every macro that is …\nWhether the char is signed for the target platform.\nWhether the type is signed or not.\nThe name of the type, which would be used without …")