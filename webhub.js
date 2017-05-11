// 3
var Filler = {
    // categs: {
    //     bible: {name: "bible", links: []},
    //     cool: {name: "cool", links: []},
    //     entertainment: {name: "entertainment", links: []},
    //     funny: {name: "funny", links: []},
    //     health: {name: "health", links: []},
    //     immigration: {name: "immigration", links: []},
    //     jobhunt: {name: "jobhunt", links: []},
    //     language: {name: "language", links: []},
    //     mine: {name: "mine", links: []},
    //     news: {name: "news", links: []},
    //     politics: {name: "politics", links: []},
    //     programming: {name: "programming", links: []},
    //     russia: {name: "russia", links: []},
    //     social: {name: "social", links: []},
    //     styling: {name: "styling", links: []},
    // },

    dofill: function (ary) {
        for (var i = 0; i < ary.length; i++) {
            // console.log(ary[i].name);
        }
    },
    renderName: function (id, string) { // 17
        var id = document.getElementById(id);
        id.innerHTML = string;
    },
    // 2
    compareCategories: function (a, b) {
        if (a.cat < b.cat)
            return -1;
        if (a.cat > b.cat)
            return 1;
        return 0;
    },
    // 1
    compareNames: function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;
    },
    createLink: function (arrayElement) {
        var anchor = document.createElement("a"); // 13
        var span = document.createElement("span");
        if (arrayElement.type == 'youtube') {
            anchor.setAttribute("href", "https://www.youtube.com/watch?v=" + arrayElement.link);
        } else {
            anchor.setAttribute("href", arrayElement.link);
        }

        anchor.setAttribute("target", "_blank");
        anchor.innerHTML = arrayElement.name;

        span.setAttribute("class", "desc")
        span.innerHTML = arrayElement.desc;

        return {span: span, anchor: anchor};
    },
    createModal: function (arrayElement) {
        // 22
        var playbtn = document.createElement("div");
        playbtn.setAttribute("class", "play-button");

        // 23
        var video = document.createElement("div");
        video.setAttribute("class", "youtube");
        video.setAttribute("data-embed", arrayElement.link);
        video.setAttribute("id", "video_" + arrayElement.link);

        video.appendChild(playbtn); // 24

        // 25
        var closer = document.createElement("span");
        closer.setAttribute("id", "close_" + arrayElement.link);
        closer.innerHTML = "&times;";

        // 26
        var content = document.createElement("div");
        content.setAttribute("id", "content_" + arrayElement.link);

        content.appendChild(closer); // 27
        content.appendChild(video); // 28


        var modal = document.createElement("div");
        modal.setAttribute("id", "modal_" + arrayElement.link);

        modal.appendChild(content);

        return modal;
    },
    // createTabs: function( ) {
    //     var $nail = $("#tabs");
    //     console.log(this.categs.length);
    //     for (var i = 0; i < this.categs.length; i++) {
    //         console.log(i);
    //         var li = $("<li></li>");
    //         console.log(li);
    //         var anchor = $("<a/>");
    //         anchor.attr("href", "#" + this.categs[i].name);
    //         anchor.text(this.categs[i].name)
    //         li.append(anchor);
    //         $nail.append(li);
    //     }
    // },
    // 4
    outputArrayOfObjects: function (aryOfLinks, id, isFirst) {

        $list = document.getElementById('catlist'); // 5
        // console.log($list);
        // console.log('id: ' + id);
        var div = document.createElement("div"); // 6
        div.setAttribute("id", id);
        if (isFirst == true) {
            div.setAttribute("class", "tab-pane fade in active");
        } else {
            div.setAttribute("class", "tab-pane fade");
        }


        var h3 = document.createElement("h3"); // 7
        //h3.innerHTML = id.charAt(0).toUpperCase() + id.slice(1) + " (" + aryOfLinks.length +")"; // 8
        h3.innerHTML = id.charAt(0).toUpperCase() + id.slice(1); // 8
        var tab = "tab-" + id;
        console.log(tab + " (" + aryOfLinks.length + ")");
        document.getElementById(tab).innerHTML = " (" + aryOfLinks.length + ")"; // 8

        var ul = document.createElement("ul"); // 9

        aryOfLinks.sort(this.compareNames); // 11

        for (var i = 0; i < aryOfLinks.length; i++) {
            var li = document.createElement("li"); // 12
            // TO DO
            // if (aryOfLinks[i].type == 'youtube') {

            //     var span = document.createElement("span");
            //     span.setAttribute("id", "trigger_" + aryOfLinks[i].link );
            //     span.innerHTML = aryOfLinks[i].name;
            //     li.appendChild(span);

            //     // modal = this.createModal(aryOfLinks[i]);

            //     // TO DO: fix this later
            //     // li.appendChild(modal);

            // } else {
            var obj = this.createLink(aryOfLinks[i]);
            li.appendChild(obj.anchor);
            li.appendChild(obj.span);
            // }
            ul.appendChild(li);
        }
        ;

        div.appendChild(h3);
        div.appendChild(ul);

        $list.appendChild(div);
    },
    createLists: function (objects) { // 16

        var start = document.getElementById('start'); // 14
        // console.log(objects.length);

        objects.sort(this.compareCategories); // 15

        var categories = {
            bible: {name: "bible", links: []},
            cool: {name: "cool", links: []},
            entertainment: {name: "entertainment", links: []},
            funny: {name: "funny", links: []},
            health: {name: "health", links: []},
            immigration: {name: "immigration", links: []},
            javascript: {name: "javascript", links: []},
            jobhunt: {name: "jobhunt", links: []},
            language: {name: "language", links: []},
            mine: {name: "mine", links: []},
            nas: {name: "nas", links: []},
            news: {name: "news", links: []},
            politics: {name: "politics", links: []},
            programming: {name: "programming", links: []},
            russia: {name: "russia", links: []},
            social: {name: "social", links: []},
            useful: {name: "useful", links: []},
            war: {name: "war", links: []},
            webdesign: {name: "webdesign", links: []},
        };

        // this.createTabs( categories );

        for (var i = 0; i < objects.length; i++) {

            switch (objects[i].cat) {
                case 'useful':
                    categories.useful.links.push(objects[i]);
                    break;
                case 'war':
                    categories.war.links.push(objects[i]);
                    break;
                case 'nas':
                    categories.nas.links.push(objects[i]);
                    break;
                case 'javascript':
                    categories.javascript.links.push(objects[i]);
                    break;
                case 'webdesign':
                    categories.webdesign.links.push(objects[i]);
                    break;
                case 'immigration':
                    categories.immigration.links.push(objects[i]);
                    break;
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
                case 'russia':
                    categories.russia.links.push(objects[i]);
                    break;
                default:
                    break;
            }
        }
        console.log(Object.keys(categories).length);
        var counter = 0;
        for (var c in categories) {
            var category = categories[c];
            if (counter == 0) {
                this.outputArrayOfObjects(category.links, category.name, true);
                var tab = "#tab-" + category.id;
                console.log(tab);
                //document.getElementById(tab).innerHTML = " (" + aryOfLinks.length +")"; // 8
            } else {
                this.outputArrayOfObjects(category.links, category.name, false);
            }
            counter++;
        }
    },
    init: function () {

        // this.createTabs();

        var youtube = document.querySelectorAll(".youtube"); // 29

        for (var i = 0; i < youtube.length; i++) { // 30
            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/mqdefault.jpg";  // 31
            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[ i ].appendChild(image);
            }(i));
            youtube[i].addEventListener("click", function () {

                var iframe = document.createElement("iframe");

                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                this.innerHTML = "";
                this.appendChild(iframe);
            });
        }
        // ------------------------------------

        // var YTtrigger = document.getElementById('trigger_Ur64xVRp5L0');
        // // console.log(YTtrigger);
        // YTtrigger.onclick = function() {
        //     // console.log("click on YT trigger!");
        //     YTmodal.style.display = "block";
        //     // YTtrigger.style.color = "red";
        // }

        // var YTmodal = document.getElementById("modal_Ur64xVRp5L0");



        // var TYclose = document.getElementById("close_Ur64xVRp5L0");



        // TYclose.onclick = function() {
        //     // console.log("click on YT close!");

        //     YTmodal.style.display = "none";
        //     // $("iframe_Ur64xVRp5L0").get(0).stopVideo();
        // }
        // window.onclick = function(event) {
        //     // console.log("click on window!");
        //     if(event.target == YTmodal) {
        //         YTmodal.style.display = "none";
        //         $('#video_Ur64xVRp5L0').find('video').stopVideo();
        //         // var vid = $("#video_Ur64xVRp5L0").attr("src"); // 19
        //         // $("#video_Ur64xVRp5L0").find('iframe').attr('src', ''); // 20
        //         // $("#video_Ur64xVRp5L0").find('iframe').attr('src', vid); // 21

        //     }
        // }

    }

};

