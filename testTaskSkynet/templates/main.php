<main>
	<?php foreach ($data as $info): ?>	
		<div class="main">
			<div class="title"><?php echo $info['title']; ?></div>
			<?php  if ($info['title'] == 'Земля') {
				$number = 0;
			} elseif ($info['title'] == 'Вода') {
				$number = 1;
			} elseif ($info['title'] == 'Огонь') {
				$number = 2;
			} elseif ($info['title'] == 'Вода HD') {
				$number = 3;
			} elseif ($info['title'] == 'Огонь HD') {
				$number = 4;
			} 
			?>
			<div class="speed speed<?php echo $number; ?>"><?php echo $info['speed']; ?> Мбит/с</div>
			<div class="price"><?php echo ($info['tarifs'][3]['price']/12) . ' - ' . $info['tarifs'][0]['price']; ?> &#8381;/мес</div>
			<div class="options"><?php for ($i = 0; $i <= count($info['free_options']); $i++) {
				echo $info['free_options'][$i] . '<br>';
			} ?>
		</div>
		<a href="index.php?page=tariff&id=<?php echo $info['title']; ?>"><img class="arrow" src="img/arrow.png" alt="arrow"></a>
		<div class="link"><a href=" <?php echo $info['link']; ?> " target="_blank">узнать подробнее на сайте www.sknt.ru</a></div>
	</div>
<?php endforeach; ?> 
</main>  
