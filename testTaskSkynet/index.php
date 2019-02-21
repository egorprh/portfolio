<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>SkyNet Тарифы</title>
	<link rel="stylesheet" href="style/style.css">
</head>
<body>
	<?php 

	$url = 'http://sknt.ru/job/frontend/data.json';
	$data = file_get_contents($url);
	$data = json_decode($data, true);
	$data = $data['tarifs'];
	list($data[0]['tarifs'][0], $data[0]['tarifs'][1]) = array($data[0]['tarifs'][1], $data[0]['tarifs'][0]);//в JSON файле случайно или умышленно перепутаны местами тарифы. Этот шаг для того чтобы и выводились по порядку на странице и скидку удобней считать.


	$page = $_GET['page'];
	if (!isset($page)) {
		require('templates/main.php');
	} elseif ($page == 'tariff') {
		$title = $_GET['id'];
		if ($title == 'Земля') {
			$key = 0;
		} elseif ($title == 'Вода') {
			$key = 1;
		} elseif ($title == 'Огонь') {
			$key = 2;
		} elseif ($title == 'Вода HD') {
			$key = 3;
		} elseif ($title == 'Огонь HD') {
			$key = 4;
		} 
		require('templates/tariff.php');
	} elseif ($page == 'choice') {
		$id = $_GET['id'];
		if ($id >= 1 and $id<=4) {
			$key = 0;
		} else if ($id >= 5 and $id<=8) {
			$key = 1;
		} else if ($id >= 9 and $id<=12) {
			$key = 2;
		} else if ($id >= 13 and $id<=16) {
			$key = 3;
		} else if ($id >= 17 and $id<=20) {
			$key = 4;
		} 
		$choicen = [];
		foreach ($data[$key]['tarifs'] as $choice) {
			if ($choice['ID'] == $id) {
				$choicen = $choice;
			}
		}
		require('templates/choice.php');
	}
	?>

</body>
</html>

