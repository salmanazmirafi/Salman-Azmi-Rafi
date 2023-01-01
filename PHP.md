# Getting Started PHP

```bash

```

 ```bash
 <?php
   
   $x = "Hello World"; #String
   $y = 9304; #Integer
   $n = 12.4; #Float
   $k = true; #Boolean
   $l = false; #Boolean
   $cars = array("Volvo","BMW","Toyota"); #Array

   echo $x;
   echo "<br/>";
   echo $y;
   echo "<br/>";
   echo $n;
   echo "<br/>";
   echo $k;
   echo "<br/>";
   echo $l;
   echo "<br/>";
   var_dump ($cars);
?>
 ```

 ```bash
#PHP Arithmetic Operators
+	Addition	
-	Subtraction
*	Multiplication	
/	Division	
%	Modulus
**	Exponentiation		

#PHP Assignment Operators
x = y	x = y	
x += y	x = x + y	
x -= y	x = x - y	
x *= y	x = x * y	
x /= y	x = x / y		
x %= y	x = x % y

#PHP Comparison Operators
==	Equal	
===	Identical	
!=	Not equal	
<>	Not equal	
!==	Not identical	
>	Greater than	
<	Less than	
>=	
<=	
<=>	Spaceship	

#PHP Increment / Decrement Operators
++$x	
$x++		
--$x	
$x--	

#PHP Logical Operators
and	And	$x and $y	
or	Or	$x or $y	
xor	Xor	$x xor $y		
&&	And	$x && $y	
||	Or	$x || $y	
!	Not	!$x	True 	

#PHP Array Operators
+	Union	
==	Equality	
===	Identity	$x === $y	
!=	Inequality	$x != $y	
<>	Inequality	$x <> $y	
!==	Non-identity	$x !== $y	

#PHP Conditional Assignment Operators
?:	
??
 ```

 ```bash
 #The PHP switch Statement
<?php
$favColor = "red";

switch ($favColor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}

 ```
 ```bash
 #Loops
#For Loops
for ($x = 0; $x <=20; $x++){
echo "The number is: $x <br/>";
}
# While Loops
$x = 1;

while($x <= 15) {
  echo "The number is: $x <br>";
  $x++;
}
# Do While Loops
$x = 1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
# For Each Loops
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
#OR
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $val) {
  echo "$x = $val<br>";
}
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
}
 ```
 ```bash
 #The PHP switch Statement

 ```
 ```bash
 #The PHP switch Statement

 ```
 ```bash
 #The PHP switch Statement

 ```


