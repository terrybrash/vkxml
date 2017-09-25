#[macro_use]
extern crate serde_derive;

/// The root of `vk_new.xml`
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Registry {
    #[serde(rename = "$value")] pub elements: Vec<RegistryElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "lowercase")]
pub enum RegistryElement {
    Notation(Notation),
    VendorIds(VendorIds),
    Tags(Tags),
    Definitions(Definitions),
    Constants(Constants),
    Enums(Enums),
    Commands(Commands),
    Features(Features),
    Extensions(Extensions),
}

/// List of identifiers for vendors.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct VendorIds {
    pub notation: Option<Notation>,
    #[serde(rename = "vendorid")] pub elements: Vec<VendorId>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct VendorId {
    pub name: String,
    pub notation: Option<Notation>,
    /// Hexadecimal integer identifier for a vendor.
    pub id: HexadecimalNumber,
}

/// List of authors
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Tags {
    pub notation: Option<Notation>,
    #[serde(rename = "tag")] pub elements: Vec<Tag>,
}

/// A single author for Vulkan
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Tag {
    pub name: String,
    pub notation: Option<Notation>,
    /// Author name, usually a company or project
    pub author: String,
    /// Name and contact information for the person responsible for the tag
    pub contact: String,
}

/// List of all definitions used by Vulkan
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Definitions {
    pub notation: Option<Notation>,
    #[serde(rename = "$value")] pub elements: Vec<DefinitionsElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "lowercase")]
pub enum DefinitionsElement {
    Notation(Notation),
    Include(Include),
    Typedef(Typedef),
    Reference(Reference),
    Bitmask(Bitmask),
    Struct(Struct),
    Union(Union),
    Define(Define),
    Handle(Handle),
    Enumeration(EnumerationDeclaration),
    FuncPtr(FunctionPointer),
}

/// Definition that represents a file being included, which is named.
/// The `name` attribute does double-duty, in that it also includes text.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Include {
    /// An include's `name` is a full pathname, not just an C/C++ identifier
    pub name: String,
    pub notation: Option<Notation>,
    pub style: IncludeStyle,
    /// This specifies whether the processor needs to append a `.h` extension to the include name.
    /// This is only necessary for the special case of `vk_platform`, because the `.h` is
    /// not included in the name. In all other cases, it is.
    #[serde(default)]
    pub need_ext: bool,
}

/// Specifies whether to use `""` or `<>` around the include name.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum IncludeStyle {
    Quote,
    Bracket,
}

/// Definition that defines a new name for an existing type.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Typedef {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// Specifies the original typename for the typedef.
    /// This name should reference an existing definition.
    pub basetype: Identifier,
}

/// Definition that references a type that potentially comes from an include file.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Reference {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// Specifies the include file that produces the name.
    /// This text should specify the name of an existing definition of
    /// type `include`.
    pub include: Option<String>,
}

/// Definition that specifies a bitmask, using a particular existing type. Contents are the same
/// as `typedef`. The possible bits can be defined by a specific, referenced enumeration.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Bitmask {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// Specifies the original typename for the typedef.
    /// This name should reference an existing definition.
    pub basetype: Identifier,
    /// Specifies the name of an enumerator that the bitmask gets its bits from.
    pub enumref: Option<Identifier>,
}

/// C `#define` statement.
///
/// The 4 forms of defines:
///
/// * `#define {name} {c_expression}`
/// * `#define {name}({parameters}) {c_expression}`
/// * `{c_expression}`
/// * `#define {name} {value}`
///
/// If `value` exists, the macro is simply `#define {name} {value}`. This type of macro definition
/// represents something that is generally language-neutral; a decimal number or string literal,
/// for example.
///
/// If `value` does not exist, the macro will be a C-expression with optional parameters and
/// defrefs.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Define {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// If "true", then the processing system should add comments to each line of the
    /// `#define`. That is, the `#define` exists, but has been commented out for some
    /// reason.
    #[serde(default, rename = "disabled")]
    pub is_disabled: bool,
    /// Specifies a possibly multi-line in-language comment which is expected to be
    /// placed near the element in which `comment` appears.
    pub comment: Option<String>,
    /// If `true`, then the processor should not attempt to generate the `#define` statement at all.
    /// The entire c-expression will include the `#define`, as well as the typename of the define,
    /// and any parameters. This is used for very complex macros.
    #[serde(default)]
    pub replace: bool,
    /// Specifies a definition that is referenced in the C-expression.
    #[serde(default)]
    pub defref: Vec<Identifier>,
    /// The name of a `#define`'s parameter.
    #[serde(default, rename = "param")]
    pub parameters: Vec<Identifier>,
    /// Text that is intended to be used verbatim in C or C++ implementations.
    /// If the `replace` attribute is not `true`, then the processor should
    /// generate the `#define {name}({parameters})` part of the define before the c-expression.
    pub c_expression: Option<String>,
    /// Decimal number or string literal.
    pub value: Option<String>,
}

