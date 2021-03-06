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
            church: {name: "church", links: []},
            snippets: {name: "snippets", links: []},
            cool: {name: "cool", links: []},
            current: {name: "current", links: []},
            entertainment: {name: "entertainment", links: []},
            funny: {name: "funny", links: []},
            health: {name: "health", links: []},
            immigration: {name: "immigration", links: []},
            javascript: {name: "javascript", links: []},
            jobhunt: {name: "jobhunt", links: []},
            language: {name: "language", links: []},
            mine: {name: "mine", links: []},
            mockups: {name: "mockups", links: []},
            nas: {name: "nas", links: []},
            nas_tickets: {name: "nas_tickets", links: []},
            news: {name: "news", links: []},
            politics: {name: "politics", links: []},
            programming: {name: "programming", links: []},
            russia: {name: "russia", links: []},
            social: {name: "social", links: []},
            useful: {name: "useful", links: []},
            war: {name: "war", links: []},
            webdesign: {name: "webdesign", links: []},
            webdevtools: {name: "webdevtools", links: []},
        };

        // this.createTabs( categories );

        for (var i = 0; i < objects.length; i++) {

            switch (objects[i].cat) {
                case 'church':
                    categories.church.links.push(objects[i]);
                    break;
                case 'webdevtools':
                    categories.webdevtools.links.push(objects[i]);
                    break;
                case 'snippets':
                    categories.snippets.links.push(objects[i]);
                    break;
                case 'mockups':
                    categories.mockups.links.push(objects[i]);
                    break;
                case 'current':
                    categories.current.links.push(objects[i]);
                    break;
                case 'useful':
                    categories.useful.links.push(objects[i]);
                    break;
                case 'war':
                    categories.war.links.push(objects[i]);
                    break;
                case 'nas_tickets':
                    categories.nas_tickets.links.push(objects[i]);
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
        {
            type: "",
            name: "6 simple CSS tricks for images",
            link: "https://www.godaddy.com/garage/6-simple-css-tricks-for-images/",
            cat:  "webdesign",
            desc: "godaddy"
        },
        {
            type: "",
            name: "Module tabs - best practices",
            link: "https://www.smashingmagazine.com/2009/06/module-tabs-in-web-design-best-practices-and-solutions/",
            cat:  "webdesign",
            desc: "@ smashingmagazine"
        },
        {
            type: "",
            name: "Convert image to the SVG format",
            link: "https://image.online-convert.com/convert-to-svg",
            cat:  "webdevtools",
            desc: "@ online-convert.com"
        },
        
        {
            type: "",
            name: "Ojibwe - forum",
            link: "https://lingvoforum.net/index.php/topic,37278.0.html",
            cat:  "language",
            desc: "@lingvoforum"
        },
        {
            type: "",
            name: "CSS shapes",
            link: "https://css-tricks.com/examples/ShapesOfCSS/",
            cat:  "snippets",
            desc: "css tricks"
        },

        
/*
https://99designs.ca/blog/trends/web-design-trends-2017/
https://templates.mailchimp.com/development/responsive-email/

https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
https://blog.trackduck.com/2015/06/25/15-captivating-parallax-effects-from-codepen/

*/


        {
            type: "",
            name: "EN - Cambridge Dictionary",
            link: "https://dictionary.cambridge.org",
            cat:  "language",
            desc: ""
        },


        {
            type: "",
            name: "CSS Beautifier",
            link: "https://www.cleancss.com/css-beautify/",
            cat:  "webdevtools",
            desc: "Dan's tools"
        },
        {
            type: "",
            name: "NUE-2159",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NUE-2159",
            cat:  "nas_tickets",
            desc: "collect all needed images"
        },

        {
            type: "",
            name: "Mokhnenko",
            link: "https://www.youtube.com/user/Mokhnenko/videos",
            cat:  "church",
            desc: "@ YouTube"
        },
        {
            type: "",
            name: "Percentage Calculator",
            link: "https://percentagecalculator.net/",
            cat:  "useful",
            desc: ""
        },        
        {
            type: "",
            name: "NE-3190",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3190",
            cat:  "nas_tickets",
            desc: "HTML5: Full Form (CUSPAP) Design, Responsive & Cosmetic Change"
        },
        {
            type: "",
            name: "Diff Checker",
            link: "https://www.diffchecker.com/diff",
            cat:  "programming",
            desc: ""
        },
        {
            type: "",
            name: "Donbass news 1",
            link: "https://vk.com/polkdonbassa",
            cat:  "news",
            desc: "@vk"
        },
        {
            type: "",
            name: "Donbass news 2",
            link: "https://vk.com/strelkov_info",
            cat:  "news",
            desc: "@vk"
        },    
        {
            type: "",
            name: "GMail",
            link: "https://mail.google.com/mail/u/0/#inbox",
            cat:  "social",
            desc: "iy"
        },
        {
            type: "",
            name: "MC-2752",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MC-2752",
            cat:  "nas_tickets",
            desc: "Our partners page"
        },
        {
            type: "",
            name: "MC-2750",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MC-2750",
            cat:  "nas_tickets",
            desc: "update landing page (Carson Dunlop)"
        },
        {
            type: "",
            name: "HTML email templates",
            link: "https://www.leemunroe.com/building-html-email/",
            cat:  "webdesign",
            desc: "by Lee Munroe"
        },
        {
            type: "",
            name: "Content separators: 10 ways",
            link: "https://designshack.net/articles/graphics/separating-content-10-ways-to-draw-the-line/",
            cat:  "webdesign",
            desc: "by design shack"
        },
        {
            type: "",
            name: "MAR-531",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MAR-531",
            cat:  "nas_tickets",
            desc: "New TNG website design proposal"
        },
        {
            type: "",
            name: "Color Converter",
            link: "https://www.w3schools.com/colors/colors_converter.asp",
            cat:  "webdevtools",
            desc: "w3schools"
        },
        {
            type: "",
            name: "Bootstrap CSS Classes",
            link: "https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp",
            cat:  "webdesign",
            desc: "w3schools"
        },
        {
            type: "",
            name: "Color Meanings",
            link: "https://www.color-meanings.com/",
            cat:  "webdesign",
            desc: "Learn about Colors and Symbolism"
        },        
        {
            type: "",
            name: "ReachMail",
            link: "https://ui.reachmail.net/app/#/",
            cat:  "nas",
            desc: "Create, deliver, and track FREE email campaigns."
        },
        {
            type: "",
            name: "CSS Inliner Tool",
            link: "https://templates.mailchimp.com/resources/inline-css/",
            cat:  "webdevtools",
            desc: "weave external css into html"
        },
        {
            type: "",
            name: "A Guide to Bulletproof Buttons in Email Design",
            link: "https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design",
            cat:  "webdesign",
            desc: "litmus"
        },
        {
            type: "",
            name: "Creating Bulletproof HTML Emails",
            link: "https://medium.com/tealmedia/creating-bulletproof-html-emails-e0e4866c3f8",
            cat:  "webdesign",
            desc: "by tealmedia"
        },
        {
            type: "",
            name: "Chrome inspect - pseudo classes",
            link: "https://developers.google.com/web/updates/2015/05/triggering-of-pseudo-classes",
            cat:  "webdesign",
            desc: "Umar Hansa on how to trigger them in Chrome"
        },        
        {
            type: "",
            name: "SVG Color Filter Playground",
            link: "http://kazzkiq.github.io/svg-color-filter/",
            cat:  "webdevtools",
            desc: "A tool to help understand how feColorMatrix works. By Claudio Holanda (@kazzkiq)."
        },
        {
            type: "",
            name: "Color Filters Can Turn Your Gray Skies Blue",
            link: "https://css-tricks.com/color-filters-can-turn-your-gray-skies-blue/",
            cat:  "webdesign",
            desc: "Amelia Bellamy-Royds"
        },
        {
            type: "",
            name: "NE-3174",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3174",
            cat:  "nas_tickets",
            desc: "NAS mobile - create 2 buttons"
        },
        {
            type: "",
            name: "NE-3240",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3240",
            cat:  "nas_tickets",
            desc: "Sign-Up Page for Carson & Dunlop"
        },
        {
            type: "",
            name: "NE-3105",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3105",
            cat:  "nas_tickets",
            desc: "NAS Domestic Request Page (Broker) QA"
        },
        {
            type: "",
            name: "NE-3123",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3123",
            cat:  "nas_tickets",
            desc: "Comment Email template"
        },        
        {
            type: "",
            name: "Sovetskaja Sibir'",
            link: "http://elib.ngonb.ru/jspui/handle/NGONB/31/browse?type=dateissued&sort_by=2&order=ASC&rpp=100&etal=-1&null=&offset=10600",
            cat:  "russia",
            desc: "newspaper in online archive"
        },
        {
            type: "",
            name: "Color Combos",
            link: "http://www.colorcombos.com/index.html",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "Montyan",
            link: "https://www.youtube.com/user/tmontyan/videos",
            cat:  "news",
            desc: "@ Youtube"
        },
        {
            type: "",
            name: "Metronome",
            link: "http://simple.bestmetronome.com/",
            cat:  "useful",
            desc: ""
        },        
        {
            type: "",
            name: "Color to B/W converter",
            link: "http://www.rapidtables.com/convert/image/rgb-to-grayscale.htm",
            cat:  "webdevtools",
            desc: ""
        },        
        {
            type: "",
            name: "Contrast checker ",
            link: "http://www.checkmycolours.com/",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "Contrast Checker",
            link: "http://webaim.org/resources/contrastchecker/",
            cat:  "webdevtools",
            desc: "WebAIM"
        },        
        {
            type: "",
            name: "Color Contrast Check",
            link: "https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=B73333",
            cat:  "webdevtools",
            desc: "snook.ca"
        },
        {
            type: "",
            name: "Luminosity Contrast Ratio",
            link: "http://juicystudio.com/services/luminositycontrastratio.php#specify",
            cat:  "webdevtools",
            desc: "juicy studio"
        },
        {
            type: "",
            name: "Da Button Factory",
            link: "https://dabuttonfactory.com/",
            cat:  "webdevtools",
            desc: "Pretty call-to-action buttons, quickly!"
        },
        {
            type: "",
            name: "Campaign Monitor",
            link: "https://www.campaignmonitor.com/company/#stigm",
            cat:  "cool",
            desc: "cool design"
        },
        {
            type: "",
            name: "Bulletproof background images",
            link: "https://backgrounds.cm/",
            cat:  "webdesign",
            desc: "email"
        },
        {
            type: "",
            name: "LOTR movies in stills",
            link: "http://www.tk421.net/lotr/film/",
            cat:  "entertainment",
            desc: ""
        },
        {
            type: "",
            name: "Select get-set with JQ",
            link: "https://codepen.io/igoryen/pen/KvrWXp",
            cat:  "snippets",
            desc: ""
        },
        {
            type: "",
            name: "Adaptive label in select",
            link: "https://codepen.io/igoryen/pen/OjOgbx",
            cat:  "snippets",
            desc: ""
        },
        {
            type: "",
            name: "Background Image Generator",
            link: "http://bg.siteorigin.com/",
            cat:  "webdev",
            desc: "by SiteOrigin"
        },        
        {
            type: "",
            name: "Messenger",
            link: "https://www.messenger.com/t/jenica.yentaltsev",
            cat:  "social",
            desc: "Facebook"
        },
        {
            type: "",
            name: "Russland the non-Russian",
            link: "http://www.russian.kiev.ua/books/karevin/rusnorus/rusnorus.shtml",
            cat:  "russia",
            desc: "by Aleksandr Karevin"
        },
        {
            type: "",
            name: "Meal Diary",
            link: "https://docs.google.com/spreadsheets/d/11nBZOTi37CX1F759w54lbgjhFNSQT8xIMKgcndfW1H0/edit#gid=0",
            cat:  "current",
            desc: ""
        },
        {
            type: "",
            name: "Irish to IPA",
            link: "http://gphemsley.org/linguistics/ga/ortho2ipa/?text=%0D%0A",
            cat:  "language",
            desc: "gphemsley.org"
        },
        {
            type: "",
            name: "Russian Ukraine",
            link: "https://vk.com/russian_ukraine",
            cat:  "russia",
            desc: "on VK"
        },        
        {
            type: "",
            name: "German cognates with English",
            link: "https://en.wiktionary.org/wiki/Appendix:List_of_German_cognates_with_English",
            cat:  "language",
            desc: "wikipedia"
        },        
        {
            type: "",
            name: "Screen Sizes",
            link: "http://screensiz.es/",
            cat:  "webdevtools",
            desc: "screensiz.es"
        },        
        {
            type: "",
            name: "NE-3073",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3073",
            cat:  "nas_tickets",
            desc: "Design: New Email Notification Template"
        },        
        {
            type: "",
            name: "email - new appraisal request",
            link: "file:///C:/_work/NE/3073/mockup1/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "email - new password request",
            link: "file:///C:/_work/NE/3073/mockup2/index.html",
            cat:  "mockups",
            desc: "local"
        }, 
        {
            type: "",
            name: "Scots words: all",
            link: "http://mudcat.org/scots/display_all.cfm",
            cat:  "language",
            desc: "mudcat.org"
        },        
        {
            type: "",
            name: "request page - 3",
            link: "http://htmltest.nationwideappraisals.com/mockups/mockup3/",
            cat:  "mockups",
            desc: "remote test"
        },
        {
            type: "",
            name: "request page - 4",
            link: "http://htmltest.nationwideappraisals.com/mockups/mockup4/",
            cat:  "mockups",
            desc: "remote test"
        },
        {
            type: "",
            name: "request page - 3",
            link: "file:///C:/_work/NE/2720/mockup3/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "request page - 4",
            link: "file:///C:/_work/NE/2720/mockup4/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "NAS dev",
            link: "http://10.100.20.129:8989/NAS/",
            cat:  "nas",
            desc: ""
        },        
        {
            type: "",
            name: "Free Formatter",
            link: "http://www.freeformatter.com/",
            cat:  "programming",
            desc: "for HTML, JSON etc."
        },
        {
            type: "",
            name: "TNG test",
            link: "http://htmltest.nationwideappraisals.com/test_tng/index.html",
            cat:  "nas",
            desc: ""
        },        
        {
            type: "",
            name: "TNG what's new page",
            link: "file:///C:/_work/MAR/527/new/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "Character Entity Reference Chart",
            link: "https://dev.w3.org/html5/html-author/charref",
            cat:  "webdesign",
            desc: "dev.w3.org"
        },

        
        {
            type: "",
            name: "Best practices for speeding up your web site",
            link: "https://developer.yahoo.com/performance/rules.html",
            cat:  "programming",
            desc: "Yahoo developer network"
        },
        
        {
            type: "",
            name: "Eclipse icons and their meanings",
            link: "https://stackoverflow.com/questions/3917925/what-do-the-arrow-icons-in-subclipse-mean",
            cat:  "programming",
            desc: "on stackoverflow"
        },
        
        {
            type: "",
            name: "Programming terms in Chinese",
            link: "http://www.iicm.org.tw/term/termb_0.htm",
            cat:  "language",
            desc: ""
        },
        {
            type: "",
            name: "RegExr",
            link: "http://regexr.com/",
            cat:  "programming",
            desc: "by G Skinner"
        },
        {
            ype: "",
            name: "Roget's",
            link: "https://docs.google.com/spreadsheets/d/1T-V6-tGAmyLxtm-lapbDNIW_cYgpwJT9qsbyqeb1zNY/edit#gid=0",
            cat:  "current",
            desc: "categories of world"
        },
        {
            type: "",
            name: "Blueberry Data",
            link: "https://docs.google.com/spreadsheets/d/1ILu-RnEWrrIkQTdFQd9oOFE2Puu7syVAqc6N_R-9GuE/edit#gid=1666357189",
            cat:  "current",
            desc: ""
        },
        {
            type: "",
            name: "Union Cartoon",
            link: "https://www.youtube.com/user/ClassicCartoonsMedia",
            cat:  "entertainment",
            desc: "Youtube"
        },
        {
            type: "",
            name: "Better Call Saul 3",
            link: "http://seasonvar.ru/serial-15485-Luchshe_zvonite_Solu-003-sezon.html",
            cat:  "entertainment",
            desc: "seasonvar.ru"
        },
        {
            type: "",
            name: "Round Brackets via CSS",
            link: "https://codepen.io/igoryen/pen/BRZxBp",
            cat:  "snippets",
            desc: ""
        },
        {
            type: "",
            name: "Radios as Select",
            link: "https://codepen.io/igoryen/pen/zdKxKq",
            cat:  "snippets",
            desc: ""
        },
        {
            type: "",
            name: "Adaptive placeholder on fixed-size textarea",
            link: "https://codepen.io/igoryen/pen/prNKxN",
            cat:  "snippets",
            desc: ""
        },
        {
            type: "",
            name: "Masonry",
            link: "https://masonry.desandro.com",
            cat:  "javascript",
            desc: "library by David DeSandro"
        },
        {
            type: "",
            name: "NE-3014",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3014",
            cat:  "nas_tickets",
            desc: "Disable user profile on TNGOC.com",
            cls: "done"
        },
        {
            type: "",
            name: "NE-2850",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2850",
            cat:  "nas_tickets",
            desc: "HTML5 CSS/Style Fixes "
        },
        {
            type: "",
            name: "NE-2654",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2654",
            cat:  "nas_tickets",
            desc: "Styling issues on validation "
        },
        {
            type: "",
            name: "NE-2686",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2686",
            cat:  "nas_tickets",
            desc: "Comparable Search Modal breaks the scrollbar "
        },
        {
            type: "",
            name: "NE-2847",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2847",
            cat:  "nas_tickets",
            desc: "HTML5-Schedule A [Calculation] "
        },
        {
            type: "",
            name: "NE-2686",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2686",
            cat:  "nas_tickets",
            desc: "Comparable Search Modal breaks the scrollbar "
        },
        {
            type: "",
            name: "NE-2936",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2936",
            cat:  "nas_tickets",
            desc: "Re: Initial design and planning for Full Form CUSPAP layout "
        },
        {
            type: "",
            name: "NE-2848",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2848",
            cat:  "nas_tickets",
            desc: "Disable clicks "
        },
        {
            type: "",
            name: "MAR-522",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MAR-522",
            cat:  "nas_tickets",
            desc: "web and phone on HCS logo "
        },
        {
            type: "",
            name: "MAR-523",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MAR-523",
            cat:  "nas_tickets",
            desc: "NAS mobile app banner for system generated email "
        },
        {
            type: "",
            name: "MAR-524",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MAR-524",
            cat:  "nas_tickets",
            desc: "Add HCS logo on image for email banner header "
        },
        {
            type: "",
            name: "NE-3007",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-3007",
            cat:  "nas_tickets",
            desc: "Credit Card Payment Page - Add Interact and Credit Card Payment Image"
        },
        {
            type: "",
            name: "MAR-525",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MAR-525",
            cat:  "nas_tickets",
            desc: "Create a real estate listing brochure "
        },
        {
            type: "",
            name: "MAR-526",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/MAR-526",
            cat:  "nas_tickets",
            desc: "InHouseUSA flyer "
        },
        {
            type: "",
            name: "NE-2885",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2885",
            cat:  "nas_tickets",
            desc: "Igor Research and Implementation "
        },
        {
            type: "",
            name: "Billing Information page",
            link: "http://10.100.20.129:8787/NAS/MakePayment?apprequestnbr=MTUwNTMwMg==&apprequestencdnbr=6714035fd753d619abfeb630d045ccf7&lang=English",
            cat:  "nas",
            desc: "local"
        },
        {
            type: "",
            name: "Color Hunter",
            link: "http://www.colorhunter.com/",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "FontsC",
            link: "http://www.fontsc.com/index.html",
            cat:  "webdesign",
            desc: "Sea of free fonts"
        },
        {
            type: "",
            name: "Beautify JS",
            link: "http://jsbeautifier.org/",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "Beautify CSS",
            link: "http://www.cleancss.com/css-beautify/",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "Icons in UTF-8",
            link: "https://www.utf8icons.com/",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "Buttons, radioactive",
            link: "http://zurb.com/playground/radioactive-buttons",
            cat:  "webdesign",
            desc: "zurb.com"
        },
        {
            type: "",
            name: "Unsplash",
            link: "https://unsplash.com/",
            cat:  "webdesign",
            desc: "Free Photos"
        },
        {
            type: "",
            name: "Modals, responsive",
            link: "https://codepen.io/ettrics/pen/Jdjdzp",
            cat:  "snippets",
            desc: "by Ettrics"
        },
        {
            type: "",
            name: "Textarea hugging content",
            link: "https://coderwall.com/p/imkqoq/resize-textarea-to-fit-content",
            cat:  "webdesign",
            desc: "from Coderwall.com"
        },
        {
            type: "",
            name: "email - new request submitted",
            link: "file:///C:/_work/MAR/522/mockup1/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "email - new request submitted",
            link: "http://htmltest.nationwideappraisals.com/emails/NAS-MobileApp/mockup1/",
            cat:  "mockups",
            desc: "on HTML test"
        },
        {
            type: "",
            name: "a la mode",
            link: "https://www.alamode.com/appraiser/total/",
            cat:  "nas",
            desc: "appraiser desktop application"
        },
        {
            type: "",
            name: "Color calculator from HEX to RGBA",
            link: "http://hex2rgba.devoth.com/",
            cat:  "webdevtools",
            desc: "Devoth"
        },
        {
            type: "",
            name: "Adaptive Placeholder",
            link: "https://codepen.io/dannykingme/pen/IvFuB",
            cat:  "snippets",
            desc: "Danny King"
        },
        {
            type: "",
            name: "Text Fields Design",
            link: "https://uxplanet.org/designing-perfect-text-field-clarity-accessibility-and-user-effort-d03c1e26004b",
            cat:  "webdesign",
            desc: "UX Planet"
        },
        {
            type: "",
            name: "Pinyin to GR chart",
            link: "http://home.iprimus.com.au/richwarm/gr/py2grtab.htm",
            cat:  "language",
            desc: ""
        },
        {
            type: "",
            name: "Ampersand in SASS",
            link: "https://css-tricks.com/the-sass-ampersand/",
            cat:  "webdesign",
            desc: "CSS tricks"
        },
        {
            type: "",
            name: "Content-responsive text area",
            link: "http://jsfiddle.net/C8e4w/1/",
            cat:  "webdesign",
            desc: "by Mark Vaughn"
        },
        {
            type: "",
            name: "Textarea Tricks",
            link: "https://css-tricks.com/textarea-tricks/",
            cat:  "webdesign",
            desc: "CSS tricks"
        },
        {
            type: "",
            name: "Mandarin Phrasebook in GR",
            link: "https://docs.google.com/spreadsheets/d/1X-_lb2zCR0sKH3OuigUZiwCSpITsGaxtEy4Flm8bsm8/edit#gid=0",
            cat:  "current",
            desc: "a Google Doc sheet"
        },
        {
            type: "",
            name: "Giphy",
            link: "https://giphy.com",
            cat:  "funny",
            desc: ""
        },
        {
            type: "",
            name: "NE-2895",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2895",
            cat:  "nas_tickets",
            desc: "Refactor the \"Select service type\" list into select"
        },
        {
            type: "",
            name: "Bluetongue",
            link: "file:///C:/ig/bluetongue/index.html#",
            cat:  "mine",
            desc: "an example of a page using a top dropdown menu with submenus (CSS3)"
        },
        {
            type: "",
            name: "Appleberry",
            link: "file:///C:/ig/appleberry/index.html",
            cat:  "mine",
            desc: "an example of a page using an off-canvas menu"
        },
        {
            type: "",
            name: "request page - 1",
            link: "file:///C:/_work/NE/2720/mockup1/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "FCM Prtners",
            link: "http://dev-fcmpartners.vm59-inhouseusa.com",
            cat:  "nas",
            desc: "vm, pavel"
        },
        {
            type: "",
            name: "Perl Mortgage",
            link: "http://dev-perlmortgage.vm59-inhouseusa.com",
            cat:  "nas",
            desc: "vm, pavel"
        },
        {
            type: "",
            name: "NE-2691",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2691",
            cat:  "nas_tickets",
            desc: "Signature password modals styling"
        },
        {
            type: "",
            name: "CSS3 responsive menu dropdown + submenu with logo",
            link: "https://codepen.io/emredenx/pen/ojcxl",
            cat:  "snippets",
            desc: "emre"
        },
        {
            type: "",
            name: "Blind Text Generator",
            link: "http://www.blindtextgenerator.com/lorem-ipsum",
            cat:  "webdevtools",
            desc: "dummy text"
        },
        {
            type: "",
            name: "Cainito",
            link: "file:///C:/ig/cainito/cainito.html",
            cat:  "mine",
            desc: "checkbox styles"
        },
        {
            type: "",
            name: "Color Picking tool",
            link: "http://www.hexcolortool.com/",
            cat:  "webdevtools",
            desc: "Dan's Tools"
        },
        {
            type: "",
            name: "request Page - 2",
            link: "file:///C:/_work/NE/2720/mockup2/index.html",
            cat:  "mockups",
            desc: "local"
        },
        {
            type: "",
            name: "NE-2720",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2720",
            cat:  "nas_tickets",
            desc: "NAS Request Page Design"
        },
        {
            type: "",
            name: "NE-2873",
            link: "https://nasjiraatm.nationwideappraisals.com:8443/browse/NE-2873",
            cat:  "nas_tickets",
            desc: "Datepicker popup truncated in certain cases"
        },
        {
            type: "",
            name: "request page - 1",
            link: "http://htmltest.nationwideappraisals.com/mockups/mockup1",
            cat:  "mockups",
            desc: "remote test"
        },
        {
            type: "",
            name: "Menu: responsive, dropdown, submenu, logo",
            link: "https://codepen.io/emredenx/pen/ojcxl",
            cat:  "snippets",
            desc: "by emre"
        },
        {
            type: "",
            name: "Tooltip, Responsive and Mobile-friendly",
            link: "https://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly",
            cat:  "webdesign",
            desc: "Osvaldas Valutis"
        },
        {
            type: "",
            name: "Icon Finder",
            link: "https://www.iconfinder.com/",
            cat:  "webdevtools",
            desc: ""
        },
        {
            type: "",
            name: "request page - 2",
            link: "http://htmltest.nationwideappraisals.com/mockups/mockup2",
            cat:  "mockups",
            desc: "remote test. off-canvas menu"
        },
        {
            type: "",
            name: "CSS 3D transforms",
            link: "https://www.smashingmagazine.com/2012/01/adventures-in-the-third-dimension-css-3-d-transforms/",
            cat:  "webdesign",
            desc: "Peter Gasston"
        },
        {
            type: "",
            name: "InHouseUSA/Connexions",
            link: "https://github.com/InHouseUSA/Connexions",
            cat:  "nas",
            desc: "at Github"
        },
        {
            type: "",
            name: "Wintrust Mortgage",
            link: "http://dev-appraisals.wintrustmortgage.com/tandem/search/",
            cat:  "nas",
            desc: "dev"
        },
        {
            type: "",
            name: "Chinese Text Project",
            link: "http://ctext.org/pinyin.pl",
            cat:  "language",
            desc: "Phonetic conversion tool"
        },
        {
            type: "",
            name: "147 colors",
            link: "http://www.colors.commutercreative.com/",
            cat:  "webdesign",
            desc: "Brian Maier"
        },
        {
            type: "",
            name: "got mortgage",
            link: "http://dev-gotmortgage.vm158-inhouseusa.com",
            cat:  "nas",
            desc: "dev Gregory"
        },
        {
            type: "",
            name: "Noise Texture Generator",
            link: "http://www.noisetexturegenerator.com/",
            cat:  "webdevtools",
            desc: "Andrew Ckor"
        },
        {
            type: "",
            name: "Tympanus",
            link: "https://tympanus.net/codrops/",
            cat:  "webdesign",
            desc: "Codrops"
        },
        {
            type: "",
            name: "Sharij, Anatoly",
            link: "http://sharij.net/",
            cat:  "politics",
            desc: "mediaexpert"
        },
        {
            type: "",
            name: "Capulin",
            link: "file:///C:/aaa/ig/capulin/capulin.html",
            cat:  "mine",
            desc: "clean up wiki texts for TTS"
        },
        {
            type: "",
            name: "Calabash",
            link: "file:///C:/aaa/ig/calabash/calabash.html",
            cat:  "mine",
            desc: "like Blueberry only personal"
        },
        {
            type: "",
            name: "Convert CSV",
            link: "http://www.convertcsv.com/",
            cat:  "programming",
            desc: "to JSON, etc."
        },
        {
            type: "",
            name: "Karlin, Anatoly",
            link: "https://www.unz.com/akarlin/",
            cat:  "politics",
            desc: "UNZ"
        },
        {
            type: "",
            name: "Universal Cyrillic decoder",
            link: "https://2cyr.com/decode/?lang=en",
            cat:  "programming",
            desc: "by Petko Yotov (BGR)"
        },
        {
            type: "",
            name: "Carambola",
            link: "file:///C:/aaa/ig/carambola/carambola.html",
            cat:  "mine",
            desc: "quiz"
        },
        {
            type: "",
            name: "311 - Toronto Service Requests",
            link: "https://www1.toronto.ca/wps/portal/contentonly?vgnextoid=416fe2242f28b510VgnVCM10000071d60f89RCRD",
            cat:  "useful",
            desc: ""
        },


        {
            type: "",
            name: "Fire of the War, the",
            link: "http://thefireofthewar.ru/1418/index.php/",
            cat:  "war",
            desc: ""
        },
        {
            type: "",
            name: "Uncle Hanzi Chinese Etymology",
            link: "http://www.internationalscientific.org/CharacterEtymology.aspx",
            cat:  "language",
            desc: "Richard Sears"
        },
        {
            type: "",
            name: "Country codes",
            link: "http://www.worldatlas.com/aatlas/ctycodes.htm",
            cat:  "useful",
            desc: "2-letter and 3-letter"
        },
        {
            type: "",
            name: "War events daily",
            link: "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            cat:  "war",
            desc: "wikipedia"
        },
        {
            type: "",
            name: "Blueberry",
            link: "file:///C:/aaa/ig/blueberry/blueberry.html",
            cat:  "war",
            desc: "my war calendar"
        },
        {
            type: "",
            name: "RGB to Hex color converter",
            link: "http://www.rapidtables.com/convert/color/rgb-to-hex.htm",
            cat:  "webdevtools",
            desc: "Rapidtables"
        },
        {
            type: "",
            name: "Google Keep",
            link: "https://keep.google.com/#home",
            cat:  "useful",
            desc: ""
        },
        {
            type: "",
            name: "CSS Gradient Generator",
            link: "http://www.colorzilla.com/gradient-editor/",
            cat:  "webdevtools",
            desc: "Colorzilla"
        },
        {
            type: "",
            name: "Prettier websites gain trust",
            link: "http://www.sciencealert.com/news/20111107-22383.html",
            cat:  "webdesign",
            desc: ""
        },
        {
            type: "",
            name: "Tom and Jerry (classic collection 1940-1967)",
            link: "http://watchcartoonsonline.eu/tom-and-jerry-classic-collection-1940-1967/",
            cat:  "entertainment",
            desc: "on Watch Cartoons Online"
        },
        {
            type: "",
            name: "War's Timeline",
            link: "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B",
            cat:  "war",
            desc: "month by month"
        },
        {
            type: "",
            name: "Form Design Best Practices",
            link: "https://www.ventureharbour.com/form-design-best-practices/",
            cat:  "webdesign",
            desc: "58 items"
        },
        {
            type: "",
            name: "Color Names",
            link: "http://htmlcolorcodes.com/color-names/",
            cat:  "webdevtools",
            desc: "140 colors"
        },


        {
            type: "",
            name: "Victors",
            link: "http://www.pobediteli.ru/",
            cat:  "war",
            desc: "Multimedia map of the War"
        },
        {
            type: "",
            name: "Moment",
            link: "https://momentjs.com/",
            cat:  "programming",
            desc: "JS library for dates"
        },
        {
            type: "",
            name: "Komsomol Truth",
            link: "http://kpcanada.press/",
            cat:  "news",
            desc: "in Canada"
        },
        {
            type: "",
            name: "Off Canvas menu",
            link: "https://codepen.io/ncerminara/pen/quJpi/",
            cat:  "snippets",
            desc: "by Nicholas Cerminara"
        },
        {
            type: "",
            name: "Why we skip Photoshop",
            link: "https://signalvnoise.com/posts/1061-why-we-skip-photoshop",
            cat:  "webdesign",
            desc: "UI design process: Sketch to Code"
        },
        {
            type: "",
            name: "SASS",
            link: "http://sass-lang.com/guide",
            cat:  "webdesign",
            desc: "official page"
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
            cat:  "webdevtools",
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
            name: "CN - ZhongWen.com",
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
            name: "NAS test",
            link: "https://test.nationwideappraisals.com",
            cat:  "nas",
            desc: ""
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
            cat:  "webdevtools",
            desc: "CSS tools: gradient generator, border radius, noise texture, box shadow."
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
            cat:  "nas_tickets",
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
            name: "Color Picker",
            link: "https://www.w3schools.com/colors/colors_picker.asp",
            cat:  "webdevtools",
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
            name: "CN - BKRS",
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
            name: "CN - ChineseText",
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
            name: "EN -Thesaurus",
            link: "http://www.thesaurus.com/",
            cat:  "language",
            desc: "for English"
        },
        {
            type: "",
            name: "CN - MDBG",
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
            name: "RU - Dictionary of Russian Synonyms",
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
            cat: "webdesign",
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
            name: "EN - Merriam Webster",
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
            name: "Scots Language, the",
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
            // type: "youtube",
            name: "RT",
            link: "https://www.youtube.com/user/RussiaToday",
            cat: "news",
            desc: ""
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
            name: "Sharij",
            link: "https://www.youtube.com/user/SuperSharij/videos?sort=dd&view=0&shelf_id=1",
            cat: "news",
            desc: "@ Youtube"
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
            name: "EN - Urban Dictionary",
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
            name: "RU - Russian Freq Dict.",
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
            name: "Scots translator",
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
            cat: "webdevtools",
            name: "Color Codes",
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
