import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  created = Date.now();

  createDb() {
    const users = [
      {
        id: 0, email: 'janedoe@gmail.com',
        firstName: 'Jane', lastName: 'Doe', zipcode: ''
      }
    ];

    const areas = [
      { id: 6820, theaters: [] }
    ];

    const theaters = [{
      "tmsId": "MV010279620000",
      "rootId": "14427239",
      "subType": "Feature Film",
      "title": "Life of the Party",
      "releaseYear": 2018,
      "releaseDate": "2018-05-11",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Comedy"],
      "longDescription": "When her husband suddenly dumps her, longtime and dedicated housewife Deanna turns regret into reset by going back to college. Unfortunately, Deanna winds up at the same school as her less-than-thrilled daughter. Plunging headlong into the campus experience, the outspoken new student soon finds her true self while fully embracing all the fun, freedom and frat boys that she can handle.",
      "shortDescription": "A woman finds fun, freedom and frat boys while attending the same college as her daughter.",
      "topCast": ["Melissa McCarthy", "Gillian Jacobs", "Maya Rudolph"],
      "directors": ["Ben Falcone"],
      "officialUrl": "http://www.lifeoftheparty-movie.com/",
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Situations"],
      "runTime": "PT01H45M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14427239_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "2664",
          "name": "Darien Playhouse"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T13:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T14:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T16:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T18:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T21:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T12:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T14:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T17:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T19:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T22:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5880",
          "name": "Bow Tie Cinemas New Canaan Playhouse"
        },
        "dateTime": "2018-05-16T16:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AALMV&m=180683&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5880",
          "name": "Bow Tie Cinemas New Canaan Playhouse"
        },
        "dateTime": "2018-05-16T19:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AALMV&m=180683&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV008885450000",
      "rootId": "12863030",
      "subType": "Feature Film",
      "title": "Avengers: Infinity War",
      "releaseYear": 2018,
      "releaseDate": "2018-04-27",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Action", "Adventure", "Fantasy", "Science fiction"],
      "longDescription": "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
      "shortDescription": "Iron Man, Thor and the rest of the Avengers battle their most powerful enemy yet -- the evil Thanos.",
      "topCast": ["Robert Downey Jr.", "Chris Hemsworth", "Josh Brolin"],
      "directors": ["Anthony Russo", "Joe Russo"],
      "officialUrl": "https://marvel.com/avengers",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Violence"],
      "runTime": "PT02H29M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p12863030_v_v5_ab.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "2664",
          "name": "Darien Playhouse"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false
      }, {
        "theatre": {
          "id": "5955",
          "name": "State Cinema"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGX&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T12:45",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T14:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T14:45",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T15:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T16:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T17:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T18:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T20:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T21:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T21:45",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T12:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T14:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T15:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T16:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T18:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T21:35",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5880",
          "name": "Bow Tie Cinemas New Canaan Playhouse"
        },
        "dateTime": "2018-05-16T16:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AALMV&m=162537&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5880",
          "name": "Bow Tie Cinemas New Canaan Playhouse"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AALMV&m=162537&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010043240000",
      "rootId": "14123058",
      "subType": "Feature Film",
      "title": "Tully",
      "releaseYear": 2018,
      "releaseDate": "2018-01-23",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Comedy drama"],
      "longDescription": "Marlo is a New York suburbanite who's about to give birth to her third child. Her husband, Ron, is loving and works hard, but remains clueless about the demands that motherhood puts on his wife. When the baby is born, Marlo's wealthy brother hires a nighttime nanny named Tully to help his sister handle the workload. Hesitant at first, Marlo soon learns to appreciate all that Tully does -- forming a special bond with her new, lifesaving friend.",
      "shortDescription": "A mother of three forms a special bond with her thoughtful and sometimes challenging nanny.",
      "topCast": ["Charlize Theron", "Mackenzie Davis", "Mark Duplass"],
      "directors": ["Jason Reitman"],
      "officialUrl": "http://focusfeatures.com/tully/",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "R"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Nudity"],
      "runTime": "PT01H34M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14123058_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5955",
          "name": "State Cinema"
        },
        "dateTime": "2018-05-16T19:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGX&m=178594&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T14:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=178594&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T16:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=178594&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T19:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=178594&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T21:55",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=178594&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010561760000",
      "rootId": "14781041",
      "subType": "Feature Film",
      "title": "Disobedience",
      "releaseYear": 2017,
      "releaseDate": "2017-09-10",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Romance", "Drama"],
      "longDescription": "New York photographer Ronit Krushka flies to London after learning about the death of her estranged father. Ronit is returning to the same Orthodox Jewish community that shunned her decades earlier for her childhood attraction to Esti, a female friend. Their fortuitous and happy reunion soon reignites their burning passion as the two women explore boundaries of faith and sexuality.",
      "shortDescription": "A New York photographer rekindles a lesbian romance with her childhood best friend in London.",
      "topCast": ["Rachel Weisz", "Rachel McAdams", "Alessandro Nivola"],
      "directors": ["Sebastián Lelio"],
      "officialUrl": "https://bleeckerstreetmedia.com/disobedience",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "R"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Nudity", "Strong Sexual Content"],
      "runTime": "PT01H54M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14781041_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5004",
          "name": "Avon Theatre Film Center, Inc."
        },
        "dateTime": "2018-05-16T16:35",
        "barg": false
      }, {
        "theatre": {
          "id": "5004",
          "name": "Avon Theatre Film Center, Inc."
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false
      }, {
        "theatre": {
          "id": "5954",
          "name": "Garden Cinemas Norwalk"
        },
        "dateTime": "2018-05-16T18:50",
        "barg": false
      }]
    }, {
      "tmsId": "MV010867490000",
      "rootId": "15167081",
      "subType": "Feature Film",
      "title": "RBG",
      "releaseYear": 2018,
      "releaseDate": "2018-01-21",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Documentary"],
      "longDescription": "An intimate portrait of an unlikely rock star: Justice Ruth Bader Ginsburg. With unprecedented access, the filmmakers explore how her early legal battles changed the world for women.",
      "shortDescription": "Filmmakers explore how Ruth Bader Ginsburg's her early legal battles changed the world for women.",
      "topCast": ["Ruth Bader Ginsburg", "Gloria Steinem", "Nina Totenberg"],
      "directors": ["Betsy West", "Julie Cohen"],
      "officialUrl": "https://www.rbgmovie.com/",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG"
      }],
      "advisories": ["Adult Language", "Adult Situations"],
      "runTime": "PT01H37M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "RBG (2018)",
          "lang": "en"
        },
        "uri": "assets/p15167081_p_v5_ab.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5004",
          "name": "Avon Theatre Film Center, Inc."
        },
        "dateTime": "2018-05-16T17:10",
        "barg": false
      }, {
        "theatre": {
          "id": "5004",
          "name": "Avon Theatre Film Center, Inc."
        },
        "dateTime": "2018-05-16T19:20",
        "barg": false
      }, {
        "theatre": {
          "id": "5954",
          "name": "Garden Cinemas Norwalk"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false
      }]
    }, {
      "tmsId": "MV008898760000",
      "rootId": "12878741",
      "subType": "Feature Film",
      "title": "Black Panther",
      "releaseYear": 2018,
      "releaseDate": "2018-02-16",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Action", "Adventure", "Fantasy"],
      "longDescription": "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
      "shortDescription": "Black Panther must save his nation and the rest of the world from a powerful old enemy.",
      "topCast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
      "directors": ["Ryan Coogler"],
      "officialUrl": "http://movies.disney.com/black-panther",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3.5"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Situations", "Violence"],
      "runTime": "PT02H14M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p12878741_v_v5_ad.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T13:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=162611&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T15:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=162611&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T18:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=162611&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T21:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=162611&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010512960000",
      "rootId": "14721978",
      "subType": "Feature Film",
      "title": "Overboard",
      "releaseYear": 2018,
      "releaseDate": "2018-05-04",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Romantic comedy"],
      "longDescription": "Kate is a single, working-class mother of three who's hired to clean a luxury yacht that belongs to Leonardo -- a selfish, spoiled and wealthy Mexican playboy. After unjustly firing Kate, Leonardo falls off the boat and wakes up with no memory of who he is. To get payback, Kate shows up at the hospital and convinces the confused amnesiac that they're married. As Leonardo tries to get used to manual labor and his new family, Kate starts to wonder how long she can keep fooling her fake husband.",
      "shortDescription": "A single, working-class mother of three convinces a wealthy amnesiac that they're married.",
      "topCast": ["Eugenio Derbez", "Anna Faris", "Eva Longoria"],
      "directors": ["Rob Greenberg"],
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Nudity"],
      "runTime": "PT01H52M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14721978_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T13:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T16:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T19:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T22:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T14:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T16:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T19:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179679&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T21:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179679&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV009792110000",
      "rootId": "13794695",
      "subType": "Feature Film",
      "title": "Sherlock Gnomes",
      "releaseYear": 2018,
      "releaseDate": "2018-03-23",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Comedy", "Adventure", "Mystery", "Animated", "Children"],
      "audience": "Children",
      "longDescription": "When Gnomeo and Juliet first arrive in London with their friends and family, their biggest concern is getting a new garden ready for spring. When everyone in the garden suddenly goes missing -- there's only one gnome to call -- Sherlock Gnomes. The famous detective and sworn protector of the city shows up with his sidekick Watson to investigate the case. The mystery soon leads the gnomes on a rollicking adventure as they meet all-new ornaments and explore an undiscovered side of London.",
      "shortDescription": "Sherlock Gnomes helps Gnomeo and Juliet solve the case of disappearing garden gnomes in London.",
      "topCast": ["James McAvoy", "Emily Blunt", "Chiwetel Ejiofor"],
      "directors": ["John Stevenson"],
      "officialUrl": "http://www.sherlockgnomes.com/#/",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG"
      }],
      "advisories": ["Adult Situations"],
      "runTime": "PT01H26M",
      "animation": "Animated",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p13794695_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T14:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=170893&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010590350000",
      "rootId": "14814469",
      "subType": "Feature Film",
      "title": "Blumhouse's Truth or Dare",
      "releaseYear": 2018,
      "releaseDate": "2018-04-13",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Horror", "Thriller"],
      "longDescription": "Olivia, Lucas and a group of their college friends travel to Mexico for one last getaway before graduation. While there, a stranger convinces one of the students to play a seemingly harmless game of truth or dare with the others. Once the game starts, it awakens something evil -- a demon which forces the friends to share dark secrets and confront their deepest fears. The rules are simple but wicked -- tell the truth or die, do the dare or die, and if you stop playing, you die.",
      "shortDescription": "A seemingly harmless game of truth or dare turns deadly for a group of college friends in Mexico.",
      "topCast": ["Lucy Hale", "Tyler Posey", "Violett Beane"],
      "directors": ["Jeff Wadlow"],
      "officialUrl": "http://www.blumhousestruthordare.com/",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "1.5"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Violence"],
      "runTime": "PT01H40M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14814469_v_v5_ab.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T14:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180899&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T19:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180899&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010776470000",
      "rootId": "15051839",
      "subType": "Feature Film",
      "title": "Breaking In",
      "releaseYear": 2018,
      "releaseDate": "2018-05-11",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Thriller"],
      "longDescription": "Shaun Russell takes her son and daughter on a weekend getaway to her late father's secluded, high-tech vacation home in the countryside. The family soon gets an unwelcome surprise when four men break into the house to find hidden money. After managing to escape, Shaun must now figure out a way to turn the tables on the desperate thieves and save her captive children.",
      "shortDescription": "A strong-willed woman battles four home intruders to save herself and her two children.",
      "topCast": ["Gabrielle Union", "Billy Burke", "Richard Cabral"],
      "directors": ["James McTeigue"],
      "officialUrl": "https://www.breakinginmovie.com/",
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Violence"],
      "runTime": "PT01H28M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p15051839_v_v5_ab.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T14:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T15:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T17:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T19:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T20:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T21:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T12:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T15:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T17:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T19:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=182165&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T22:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=182165&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010464450000",
      "rootId": "14660087",
      "subType": "Feature Film",
      "title": "A Quiet Place",
      "releaseYear": 2018,
      "releaseDate": "2018-03-09",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Horror", "Thriller"],
      "longDescription": "In upstate New York, a couple and their two children must remain silent in their isolated farmhouse to avoid mysterious creatures that use sound to hunt their prey. Using sign language and eye contact to communicate, the family members must rely on one another -- and their wits -- to live to see the next day.",
      "shortDescription": "A family must remain silent in its farmhouse to avoid mysterious creatures that use sound to hunt.",
      "topCast": ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
      "directors": ["John Krasinski"],
      "officialUrl": "http://www.paramount.com/movies/quiet-place",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3.5"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Situations", "Violence"],
      "runTime": "PT01H30M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "A Quiet Place (2018)",
          "lang": "en"
        },
        "uri": "assets/p14660087_p_v5_aa.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T15:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T17:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T20:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T22:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T12:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T15:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T17:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T19:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179044&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T22:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=179044&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010867660000",
      "rootId": "15167269",
      "subType": "Feature Film",
      "title": "Bad Samaritan",
      "releaseYear": 2018,
      "releaseDate": "2018-05-04",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Thriller"],
      "longDescription": "A young valet breaks into a man's home and discovers a terrified woman who's chained and gagged. After notifying the police, he soon becomes the target of the psychopath's wrath as he tries to rescue the victim that he left behind.",
      "shortDescription": "A young thief becomes the target of a psychopath after he discovers a woman chained in his home.",
      "topCast": ["David Tennant", "Robert Sheehan", "Carlito Olivero"],
      "directors": ["Dean Devlin"],
      "officialUrl": "https://www.electricentertainment.com/bad-samaritan",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "R"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Brief Nudity", "Violence"],
      "runTime": "PT01H47M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "Bad Samaritan (2018)",
          "lang": "en"
        },
        "uri": "assets/p15167269_p_v5_aa.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T16:50",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=183178&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T22:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=183178&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T16:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=183178&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T21:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=183178&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010464260000",
      "rootId": "14659754",
      "subType": "Feature Film",
      "title": "Blockers",
      "releaseYear": 2018,
      "releaseDate": "2018-03-10",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Comedy"],
      "longDescription": "Julie, Kayla and Sam are three high school seniors who make a pact to lose their virginity on prom night. Lisa, Mitchell and Hunter are three overprotective parents who flip out when they find out about their daughters' plans. They soon join forces for a wild and chaotic quest to stop the girls from sealing the deal -- no matter what the cost.",
      "shortDescription": "Three parents try to prevent their respective daughters from losing their virginity on prom night.",
      "topCast": ["Leslie Mann", "Ike Barinholtz", "John Cena"],
      "directors": ["Kay Cannon"],
      "officialUrl": "http://www.blockersmovie.com/home/",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "R"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Nudity"],
      "runTime": "PT01H42M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14659754_v_v5_ab.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T17:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179042&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T22:25",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=179042&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010546380000",
      "rootId": "14757770",
      "subType": "Feature Film",
      "title": "Beirut",
      "releaseYear": 2018,
      "releaseDate": "2018-01-22",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Thriller", "Drama"],
      "longDescription": "In 1980s Beirut, Mason Skiles is a former U.S. diplomat who is called back into service to save a colleague from the group that is possibly responsible for his own family's death. Meanwhile, a CIA field agent who is working under cover at the American embassy is tasked with keeping Mason alive and ensuring that the mission is a success.",
      "shortDescription": "A former U.S. diplomat returns to service in order to save a former colleague in Beirut.",
      "topCast": ["Jon Hamm", "Rosamund Pike", "Dean Norris"],
      "directors": ["Brad Anderson"],
      "officialUrl": "https://bleeckerstreetmedia.com/beirut",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "R"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Brief Nudity", "Violence"],
      "runTime": "PT01H49M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14757770_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T19:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=180152&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5954",
          "name": "Garden Cinemas Norwalk"
        },
        "dateTime": "2018-05-16T19:00",
        "barg": false
      }]
    }, {
      "tmsId": "MV010312830000",
      "rootId": "14477928",
      "subType": "Feature Film",
      "title": "Super Troopers 2",
      "releaseYear": 2018,
      "releaseDate": "2018-04-20",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Comedy"],
      "longDescription": "Fired for their previous shenanigans, former Vermont Highway Patrol officers Thorny, Farva, Rabbit, Foster and Mac get a shot at redemption from Capt. O'Hagan and Gov. Jessan. The wacky quintet must provide law enforcement for a French Canadian town that's transitioning to U.S. sovereignty. Their unconventional methods soon get put to the test when they encounter a smarmy mayor, mischievous Mounties, a smuggling ring and a 1,300-pound bear.",
      "shortDescription": "Disgraced officers Thorny, Farva, Rabbit, Foster and Mac get a shot at redemption in Canada.",
      "topCast": ["Jay Chandrasekhar", "Kevin Heffernan", "Steve Lemme"],
      "directors": ["Jay Chandrasekhar"],
      "officialUrl": "http://www.foxsearchlight.com/supertroopers2/",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "R"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Nudity"],
      "runTime": "PT01H43M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "Super Troopers 2 (2018)",
          "lang": "en"
        },
        "uri": "assets/p14477928_p_v5_ab.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5885",
          "name": "Bow Tie Cinemas Landmark 9"
        },
        "dateTime": "2018-05-16T22:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGW&m=176847&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010016820000",
      "rootId": "14085794",
      "subType": "Feature Film",
      "title": "A Wrinkle in Time",
      "releaseYear": 2018,
      "releaseDate": "2018-03-09",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Fantasy", "Adventure", "Science fiction", "Children"],
      "audience": "Children",
      "longDescription": "Meg Murry and her little brother, Charles Wallace, have been without their scientist father, Mr. Murry, for five years, ever since he discovered a new planet and used the concept known as a tesseract to travel there. Joined by Meg's classmate Calvin O'Keefe and guided by the three mysterious astral travelers known as Mrs. Whatsit, Mrs. Who and Mrs. Which, the children brave a dangerous journey to a planet that possesses all of the evil in the universe.",
      "shortDescription": "Two children brave a dangerous journey to an evil planet to find their scientist father.",
      "topCast": ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      "directors": ["Ava DuVernay"],
      "officialUrl": "http://movies.disney.com/a-wrinkle-in-time",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG"
      }],
      "advisories": ["Adult Situations"],
      "runTime": "PT01H49M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14085794_v_v5_af.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T13:45",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=173606&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T16:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=173606&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV009507390000",
      "rootId": "13499890",
      "subType": "Feature Film",
      "title": "Rampage",
      "releaseYear": 2018,
      "releaseDate": "2018-04-13",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Science fiction", "Adventure", "Action"],
      "longDescription": "Primatologist Davis Okoye shares an unshakable bond with George, an extraordinarily intelligent, silverback gorilla that's been in his care since birth. When a rogue genetic experiment goes wrong, it causes George, a wolf and a reptile to grow to a monstrous size. As the mutated beasts embark on a path of destruction, Okoye teams up with a discredited genetic engineer and the military to secure an antidote and prevent a global catastrophe.",
      "shortDescription": "Three gigantic, mutated beasts embark on a path of destruction when a genetic experiment goes wrong.",
      "topCast": ["Dwayne Johnson", "Naomie Harris", "Malin Akerman"],
      "directors": ["Brad Peyton"],
      "officialUrl": "http://www.rampagethemovie.com/home",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2.5"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Violence"],
      "runTime": "PT01H47M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "Rampage (2018)",
          "lang": "en"
        },
        "uri": "assets/p13499890_p_v5_an.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T14:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=168977&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T17:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=168977&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T19:30",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=168977&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T22:10",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=168977&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV010735050000",
      "rootId": "14992717",
      "subType": "Feature Film",
      "title": "I Feel Pretty",
      "releaseYear": 2018,
      "releaseDate": "2018-04-20",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Comedy"],
      "longDescription": "An ordinary woman who struggles with feelings of insecurity and inadequacy on a daily basis wakes from a fall believing she is suddenly the most beautiful and capable woman on the planet. With this newfound confidence, she is empowered to live her life fearlessly and flawlessly, but what will happen when she realizes her appearance never changed?",
      "shortDescription": "A woman who struggles with feelings of insecurity gains a renewed sense of self-confidence.",
      "topCast": ["Amy Schumer", "Michelle Williams", "Rory Scovel"],
      "directors": ["Abby Kohn", "Marc Silverstein"],
      "officialUrl": "http://stxfilms.com/ifeelpretty/#about",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Nudity"],
      "runTime": "PT01H50M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "I Feel Pretty (2018)",
          "lang": "en"
        },
        "uri": "assets/p14992717_p_v5_aa.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T19:15",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=181750&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5882",
          "name": "Bow Tie Cinemas Majestic 6"
        },
        "dateTime": "2018-05-16T22:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAJGV&m=181750&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T13:20",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=181750&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T18:40",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=181750&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV008885460000",
      "rootId": "12863030",
      "subType": "Feature Film",
      "title": "Avengers: Infinity War 3D",
      "releaseYear": 2018,
      "releaseDate": "2018-04-27",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Action", "Adventure", "Fantasy", "Science fiction"],
      "longDescription": "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
      "shortDescription": "Iron Man, Thor and the rest of the Avengers battle their most powerful enemy yet -- the evil Thanos.",
      "topCast": ["Robert Downey Jr.", "Chris Hemsworth", "Josh Brolin"],
      "directors": ["Anthony Russo", "Joe Russo"],
      "officialUrl": "https://marvel.com/avengers",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "PG-13"
      }],
      "advisories": ["Adult Language", "Adult Situations", "Violence"],
      "runTime": "PT02H29M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "Avengers: Infinity War 3D (2018)",
          "lang": "en"
        },
        "uri": "assets/p12863030_p_v5_ab.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T13:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162538&d=2018-05-16"
      }, {
        "theatre": {
          "id": "5884",
          "name": "Bow Tie Cinemas SONO Regent 8"
        },
        "dateTime": "2018-05-16T20:00",
        "barg": false,
        "ticketURI": "http://www.fandango.com/tms.asp?t=AAMVS&m=162538&d=2018-05-16"
      }]
    }, {
      "tmsId": "MV000651680000",
      "rootId": "65576",
      "subType": "Short Film",
      "title": "The Living Sea",
      "releaseYear": 1995,
      "releaseDate": "1995",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Documentary"],
      "shortDescription": "Filmmaker Greg MacGillivray examines the world's oceans and their importance to life on Earth.",
      "longDescription": "Filmmaker Greg MacGillivray examines the world's oceans and their importance to life on Earth.",
      "topCast": ["Meryl Streep"],
      "directors": ["Greg MacGillivray"],
      "officialUrl": "http://www.macfreefilms.com/films_inside.html",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "2.5"
      },
      "runTime": "PT00H40M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p65576_v_v5_aa.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5602",
          "name": "IMAX Maritime Aquarium Norwalk"
        },
        "dateTime": "2018-05-16T11:00",
        "quals": "A.M.",
        "barg": false
      }]
    }, {
      "tmsId": "MV010773050000",
      "rootId": "15048863",
      "subType": "Feature Film",
      "title": "Pandas",
      "releaseYear": 2018,
      "releaseDate": "2018",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Documentary"],
      "longDescription": "An American biologist embarks on a life-changing journey to China to help scientists breed giant pandas and introduce the cubs into the wild.",
      "shortDescription": "Scientists in China breed giant pandas and introduce the cubs into the wild.",
      "topCast": ["Kristen Bell"],
      "directors": ["David Douglas", "Drew Fellman"],
      "officialUrl": "https://www.imax.com/movies/pandas",
      "qualityRating": {
        "ratingsBody": "TMS",
        "value": "3.5"
      },
      "ratings": [{
        "body": "Motion Picture Association of America",
        "code": "G"
      }],
      "runTime": "PT00H40M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "caption": {
          "content": "Pandas (2018)",
          "lang": "en"
        },
        "uri": "assets/p15048863_p_v5_ad.jpg",
        "category": "Poster Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5602",
          "name": "IMAX Maritime Aquarium Norwalk"
        },
        "dateTime": "2018-05-16T12:00",
        "barg": false
      }, {
        "theatre": {
          "id": "5602",
          "name": "IMAX Maritime Aquarium Norwalk"
        },
        "dateTime": "2018-05-16T14:00",
        "barg": false
      }, {
        "theatre": {
          "id": "5602",
          "name": "IMAX Maritime Aquarium Norwalk"
        },
        "dateTime": "2018-05-16T16:00",
        "barg": false
      }]
    }, {
      "tmsId": "MV010978480000",
      "rootId": "15291999",
      "subType": "Feature Film",
      "title": "Backyard Wilderness",
      "releaseYear": 2018,
      "releaseDate": "2018-03-31",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Documentary"],
      "shortDescription": "The wonders of nature are viewed from the backyards of communities across the nation.",
      "longDescription": "The wonders of nature are viewed from the backyards of communities across the nation.",
      "runTime": "PT00H42M",
      "preferredImage": {
        "uri": "tvbanners/generic/generic_tvbanners_v5.png"
      },
      "showtimes": [{
        "theatre": {
          "id": "5602",
          "name": "IMAX Maritime Aquarium Norwalk"
        },
        "dateTime": "2018-05-16T13:00",
        "barg": false
      }, {
        "theatre": {
          "id": "5602",
          "name": "IMAX Maritime Aquarium Norwalk"
        },
        "dateTime": "2018-05-16T15:00",
        "barg": false
      }]
    }, {
      "tmsId": "MV010615420000",
      "rootId": "14840724",
      "subType": "Feature Film",
      "title": "Let the Sunshine In",
      "releaseYear": 2017,
      "releaseDate": "2017-06-23",
      "titleLang": "en",
      "descriptionLang": "en",
      "entityType": "Movie",
      "genres": ["Romantic comedy"],
      "longDescription": "A film by Claire Denis, director of Beau travail and White Material.",
      "shortDescription": "Isabelle, a Parisian artist and divorced mother, is looking for love.",
      "topCast": ["Juliette Binoche", "Xavier Beauvois", "Philippe Katerine"],
      "directors": ["Claire Denis"],
      "officialUrl": "http://www.ifcfilms.com/films/let-the-sunshine-in",
      "advisories": ["Adult Situations", "Nudity"],
      "runTime": "PT01H35M",
      "preferredImage": {
        "width": "240",
        "height": "360",
        "uri": "assets/p14840724_v_v5_ab.jpg",
        "category": "VOD Art",
        "text": "yes",
        "primary": "true"
      },
      "showtimes": [{
        "theatre": {
          "id": "5954",
          "name": "Garden Cinemas Norwalk"
        },
        "dateTime": "2018-05-16T19:10",
        "barg": false
      }]
    }];

    return {
      users,
      areas,
      theaters
    };
  }
}

