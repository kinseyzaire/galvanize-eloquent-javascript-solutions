var size = 8;
var a = "# ";
var b = " #";
var lineA = "";
var lineB = "";

for (var i=0; i<(size/2); i++) {
   lineA += a;
   lineB += b;
}
for (i=0; i<(size/2); i++) {
   console.log(lineA + "\n" + lineB);
}