var f = Object.create(Filler);
//f.dofill(links);


window.onload = function () {

    // 18
    var links = [
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        // {
        //     type: "",
        //     name: "",
        //     link: "",
        //     cat:  "",
        //     desc: ""
        // },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "",
            link: "",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "Web Design Ledger",
            link: "https://webdesignledger.com/20-excellent-examples-of-forms-in-web-design/",
            cat:  "webdesign",
            desc: "forms"
        },
        {
            type: "",
            name: "SASS Meister",
            link: "https://www.sassmeister.com/",
            cat:  "webdesign",
            desc: "online SASS compiler"
        },
        
        {
            type: "",
            name: "Time & Zone",
            link: "http://www.timeandzone.com/?hl=en",
            cat:  "useful",
            desc: "time & zone converter"
        },
        
        {
            type: "",
            name: "Jason Davies",
            link: "https://www.jasondavies.com//",
            cat:  "cool",
            desc: "free lance software engineer"
        },
        
        {
            type: "",
            name: "ZhongWen.com",
            link: "http://zhongwen.com",
            cat:  "language",
            desc: "Chinese Characters and Etymology"
        },
        
        {
            type: "",
            name: "Reaction GIFs",
            link: "http://www.reactiongifs.com",
            cat:  "funny",
            desc: "Say it with a GIF! "
        },
        
        {
            type: "",
            name: "War is Over",
            link: "http://wio.ru/index.htm",
            cat:  "war",
            desc: "photos"
        },
        {
            type: "",
            name: "Hiwi",
            link: "https://en.wikipedia.org/wiki/Hiwi_(volunteer)",
            cat:  "war",
            desc: "Nazi collaborationists"
        },
        {
            type: "",
            name: "Census",
            link: "https://www.census.gov/popclock/world",
            cat:  "cool",
            desc: "US census bureau"
        },

        {
            type: "",
            name: "World-o-Meters",
            link: "http://www.worldometers.info",
            cat:  "cool",
            desc: "statistics"
        },

        
        {
            type: "",
            name: "HipChat",
            link: "https://inhouseusa.hipchat.com/chat",
            cat:  "nas",
            desc: "InHouse"
        },
        {
            type: "",
            name: "NAS test Carib",
            link: "https://test.carib-nas.com",
            cat:  "nas",
            desc: ""
        },
        {
            type: "",
            name: "NRS test",
            link: "https://test.nwrs.ca/newrecovery",
            cat:  "nas",
            desc: "Nationwide Recovery Services"
        },

        {
            type: "",
            name: "HCS",
            link: "https://portaluat.nwhcs.ca/",
            cat:  "nas",
            desc: "Home Closing Services of Nationwide"
        },
        
       {
            type: "",
            name: "NAS test Mexico",
            link: "https://test.nasv.mx/NAS",
            cat:  "nas",
            desc: ""
        },
                {
            type: "",
            name: "NAS test Scotia",
            link: "https://test.nationwideappraisals.com/NAS/scotiabanknas",
            cat:  "nas",
            desc: ""
        },
        {
            type: "",
            name: "NAS",
            link: "https://test.nationwideappraisals.com",
            cat:  "nas",
            desc: "test"
        },
        {
            type: "",
            name: "Connexions UAT",
            link: "https://uat-wintrust.inhouseusa.com",
            cat:  "nas",
            desc: "Wintrust Mortgage"
        },

        {
            type: "",
            name: "Solutions test",
            link: "https://test.solutionsamc.com/NAS/",
            cat:  "nas",
            desc: "InHouseUSA"
        },        
        {
            type: "",
            name: "CSS-matic",
            link: "http://www.cssmatic.com/",
            cat:  "webdesign",
            desc: "CSS tools: gradient generator etc."
        },        
        {
            type: "",
            name: "Bible Hub",
            link: "http://biblehub.com/",
            cat:  "bible",
            desc: "Online Bible Study Suite"
        },
        {
            type: "",
            name: "HTML5 Doctor",
            link: "http://html5doctor.com/",
            cat:  "webdesign",
            desc: "new HTML tags"
        },
        {
            type: "",
            name: "Assai",
            link: "https://github.com/igoryen/assai/blob/master/prj_catalog.md",
            cat:  "mine",
            desc: "catalog of my projects on GitHub"
        },
        {
            type: "",
            name: "Screen-to-GIF",
            link: "http://www.screentogif.com",
            cat:  "programming",
            desc: "Create a GIF from a screenshot"
        },        
        {
            type: "",
            name: "Jira",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/secure/RapidBoard.jspa?rapidView=7&projectKey=NE",
            cat:  "nas",
            desc: "NAS Jira Board"
        },
        {
            type: "",
            name: "Flexbox cheatsheet",
            link: "http://www.sketchingwithcss.com/samplechapter/cheatsheet.html",
            cat:  "webdesign",
            desc: ""
        },
        
        {
            type: "",
            name: "HTML Color Picker",
            link: "https://www.w3schools.com/colors/colors_picker.asp",
            cat:  "webdesign",
            desc: "w3schools.com"
        },
        {
            type: "",
            name: "Responsive Tables",
            link: "https://css-tricks.com/accessible-simple-responsive-tables/",
            cat:  "webdesign",
            desc: "CSS-Tricks"
        },
        {
            type: "",
            name: "Flexbox Guide",
            link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            cat:  "webdesign",
            desc: "CSS-Tricks"
        },
        {
            type: "",
            name: "Sublime Keyboard Shortcuts",
            link: "http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_win.html",
            cat:  "programming",
            desc: ""
        },
        {
            type: "",
            name: "Text Compare",
            link: "https://text-compare.com/",
            cat:  "programming",
            desc: " the tool to compare texts"
        },
        {
            type: "",
            name: "TNGOC",
            link: "http://tngoc.com/",
            cat:  "nas",
            desc: ""
        },
        {
            type: "",
            name: "InHouseUSA",
            link: "http://www.inhouseusa.com/",
            cat:  "nas",
            desc: ""
        },
        {
            type: "",
            name: "Neuroplay",
            link: "http://www.neuroplay.ca/",
            cat:  "nas",
            desc: ""
        },
        {
            type: "",
            name: "NAS local",
            link: "http://10.100.20.129:8787/NAS/",
            cat:  "nas",
            desc: ""
        },
        
        {
            type: "",
            name: "NAS prod",
            link: "https://www.nationwideappraisals.com/NAS/",
            cat:  "nas",
            desc: ""
        },
        {
            type: "",
            name: "Collapsible",
            link: "http://demos.jquerymobile.com/1.4.0/collapsible/",
            cat:  "javascript",
            desc: "widget for jQuery mobile"
        },
        {
            name: "Perseus Digital Library",
            link: "http://www.perseus.tufts.edu/hopper/definitionlookup",
            cat:  "language",
            desc: "Greek-English dictionary"
        },
        {
            type: "",
            name: "Glosbe",
            link: "https://glosbe.com/en/la",
            cat:  "language",
            desc: "English Latin dictionary"
        },
        {
            type: "",
            name: "Bugzilla",
            link: "https://bugzilla.mozilla.org/",
            cat:  "programming",
            desc: "Mozilla's bug tracker"
        },
        {
            type: "",
            name: "TickerFactory",
            link: "https://tickerfactory.com/ezticker/ticker_designer.php",
            cat:  "cool",
            desc: "customized timers"
        },

        {
            type: "",
            name: "Toronto Police Service",
            link: "http://www.torontopolice.on.ca/recordsmanagement/clearance.php",
            cat:  "immigration",
            desc: "Online Clearance Letter System"
        },
        
        {
            type: "",
            name: "Branah.com",
            link: "https://www.branah.com/simplified-to-traditional",
            cat:  "language",
            desc: "Simplified to Traditional Chinese Converter"
        },
        {
            type: "",
            name: "BKRS",
            link: "https://bkrs.info/",
            cat:  "language",
            desc: "Большой китайско-русский словарь"
        },
        {
            type: "",
            name: "Medical Centers for Canadian PR",
            link: "http://www.cic.gc.ca/pp-md/pp-list.aspx",
            cat:  "immigration",
            desc: ""
        },
        
        {
            type: "",
            name: "JobVite",
            link: "https://app.jobvite.com/js/jobseeker/applications.html?1=1&#/list",
            cat:  "jobhunt",
            desc: ""
        },
        {
            type: "",
            name: "Balsamiq",
            link: "https://balsamiq.com/",
            cat:  "webdesign",
            desc: "a graphical user interface mockup and website wireframe builder application"
        },
        {
            type: "",
            name: "Axure RP",
            link: "https://www.axure.com/",
            cat:  "webdesign",
            desc: "a wireframing, rapid prototyping, documentation and specification software tool"
        },
        {
            type: "",
            name: "inVision",
            link: "https://www.invisionapp.com/",
            cat:  "webdesign",
            desc: "design prototyping tools"
        },
        {
            type: "",
            name: "OmniGraffle",
            link: "https://www.omnigroup.com/omnigraffle",
            cat:  "webdesign",
            desc: "a diagramming and digital illustration application"
        },
        {
            type: "",
            name: "Mark Vaintroub",
            link: "https://www.marktranslation.com/",
            cat:  "immigration",
            desc: "translator (EN-RU)"
        },
        {
            type: "",
            name: "Zhiteli",
            link: "https://jitely.info/",
            cat:  "cool",
            desc: "search"
        },
        {
            type: "",
            name: "ChineseText",
            link: "http://ctext.org/dictionary.pl?if=en",
            cat:  "language",
            desc: "dictionary"
        },
        {
            type: "",
            name: "Russian Consulate Toronto",
            link: "http://toronto.kdmid.ru/ru.aspx",
            cat:  "immigration",
            desc: ""
        },
        {
            type: "",
            name: "Chinese Consulate Toronto",
            link: "http://toronto.china-consulate.org/eng/",
            cat:  "immigration",
            desc: ""
        },
        {
            type: "",
            name: "Funny",
            link: "https://www.youtube.com/watch?v=6Pm3KQvYk9Q&list=PL31985DCA4E76FDE5",
            cat:  "funny",
            desc: "my Youtube play list"
        },
        {
            type: "",
            name: "Funny 2",
            link: "https://www.youtube.com/watch?v=8LhWrM1Q-0g&list=PL8271BF904D340FE3",
            cat:  "funny",
            desc: "my Youtube play list"
        },
        {
            type: "",
            name: "Funny 3",
            link: "https://www.youtube.com/watch?v=GOpRNInnHvc&list=PLRW6BNC-pDixCnmE2Kf1hxXUameU8fVF9",
            cat:  "funny",
            desc: "my Youtube play list"
        },
        {
            type: "",
            name: "British Humor",
            link: "https://www.youtube.com/watch?v=tTv5ckMe_2M&list=PLRW6BNC-pDixCxb1h8zPdZksQdN6p76a_",
            cat:  "funny",
            desc: "my Youtube play list"
        },
        {
            type: "",
            name: "Thesaurus",
            link: "http://www.thesaurus.com/",
            cat:  "language",
            desc: "for English"
        },
        {
            type: "",
            name: "Chinese Dictionary MDBG",
            link: "https://www.mdbg.net/chindict/chindict.php",
            cat: "language",
            desc: ""
        },
        {
            type: "",
            name: "11 Tips to Improve Your Diet and Make Your Abs Pop",
            link: "http://www.mensfitness.com/weight-loss/burn-fat-fast/11-ways-eat-make-your-abs-pop",
            cat: "health",
            desc: "from Men's Fitness"
        },
        {
            type: "",
            name: "Misconceptions about Russia",
            link: "https://www.quora.com/What-are-the-biggest-misconceptions-about-Russia",
            cat: "russia",
            desc: "the biggest ones"
        },
        {
            type: "",
            name: "Foboko",
            link: "https://www.foboko.com/sentence-dictionary/",
            cat: "language",
            desc: "Dictionary for writers (e.g. example sentences)"
        },
        {
            type: "",
            name: "20 steps to better wireframing",
            link: "http://blog.teamtreehouse.com/20-steps-to-better-wireframing",
            cat: "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "How to create First Wireframe",
            link: "http://blog.careerfoundry.com/ux-design/how-to-create-your-first-wireframe",
            cat: "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "Learning to wireframe",
            link: "http://www.dtelepathy.com/blog/design/learning-to-wireframe-10-best-practices",
            cat: "webdesign",
            desc: "10 best practices"
        },
        {
            type: "",
            name: "Wireframing Guide",
            link: "https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399",
            cat: "webdesign",
            desc: "for beginners"
        },
        {
            type: "",
            name: "4 key principles of web design",
            link: "https://99designs.ca/blog/tips/web-design-basics-guide/",
            cat: "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "Russophobia: top 50 myths",
            link: "http://akarlin.com/2009/07/top-50-russophobe-myths/",
            cat: "russia",
            desc: ""
        },
        {
            type: "",
            name: "My Country & My People",
            link: "https://www.blacklocks.ca/guest_commentary/my-country-my-people-2/",
            cat: "politics",
            desc: "Chrystia Freeland's article"
        },
        {
            type: "",
            name: "Chrystia Freeland on Wikipedia",
            link: "https://en.wikipedia.org/wiki/Chrystia_Freeland",
            cat: "politics",
            desc: "Prime minister of Canada"
        },
        {
            type: "",
            name: "Dictionary of Russian Synonyms",
            link: "http://jeck.ru/tools/SynonymsDictionary/",
            cat: "language",
            desc: "more than 300K entries"
        },
        {
            type: "",
            name: "SlideShare",
            link: "http://www.slideshare.net/",
            cat: "programming",
            desc: "free slides"
        },
        {
            type: "",
            name: "Bootstrap Tutorial",
            link: "file:///C:/aaa/ig/bootstraptut/bootstraptut.html",
            cat: "mine",
            desc: "examples of using"
        },
        {
            type: "",
            name: "Pixabay",
            link: "https://pixabay.com/",
            cat: "programming",
            desc: "Free images and videos "
        },
        {
            type: "",
            name: "Lipsum",
            link: "http://www.lipsum.com/",
            cat: "programming",
            desc: "dummy texts & banners"
        },
        {
            type: "",
            name: "XML Validator",
            link: "http://www.xmlvalidation.com/",
            cat: "programming",
            desc: "validate the formatting in an xml file"
        },
        {
            type: "",
            name: "Lingorado",
            link: "http://lingorado.com/ipa/",
            cat: "language",
            desc: "IPA converter"
        },
        {
            type: "",
            name: "Seneca",
            link: "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1",
            cat: "mine",
            desc: "My Profile"
        },
        {
            type: "",
            name: "Merriam Webster",
            link: "https://www.merriam-webster.com/",
            cat: "language",
            desc: "English Dictionary"
        },
        {
            type: "",
            name: "Reaction Gifs",
            link: "http://www.reactiongifs.com/",
            cat: "social",
            desc: "Say it with a GIF!"
        },
        {
            type: "",
            name: "SolarMovie",
            link: "http://solarmovie.sc/",
            cat: "entertainment",
            desc: "to watch movies"
        },
        {
            type: "",
            name: "EtherPad",
            link: "https://public.etherpad-mozilla.org/",
            cat: "programming",
            desc: "Mozilla's"
        },
        {
            type: "",
            name: "Multitran",
            link: "http://www.multitran.ru/c/M.exe?a=1",
            cat: "language",
            desc: "online dictionary"
        },
        {
            type: "",
            name: "Laravel",
            link: "https://laravel.com/",
            cat: "programming",
            desc: "the main website"
        },
        {
            type: "",
            name: "Musicless",
            link: "https://www.youtube.com/watch?v=_li_d_YviZ4&list=PLRW6BNC-pDizXP7TBRgParxL5FaBaa65B",
            cat: "funny",
            desc: "videos play-list"
        },
        {
            type: "",
            name: "CanadaVisa",
            link: "http://www.canadavisa.com/canada-immigration-discussion-board/index.php",
            cat: "immigration",
            desc: "forum"
        },
        {
            type: "",
            name: "CIC",
            link: "http://www.cic.gc.ca/english/e-services/account.asp",
            cat: "immigration",
            desc: "My account"
        },
        {
            type: "",
            name: "Joy at Tumblr",
            link: "http://jojacula.tumblr.com/",
            cat: "cool",
            desc: ""
        },
        {
            type: "",
            name: "Joy at Deviant Art",
            link: "http://jojacula.deviantart.com/",
            cat: "cool",
            desc: ""
        },
        {
            type: "",
            name: "Maniac World",
            link: "http://www.maniacworld.com/",
            cat: "entertainment",
            desc: "videos and gifs"
        },
        {
            type: "",
            name: "Omniglot",
            link: "http://www.omniglot.com/index.htm",
            cat: "language",
            desc: "the online encyclopedia of writing systems and languages"
        },
        {
            type: "",
            name: "The Scots Language",
            link: "https://www.youtube.com/watch?v=cENbkHS3mnY",
            cat: "language",
            desc: "by Dauvit Horsbroch"
        },
        {
            type: "",
            name: "Psalms in Scots",
            link: "http://www.scotstext.org/makars/p_hately_waddell/pairt_1.asp#psalmi",
            cat: "language",
            desc: "By P Hately Waddell"
        },
        {
            type: "youtube",
            name: "Soviet Design",
            link: "FOka3VsCjRk",
            cat: "russia",
            desc: "Tom Kirby tells"
        },
        {
            type: "youtube",
            name: "Churkin vs Power",
            link: "WGXCzwNlzDw",
            cat: "politics",
            desc: "Russia, US clash at UNSC meeting, Syria envoy blames govt & opposition for escalation"
        },
        {
            type: "youtube",
            name: "Churkin on the US",
            link: "bID01gIEIOY",
            cat: "politics",
            desc: "response on Obama actions in Syria"
        },
        {
            type: "youtube",
            name: "Churkin on accusations",
            link: "Ur64xVRp5L0",
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
            cat: "webdesign",
            name: "HTML Color Codes",
            link: "http://htmlcolorcodes.com/",
            desc: ""
        }
    ];

    // $(document).ready()
    f.renderName("heading", "WebHub");
    // console.log("Hi")

    f.createLists(links);
    f.init();
}
