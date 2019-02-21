<header>
  <a href="index.php?page=tariff&id=<?php echo $data[$key]['title'] ?>"><svg width="15" height="30" class="green-arrow">
    <polyline points="15,0 3,15 15,30" fill="none" stroke="#b1d978" stroke-width="5" stroke-linejoin="round"/>
  </svg></a>
  <span>Выбор тарифа</span>
</header>
<div class="main main-choice">
 <div class="title">Тариф "<?php echo $choicen['title']; ?>"</div>
 <div class="description">
  <div class="money"><b>Период оплаты - <?php echo $choicen['pay_period'];
  if ($choicen['pay_period'] == 1) {
    echo ' месяц';
  }elseif ($choicen['pay_period'] == 3) {
    echo ' месяца';
  }elseif ($choicen['pay_period'] ==  6 || 12) {
    echo ' месяцев';
  }
  ?><br>
  <?php echo ($choicen['price']/$choicen['pay_period']); ?> &#8381;/мес </b></div>
  <div class="money">разовый платёж - <?php echo $choicen['price']; ?> <br>
   со счёта спишется - <?php echo $choicen['price']; ?></div>
   <div class="money" style="color:#bab8b8;">вступит в силу - сегодня <br> активно до - <?php echo date("d.m.Y"  , $choicen['new_payday']);
   ?></div>
 </div>
 <div class="button"><form action="#"><button href="#">Выбрать</button></form></div>
</div>
