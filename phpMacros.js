function Macro(Name,Icon,Key,Arity,Function){
//Normal Macro using javascript typing
return [Name,Icon,Key,Arity,Function];
}

var PHP_template_Macro=Macro("PHP Template(Command Line Support)","PHPFILE.jpg","P",0,function (){return "<?PHP \n"+
"if (!isset($_SERVER['HTTP_HOST'])) {\n"+
  "parse_str($argv[1], $_GET);\n"+
  "parse_str($argv[2], $_POST);}\n"+
  "?>"});
let PHP_macros=["PHP","PHP.jpg",[PHP_template_Macro]];