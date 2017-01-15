// 3
var Filler = {

    dofill: function (ary) {
        for (var i = 0; i < ary.length; i++) {
            type: "",
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
            var span = document.createElement("span");

            anchor.setAttribute("href", aryOfLinks[i].link );
            anchor.setAttribute("target", "_blank" );
            anchor.innerHTML = aryOfLinks[i].name;

            span.setAttribute("class", "desc")
            span.innerHTML = aryOfLinks[i].desc;

            li.appendChild(anchor);
            li.appendChild(span);

            // li.innerHTML = " <i>" + aryOfLinks[i].desc + "</i>";
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
            type: "",
            bible: {name: "bible", links: []},
            cool: {name: "cool", links: []},
            entertainment: {name: "entertainment", links: []},
            funny: {name: "funny", links: []},
            health: {name: "health", links: []},
            jobhunt: {name: "jobhunt", links: []},
            language: {name: "language", links: []},
            mine: {name: "mine", links: []},
            news: {name: "news", links: []},
            politics: {name: "politics", links: []},
            programming: {name: "programming", links: []},
            social: {name: "social", links: []},
            styling: {name: "styling", links: []},
        };

        for (var i = 0; i < objects.length; i++) {

            switch (objects[i].cat) {
            type: "",
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
                case 'politics':
                    categories.politics.links.push(objects[i]);
                    break;
                default:
                    break;
            }
        }
        console.log(Object.keys(categories).length);

        for( var c in categories) {
            type: "",
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
            type: "",
            name: "Churkin vs Power",
            link: "https://www.youtube.com/watch?v=WGXCzwNlzDw",
            cat: "politics",
            desc: "Russia, US clash at UNSC meeting, Syria envoy blames govt & opposition for escalation"
        },
        {
            type: "",
            name: "Churkin on the US",
            link: "https://www.youtube.com/watch?v=bID01gIEIOY",
            cat: "politics",
            desc: " response on Obama actions in Syria"
        },
        {
            type: "",
            name: "Churkin on accusations",
            link: "https://www.youtube.com/watch?v=Ur64xVRp5L0",
            cat: "politics",
            desc: "Churkin talks about accusations"
        },
        {
            type: "",
            name: "CoderStats(igoryen)",
            link: "http://coderstats.net/github/igoryen/",
            cat: "mine",
            desc: "My GitHub statistics"
        },
        {
            type: "",
            name: "GitHub Visualizer",
            link: "http://ghv.artzub.com/#user=igoryen",
            cat: "mine",
            desc: "My GitHub statistics visualized"
        },
        {
            type: "",
            name: "TPM Tabs",
            link: "file:///C:/aaa/ig/tpm_tabs/tabs.html",
            cat: "mine",
            desc: "The tabs I used while at TPM (2015-2016)"
        },
        {
            type: "",
            name: "Biribi",
            link: "file:///C:/aaa/ig/biribi/index.html",
            cat: "mine",
            desc: "several JS files working together"    
        },
        {
            type: "",
            name: "ng2reddit",
            link: "http://localhost:4200/",
            cat: "mine",
            desc: "Reddit in Angular 2 by a book"
        },
        {
            type: "",
            name: "Twitter",
            link: "https://twitter.com/",
            cat: "social",
            desc: ""
        },
        {
            type: "",
            name: "В Контакте",
            link: "https://vk.com/feed",
            cat: "social",
            desc: ""
        },
        {
            type: "",
            name: "Facebook",
            link: "https://www.facebook.com/",
            cat: "social",
            desc: ""
        },
        {
            type: "",
            name: "Одноклассники",
            link: "https://ok.ru/",
            cat: "social",
            desc: ""
        },
        {
            type: "",
            name: "igoryen.com",
            link: "http://igoryen.com/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Heroku",
            link: "https://www.heroku.com/home",
            cat: "programming",
            desc: ""
       },
        {
            type: "",
            name: "Monster",
            link: "http://www.monster.ca/",
            cat: "jobhunt",
            desc: ""
        },
        {
            type: "",
            name: "ZipRecruiter",
            link: "https://www.ziprecruiter.com/candidate/suggested-jobs",
            cat: "jobhunt",
            desc: ""
        },
        {
            type: "",
            name: "Workopolis",
            link: "http://www.workopolis.com/shared/en/home/index",
            cat: "jobhunt",
            desc: ""
        },
        {
            type: "",
            name: "Sharij - Youtube",
            link: "https://www.youtube.com/watch?v=S7r0VctD0C4&list=UUVPYbobPRzz0SjinWekjUBw",
            cat: "news",
            desc: "The famous blogger Anatolij Sharij"
        },
        {
            type: "",
            name: "Sia - The Greatest - Musicless",
            link: "https://www.youtube.com/watch?v=-PHfG3Oi_TE",
            cat: "funny",
            desc: ""
        },
        {
            type: "",
            name: "Anatolij Sharij",
            link: "http://sharij.net/",
            cat: "news",
            desc: ""
        },
        {
            type: "",
            name: "9GAG",
            link: "http://9gag.com/",
            cat: "entertainment",
            desc: ""
        },
        {
            type: "",
            name: "LostFilm.tv",
            link: "https://www.lostfilm.tv/",
            cat: "entertainment",
            desc: ""
        },
        {
            type: "",
            name: "Urban Dictionary",
            link: "http://www.urbandictionary.com/",
            cat: "language",
            desc: ""
        },
        {
            type: "",
            name: "Bodybuilding.com",
            link: "http://www.bodybuilding.com/",
            cat: "health",
            desc: ""
        },
        {   
            type: "",
            name: "CCS",
            link: "http://site13/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Urban Giraffe",
            link: "https://urbangiraffe.com/articles/how-to-install-a-wordpress-plugin/",
            cat: "cool",
            desc: ""
        },
        {
            type: "",
            name: "Google Calendar",
            link: "https://calendar.google.com/calendar/render#main_7",
            cat: "jobhunt",
            desc: ""
        },
        {
            type: "",
            name: "JS Slideshow",
            link: "file:///C:/aaa/ig/js-slideshow/index.html",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Ornbo",
            link: "http://127.0.0.1:8888/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "CIC",
            link: "http://site12/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Breadfruit",
            link: "http://site11/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Maximovich",
            link: "http://site10/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Tarboz",
            link: "http://site9/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Feijoa",
            link: "http://site7/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Mei",
            link: "http://site6/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Barberry 2",
            link: "http://site5/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Almond 2",
            link: "http://site4/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Agave",
            link: "http://site3/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Eggfruit (Laravel)",
            link: "http://site8/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Eggfruit",
            link: "http://site2/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Bearberry 2",
            link: "http://site1/",
            cat: "mine",
            desc: ""
        },
        {
            type: "",
            name: "Russian Freq Dict.", 
            link: "http://dict.ruslang.ru/freq.php?act=show&dic=freq_spoken&title=%D7%E0%F1%F2%EE%F2%ED%FB%E9%20%F1%EB%EE%E2%E0%F0%FC%20%E6%E8%E2%EE%E9%20%F3%F1%F2%ED%EE%E9%20%F0%E5%F7%E8",
            cat: "language",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "Interslavic", 
            link: "http://steen.free.fr/interslavic/index.html",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "Interslavic Lexicon", 
            link: "http://dict.interslavic.com/index.jsp",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "Izvestija.info", 
            link: "http://izviestija.info/",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "React vs Angular 2", 
            link: "https://www.codementor.io/codementorteam/tutorials/react-vs-angular-2-comparison-beginners-guide-lvz5710ha?utm_source=sendgrid&utm_medium=email&utm_term=react-vs-angular2&utm_content=tutorial&utm_campaign=newsletter20161130",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "JavaScript Fatigue", 
            link: "https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.saiwxmdj4",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "jQuery vs Vanilla", 
            link: "https://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "This just isn't functional", 
            link: "https://codewords.recurse.com/issues/six/this-just-isnt-functional",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "Six Simple Mind Tricks to Help You Learn JavaScript Faster", 
            link: "https://www.sitepoint.com/mind-tricks-to-learn-javascript-faster/",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "SOAP vs REST", 
            link: "http://hamidarebai.blogspot.ca/2016/09/difference-between-soap-and-rest-web.html",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "Interslavic Dictionary (Dynamic)", 
            link: "http://steen.free.fr/interslavic/dynamic_dictionary.html",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "NeoSlavonic Language (Google Doc)", 
            link: "https://drive.google.com/drive/folders/0B5dkyWO6wMH2ZHhhRUZaMllneFU",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "Digital Ocean",
            link: "https://www.digitalocean.com/",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "Github",
            link: "https://github.com/igoryen",
            desc: ""
        },
        {
            type: "",
            cat: "jobhunt",
            name: "LinkedIn",
            link: "https://ca.linkedin.com/in/igoryen",
            desc: ""
        },
        {
            type: "",
            cat: "jobhunt",
            name: "Sample post interview Thank you note",
            link: "https://www.job-hunt.org/job_interviews/sample-interview-thank-you-email.shtml",
            desc: ""
        },
        {
            type: "",
            cat: "cool",
            name: "Ideator",
            link: "http://ideator.ca/",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "IPA with sounds",
            link: "http://www.yorku.ca/earmstro/ipa/index.html",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "Russian Phonology",
            link: "https://en.wikipedia.org/wiki/Russian_phonology",
            desc: ""
        },
        {
            type: "",
            cat: "bible",
            name: "McGee Bible commentaries (audio)",
            link: "https://www.blueletterbible.org/audio_video/mcgee_j_vernon",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "github: Eggfruit (Laravel)",
            link: "https://github.com/igoryen/eggfruit_mvc",
            desc: ""
        },
        {
            type: "",
            cat: "language",
            name: "Scotts translator",
            link: "http://www.whoohoo.co.uk/main.asp",
            desc: ""
        },
        {
            type: "",
            cat: "programming",
            name: "github: CCS (Calvary Chapel)",
            link: "https://github.com/igoryen/ccs",
            desc: ""
        },
        {
            type: "",
            cat: "jobhunt",
            name: "Glassdoor",
            link: "https://www.glassdoor.ca/index.htm",
            desc: ""
        },
        {
            type: "",
            cat: "styling",
            name: "HTML Color Codes",
            link: "http://htmlcolorcodes.com/",
            desc: ""
        }
    ];

    f.renderName("heading", "WebHub");
    console.log("Hi")
    f.createLists(links);
}