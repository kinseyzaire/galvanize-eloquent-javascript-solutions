function chessboard(x) {
   var size = x, a = "# ", b = " #", lineA = "", lineB = "";

   for (var i=0; i<(size/2); i++) {
      lineA += a;
      lineB += b;
   }
   for (i=0; i<(size/2); i++) {
      console.log(lineA + "\n" + lineB);
   }
}
chessboard(150);
