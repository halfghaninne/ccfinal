const SCREEN_W = screen.availWidth;
const SCREEN_H = screen.availHeight; 

const DATA = {"New York": {
    // "": {"width": "", "height": "", "top": "", "left": "", "loadInMs": 3000},
    "1": {"width": "", "height": "", "top": "", "left": "", "loadInMs": 800},
    //// NATIVE LAND ////
    "2": {"url": "https://www.youtube.com/watch?v=-PMFbMvPFW4&t=8s&mode=theatre","width": "700", "height": "584", "top": `${(SCREEN_H-350)/2}`, "left": `${(SCREEN_W-292)/2}`,"loadInMs": 6200}, // left: 650
    "3": {"width": "377", "height": "404", "loadInMs": 1200, "citation": "Portrait of George Stonefish, 2019. Photo courtesy of the National Museum of the American Indian."}, // portrait 
    "4": {"url": "https://youtube.com/watch?v=9Cqe7JfP8uA?t=11&mode=theatre&mute=1", "width": "900", "loadInMs": 2200},
    "5": {"width": "480", "height": "720", "loadInMs": 2200, "citation": "Photo courtesy of The Public History Project."},
    "6": {"url": "https://www.youtube.com/watch?v=rm1NOlZzxVg&t=40s&mode=theatre", "width": "700", "loadInMs": 3200},
    "7": {"width": "756", "height": "522", "top": "0", "loadInMs": 1200}, // pdf
    "8": {"width": "550", "loadInMs": 2200, "citation" : "Image 1: Coles, Robert R. 'Wampum Belt and Shells.' The Long Island Indian. Glen Cove, NY: Little Museum, 1954. Image 2: Bolton, Reginald P. 'MAP VIII, D.' Indian Paths in the Great Metropolis. New York: Museum of the American Indian, 1922. Brooklyn Collection, Brooklyn Public Library. Both accessed via the Brooklyn Public Library's Native Americans in Brooklyn Primary Source Packet."},
    "9": {"width": "620", "height": "443", "left": "10", "loadInMs": 4200, "citation": "Bolton, Reginald P. 'A Circular Bark-Covered House.' Indian Life of Long Ago in the City of New York. Port Washington, NY: I.J. Friedman, 1971."},
    "10": {"width": "550", "left": "10", "top": "0", "loadInMs": 1200, "citation": "Photo from Wikimedia Creative Commons, taken by Loominosity Z on Flickr."},
    //// INTERNET INFRASTRUCTURE ////
    "11": {"width": "600", "height": "300", "loadInMs": 3200, "citation": "Photo from 'The Origin Story of Manhattan's Nerve Center.' Business Insider, 2014. https://www.businessinsider.com/60-hudson-street-documentary-2014-6"},
    "12": {"width": "546", "height": "345", "loadInMs": 500},
    "13": {"width": "370", "height": "225", "loadInMs": 500}, 
    "14": {"width": "640", "height": "360", "loadInMs": 1200},
    "15": {"width": "661", "height": "521", "loadInMs": 2200}, // pdf
    "16": {"width": "400", "height": "300", "loadInMs": 500, "citation": "Photo from Wikimedia Creative Commons, uploaded by user Rhetos."},
    "17": {"width": "460", "height": "307", "loadInMs": 1200, "citation": "Photo from Wikimedia Creative Commons, uploaded by user DeMecheleir."},
    "18": {"width": "612", "height": "675", "loadInMs": 500}, // pdf
    //// SURVEILLANCE INFRASTRUCTURE ////
    "19": {"width": "504", "height": "672", "loadInMs": 500},
    "20": {"url": "https://www.youtube.com/watch?v=zZDCJ36PYxk&t=6s&mode=theatre", "width": "700", "loadInMs": 700},
    "21": {"width": "770", "height": "490", "loadInMs": 1200}, // TODO live feed 
    "22": {"width": "360", "height": "320", "loadInMs": 1600, "citation": "Photo from Wikimedia Creative Commons."},
    "23": {"width": "500", "height": "300", "loadInMs": 1000, "citation": "Photo from Wikimedia Creative Commons."},
    "24": {"width": "497", "height": "501", "loadInMs": 1000, "citation": "Portrait of Derrick Ingram courtesy of the Surveillance Technology Oversight Project."}, // portrait
    "25": {"width": "500", "height": "374", "loadInMs": 2200},
    "26": {"url": "https://www.youtube.com/watch?v=w7ASUgIKV0g&mode=theatre", "width": "700", "loadInMs": 1200},
     //// DATA BOOM ////
    "27": {"width": "600", "height": "339", "top": "", "left": "", "loadInMs": 500},
    "28": {"url": "https://www.youtube.com/watch?v=vQz80JjqJ9g&mode=theatre", width: "800", loadInMs: 500}, // TODO summer and winter url change
    "29": {"width": "550", "height": "370", "top": "0", "left": "0", "loadInMs": 4200},
    "30": {"url": "https://www.youtube.com/watch?v=V6yvGLhMOJU?t=565&mode=theatre", "width": "700", "loadInMs": 500},
    "31": {"width": "420", "height": "280", "loadInMs": 700, "citation": "Photo courtesy of the Office of Governor Kathy Hochul, Flickr."},
    "32": {"width": "550", "height": "429", "top": "450", "left": "0", "loadInMs": 500}, 
    "33": {"width": "590", "height": "375", "loadInMs": 500},
    "34": {"width": "500", "height": "333", "loadInMs": 500, "citation": "Photo of the Greenidge data facility by Lauren Petracca/Earthjustice via Inside Climate News. https://insideclimatenews.org/news/17082024/greenidge-sues-new-york-environmental-regulators-dresden-power-plant/"},
    "35": {"url": "https://www.youtube.com/watch?v=tDsS9ugo2TA&t=36s&mode=theatre", "width": "500", "loadInMs": 1000},
    "36": {"width": "700", "height": "525", "top": `${(SCREEN_H-260)/2}`, "left": `${(SCREEN_W-350)/2}`, "loadInMs": 1000, "citation" : "Photo of Grandell Logan by J. Dale Shoemaker, from the article 'Residents to Genessee IDA: Reject data center, tax breaks.' Investigative Post, 2026. https://investigativepost.org/2026/03/20/residents-to-genesee-ida-reject-data-center-tax-breaks/"},
}}