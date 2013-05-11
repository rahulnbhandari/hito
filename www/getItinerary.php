<?php
# Generates a unique ID that's $length chars long
function uuid($length=8) {
	$uuid = "";

	if ($length > 8) {
	        $uuid = uniqid(md5(rand()), false);
	        if (strlen($uuid) > $length) {
	            $uuid = substr($uuid, 0, $length);
	        }
	    } else {
	        $uuid = _uuidSmall($length);
	    } 

    return $uuid;
}


function _uuidSmall($length) {
    $uuid = "";
    for ($i=0;$i<$length;$i++) {
        $choice = rand(0,1);
        $letter = rand(97,122);
        $number = rand(0,9);
        if ($choice == 0 || $i == 0) {
            $uuid .= chr($letter);
        } else {
            $uuid .= $number;
        }
    }
    return $uuid;
}




header('Content-type: text/json');
header('Content-type: application/json');
$request=$_GET['request'];
$serviceType=$_GET['type'];
$uuid=uuid(8);

$date=date("m/d/y ");

				
$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Museum of Modern Art",
				"address"=>"11 W 53rd St  New York, NY 10019",
				"phone"=>"342-509-2289",
				"locationType"=>"museum",
				"arrivalTime"=>$date." 11:20 AM",
				"departureTime"=>$date." 1:20 PM",
				"description"=>"The best modern art anywhere, is housed in a large Midtown building that offers an extensive display of the museums holdings; in addition to six floors of exceptional art arranged around a mammoth atrium",
				"price"=>"30",
				"notes"=>"50% discount with student id",
				"website"=>"http://www.moma.org/"

			);
$uuid=uuid(8);			
$response[$uuid]= array( 
				"type"=>"lunch",
				"location"=>"The Modern",
				"address"=>"9 W 53rd St New York, NY 10019",
				"phone"=>"(212) 333-1220",
				"locationType"=>"restaurant",
				"arrivalTime"=>$date."1:30 PM",
				"departureTime"=>$date."2:30 PM",
				"description"=>"American, French, European
								$$$$ Takes Reservations",
				"notes"=>"",
				"price"=>"40",
				"discount"=>"0.3",
				"website"=>"http://www.themodernnyc.com/"
				

			);

			$uuid=uuid(8);	
			