/// Handle created using `VK_DEFINE_HANDLE` or `VK_DEFINE_NON_DISPATCHABLE_HANDLE`.
///
/// Handles in Vulkan are created using the C macros defined [here](https://github.com/KhronosGroup/Vulkan-Docs/blob/d893b6a79a73ce6bf268d82d2cdac059db7bd725/src/vulkan/vulkan.h#L53-L62).
/// 
/// The macro used to define the handle depends on `Handle::ty`. For example:
/// 
/// ```c
/// VK_DEFINE_NON_DISPATCHABLE_HANDLE(VkSemaphore)  // HandleType::NoDispatch
/// VK_DEFINE_HANDLE(VkCommandBuffer)               // HandleType::Dispatch
/// ```
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Handle {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// The name(s) of a handle object that is the parent of this handle.
    pub parent: Option<CommaSeparatedIdentifiers>,
    #[serde(rename = "type")] pub ty: HandleType,
}

/// Whether the handle is dispatchable or not.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "lowercase")]
pub enum HandleType {
    Dispatch,
    NoDispatch,
}

#[derive(Deserialize, Serialize, Debug)]
pub enum ReferenceType {
    /// Type is a pointer
    #[serde(rename = "pointer")]
    Pointer,
    /// Type is a pointer-to-a-pointer, perhaps a dynamic array of pointers
    #[serde(rename = "pointer-pointer")]
    PointerToPointer,
    /// Type is a `* const *`. A dynamic array of const pointers to (possibly const) basetype.
    #[serde(rename = "pointer-const-pointer")]
    PointerToConstPointer,
}

/// C array type
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "lowercase")]
pub enum ArrayType {
    /// The variable is a runtime sized array.
    /// This will only be applied to pointer types. It spells out the difference
    /// between a pointer to a single object and a pointer as a dynamic array.
    Dynamic,
    /// The variable is a compile-time sized array.
    /// This will be rendered out with `[size]` in C/C++, where `size` is the
    /// associated `size` attribute
    Static,
}

/// **If the array is "static"**, `ArraySize` specifies an integer literal.
///
/// **If the array is "dynamic"**, `ArraySize` specifies the name of a construct,
/// usually a member of the same struct or parameter to the same function that provides the
/// size of the dynamic array. May also be a `latexmath:` expression, which may internally
/// reference the name of a struct/parameter.
pub type ArraySize = String;

/// Declares the name of an enumeration.
/// The members and base type of the enumeration are defined elsewhere.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct EnumerationDeclaration {
    pub name: Identifier,
    pub notation: Option<Notation>,
}

/// Definition that represents a data structure.
/// Contains a list of members and optional validation information.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Struct {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// When set to `true`, the struct is used only as a return value by the Vulkan API.
    #[serde(default)]
    pub is_return: bool,
    /// Identifiers that represent the top-level structure that this object can be within the
    /// `pNext` of.
    pub extends: Option<CommaSeparatedIdentifiers>,
    #[serde(rename = "$value")] pub elements: Vec<StructElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum StructElement {
    Notation(Notation),
    Member(Field),
}

