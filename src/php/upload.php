<?php
$src1 = $_FILES['inputFile1']['tmp_name'];
$filename1 = $_FILES['inputFile1']['name'];
$output_dir1 = "files/" . $filename1;
if (move_uploaded_file($src1, $output_dir1)) {
  echo "Success! Image uploaded! File: " . $filename1;
} else {
  echo "Error! Image upload failed! File: " . $filename1;
};
echo "<br>";


$src2 = $_FILES['inputFile2']['tmp_name'];
$filename2 = $_FILES['inputFile2']['name'];
$output_dir2 = "files/" . $filename2;
if (move_uploaded_file($src2, $output_dir2)) {
  echo "Success! Image uploaded! File: " . $filename2;
} else {
  echo "Error! Image upload failed! File: " . $filename2;
};
echo "<br>";

$src3 = $_FILES['inputFile3']['tmp_name'];
$filename3 = $_FILES['inputFile3']['name'];
$output_dir3 = "files/" . $filename3;
if (move_uploaded_file($src3, $output_dir3)) {
  echo "Success! Image uploaded! File: " . $filename3;
} else {
  echo "Error! Image upload failed! File: " . $filename3;
};
echo "<br>";

$src4 = $_FILES['inputFile4']['tmp_name'];
$filename4 = $_FILES['inputFile4']['name'];
$output_dir4 = "files/" . $filename4;
if (move_uploaded_file($src4, $output_dir4)) {
  echo "Success! Image uploaded! File: " . $filename4;
} else {
  echo "Error! Image upload failed! File: " . $filename4;
};
echo "<br>";

$src5 = $_FILES['inputFile5']['tmp_name'];
$filename5 = $_FILES['inputFile5']['name'];
$output_dir5 = "files/" . $filename5;
if (move_uploaded_file($src5, $output_dir5)) {
  echo "Success! Image uploaded! File: " . $filename5;
} else {
  echo "Error! Image upload failed! File: " . $filename5;
};
echo "<br>";