$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Circle Line Cruise",
				"address"=>"Pier 83, West 42nd Street,
							NY, NY 10036",
				"phone"=>"(212) 353-1555",
				"locationType"=>"cruise",
				"arrivalTime"=>$date." 3:00 PM",
				"departureTime"=>$date." 5:15 PM",
				"description"=>"Take in over 101 city sights by water, including the Intrepid, Yankee Stadium, the Cloisters and a magnificent close-up of the Statue of Liberty.",
				"notes"=>"For more options visit http://www.circleline42.com/new-york-cruises-about/about-us.aspx",
				"price"=>"80",
				"discount"=>"0",
				"website"=>"http://www.circleline42.com"
				

			);

	$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Empire State Building",
				"address"=>"350 5th Ave  New York, NY 10118",
				"phone"=>"(212) 333-1255",
				"locationType"=>"architecture",
				"arrivalTime"=>$date." 5:45 PM",
				"departureTime"=>$date." 7:15 PM",
				"description"=>"The Empire State Building is generally thought of as an American cultural icon. It is designed in the distinctive Art Deco style and has been named as one of the Seven Wonders of the Modern World by the American Society of Civil Engineers",
				"notes"=>"The Observatory is open every day, including weekends and holidays, 8AM to 2AM buy tickets",
				"price"=>"25",
				"discount"=>"0",
				"website"=>"http://www.esbnyc.com"
				

			);
			
			
			$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Times Square",
				"address"=>"Times Square , New York, NY 10018",
				"phone"=>"",
				"locationType"=>"street",
				"arrivalTime"=>$date." 7:45 PM",
				"departureTime"=>$date." 8:45 PM",
				"description"=>"Times Square is a major commercial intersection and a neighborhood in Midtown Manhattan, New York City, at the junction of Broadway (now converted into a pedestrian plaza) and Seventh Avenue and stretching from West 42nd to West 47th Streets",
				"notes"=>"Times Square is a busy intersection of art and commerce, where scores of advertisements – electric, neon and illuminated signs and 'zipper' news crawls",
				"price"=>"",
				"discount"=>"0",
				"website"=>"http://en.wikipedia.org/wiki/Times_Square"
				

			);
		$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"dinner",
				"location"=>"Keens Steakhouse",
				"address"=>"72 W 36th St, (bet 5th and 6th Aves) , New York, NY 10018",
				"phone"=>"212-947-3636",
				"locationType"=>"restaurant",
				"arrivalTime"=>$date." 9:15 PM",
				"departureTime"=>$date." 10:15 PM",
				"description"=>"Legendary mutton chops and superior cuts of dry-aged steaks, as well as a great, and less pricey, pub menu (think prime rib sandwiches and burgers), have been drawing Garment District locals to Keens Steakhouse since 1885",
				"notes"=>"Beveled-glass doors, two working fireplaces and a forest's worth of dark wood suggest a time when 'Diamond Jim' Brady piled his table with bushels of oysters, slabs of seared beef and troughs of ale. The menu still lists a three-inch-thick mutton chop (imagine a saddle of lamb but with more punch) and desserts such as key lime pie",
				"price"=>"40",
				"discount"=>"0.25",
				"website"=>"http://www.keens.com/"
				

			);
			
				$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"party",
				"location"=>"SANTOS PARTY HOUSE",
				"address"=>"96 Lafayette St.New York, NY 10013",
				"phone"=>"212-947-3776",
				"locationType"=>"night club",
				"arrivalTime"=>$date." 10:45 PM",
				"departureTime"=>date('m/d/y', strtotime($date. ' + 1 days'))." 12:30 AM",
				"description"=>"Downtowns happening live-music and dance venue, where you'll experience everything from performance art to rap in this 6,000 square foot venue owned by rocker Andrew W.K. and artist Spencer Sweeney. Thankfully, the sweat-inducing, BAC-raising pleasure dome has been invaded by a tiny food alcove, lovingly brought to fruition by the people at the General Greene and featuring Cuban sandwiches and beef dumplings. Hence the name: Santos Patty House",
				"notes"=>"BIG APPLE ROCKS PRESENTS The Offshore Regulars (CD Release Party), Black Bird White Sky, The Monotone Assassins",
				"price"=>"250",
				"discount"=>"0.2",
				"website"=>"http://www.santospartyhouse.com/"
				

			);
			
		$date=date('m/d/y', strtotime($date. ' + 1 days'))	;
						$uuid=uuid(8);

				$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Central Park",
				"address"=>"96 Lafayette St.New York, NY 10013",
				"phone"=>"",
				"locationType"=>"park",
				"arrivalTime"=>$date." 9:15 AM",
				"departureTime"=>$date." 11:30 AM",
				"description"=>"Central Park is a public park at the center of Manhattan in New York City. The park initially opened in 1857, on 778 acres (315 ha) of city-owned land (it is 843 acres today). In 1858, Frederick Law Olmsted and Calvert Vaux won a design competition to improve and expand the park with a plan they entitled the Greensward Plan. Construction began the same year, continued during the American Civil War, and was completed in 1873. Central Park is the most visited urban park in the United States",
				"notes"=>"There's plenty to see and do in Central Park. Sports facilities can be found all over the park but most of the interesting sights are found in the lower half of Central Park. You'll come across historical buildings, statues, monuments, beautiful bridges, and of course plenty of nature. Some of it is quite rugged like the forest-like Ramble while other parts of the park are more manicured and feature beautiful flowers and shrubs. Merchants' Gate
