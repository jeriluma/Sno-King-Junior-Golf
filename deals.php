<?php

class Deal {
	public $source;
	public $venue;
	public $location;
	public $originalPrice;
	public $dealPrice;
	public $savingPercent;

	public function source() {
		return $this -> source;
	}

	public function venue() {
		return $this -> venue;
	}

	public function location() {
		return $this -> location;
	}

	public function originalPrice() {
		return $this -> originalPrice;
	}

	public function dealPrice() {
		return $this -> dealPrice;
	}

	public function savingPercent() {
		return $this -> savingPercent;
	}
}

	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");

	//  Logic: Empty Case
	// if($_GET) {
		try {
			// $pdo = new PDO('mysql:host=pa1.cy0dqbof4src.us-west-2.rds.amazonaws.com; dbname=PA1', 'info344user', 'password');
			// $pdo = new PDO('mysql:host=localhost; dbname=skjrgolf_dealsdashbod', 'skjrgolf_deals', 'dashbod');
			$pdo = new PDO('mysql:host=localhost; dbname=skjrgolf_dealsdashbod', 'skjrgolf_deals', 'dashbod');
			$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$result= $pdo->prepare('
				SELECT * FROM deals
			');

			echo $result;
			echo "HELLO WORLD";
			// Logic: Map results to object
			$result->setFetchMode(PDO::FETCH_CLASS, 'Deal');
			echo $result;
		} catch(PDOException $e) {
			echo 'Error: ' . $e->getMessage();
			errorHandle("Can not connect to database");
		}

		// Logic: Filtering Players
		// if($result->rowCount() > 0) { // Logic: Players found
		// 	$json = array();
			
		// 	while($deal = $result->fetch()) {
		// 		$p = array (
		// 			'source'=>$deal->source(),
		// 			'venue'=>$deal->venue(),
		// 			'location'=>$deal->location(),
		// 			'originalPrice'=>$deal->originalPrice(),
		// 			'dealPrice'=>$deal->dealPrice(),
		// 			'savingPercent'=>$deal->savingPercent()
		// 		);
		// 		array_push($json, $p);
		// 	}
		// 	//echo json_encode($json); // return back to AJAX request
		// 	echo $_GET['callback'] . '(' . json_encode($json) . ')';
		// } else { // Logic: Empty Query Case
		// 	errorHandle("No results found.");
		// }
	// }

	function errorHandle($StatsMessage) {
		$json = array();
		array_push($json, array('StatsMessage'=> $StatsMessage));
		echo json_encode($json);
		// echo $_GET['callback'] . '(' . json_encode($json) . ')';
		exit();
	}