/// A typed field used in many different contexts. 
/// 
/// `Field` can be used in the following ways:
/// 
/// * Struct member
/// * Union member
/// * Function parameter
/// * Function return type
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Field {
    /// `name` will **always** be present when used as a struct or union member.
    /// 
    /// `name` will **most likely** be present when used as a function parameter.
    /// 
    /// `name` will **never** be present when used as a function return type.
    pub name: Option<Identifier>,
    pub notation: Option<Notation>,
    /// The type of the field.
    pub basetype: Identifier,
    /// If `true`, then the variable's base type is constant. If the type is
    /// a pointer or array, the `const` refers to the base type. So `const T *` rather
    /// than `T *const`.
    #[serde(default, rename = "const")]
    pub is_const: bool,
    /// If `true`, then the basetype name needs to be preceeded by the C keyword
    /// `struct` when interfacing with C.
    #[serde(default, rename = "struct")]
    pub is_struct: bool,
    /// If present, then the variable is a pointer of some sort.
    /// This does not guarantee that variable is an *array*.
    pub reference: Option<ReferenceType>,
    /// Each boolean value represents a particular indirection, starting from the outermost
    /// pointer. The true/false represents whether that indirection is optional.
    /// For example, if an integer pointer type has `optional` set to `false,true`,
    /// this means that the pointer is required, but the integer value may be zero.
    pub optional: Option<CommaSeparatedBooleans>,
    /// If set to `false`, then auto-validation for the variable should not be generated.
    #[serde(default = "bool_true")]
    pub auto_validity: bool,
    /// If present, will be either `true` or an expression that more explicitly
    /// describes how it must externally sync.
    /// If absent, then external synchronization is not necessary.
    pub sync: Option<String>,
    /// Comma-separated list of enumerators that this member can be given.
    pub type_enums: Option<CommaSeparatedIdentifiers>,
    pub array: Option<ArrayType>,
    pub size: Option<ArraySize>,
    /// The length of a static array variable, specified as an enumerator reference.
    pub size_enumref: Option<Identifier>,
    /// A C expression that specifies the number of elements in a static or dynamic array.
    pub c_size: Option<CExpression>,
    /// If `true`, then a string variable (some form of pointer with the type `char`)
    /// is null-terminated. If the type is a `pointer-pointer` or a `pointer-const-pointer`,
    /// then the null-terminator refers only to the innermost string pointers.
    #[serde(default)]
    pub null_terminate: bool,
    /// `successcodes` may contain a value only if `Field` is used as a function return type.
    ///
    /// Specifies the return codes that represent successful function execution. When not 
    /// specified, then the command doesn't return `VkResult`
    pub successcodes: Option<CommaSeparatedIdentifiers>,
    /// `errorcodes` may contain a value only if `Field` is used as a function return type.
    ///
    /// Specifies the return codes that represent error conditions. When not specified, either 
    /// the command doesn't return `VkResult` or it cannot "fail".
    pub errorcodes: Option<CommaSeparatedIdentifiers>,
}

/// Defines a union, where the object's value is only one of its members.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Union {
    pub name: Identifier,
    pub notation: Option<Notation>,
    #[serde(rename = "member")] pub elements: Vec<Field>,
}

/// Defines a function pointer.
///
/// If it has no function parameters, then it should be rendered out for C/C++ with just
/// "void" in the parameter list. And just "void" should not be in a `<type>` element, as it
/// does not qualify as a parameter type.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct FunctionPointer {
    pub name: Identifier,
    pub notation: Option<Notation>,
    pub return_type: Field,
    #[serde(default)] pub param: Vec<Field>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Constants {
    pub notation: Option<Notation>,
    #[serde(rename = "constant")] pub elements: Vec<Constant>,
}

