var searchIndex = {};
searchIndex["vkgen"] = {"doc":"","items":[[3,"Registry","vkgen","",null,null],[12,"elements","","",0,null],[3,"VendorIds","","List of identifiers for vendors.",null,null],[12,"notation","","",1,null],[12,"elements","","",1,null],[3,"VendorId","","",null,null],[12,"name","","",2,null],[12,"notation","","",2,null],[12,"id","","Hexadecimal integer identifier for a vendor.",2,null],[3,"Tags","","List of authors",null,null],[12,"notation","","",3,null],[12,"elements","","",3,null],[3,"Tag","","A single author for Vulkan",null,null],[12,"name","","",4,null],[12,"notation","","",4,null],[12,"author","","Author name, usually a company or project",4,null],[12,"contact","","Name and contact information for the person responsible for the tag",4,null],[3,"Definitions","","List of all definitions used by Vulkan",null,null],[12,"notation","","",5,null],[12,"elements","","",5,null],[3,"Include","","Definition that represents a file being included, which is named. The `name` attribute does double-duty, in that it also includes text.",null,null],[12,"name","","An include's `name` is a full pathname, not just an C/C++ identifier",6,null],[12,"notation","","",6,null],[12,"style","","",6,null],[12,"need_ext","","This specifies whether the processor needs to append a `.h` extension to the include name. This is only necessary for the special case of `vk_platform`, because the `.h` is not included in the name. In all other cases, it is.",6,null],[3,"Typedef","","Definition that defines a new name for an existing type.",null,null],[12,"name","","",7,null],[12,"notation","","",7,null],[12,"basetype","","Specifies the original typename for the typedef. This name should reference an existing definition.",7,null],[3,"Reference","","Definition that references a type that potentially comes from an include file.",null,null],[12,"name","","",8,null],[12,"notation","","",8,null],[12,"include","","Specifies the include file that produces the name. This text should specify the name of an existing definition of type `include`.",8,null],[3,"Bitmask","","Definition that specifies a bitmask, using a particular existing type. Contents are the same as `typedef`. The possible bits can be defined by a specific, referenced enumeration.",null,null],[12,"name","","",9,null],[12,"notation","","",9,null],[12,"basetype","","Specifies the original typename for the typedef. This name should reference an existing definition.",9,null],[12,"enumref","","Specifies the name of an enumerator that the bitmask gets its bits from.",9,null],[3,"Define","","C `#define` statement.",null,null],[12,"name","","",10,null],[12,"notation","","",10,null],[12,"is_disabled","","If \"true\", then the processing system should add comments to each line of the `#define`. That is, the `#define` exists, but has been commented out for some reason.",10,null],[12,"comment","","Specifies a possibly multi-line in-language comment which is expected to be placed near the element in which `comment` appears.",10,null],[12,"replace","","If `true`, then the processor should not attempt to generate the `#define` statement at all. The entire c-expression will include the `#define`, as well as the typename of the define,  and any parameters. This is used for very complex macros.",10,null],[12,"defref","","Specifies a definition that is referenced in the C-expression.",10,null],[12,"parameters","","The name of a `#define`'s parameter.",10,null],[12,"c_expression","","Text that is intended to be used verbatim in C or C++ implementations. If the `replace` attribute is not `true`, then the processor should generate the `#define {name}({parameters})` part of the define before the c-expression.",10,null],[12,"value","","Decimal number or string literal.",10,null],[3,"Handle","","Creates a definition for a handle.",null,null],[12,"name","","",11,null],[12,"notation","","",11,null],[12,"parent","","The name(s) of a handle object that is the parent of this handle.",11,null],[12,"ty","","",11,null],[3,"Type","","All of the attributes that represent the type of a struct member, function parameter or return value.",null,null],[12,"basetype","","The fundamental typename of the variable. This names a definition.",12,null],[12,"array","","",12,null],[12,"is_const","","If `true`, then the variable's base type is constant. If the type is a pointer or array, the `const` refers to the base type. So `const T *` rather than `T *const`.",12,null],[12,"is_struct","","If `true`, then the basetype name needs to be preceeded by the C keyword \"struct\" when interfacing with C.",12,null],[12,"reference","","If present, then the variable is a pointer of some sort. This does not guarantee that variable is an array.",12,null],[3,"ReturnType","","",null,null],[12,"basetype","","",13,null],[12,"array","","",13,null],[12,"is_const","","If `true`, then the variable's base type is constant. If the type is a pointer or array, the `const` refers to the base type. So `const T *` rather than `T *const`.",13,null],[12,"is_struct","","If `true`, then the basetype name needs to be preceeded by the C keyword \"struct\" when interfacing with C.",13,null],[12,"reference","","If present, then the variable is a pointer of some sort. This does not guarantee that variable is an array.",13,null],[3,"Array","","C array (dynamic or static)",null,null],[12,"ty","","",14,null],[12,"size","","The size of the array. The value of size is represented differently depending on the array type.",14,null],[12,"null_terminate","","If `true`, then a string variable (some form of pointer with the type `char`) is null-terminated. If the type is a `pointer-pointer` or a `pointer-const-pointer`, then the null-terminator refers only to the innermost string pointers.",14,null],[12,"c_size","","A C expression that specifies the number of elements in a static or dynamic array.",14,null],[3,"Variable","","Data model describing type information for a variable.",null,null],[12,"basetype","","The fundamental typename of the variable. This names a definition.",15,null],[12,"is_const","","If `true`, then the variable's base type is constant. If the type is a pointer or array, the `const` refers to the base type. So `const T *` rather than `T *const`.",15,null],[12,"is_struct","","If `true`, then the basetype name needs to be preceeded by the C keyword \"struct\" when interfacing with C.",15,null],[12,"reference","","If present, then the variable is a pointer of some sort. This does not guarantee that variable is an array.",15,null],[12,"optional","","Each boolean value represents a particular indirection, starting from the outermost pointer. The true/false represents whether that indirection is optional. For example, if an integer pointer type has `optional` set to `false,true`, this means that the pointer is required, but the integer value may be zero.",15,null],[12,"auto_validity","","If set to \"false\", then auto-validation for the variable should not be generated.",15,null],[12,"inout","","Determines whether the variable is used as an input, output, or both.",15,null],[12,"sync","","If present, will be either \"true\" or an expression that more explicitly describes how it must externally sync. If absent, then external synchronization is not necessary.",15,null],[12,"validity","","Defines validation text related to objects and commands.",15,null],[3,"EnumerationDeclaration","","Declares the name of an enumeration. The members and base type of the enumeration are defined elsewhere.",null,null],[12,"name","","",16,null],[12,"notation","","",16,null],[3,"Struct","","Definition that represents a data structure. Contains a list of members and optional validation information.",null,null],[12,"name","","",17,null],[12,"notation","","",17,null],[12,"is_return","","When set to `true`, the struct is used only as a return value by the Vulkan API.",17,null],[12,"extends","","Identifiers that represent the top-level structure that this object can be within the `pNext` of.",17,null],[12,"elements","","",17,null],[3,"StructMember","","Specifies a named member of a data structure.",null,null],[12,"name","","",18,null],[12,"notation","","",18,null],[12,"basetype","","The fundamental typename of the variable. This names a definition.",18,null],[12,"is_const","","If `true`, then the variable's base type is constant. If the type is a pointer or array, the `const` refers to the base type. So `const T *` rather than `T *const`.",18,null],[12,"is_struct","","If `true`, then the basetype name needs to be preceeded by the C keyword `struct` when interfacing with C.",18,null],[12,"reference","","If present, then the variable is a pointer of some sort. This does not guarantee that variable is an array.",18,null],[12,"optional","","Each boolean value represents a particular indirection, starting from the outermost pointer. The true/false represents whether that indirection is optional. For example, if an integer pointer type has `optional` set to `false,true`, this means that the pointer is required, but the integer value may be zero.",18,null],[12,"auto_validity","","If set to \"false\", then auto-validation for the variable should not be generated.",18,null],[12,"sync","","If present, will be either \"true\" or an expression that more explicitly describes how it must externally sync. If absent, then external synchronization is not necessary.",18,null],[12,"type_enums","","Comma-separated list of enumerators that this member can be given.",18,null],[3,"Union","","Defines a union, where the object's value is only one of the members.",null,null],[12,"name","","",19,null],[12,"notation","","",19,null],[12,"member","","",19,null],[3,"UnionMember","","Specifies a named member of a union.",null,null],[12,"name","","",20,null],[12,"notation","","",20,null],[12,"basetype","","The fundamental typename of the variable. This names a definition.",20,null],[12,"array","","",20,null],[12,"is_const","","If `true`, then the variable's base type is constant. If the type is a pointer or array, the `const` refers to the base type. So `const T *` rather than `T *const`.",20,null],[12,"is_struct","","If `true`, then the basetype name needs to be preceeded by the C keyword \"struct\" when interfacing with C.",20,null],[12,"reference","","If present, then the variable is a pointer of some sort. This does not guarantee that variable is an array.",20,null],[3,"FunctionPointer","","If it has no function parameters, then it should be rendered out for C/C++ with just \"void\" in the parameter list. And just \"void\" should not be in a `<type>` element, as it does not qualify as a parameter type.",null,null],[12,"name","","",21,null],[12,"notation","","",21,null],[12,"return_type","","",21,null],[12,"param","","",21,null],[3,"ResultCodes","","",null,null],[12,"successcodes","","Specifies the return codes that represent successful function execution. When not specified, then the command doesn't return `VkResult` NOTE(Terry): comma-separated",22,null],[12,"errorcodes","","Specifies the return codes that represent error conditions. When not specified, either the command doesn't return `VkResult` or it cannot \"fail\". NOTE(Terry): comma-separated",22,null],[3,"Parameter","","",null,null],[12,"name","","",23,null],[12,"notation","","",23,null],[12,"basetype","","The fundamental typename of the variable. This names a definition.",23,null],[12,"array","","",23,null],[12,"is_const","","If `true`, then the variable's base type is constant. If the type is a pointer or array, the `const` refers to the base type. So `const T *` rather than `T *const`.",23,null],[12,"is_struct","","If `true`, then the basetype name needs to be preceeded by the C keyword \"struct\" when interfacing with C.",23,null],[12,"reference","","If present, then the variable is a pointer of some sort. This does not guarantee that variable is an array.",23,null],[12,"optional","","Each boolean value represents a particular indirection, starting from the outermost pointer. The true/false represents whether that indirection is optional. For example, if an integer pointer type has `optional` set to `false,true`, this means that the pointer is required, but the integer value may be zero.",23,null],[12,"auto_validity","","If set to \"false\", then auto-validation for the variable should not be generated.",23,null],[12,"inout","","Determines whether the variable is used as an input, output, or both.",23,null],[12,"sync","","If present, will be either \"true\" or an expression that more explicitly describes how it must externally sync. If absent, then external synchronization is not necessary.",23,null],[12,"validity","","Defines validation text related to objects and commands.",23,null],[3,"Constants","","",null,null],[12,"notation","","",24,null],[12,"elements","","",24,null],[3,"Constant","","C constant",null,null],[12,"name","","",25,null],[12,"notation","","",25,null],[12,"number","","",25,null],[12,"hex","","",25,null],[12,"bitpos","","",25,null],[12,"c_expression","","",25,null],[3,"Enums","","",null,null],[12,"notation","","",26,null],[12,"elements","","",26,null],[3,"Enumeration","","",null,null],[12,"name","","",27,null],[12,"notation","","",27,null],[12,"purpose","","Identifies a special meaning behind the enumeration. \"bitmask\" means that the enumerators are either specific bits or combinations of bits. There should be a `bitmask` definition attribute which uses this enumeration as the source for its enums. {\"bitmask\"}",27,null],[12,"elements","","",27,null],[3,"Range","","Represents a range of enumerators.",null,null],[12,"range_start","","Beginning of an enumerator value range",28,null],[12,"range_end","","End of an enumerator value range",28,null],[3,"Enum","","",null,null],[12,"name","","",29,null],[12,"notation","","",29,null],[12,"number","","",29,null],[12,"hex","","",29,null],[12,"bitpos","","",29,null],[12,"c_expression","","",29,null],[3,"Commands","","Defines a list of Vulkan entrypoints.",null,null],[12,"notation","","",30,null],[12,"elements","","",30,null],[3,"Command","","Defines a single Vulkan entrypoint.",null,null],[12,"name","","",31,null],[12,"notation","","",31,null],[12,"return_type","","",31,null],[12,"param","","",31,null],[12,"external_sync","","",31,null],[12,"renderpass","","Specifies how the command may be called, relative to render pass instance scopes. When not specified, the command does not care about render pass scoping, or the command isn't a vkCmd command.",31,null],[12,"cmdbufferlevel","","Specifies the level of command buffer that the command can be used with. When not specified, the command does not go into a command buffer. { \"primary\" | \"secondary\" | \"primary,secondary\" }",31,null],[12,"pipeline","","Specifies the kind of pipeline that a command can be used with.",31,null],[12,"queues","","Comma-separated list of queues that support this operation. When not specified, the function cannot be used in a queue.",31,null],[3,"ExternalSync","","Describes instances of implicit external synchronizations. These cannot be captured by the parameters themselves.",null,null],[12,"sync","","",32,null],[3,"Features","","",null,null],[12,"elements","","",33,null],[3,"Feature","","Defines the base API for a Vulkan specification. Represents a specific major/minor version of Vulkan.",null,null],[12,"name","","String name for a definition that is part of the Vulkan API. It must be a valid C/C++ identifier.",34,null],[12,"notation","","",34,null],[12,"api","","The name of the API that a feature defines.",34,null],[12,"version","","Version number for the feature.",34,null],[12,"define","","When generating C-style information, use this as the #define wrapper around this feature.",34,null],[12,"elements","","",34,null],[3,"FeatureSpecification","","",null,null],[12,"profile","","The name of the API profile which this specialization element is associated. All specified requirements/exclusions apply only to that profile.",35,null],[12,"notation","","",35,null],[12,"extension","","Specifies the name of an extension which this `require` statement needs for its inclusions to be imported.",35,null],[12,"elements","","",35,null],[3,"Extensions","","",null,null],[12,"notation","","",36,null],[12,"elements","","",36,null],[3,"Extension","","Specifies the types exposed/forbidden by an extension",null,null],[12,"name","","",37,null],[12,"notation","","",37,null],[12,"number","","The extension's registration number. Used to compute the offsets for enumerators and the like.",37,null],[12,"disabled","","Specifies that the extension is disabled. If it is not present, then the extension is enabled.",37,null],[12,"match_api","","A regex used to match an `api` tag on a `feature` element. If it matches, then the extension can be used with that API.",37,null],[12,"ty","","",37,null],[12,"define","","When generating C-style information, use this as the #define wrapper around this feature.",37,null],[12,"requires","","A comma-separated list of identifiers, specifying extensions this extension requires in order to function.",37,null],[12,"author","","The name of the author of an extension, typically a company. When absent, can be gleamed by using the `name` and parsing out the author part of the name, then finding the corresponding `tag` element.",37,null],[12,"contact","","The name and contact info for the person who is responsible for the extension. Can be inferred in the same way as `author`.",37,null],[12,"elements","","",37,null],[3,"ExtensionSpecification","","",null,null],[12,"profile","","The name of the API profile which this specialization element is associated. All specified requirements/exclusions apply only to that profile.",38,null],[12,"notation","","",38,null],[12,"extension","","Specifies the name of an extension which this `require` statement needs for its inclusions to be imported.",38,null],[12,"api","","Specifies that the extensions or removals only apply to that specific API being generated. If not present, it applies to all APIs.",38,null],[12,"elements","","",38,null],[3,"ExtensionConstant","","Defines a constant exported by an extension. These are not enumerators.",null,null],[12,"name","","",39,null],[12,"notation","","",39,null],[12,"text","","An arbitrary string constant. The string here is not contained in quotes. So you should add your own.",39,null],[12,"enumref","","Specifies a constant who's value comes from an enum or another existing constant.",39,null],[12,"number","","",39,null],[12,"hex","","",39,null],[12,"bitpos","","",39,null],[12,"c_expression","","",39,null],[3,"ExtensionEnum","","Declares a new enumerator that is added to an existing enumerator.",null,null],[12,"name","","",40,null],[12,"notation","","",40,null],[12,"offset","","Compute the enum's value based on an integer offset.",40,null],[12,"negate","","If true, the offset's value should be negated. Primarily for error codes.",40,null],[12,"extends","","The name of an `enumeration` to be extended.",40,null],[12,"number","","",40,null],[12,"hex","","",40,null],[12,"bitpos","","",40,null],[12,"c_expression","","",40,null],[3,"NamedIdentifier","","",null,null],[12,"name","","",41,null],[12,"notation","","",41,null],[3,"BarValue","","",null,null],[12,"number","","",42,null],[12,"text","","",42,null],[4,"RegistryElement","","",null,null],[13,"Notation","","",43,null],[13,"VendorIds","","",43,null],[13,"Tags","","",43,null],[13,"Definitions","","",43,null],[13,"Constants","","",43,null],[13,"Enums","","",43,null],[13,"Commands","","",43,null],[13,"Features","","",43,null],[13,"Extensions","","",43,null],[4,"Definition","","",null,null],[13,"Notation","","",44,null],[13,"Include","","",44,null],[13,"Typedef","","",44,null],[13,"Reference","","",44,null],[13,"Bitmask","","",44,null],[13,"Struct","","",44,null],[13,"Union","","",44,null],[13,"Define","","",44,null],[13,"Handle","","",44,null],[13,"Enumeration","","",44,null],[13,"FuncPtr","","",44,null],[4,"IncludeStyle","","Specifies whether to use `\"\"` or `<>` around the include name.",null,null],[13,"Quote","","",45,null],[13,"Bracket","","",45,null],[4,"HandleType","","Whether the handle is dispatchable or not.",null,null],[13,"Dispatch","","",46,null],[13,"NoDispatch","","",46,null],[4,"ReferenceType","","",null,null],[13,"Pointer","","Type is a pointer",47,null],[13,"PointerToPointer","","Type is a pointer-to-a-pointer, perhaps a dynamic array of pointers",47,null],[13,"PointerToConstPointer","","Type is a `* const *`. A dynamic array of const pointers to (possibly const) basetype.",47,null],[4,"ArrayType","","C array type",null,null],[13,"Dynamic","","The variable is a runtime sized array. This will only be applied to pointer types. It spells out the difference between a pointer to a single object and a pointer as a dynamic array.",48,null],[13,"Static","","The variable is a compile-time sized array. This will be rendered out with `[size]` in C/C++, where `size` is the associated `size` attribute",48,null],[4,"ArraySize","","",null,null],[13,"Size","","If the array is \"static\", `ArraySize::Size` is specified as an integer literal.",49,null],[13,"SizeEnumref","","The length of a static array variable, specified as an enumerator reference.",49,null],[4,"InOut","","",null,null],[13,"In","","",50,null],[13,"Out","","",50,null],[13,"InOut","","",50,null],[4,"StructElement","","",null,null],[13,"Notation","","",51,null],[13,"Member","","",51,null],[4,"EnumsElement","","",null,null],[13,"Notation","","",52,null],[13,"Enumeration","","",52,null],[4,"EnumerationElement","","",null,null],[13,"Notation","","",53,null],[13,"Enum","","",53,null],[13,"UnusedRange","","",53,null],[4,"Renderpass","","",null,null],[13,"Inside","","",54,null],[13,"Outside","","",54,null],[13,"Both","","",54,null],[4,"Pipeline","","",null,null],[13,"Graphics","","",55,null],[13,"Compute","","",55,null],[13,"Transfer","","",55,null],[4,"FeatureElement","","",null,null],[13,"Notation","","",56,null],[13,"Require","","Definitions that are exposed by the specification.",56,null],[13,"Remove","","Definitions which are not to be exposed by the specification.",56,null],[4,"FeatureReference","","",null,null],[13,"Notation","","",57,null],[13,"DefinitionReference","","Reference to a named `definitions` child.",57,null],[13,"CommandReference","","Reference to a named `commands` child.",57,null],[13,"EnumeratorReference","","References a specific enumerator or constant.",57,null],[4,"ExtensionElement","","",null,null],[13,"Notation","","",58,null],[13,"Require","","",58,null],[13,"Remove","","",58,null],[4,"ExtensionType","","Specifies the kind of extension",null,null],[13,"Instance","","",59,null],[13,"Device","","",59,null],[4,"ExtensionSpecificationElement","","",null,null],[13,"Notation","","",60,null],[13,"DefinitionReference","","Reference to a named `definitions` child.",60,null],[13,"CommandReference","","Reference to a named `commands` child.",60,null],[13,"EnumeratorReference","","References a specific enumerator or constant.",60,null],[13,"Constant","","",60,null],[13,"Enum","","",60,null],[6,"Identifier","","Should be a valid C/C++ identifier.",null,null],[6,"CommaSeparatedIdentifiers","","Comma-separated identifiers values. Can be empty.",null,null],[6,"HexadecimalNumber","","Recognize a hexadecimal number. Not prefixed with \"0x\"",null,null],[6,"CommaSeparatedBooleans","","Comma-separated boolean values.",null,null],[6,"CExpression","","Text that is an expression in C.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",43,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",44,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",45,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",46,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",47,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",48,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",49,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",50,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",51,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",18,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",20,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",21,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",22,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",23,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",24,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",25,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",26,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",52,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",27,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",53,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",28,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",29,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",30,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",31,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",54,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",55,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",32,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",33,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",34,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",56,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",35,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",57,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",36,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",37,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",58,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",59,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",38,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",60,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",39,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",40,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",41,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",42,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Registry"],[3,"VendorIds"],[3,"VendorId"],[3,"Tags"],[3,"Tag"],[3,"Definitions"],[3,"Include"],[3,"Typedef"],[3,"Reference"],[3,"Bitmask"],[3,"Define"],[3,"Handle"],[3,"Type"],[3,"ReturnType"],[3,"Array"],[3,"Variable"],[3,"EnumerationDeclaration"],[3,"Struct"],[3,"StructMember"],[3,"Union"],[3,"UnionMember"],[3,"FunctionPointer"],[3,"ResultCodes"],[3,"Parameter"],[3,"Constants"],[3,"Constant"],[3,"Enums"],[3,"Enumeration"],[3,"Range"],[3,"Enum"],[3,"Commands"],[3,"Command"],[3,"ExternalSync"],[3,"Features"],[3,"Feature"],[3,"FeatureSpecification"],[3,"Extensions"],[3,"Extension"],[3,"ExtensionSpecification"],[3,"ExtensionConstant"],[3,"ExtensionEnum"],[3,"NamedIdentifier"],[3,"BarValue"],[4,"RegistryElement"],[4,"Definition"],[4,"IncludeStyle"],[4,"HandleType"],[4,"ReferenceType"],[4,"ArrayType"],[4,"ArraySize"],[4,"InOut"],[4,"StructElement"],[4,"EnumsElement"],[4,"EnumerationElement"],[4,"Renderpass"],[4,"Pipeline"],[4,"FeatureElement"],[4,"FeatureReference"],[4,"ExtensionElement"],[4,"ExtensionType"],[4,"ExtensionSpecificationElement"]]};
initSearch(searchIndex);
