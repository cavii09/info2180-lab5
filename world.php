<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$country = $_GET['country'];
$context = $_GET['context'];

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

if ($context == "countries"){
  $stmt = $conn->query("SELECT * FROM countries WHERE name Like '%$country%'");
}
else
{
  $stmt = $conn->query("SELECT cities.name, cities.district, cities.population FROM cities INNER JOIN countries ON cities.country_code = countries.code WHERE countries.name Like '%$country%'");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<?php if ($context == "countries"): ?>
 <table>
 <tr>
   <th>Name</th>
   <th>Continent</th>
   <th>Independence>/th>
    <th>Headd of State</th>
</tr>      
<?php foreach ($results as $row): ?>
<tr>
  <th><?= $row['name'] ?><th> 
  <th><?= $row['contient'] ?></th>  
  <th><?= $row['indepence_year'] ?><th>
  <th><?= $row['head_of_state']; ?><th>
</tr>
<?php endforeach; ?>
</table>
  <?php elseif ($context == "cities"): ?>
    <table>
  <tr>
    <th>Name</th>
    <th>District</th>
    <th>Population</th>
  </tr>
  <?php foreach($results as$row): ?>
    <tr>
      <td><?= $row['name'] ?></td>
      <td><?= $row['district'] ?></td>
      <td><?= $row['poplulation'] ?></td>
  </tr>
  <?php endforeach; ?>
  </table>
  <?php endif ?>           
 
