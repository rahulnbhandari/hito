// searchController.js
var searchController = ['$scope', '$http', function ($scope, $http) {
  var self = this;

  $scope.deals = [];
  $scope.itinerary = []; //$.parseJSON('{"fxdbn7ni":{"type":"arrival","location":"LGA Airport","address":"LGA iNternational Airport, New York,NY,USA","phone":"333-009-0989","locationType":"airport","arrivalTime":"04\/14\/13  9-00 AM","departureTime":"04\/14\/13  9-20 AM"},"njfk6o0k":{"type":"stay","location":"Holiday Inn","address":"Holiday Inn, 343 West 39th Street, New York,NY,USA","phone":"342-009-0989","locationType":"hotel","arrivalTime":"04\/14\/13  10-00 AM","departureTime":"04\/14\/13  11-00 AM"},"g3bzug7h":{"type":"poi","location":"Museum of Modern Art","address":"11 W 53rd St  New York, NY 10019","phone":"342-509-2289","locationType":"museum","arrivalTime":"04\/14\/13  11-20 AM","departureTime":"04\/14\/13  1-20 PM","description":"The best modern art anywhere, is housed in a large Midtown building that offers an extensive display of the museums holdings; in addition to six floors of exceptional art arranged around a mammoth atrium","price":"30","notes":"50% discount with student id","website":"http:\/\/www.moma.org\/"},"jr67e9ia":{"type":"lunch","location":"The Modern","address":"9 W 53rd St New York, NY 10019","phone":"(212) 333-1220","locationType":"restaurant","arrivalTime":"04\/14\/13 1-30 PM","departureTime":"04\/14\/13 2-30 PM","description":"American, French, European\n\t\t\t\t\t\t\t\t$$$$ Takes Reservations","notes":"","price":"40","discount":"0.3","website":"http:\/\/www.themodernnyc.com\/"},"oer8i5dl":{"type":"poi","location":"Circle Line Cruise","address":"Pier 83, West 42nd Street,\n\t\t\t\t\t\t\tNY, NY 10036","phone":"(212) 353-1555","locationType":"cruise","arrivalTime":"04\/14\/13  3-00 PM","departureTime":"04\/14\/13  5-15 PM","description":"Take in over 101 city sights by water, including the Intrepid, Yankee Stadium, the Cloisters and a magnificent close-up of the Statue of Liberty.","notes":"For more options visit http:\/\/www.circleline42.com\/new-york-cruises-about\/about-us.aspx","price":"80","discount":"0","website":"http:\/\/www.circleline42.com"},"i8g9q622":{"type":"poi","location":"Empire State Building","address":"350 5th Ave  New York, NY 10118","phone":"(212) 333-1255","locationType":"architecture","arrivalTime":"04\/14\/13  5-45 PM","departureTime":"04\/14\/13  7-15 PM","description":"The Empire State Building is generally thought of as an American cultural icon. It is designed in the distinctive Art Deco style and has been named as one of the Seven Wonders of the Modern World by the American Society of Civil Engineers","notes":"The Observatory is open every day, including weekends and holidays, 8AM to 2AM buy tickets","price":"25","discount":"0","website":"http:\/\/www.esbnyc.com"},"yn2to52m":{"type":"poi","location":"Times Square","address":"Times Square , New York, NY 10018","phone":"","locationType":"street","arrivalTime":"04\/14\/13  7-45 PM","departureTime":"04\/14\/13  8-45 PM","description":"Times Square is a major commercial intersection and a neighborhood in Midtown Manhattan, New York City, at the junction of Broadway (now converted into a pedestrian plaza) and Seventh Avenue and stretching from West 42nd to West 47th Streets","notes":null,"price":"","discount":"0","website":"http:\/\/en.wikipedia.org\/wiki\/Times_Square"},"l22x2ho4":{"type":"dinner","location":"Keens Steakhouse","address":"72 W 36th St, (bet 5th and 6th Aves) , New York, NY 10018","phone":"212-947-3636","locationType":"restaurant","arrivalTime":"04\/14\/13  9-15 PM","departureTime":"04\/14\/13  10-15 PM","description":"Legendary mutton chops and superior cuts of dry-aged steaks, as well as a great, and less pricey, pub menu (think prime rib sandwiches and burgers), have been drawing Garment District locals to Keens Steakhouse since 1885","notes":"Beveled-glass doors, two working fireplaces and a forests worth of dark wood suggest a time when `Diamond Jim` Brady piled his table with bushels of oysters, slabs of seared beef and troughs of ale. The menu still lists a three-inch-thick mutton chop (imagine a saddle of lamb but with more punch) and desserts such as key lime pie","price":"40","discount":"0.25","website":"http:\/\/www.keens.com\/"},"by936nv2":{"type":"party","location":"SANTOS PARTY HOUSE","address":"96 Lafayette St.New York, NY 10013","phone":"212-947-3776","locationType":"night club","arrivalTime":"04\/14\/13  10-45 PM","departureTime":"04\/15\/13 12-30 AM","description":"Downtowns happening live-music and dance venue, where you`ll experience everything from performance art to rap in this 6,000 square foot venue owned by rocker Andrew W.K. and artist Spencer Sweeney. Thankfully, the sweat-inducing, BAC-raising pleasure dome has been invaded by a tiny food alcove, lovingly brought to fruition by the people at the General Greene and featuring Cuban sandwiches and beef dumplings. Hence the name: Santos Patty House","notes":"BIG APPLE ROCKS PRESENTS The Offshore Regulars (CD Release Party), Black Bird White Sky, The Monotone Assassins","price":"90","discount":"0.2","website":"http:\/\/www.santospartyhouse.com\/"},"mzkmoqw8":{"type":"stay","location":"Holiday Inn","address":"Holiday Inn, 343 West 39th Street, New York,NY,USA","phone":"342-009-0989","locationType":"hotel","arrivalTime":"04\/15\/13 1-00 AM","departureTime":"04\/15\/13 8-45 AM"},"epq7x8gt":{"type":"poi","location":"Central Park","address":"96 Lafayette St.New York, NY 10013","phone":"","locationType":"night club","arrivalTime":"04\/15\/13 9-15 AM","departureTime":"04\/15\/13 11-30 AM","description":"Central Park is a public park at the center of Manhattan in New York City. The park initially opened in 1857, on 778 acres (315 ha) of city-owned land (it is 843 acres today). In 1858, Frederick Law Olmsted and Calvert Vaux won a design competition to improve and expand the park with a plan they entitled the Greensward Plan. Construction began the same year, continued during the American Civil War, and was completed in 1873. Central Park is the most visited urban park in the United States","notes":"There`s plenty to see and do in Central Park. Sports facilities can be found all over the park but most of the interesting sights are found in the lower half of Central Park. You`ll come across historical buildings, statues, monuments, beautiful bridges, and of course plenty of nature. Some of it is quite rugged like the forest-like Ramble while other parts of the park are more manicured and feature beautiful flowers and shrubs. Merchants` Gate\nThere are eighteen gated entrances to the park. Each of them has its own name. Several of these gates are ornate such as the Vanderbilt Gate, Engineers` Gate and in particular Merchants` Gate at Columbus Circle.","price":"0","discount":"0","website":"http:\/\/www.centralparknyc.org\/"},"mv4tzz8x":{"type":"poi","location":"World Trade Center Site (Ground Zero)","address":"Vesey-Liberty-Church-West Streets New York, NY 10038","phone":"","locationType":"historic","arrivalTime":"04\/15\/13 12-00 PM","departureTime":"04\/15\/13 12-30 PM","description":"The World Trade Center is a complex of buildings under construction in Lower Manhattan, New York City, United States, replacing an earlier complex of seven buildings with the same name on the same site. The original World Trade Center featured landmark twin towers, which opened on April 4, 1973 and were destroyed in the September 11 attacks of 2001, along with 7 World Trade Center. ","notes":null,"price":"0","discount":"0","website":"http:\/\/www.wtc.com\/"},"k0hp4r17":{"type":"poi","location":"Charging Bull (Wall Street Bull)","address":"26 Broadway, New York City, NY 10004","phone":"","locationType":"sculpture","arrivalTime":"04\/15\/13 12-40 PM","departureTime":"04\/15\/13 1-00 PM","description":"Charging Bull, which is sometimes referred to as the Wall Street Bull or the Bowling Green Bull, is a 3,200-kilogram (7,100 lb) bronze sculpture by Arturo Di Modica that stands in Bowling Green Park near Wall Street in Manhattan, New York City. Standing 11 feet (3.4 m) tall[1] and measuring 16 feet (4.9 m) long,[2] the oversize sculpture depicts a bull, the symbol of aggressive financial optimism and prosperity, leaning back on its haunches and with its head lowered as if ready to charge. The sculpture is both a popular tourist destination which draws thousands of people a day, as well as \"one of the most iconic images of New York\"[3] and a \"Wall Street icon\"[4] symbolizing \"Wall Street\" and the Financial District.","notes":"The sculpture is featured in the films For Richer or Poorer (1997), Hitch (2005), Inside Man (2006), The Other Guys (2010), The Sorcerer`s Apprentice (2010), and Arthur (2011). It also appears in the TV series My Life as Liz and Weeds. A dancer poses in arabesque atop the sculpture in the 2011 Adbusters appeal to `Occupy Wall Street`.","price":"0","discount":"0","website":"http:\/\/chargingbull.com\/"},"z4265l02":{"type":"poi","location":"Brookylyn Bridge","address":"26 Broadway, New York City, NY 10004","phone":"","locationType":"architecture","arrivalTime":"04\/15\/13 2-30 PM","departureTime":"04\/15\/13 3-00 PM","description":"The Brooklyn Bridge is a bridge in New York City and is one of the oldest suspension bridges in the United States. Completed in 1883, it connects the boroughs of Manhattan and Brooklyn by spanning the East River. With a main span of 1,595.5 feet (486.3 m), it was the longest suspension bridge in the world from its opening until 1903, and the first steel-wire suspension bridge","notes":"The Brooklyn Bridge was opened for use on May 24, 1883. The opening ceremony was attended by several thousand people and many ships were present in the East Bay for the occasion. President Chester A. Arthur and New York Mayor Franklin Edson crossed the bridge to celebratory cannon fire and were greeted by Brooklyn Mayor Seth Low when they reached the Brooklyn-side tower. Arthur shook hands with Washington Roebling at the latter`s home, after the ceremony. Roebling was unable to attend the ceremony (and in fact rarely visited the site again), but held a celebratory banquet at his house on the day of the bridge opening. Further festivity included the performance of a band, gunfire from ships, and a fireworks display","price":"0","discount":"0","website":"http:\/\/www.wtc.com\/"}}');

  $scope.prefs = {
    budget: "$2,000",
    startDate: "6/1/2013",
    endDate: "6/4/2013",
    location: "New York, NY"
  };

  $scope.cuisines = [
    "African",
    "American",
    "Asian",
    "Bar / Lounge / Bottle Service",
    "Brazilian",
    "Californian",
    "Caribbean",
    "Comfort Food",
    "Continental",
    "Creole / Cajun / Southern",
    "European",
    "Fondue",
    "French",
    "Fusion / Eclectic",
    "Gastro Pub",
    "Global, International",
    "Greek",
    "Indian",
    "Italian",
    "Japanese",
    "Latin / Spanish",
    "Mediterranean",
    "Mexican / Southwestern",
    "Middle Eastern",
    "Nordic",
    "Organic",
    "Seafood",
    "South American",
    "Steak",
    "Sushi",
    "Tapas / Small Plates",
    "Thai",
    "Vegetarian / Vegan",
    "Wine Bar"
  ];

  $scope.interests = [
    "Adrenaline",
    "Beaches",
    "Casino Night",
    "Comedic",
    "Craft Beer",
    "Cultural Pursuits",
    "Date Night",
    "Foodie",
    "Fresh Air",
    "Great Outdoors",
    "Guided Tour",
    "Happy Hour",
    "Just Dance",
    "Legendary Artists",
    "Let's Do Brunch",
    "Movie Buff",
    "Musicals",
    "Night Owl",
    "Off the Beaten Path",
    "Outdoor Festivals",
    "Pampered",
    "Pet Lover",
    "Photographic",
    "Quick Bites",
    "Romantic At Heart",
    "Shopping",
    "Simple Pleasures",
    "Sporting Life",
    "Tee Time",
    "The Finer Things",
    "Theater District",
    "Toyland",
    "Wine Country"
    ];

  $scope.message = "";

  $scope.isBusy = false;

  if (window.location.toString().indexOf("localhost") > -1) {
    var url = "getItinerary.txt";
  } else {
    var url = "http://ec2-23-23-20-145.compute-1.amazonaws.com/getItinerary.php";
  }
  $http.get(url)
    .success(function (data) {
      buildResults(data);
    });

  var buildResults = function (data) {
    var items = [];

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var item = data[key];
        item.id = key;
        items.push(item);
      }
    }

    items[items.length - 1].last = true;

    angular.copy(items, $scope.itinerary);
  };

  // Temporary until JSON works
  //buildResults($scope.locations);

  $("#surveyDialog").modal();

  $("body").on("click", ".like-button", function (e) {
    var $item = $(this);
    if ($item.hasClass("unlike-button")) {
      $item.removeClass("unlike-button");
    } else {
      $item.addClass("unlike-button");
    }
  });

} ];