/// C constant
///
/// A `Constant` will have only have one of the following values:
/// 
/// * `number`
/// * `hex`
/// * `bitpos`
/// * `c_expression`
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Constant {
    pub name: String,
    pub notation: Option<Notation>,
    pub number: Option<i32>,
    pub hex: Option<String>,
    pub bitpos: Option<u32>,
    pub c_expression: Option<CExpression>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Enums {
    pub notation: Option<Notation>,
    #[serde(rename = "$value")] pub elements: Vec<EnumsElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum EnumsElement {
    Notation(Notation),
    Enumeration(Enumeration),
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Enumeration {
    pub name: String,
    pub notation: Option<Notation>,
    /// Identifies a special meaning behind the enumeration.
    /// "bitmask" means that the enumerators are either specific bits or
    /// combinations of bits. There should be a `bitmask` definition
    /// attribute which uses this enumeration as the source for its enums.
    pub purpose: Option<EnumerationPurpose>,
    #[serde(default, rename = "$value")] pub elements: Vec<EnumerationElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum EnumerationPurpose {
    Bitmask,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum EnumerationElement {
    Notation(Notation),
    Enum(Constant),
    #[serde(rename = "unused-range")] UnusedRange(Range),
}

/// Represents a range of enumerators.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Range {
    /// Beginning of an enumerator value range
    pub range_start: i32,
    /// End of an enumerator value range
    pub range_end: Option<i32>,
}

/// Defines a list of Vulkan entrypoints.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Commands {
    pub notation: Option<Notation>,
    #[serde(rename = "command")] pub elements: Vec<Command>,
}

/// Defines a single Vulkan entrypoint.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Command {
    pub name: Identifier,
    pub notation: Option<Notation>,
    pub return_type: Field,
    pub param: Vec<Field>,
    pub external_sync: Option<ExternalSync>,
    /// Specifies how the command may be called, relative to render pass instance scopes.
    /// When not specified, the command does not care about render pass scoping,
    /// or the command isn't a vkCmd command.
    pub renderpass: Option<Renderpass>,
    /// Specifies the level of command buffer that the command can be used with.
    /// When not specified, the command does not go into a command buffer.
    /// { "primary" | "secondary" | "primary,secondary" }
    pub cmdbufferlevel: Option<CommaSeparatedIdentifiers>,
    /// Specifies the kind of pipeline that a command can be used with.
    pub pipeline: Option<Pipeline>,
    /// Comma-separated list of queues that support this operation.
    /// When not specified, the function cannot be used in a queue.
    pub queues: Option<CommaSeparatedIdentifiers>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum Renderpass {
    Inside,
    Outside,
    Both,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum Pipeline {
    Graphics,
    Compute,
    Transfer,
}

/// Describes instances of implicit external synchronizations.
/// These cannot be captured by the parameters themselves.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct ExternalSync {
    pub sync: String,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Features {
    #[serde(rename = "feature")] pub elements: Vec<Feature>,
}

/// Defines the base API for a Vulkan specification.
/// Represents a specific major/minor version of Vulkan.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Feature {
    /// String name for a definition that is part of the Vulkan API.
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// The name of the API that a feature defines.
    pub api: String,
    /// Version number for the feature.
    pub version: f32,
    /// When generating C-style information, use this as the #define wrapper
    /// around this feature.
    pub define: Option<Identifier>,
    #[serde(rename = "$value")] pub elements: Vec<FeatureElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum FeatureElement {
    Notation(Notation),
    /// Definitions that are exposed by the specification.
    Require(FeatureSpecification),
    /// Definitions which are *not* to be exposed by the specification.
    Remove(FeatureSpecification),
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct FeatureSpecification {
    /// The name of the API profile which this specialization element
    /// is associated. All specified requirements/exclusions apply
    /// only to that profile.
    pub profile: Option<String>,
    pub notation: Option<Notation>,
    /// Specifies the name of an extension which this `require` statement needs
    /// for its inclusions to be imported.
    pub extension: Option<Identifier>,
    #[serde(rename = "$value")] pub elements: Vec<FeatureReference>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum FeatureReference {
    Notation(Notation),
    /// Reference to a named `definitions` child.
    #[serde(rename = "defref")]
    DefinitionReference(NamedIdentifier),
    /// Reference to a named `commands` child.
    #[serde(rename = "commandref")]
    CommandReference(NamedIdentifier),
    /// References a specific enumerator *or* constant.
    #[serde(rename = "enumref")]
    EnumeratorReference(NamedIdentifier),
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Extensions {
    pub notation: Option<Notation>,
    #[serde(rename = "extension")] pub elements: Vec<Extension>,
}

/// Specifies the types exposed/forbidden by an extension
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct Extension {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// The extension's registration number.
    /// Used to compute the offsets for enumerators and the like.
    pub number: i32,
    /// Specifies that the extension is disabled.
    #[serde(default)]
    pub disabled: bool,
    /// A regex used to match an `api` tag on a `feature` element.
    /// If it matches, then the extension can be used with that API.
    pub match_api: Option<String>,
    #[serde(rename = "type")] pub ty: Option<ExtensionType>,
    /// When generating C-style information, use this as the #define wrapper
    /// around this feature.
    pub define: Option<Identifier>,
    /// A comma-separated list of identifiers, specifying
    /// extensions this extension requires in order to function.
    pub requires: Option<CommaSeparatedIdentifiers>,
    /// The name of the author of an extension, typically a company.
    /// When absent, can be gleamed by using the `name` and parsing out the
    /// author part of the name, then finding the corresponding `tag` element.
    pub author: Option<String>,
    /// The name and contact info for the person who is responsible for
    /// the extension. Can be inferred in the same way as `author`.
    pub contact: Option<String>,
    #[serde(rename = "$value")] pub elements: Vec<ExtensionElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum ExtensionElement {
    Notation(Notation),
    Require(ExtensionSpecification),
    Remove(ExtensionSpecification),
}

/// Specifies the kind of extension
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum ExtensionType {
    Instance,
    Device,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct ExtensionSpecification {
    /// The name of the API profile which this specialization element
    /// is associated. All specified requirements/exclusions apply
    /// only to that profile.
    pub profile: Option<String>,
    pub notation: Option<Notation>,
    /// Specifies the name of an extension which this `require` statement needs
    /// for its inclusions to be imported.
    pub extension: Option<Identifier>,
    /// Specifies that the extensions or removals only apply to that specific
    /// API being generated. If not present, it applies to all APIs.
    pub api: Option<String>,
    #[serde(rename = "$value")] pub elements: Vec<ExtensionSpecificationElement>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub enum ExtensionSpecificationElement {
    Notation(Notation),
    /// Reference to a named `definitions` child.
    #[serde(rename = "defref")]
    DefinitionReference(NamedIdentifier),
    /// Reference to a named `commands` child.
    #[serde(rename = "commandref")]
    CommandReference(NamedIdentifier),
    /// References a specific enumerator *or* constant.
    #[serde(rename = "enumref")]
    EnumeratorReference(NamedIdentifier),
    Constant(ExtensionConstant),
    Enum(ExtensionEnum),
}

/// Defines a constant exported by an extension.
/// These are not enumerators.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct ExtensionConstant {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// An arbitrary string constant. The string here is not contained in quotes.
    /// So you should add your own.
    #[serde(rename = "string")]
    pub text: Option<String>,
    /// Specifies a constant who's value comes from an enum
    /// or another existing constant.
    pub enumref: Option<Identifier>,
    pub number: Option<i32>,
    pub hex: Option<String>,
    pub bitpos: Option<u32>,
    pub c_expression: Option<CExpression>,
}

/// Declares a new enumerator that is added to an existing enumerator.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct ExtensionEnum {
    pub name: Identifier,
    pub notation: Option<Notation>,
    /// Compute the enum's value based on an integer offset.
    pub offset: Option<usize>,
    /// If true, the offset's value should be negated.
    /// Primarily for error codes.
    #[serde(default)]
    pub negate: bool,
    /// The name of an `enumeration` to be extended.
    pub extends: Identifier,
    pub number: Option<i32>,
    pub hex: Option<String>,
    pub bitpos: Option<u32>,
    pub c_expression: Option<CExpression>,
}

/// Should be a valid C/C++ identifier.
pub type Identifier = String;

/// Comma-separated identifiers values.
/// Can be empty.
pub type CommaSeparatedIdentifiers = String;

/// Recognize a hexadecimal number.
/// Not prefixed with "0x"
pub type HexadecimalNumber = String;

/// Comma-separated boolean values.
pub type CommaSeparatedBooleans = String;

/// Text that is an expression in C.
pub type CExpression = String;

/// C comment
///
/// Literally a
///
/// ```c
/// // regular c comment
/// ```
///
/// `Notation` may contain line-breaks
pub type Notation = String;

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
pub struct NamedIdentifier {
    pub name: Identifier,
    pub notation: Option<Notation>,
}

fn bool_true() -> bool {
    true
}
