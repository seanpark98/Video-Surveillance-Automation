/* JS file with an arry of all the cameras with its information for constant access by other functions (all parts pseudonymized due to security reasons)*/

//An array containing each camera's or server's name, link, type, password, and ip as an object. Naming rule of camera/server: zone/서버 + number
const cameras = [
    { name: "A 1", link: "https://a.1", type: "two", pass: "twoPassword", ip: "a.1"}, 
    { name: "A 2", link: "https://a.2", type: "one", pass: "onePassword", ip: "a.2"}, 
    { name: "A 3", link: "https://a.3", type: "two", pass: "twoPassword", ip: "a.3"}, 
    { name: "A 4", link: "https://a.4", type: "three", pass: "threePassword", ip: "a.4"}, 
    { name: "A 5", link: "https://a.5", type: "three", pass: "threePassword", ip: "a.5"}, 
    { name: "A 6", link: "https://a.6", type: "two", pass: "twoPassword", ip: "a.6"}, 
    { name: "A 7", link: "https://a.7", type: "one", pass: "onePassword", ip: "a.7"}, 
    { name: "A 8", link: "https://a.8", type: "three", pass: "threePassword", ip: "a.8"}, 
    { name: "A 9", link: "https://a.9", type: "two", pass: "twoPassword", ip: "a.9"}, 
    { name: "A 10", link: "https://a.10", type: "one", pass: "onePassword", ip: "a.10"}, 
    { name: "B 1", link: "https://b.1", type: "two", pass: "twoPassword", ip: "b.1"}, 
    { name: "B 2", link: "https://b.2", type: "three", pass: "threePassword", ip: "b.2"}, 
    { name: "B 3", link: "https://b.3", type: "three", pass: "threePassword", ip: "b.3"}, 
    { name: "B 4", link: "https://b.4", type: "one", pass: "onePassword", ip: "b.4"}, 
    { name: "B 5", link: "https://b.5", type: "two", pass: "twoPassword", ip: "b.5"}, 
    { name: "B 6", link: "https://b.6", type: "three", pass: "threePassword", ip: "b.6"}, 
    { name: "B 7", link: "https://b.7", type: "one", pass: "onePassword", ip: "b.7"}, 
    { name: "B 8", link: "https://b.8", type: "two", pass: "twoPassword", ip: "b.8"}, 
    { name: "B 9", link: "https://b.9", type: "two", pass: "twoPassword", ip: "b.9"}, 
    { name: "B 10", link: "https://b.10", type: "three", pass: "threePassword", ip: "b.10"}, 
    { name: "C 1", link: "https://c.1", type: "three", pass: "threePassword", ip: "c.1"}, 
    { name: "C 2", link: "https://c.2", type: "one", pass: "onePassword", ip: "c.2"}, 
    { name: "C 3", link: "https://c.3", type: "three", pass: "threePassword", ip: "c.3"}, 
    { name: "C 4", link: "https://c.4", type: "one", pass: "onePassword", ip: "c.4"}, 
    { name: "C 5", link: "https://c.5", type: "two", pass: "twoPassword", ip: "c.5"}, 
    { name: "C 6", link: "https://c.6", type: "three", pass: "threePassword", ip: "c.6"}, 
    { name: "C 7", link: "https://c.7", type: "three", pass: "threePassword", ip: "c.7"}, 
    { name: "C 8", link: "https://c.8", type: "three", pass: "threePassword", ip: "c.8"}, 
    { name: "C 9", link: "https://c.9", type: "one", pass: "onePassword", ip: "c.9"}, 
    { name: "C 10", link: "https://c.10", type: "three", pass: "threePassword", ip: "c.10"}, 
    { name: "D 1", link: "https://d.1", type: "one", pass: "onePassword", ip: "d.1"}, 
    { name: "D 2", link: "https://d.2", type: "one", pass: "onePassword", ip: "d.2"}, 
    { name: "D 3", link: "https://d.3", type: "three", pass: "threePassword", ip: "d.3"}, 
    { name: "D 4", link: "https://d.4", type: "three", pass: "threePassword", ip: "d.4"}, 
    { name: "D 5", link: "https://d.5", type: "two", pass: "twoPassword", ip: "d.5"}, 
    { name: "D 6", link: "https://d.6", type: "two", pass: "twoPassword", ip: "d.6"}, 
    { name: "D 7", link: "https://d.7", type: "one", pass: "onePassword", ip: "d.7"}, 
    { name: "D 8", link: "https://d.8", type: "two", pass: "twoPassword", ip: "d.8"}, 
    { name: "D 9", link: "https://d.9", type: "two", pass: "twoPassword", ip: "d.9"}, 
    { name: "D 10", link: "https://d.10", type: "three", pass: "threePassword", ip: "d.10"}, 
    { name: "E 1", link: "https://e.1", type: "three", pass: "threePassword", ip: "e.1"}, 
    { name: "E 2", link: "https://e.2", type: "two", pass: "twoPassword", ip: "e.2"}, 
    { name: "E 3", link: "https://e.3", type: "two", pass: "twoPassword", ip: "e.3"}, 
    { name: "E 4", link: "https://e.4", type: "three", pass: "threePassword", ip: "e.4"}, 
    { name: "E 5", link: "https://e.5", type: "two", pass: "twoPassword", ip: "e.5"}, 
    { name: "E 6", link: "https://e.6", type: "three", pass: "threePassword", ip: "e.6"}, 
    { name: "E 7", link: "https://e.7", type: "one", pass: "onePassword", ip: "e.7"}, 
    { name: "E 8", link: "https://e.8", type: "two", pass: "twoPassword", ip: "e.8"}, 
    { name: "E 9", link: "https://e.9", type: "three", pass: "threePassword", ip: "e.9"}, 
    { name: "E 10", link: "https://e.10", type: "three", pass: "threePassword", ip: "e.10"}, 
    { name: "서버 1", link: "https://server.1", type: "", pass: "", ip: "server.1"}, 
    { name: "서버 2", link: "https://server.2", type: "", pass: "", ip: "server.2"}, 
    { name: "서버 3", link: "https://server.3", type: "", pass: "", ip: "server.3"}, 
    { name: "서버 4", link: "https://server.4", type: "", pass: "", ip: "server.4"}, 
    { name: "서버 5", link: "https://server.5", type: "", pass: "", ip: "server.5"}
]

/*
//Initializing and assigning lists by camera type
let oneList = cameras.filter(function(element){
    if (element.type == "one"){
        return true;
    }
});
let twoList = cameras.filter(function(element){
    if (element.type == "two"){
        return true;
    }
});
let threeList =cameras.filter(function(element){
    if (element.type == "three"){
        return true;
    }
});
*/
