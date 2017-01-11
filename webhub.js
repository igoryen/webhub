// 3
var Filler = {

    dofill: function (ary) {
        for (var i = 0; i < ary.length; i++) {
            console.log(ary[i].name);
        };
    },

    renderName: function (id, string) { // 17
        var id = document.getElementById(id);
        id.innerHTML = string;
    },
    // 2
    compareCategories: function(a,b) {
        if (a.cat < b.cat)
            return -1;
          if (a.cat > b.cat)
            return 1;
        return 0;
    },
    // 1
    compareNames: function(a,b) {
        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;
    },
    // 4
    outputArrayOfObjects: function (aryOfLinks, id) {

        $list = document.getElementById('catlist'); // 5
        // console.log($list);
        var div = document.createElement("div"); // 6
        div.setAttribute("id", id);

        var h3 = document.createElement("h3"); // 7
        h3.innerHTML = id.charAt(0).toUpperCase() + id.slice(1) + " (" + aryOfLinks.length +")"; // 8

        var ul = document.createElement("ul"); // 9
        
        aryOfLinks.sort(this.compareNames); // 11

        for (var i = 0; i < aryOfLinks.length; i++) {

            var li = document.createElement("li"); // 12
            var anchor = document.createElement("a"); // 13

            anchor.setAttribute("href", aryOfLinks[i].link );
            anchor.setAttribute("target", "_blank" );
            anchor.innerHTML = aryOfLinks[i].name;

            li.appendChild(anchor);
            ul.appendChild(li);
        };
        
        div.appendChild(h3);
        div.appendChild(ul);

        $list.appendChild(div);
    },

    createLists: function(objects) { // 16

        var start = document.getElementById('start'); // 14
        console.log(objects.length);

        objects.sort(this.compareCategories); // 15

        var categories = {
            bible: {name: "bible", links: []},
            cool: {name: "cool", links: []},
            entertainment: {name: "entertainment", links: []},
            funny: {name: "funny", links: []},
            health: {name: "health", links: []},
            jobhunt: {name: "jobhunt", links: []},
            language: {name: "language", links: []},
            mine: {name: "mine", links: []},
            news: {name: "news", links: []},
            programming: {name: "programming", links: []},
            social: {name: "social", links: []},
            styling: {name: "social", links: []},
        };

        for (var i = 0; i < objects.length; i++) {

            switch (objects[i].cat) {
                case 'funny':
                    categories.funny.links.push(objects[i]);
                    break;
                case 'news':
                    categories.news.links.push(objects[i]);
                    break;
                case 'entertainment':
                    categories.entertainment.links.push(objects[i]);
                    break;
                case 'programming':
                    categories.programming.links.push(objects[i]);
                    break;
                case 'language':
                    categories.language.links.push(objects[i]);
                    break;
                case 'jobhunt':
                    categories.jobhunt.links.push(objects[i]);
                    break;
                case 'bible':
                    categories.bible.links.push(objects[i]);
                    break;
                case 'cool':
                    categories.cool.links.push(objects[i]);
                    break;
                case 'styling':
                    categories.styling.links.push(objects[i]);
                    break;
                case 'mine':
                    categories.mine.links.push(objects[i]);
                    break;
                case 'health':
                    categories.health.links.push(objects[i]);
                    break;
                case 'social':
                    categories.social.links.push(objects[i]);
                    break;
                default:
                    break;
            }
        }
        console.log(Object.keys(categories).length);

        for( var c in categories) {
            var category = categories[c];
            this.outputArrayOfObjects(category.links, category.name);
        }
    },

};

var f = Object.create(Filler);
//f.dofill(links);

