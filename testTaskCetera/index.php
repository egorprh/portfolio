<?php 
    // Проверяем заполнены ли поля
	if ((isset($_POST['name'])) && (isset($_POST['mail'])) && (isset($_POST['review'])) && (isset($_POST['category']))){

    // Переменные с формы. Ставим защиту от XSS атак и обрезаем лишние пробелы.
    $name = strip_tags(trim($_POST['name']));
    $mail = strip_tags(trim($_POST['mail']));
    $review = strip_tags(trim($_POST['review']));
    $category = strip_tags(trim($_POST['category']));
    
    // Параметры для подключения
    $db_host = "localhost"; 
    $db_user = "root"; // Логин БД
    $db_password = ""; // Пароль БД
    $db_base = 'reviews'; // Имя БД
    $db_table = "reviews"; // Имя Таблицы БД
    
    // Подключение к базе данных
    $mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

    // Если есть ошибка соединения, выводим её и убиваем подключение
	if ($mysqli->connect_error) {
	    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}
    
    $result = $mysqli->query("INSERT INTO ".$db_table." (name,mail,review,category) VALUES ('$name','$mail','$review', '$category')");
    
    if ($result == true){

    	echo "Информация занесена в базу данных";
    }else{
    	echo "Информация не занесена в базу данных";
    }
}
 ?>



<html>
<head>
 <title>Отзывы</title>
</head>
<body>
 <form id="form_id" action="" method="post" onsubmit="validateMail('form_id','mail'); validateChoice('category'); validateReview('form_id', 'review');"><br><br>
		<input type="text" name="name" placeholder="Имя"><br><br>
		<input id="mail" type="text" name="mail" placeholder="e-mail"><br><br>
		<select id="category" name="category">
			<option value="" disabled selected>Выберете тему</option>
            <!-- Циклом выводим значение строк из таблицы с категориями-->
			<?php 
			$db_host = "localhost"; 
    		$db_user = "root";
    		$db_password = "";
			$db = mysql_connect($db_host,$db_user,$db_password) OR DIE("Не могу создать соединение ");
			mysql_select_db("reviews",$db) or die("Could not select DB: " . mysql_error()); 
			$theme = mysql_query("SELECT * FROM category") or die(mysql_error());
			while ($myrow = mysql_fetch_array($theme)){
    			echo "<option value=\"". $myrow['category_name'] . "\">" . $myrow['category_name'] ."</option>";
			}
			
		    ?>
		</select><br><br>
		<input id="review" type="text" name="review" placeholder="Текст отзыва"><br><br>
		<input type="submit" value="Оставить отзыв">
	</form>

	<script>

		//Проверяем корректность введеного емаил
		function validateMail(form_id,mail) {
   		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   		var address = document.forms[form_id].elements[mail].value;
   		if(reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
   			}
		}
        // проверяем выбрана ли тема отзыва (категория)
		function validateChoice(category) {
			var select = document.getElementById(category);
            var choice = select.value;
			if(choice == ""){
				alert('Выберете тему!');
				return false;
			}
		}

        // проверяем написан ли отзыв
		function validateReview(form_id,review) {
			var text = document.forms[form_id].elements[review].value;
			if(text == ""){
				alert('Кажется вы забыли написать отзыв =)');
				return false;
			}
		}
	</script>
</body>
</html>