There are eighteen gated entrances to the park. Each of them has its own name. Several of these gates are ornate such as the Vanderbilt Gate, Engineers' Gate and in particular Merchants' Gate at Columbus Circle.",
				"price"=>"0",
				"discount"=>"0",
				"website"=>"http://www.centralparknyc.org/"
				

			);
			
				$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"World Trade Center Site (Ground Zero)",
				"address"=>"Vesey-Liberty-Church-West Streets New York, NY 10038",
				"phone"=>"",
				"locationType"=>"historic",
				"arrivalTime"=>$date." 12:00 PM",
				"departureTime"=>$date." 12:30 PM",
				"description"=>"The World Trade Center is a complex of buildings under construction in Lower Manhattan, New York City, United States, replacing an earlier complex of seven buildings with the same name on the same site. The original World Trade Center featured landmark twin towers, which opened on April 4, 1973 and were destroyed in the September 11 attacks of 2001, along with 7 World Trade Center. ",
				"notes"=>"Since the destruction of the Twin Towers, many people from points across the globe have made the trek to lower Manhattan to offer their respects to those killed in the worst terrorist incident in American history as well as to see the ongoing reconstruction. For many New Yorkers who daily attempt to move forward with life as usual—especially those who work in lower Manhattan—the ongoing presence of tourists sparks mixed emotions. If you are planning a visit to the area, please do keep in mind that this area of lower Manhattan is both hallowed ground and a place of much emotional outpouring. While the various ad hoc viewing platforms and temporary memorials are now largely gone, some five years later there remains much confusion as to how the various projects—mammoth in scale—will proceed.",
				"price"=>"0",
				"discount"=>"0",
				"website"=>"http://www.wtc.com/"
				

			);
			
			$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Charging Bull (Wall Street Bull)",
				"address"=>"26 Broadway, New York City, NY 10004",
				"phone"=>"",
				"locationType"=>"sculpture",
				"arrivalTime"=>$date." 12:40 PM",
				"departureTime"=>$date." 1:00 PM",
				"description"=>'Charging Bull, which is sometimes referred to as the Wall Street Bull or the Bowling Green Bull, is a 3,200-kilogram (7,100 lb) bronze sculpture by Arturo Di Modica that stands in Bowling Green Park near Wall Street in Manhattan, New York City. Standing 11 feet (3.4 m) tall[1] and measuring 16 feet (4.9 m) long,[2] the oversize sculpture depicts a bull, the symbol of aggressive financial optimism and prosperity, leaning back on its haunches and with its head lowered as if ready to charge. The sculpture is both a popular tourist destination which draws thonds of people a day, as well as "one of the most iconic images of New York"[3] and a "Wall Street icon"[4] symbolizing "Wall Street" and the Financial District.',
				"notes"=>"The sculpture is featured in the films For Richer or Poorer (1997), Hitch (2005), Inside Man (2006), The Other Guys (2010), The Sorcerer's Apprentice (2010), and Arthur (2011). It also appears in the TV series My Life as Liz and Weeds. A dancer poses in arabesque atop the sculpture in the 2011 Adbusters appeal to 'Occupy Wall Street'.",
				"price"=>"0",
				"discount"=>"0",
				"website"=>"http://chargingbull.com/"
				

			);
			
			$uuid=uuid(8);			
		$response[$uuid]= array( 
				"type"=>"lunch",
				"location"=>"Chipotle Mexican Grill",
				"address"=>"100 Maiden Ln New York, NY 10005",
				"phone"=>"(212) 363-1220",
				"locationType"=>"restaurant",
				"arrivalTime"=>$date." 1:15 PM",
				"departureTime"=>$date." 2:00 PM",
				"description"=>"The restaurant is known for its large burritos, assembly-line production,[7] and use of natural ingredients.[8] The company has released a mission statement called Food with Integrity, which highlights its efforts in using organic ingredients,[3] and serves more naturally raised meat than any other restaurant chain.[9] Chipotle is one of the first chains of fast casual dining establishments",
				"notes"=>"Location is right in the middle of a lot of office buildings  and gets slammed at noon. There may be line out the door. Don't let this deceive you though, the line moves fast. The staff has relatively little turnover and they know what they are doing. They will be slinging burritos faster than you could imagine.",
			
				"price"=>"9",
				"discount"=>"0",
				"website"=>"http://chipotle.com/"
				

			);

			
				$uuid=uuid(8);		
			$response[$uuid]= array( 
				"type"=>"poi",
				"location"=>"Brooklyn Bridge",
				"address"=>"26 Broadway, New York City, NY 10004",
				"phone"=>"",
				"locationType"=>"architecture",
				"arrivalTime"=>$date." 2:30 PM",
				"departureTime"=>$date." 3:00 PM",
				"description"=>"The Brooklyn Bridge is a bridge in New York City and is one of the oldest suspension bridges in the United States. Completed in 1883, it connects the boroughs of Manhattan and Brooklyn by spanning the East River. With a main span of 1,595.5 feet (486.3 m), it was the longest suspension bridge in the world from its opening until 1903, and the first steel-wire suspension bridge.",
				"notes"=>"The Brooklyn Bridge was opened for use on May 24, 1883. The opening ceremony was attended by several thond people and many ships were present in the East Bay for the occasion. President Chester A. Arthur and New York Mayor Franklin Edson crossed the bridge to celebratory cannon fire and were greeted by Brooklyn Mayor Seth Low when they reached the Brooklyn-side tower. Arthur shook hands with Washington Roebling at the latter's home, after the ceremony. Roebling was unable to attend the ceremony (and in fact rarely visited the site again), but held a celebratory banquet at his house on the day of the bridge opening. Further festivity included the performance of a band, gunfire from ships, and a fireworks display",
				"price"=>"0",
				"discount"=>"0",
				"website"=>"http://www.nyc.gov/html/dot/html/bridges/brooklyn_bridge.shtml"
				

			);
			
					
	
		
			
			
			
			
			
$serviceType=$_GET['serviceType'];

switch($serviceType){
	case "personalized":
		break;
	default:
		echo json_encode($response);
		break;	
}
?>