window.onload = function() {
    // 18
    var links = [
        {
            name: "Twitter",
            link: "https://twitter.com/",
            cat: "social"
        },
        {
            name: "В Контакте",
            link: "https://vk.com/feed",
            cat: "social"
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/",
            cat: "social"
        },
        {
            name: "Одноклассники",
            link: "https://ok.ru/",
            cat: "social"
        },
        {
            name: "igoryen.com",
            link: "http://igoryen.com/",
            cat: "mine"
        },
        {
            name: "Heroku",
            link: "https://www.heroku.com/home",
            cat: "programming"
        },
        {
            name: "Monster",
            link: "http://www.monster.ca/",
            cat: "jobhunt"
        },
        {
            name: "ZipRecruiter",
            link: "https://www.ziprecruiter.com/candidate/suggested-jobs",
            cat: "jobhunt"
        },
        {
            name: "Workopolis",
            link: "http://www.workopolis.com/shared/en/home/index",
            cat: "jobhunt"
        },
        {
            name: "Sharij - Youtube",
            link: "https://www.youtube.com/watch?v=S7r0VctD0C4&list=UUVPYbobPRzz0SjinWekjUBw",
            cat: "news"
        },
        {
            name: "Sia - The Greatest - Musicless",
            link: "https://www.youtube.com/watch?v=-PHfG3Oi_TE",
            cat: "funny"
        },
        {
            name: "Anatolij Sharij",
            link: "http://sharij.net/",
            cat: "news"

        },
        {
            name: "9GAG",
            link: "http://9gag.com/",
            cat: "entertainment"
        },
        {
            name: "LostFilm.tv",
            link: "https://www.lostfilm.tv/",
            cat: "entertainment"
        },
        {
            name: "Urban Dictionary",
            link: "http://www.urbandictionary.com/",
            cat: "language"

        },
        {
            name: "Bodybuilding.com",
            link: "http://www.bodybuilding.com/",
            cat: "health"
        },
        {   
            name: "CCS",
            link: "http://site13/",
            cat: "mine"
        },
        {
            name: "Urban Giraffe",
            link: "https://urbangiraffe.com/articles/how-to-install-a-wordpress-plugin/",
            cat: "cool"
        },
        {
            name: "Google Calendar",
            link: "https://calendar.google.com/calendar/render#main_7",
            cat: "jobhunt"
        },
        {
            name: "JS Slideshow",
            link: "file:///C:/aaa/ig/js-slideshow/index.html",
            cat: "mine"
        },
        {
            name: "Ornbo",
            link: "http://127.0.0.1:8888/",
            cat: "mine"
        },
        {
            name: "CIC",
            link: "http://site12/",
            cat: "mine"
        },
        {
            name: "Breadfruit",
            link: "http://site11/",
            cat: "mine"
        },
        {
            name: "Maximovich",
            link: "http://site10/",
            cat: "mine"
        },
        {
            name: "Tarboz",
            link: "http://site9/",
            cat: "mine"
        },
        {
            name: "Feijoa",
            link: "http://site7/",
            cat: "mine"
        },
        {
            name: "Mei",
            link: "http://site6/",
            cat: "mine"
        },
        {
            name: "Barberry 2",
            link: "http://site5/",
            cat: "mine"
        },
        {
            name: "Almond 2",
            link: "http://site4/",
            cat: "mine"
        },
        {
            name: "Agave",
            link: "http://site3/",
            cat: "mine"
        },
        {
            name: "Eggfruit (Laravel)",
            link: "http://site8/",
            cat: "mine"
        },
        {
            name: "Eggfruit",
            link: "http://site2/",
            cat: "mine"
        },
        {
            name: "Bearberry 2",
            link: "http://site1/",
            cat: "mine"
        },
        {
			name: "Russian Freq Dict.", 
            link: "http://dict.ruslang.ru/freq.php?act=show&dic=freq_spoken&title=%D7%E0%F1%F2%EE%F2%ED%FB%E9%20%F1%EB%EE%E2%E0%F0%FC%20%E6%E8%E2%EE%E9%20%F3%F1%F2%ED%EE%E9%20%F0%E5%F7%E8",
            cat: "language"
		},
        {
            cat: "language",
			name: "Interslavic", 
            link: "http://steen.free.fr/interslavic/index.html"
		},
        {
            cat: "language",
			name: "Interslavic Lexicon", 
            link: "http://dict.interslavic.com/index.jsp"
		},
        {
            cat: "language",
			name: "Izvestija.info", 
            link: "http://izviestija.info/"
		},
        {
            cat: "programming",
			name: "React vs Angular 2", 
            link: "https://www.codementor.io/codementorteam/tutorials/react-vs-angular-2-comparison-beginners-guide-lvz5710ha?utm_source=sendgrid&utm_medium=email&utm_term=react-vs-angular2&utm_content=tutorial&utm_campaign=newsletter20161130"
		},
        {
            cat: "programming",
			name: "JavaScript Fatigue", 
            link: "https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.saiwxmdj4"
		},
        {
            cat: "programming",
			name: "jQuery vs Vanilla", 
            link: "https://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/"
		},
        {
            cat: "programming",
			name: "This just isn't functional", 
            link: "https://codewords.recurse.com/issues/six/this-just-isnt-functional"
		},
        {
            cat: "programming",
			name: "Six Simple Mind Tricks to Help You Learn JavaScript Faster", 
            link: "https://www.sitepoint.com/mind-tricks-to-learn-javascript-faster/"
		},
        {
            cat: "programming",
			name: "SOAP vs REST", 
            link: "http://hamidarebai.blogspot.ca/2016/09/difference-between-soap-and-rest-web.html"
		},
        {
            cat: "language",
			name: "Interslavic Dictionary (Dynamic)", 
            link: "http://steen.free.fr/interslavic/dynamic_dictionary.html"
		},
        {
            cat: "language",
			name: "NeoSlavonic Language (Google Doc)", 
            link: "https://drive.google.com/drive/folders/0B5dkyWO6wMH2ZHhhRUZaMllneFU"
        },
        {
            cat: "programming",
            name: "Digital Ocean",
            link: "https://www.digitalocean.com/"
        },
        {
            cat: "programming",
            name: "Github",
            link: "https://github.com/igoryen"
        },
        {
            cat: "jobhunt",
            name: "LinkedIn",
            link: "https://ca.linkedin.com/in/igoryen"
        },
        {
            cat: "jobhunt",
            name: "Sample post interview Thank you note",
            link: "https://www.job-hunt.org/job_interviews/sample-interview-thank-you-email.shtml"
        },
        {
            cat: "cool",
            name: "Ideator",
            link: "http://ideator.ca/"
        },
        {
            cat: "language",
            name: "IPA with sounds",
            link: "http://www.yorku.ca/earmstro/ipa/index.html"
        },
        {
            cat: "language",
            name: "Russian Phonology",
            link: "https://en.wikipedia.org/wiki/Russian_phonology"
        },
        {
            cat: "bible",
            name: "McGee Bible commentaries (audio)",
            link: "https://www.blueletterbible.org/audio_video/mcgee_j_vernon"
        },
        {
            cat: "programming",
            name: "github: Eggfruit (Laravel)",
            link: "https://github.com/igoryen/eggfruit_mvc"
        },
        {
            cat: "language",
            name: "Scotts translator",
            link: "http://www.whoohoo.co.uk/main.asp"
        },
        {
            cat: "programming",
            name: "github: CCS (Calvary Chapel)",
            link: "https://github.com/igoryen/ccs"
        },
        {
            cat: "jobhunt",
            name: "Glassdoor",
            link: "https://www.glassdoor.ca/index.htm",
        },
        {
            cat: "styling",
            name: "HTML Color Codes",
            link: "http://htmlcolorcodes.com/"
        }
    ];

    f.renderName("heading", "WebHub");
    console.log("Hi")
    f.createLists(links);
}