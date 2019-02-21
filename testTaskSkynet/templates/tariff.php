<header>
       <a href="index.php"><svg width="15" height="30" class="green-arrow">
         <polyline points="15,0 3,15 15,30" fill="none" stroke="#b1d978" stroke-width="5" stroke-linejoin="round"/>
  </svg></a>
  <span>Тариф "<?php echo $data[$key]['title'] ?>"</span>
</header>
<main>
    <?php foreach ($data[$key]['tarifs'] as $product): ?>    
       <div class="main">
              <div class="title"><?php echo $product['pay_period'];
              if ($product['pay_period'] == 1) {
                echo ' месяц';
         }elseif ($product['pay_period'] == 3) {
                echo ' месяца';
         }elseif ($product['pay_period'] ==  6 || 12) {
                echo ' месяцев';
         }
         ?></div>
         <div class="description">
          <div class="money"><b><?php echo ($product['price']/$product['pay_period']); ?> &#8381;/мес</b></div>
          Разовый платёж - <?php echo $product['price']; ?> <br>      
          <?php $sale = $data[$key]['tarifs'][0]['price']*$product['pay_period']-$product['price'];
          if ($sale !== 0) {echo 'Скидка - ' . $sale;}
          else  echo'';   
          ?>
   </div>
   <a href="index.php?page=choice&id= <?php echo $product['ID']; ?> "><img class="arrow" src="img/arrow.png" alt="arrow"></a>
</div>
<?php endforeach; ?> 
</main>