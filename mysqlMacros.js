//Plain MySQL Macros

function Macro(Name,Icon,Key,Arity,Function){
//Normal Macro using javascript typing
return [Name,Icon,Key,Arity,Function];
}

function ZeroArity(name,icon,hotkey,outstring){return Macro(name,icon,hotkey,0,function (){return outstring});}

ShowUserMacro=ZeroArity("Show Users","MYSQLShowUsers.jpg","S","SELECT User, Host FROM mysql.user;");

CreateUserMacro=Macro("Create User","MYSQLCreateUser.jpg","U",2,function (user,password){return "CREATE USER '"+user+"'@'localhost' IDENTIFIED BY '"+password+"';"});

AllPrivMacro=Macro("All Privileges","MYSQLAllPrivs.jpg","P",1,function (user){return "GRANT ALL PRIVILEGES ON * . * TO '"+user+"'@'localhost'; FLUSH PRIVILEGES;"});

RevokePrivMacro=Macro("Revoke Privileges","MYSQLRevokePrivs.jpg","R",1,function (user){return "REVOKE ALL PRIVILEGES, GRANT OPTION FROM '"+user+"'@'localhost';"});

ShowGrantsMacro=Macro("Show Grants","MYSQLShowGrants.jpg","G",1,function (user){return "SHOW GRANTS FOR '"+user+"'@'localhost';"});

DropUserMacro=Macro("Drop User","MYSQLDropUser.jpg","D",1,function (user){return "DROP USER '"+user+"'@'localhost';"});

CreateTableMacro=Macro("Create Table", "MYSQLCreateTable.jpg", "T", 1, function (name){return `CREATE TABLE ${name}(
id INT AUTO_INCREMENT,
   first_name VARCHAR(100),
   last_name VARCHAR(100),
   register_date DATETIME,
   PRIMARY KEY(id));
`});

DropTableMacro=Macro("Drop Table", "MYSQLCreateTable.jpg", "C", 1, function (name){return `DROP TABLE tablename;`});

let mysql_macros=["mySQL Macros","MySQL.jpg",[ShowUserMacro,CreateUserMacro,DropUserMacro,CreateTableMacro,DropTableMacro,AllPrivMacro,RevokePrivMacro,ShowGrantsMacro]];

//PHP MySQLi Macros
mysqliConnect_Macro=Macro("MySQLi Connect","MYSQLi Connect.jpg","C",3,function (user,password,database){return `$conn=mysqli_connect('localhost','${user}','${password}','${database}');`});

let mysqli_macros=["PHP mySQLi Macros","MySQLi.jpg",[mysqliConnect_Macro]];//connect to database
